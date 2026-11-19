"use client";

import { useEffect, useMemo, useState } from "react";
import { Download, FileUp, Info, RefreshCw, Scissors, TriangleAlert } from "lucide-react";

type Vec3 = [number, number, number];
type Triangle = [Vec3, Vec3, Vec3];
type Axis = "top" | "front" | "side";
type Bounds = { min: Vec3; max: Vec3 };
type SectionResult = {
  paths: { d: string; closed: boolean }[];
  viewBox: string;
  widthMm: number;
  heightMm: number;
  segmentCount: number;
  closedCount: number;
  openCount: number;
  planeValue: number;
};

const MAX_FILE_BYTES = 50 * 1024 * 1024;
const MAX_TRIANGLES = 1500000;

function getBounds(triangles: Triangle[]): Bounds {
  const min: Vec3 = [Infinity, Infinity, Infinity];
  const max: Vec3 = [-Infinity, -Infinity, -Infinity];
  for (const tri of triangles) for (const p of tri) for (let i = 0; i < 3; i++) {
    min[i] = Math.min(min[i], p[i]);
    max[i] = Math.max(max[i], p[i]);
  }
  return { min, max };
}

function parseSTL(buffer: ArrayBuffer): Triangle[] {
  if (buffer.byteLength < 15) throw new Error("This file is too small to be a valid STL model.");
  const view = new DataView(buffer);
  if (buffer.byteLength >= 84) {
    const count = view.getUint32(80, true);
    const expected = 84 + count * 50;
    if (count > 0 && count <= MAX_TRIANGLES && expected === buffer.byteLength) {
      const triangles: Triangle[] = [];
      let offset = 84;
      for (let i = 0; i < count; i++) {
        offset += 12;
        const points: Vec3[] = [];
        for (let j = 0; j < 3; j++) {
          points.push([
            view.getFloat32(offset, true),
            view.getFloat32(offset + 4, true),
            view.getFloat32(offset + 8, true),
          ]);
          offset += 12;
        }
        offset += 2;
        if (points.every((p) => p.every(Number.isFinite))) triangles.push(points as Triangle);
      }
      if (triangles.length) return triangles;
    }
  }

  const source = new TextDecoder().decode(buffer);
  if (!/^\s*solid\b/i.test(source) || !/vertex\s+/i.test(source)) {
    throw new Error("Could not read this STL. Upload a valid binary or ASCII STL file.");
  }
  const matches = [...source.matchAll(/vertex\s+([-+]?(?:\d*\.?\d+)(?:e[-+]?\d+)?)\s+([-+]?(?:\d*\.?\d+)(?:e[-+]?\d+)?)\s+([-+]?(?:\d*\.?\d+)(?:e[-+]?\d+)?)/gi)];
  if (!matches.length || matches.length % 3 !== 0) throw new Error("The ASCII STL has incomplete triangle data.");
  if (matches.length / 3 > MAX_TRIANGLES) throw new Error("This STL contains too many triangles for this browser tool.");
  const triangles: Triangle[] = [];
  for (let i = 0; i < matches.length; i += 3) {
    const points = matches.slice(i, i + 3).map((m) => [Number(m[1]), Number(m[2]), Number(m[3])] as Vec3);
    if (points.every((p) => p.every(Number.isFinite))) triangles.push(points as Triangle);
  }
  if (!triangles.length) throw new Error("No usable triangles were found in this STL.");
  return triangles;
}

function sampleModel(): Triangle[] {
  const a: Vec3 = [0, 0, 0], b: Vec3 = [40, 0, 0], c: Vec3 = [40, 30, 0], d: Vec3 = [0, 30, 0];
  const e: Vec3 = [0, 0, 20], f: Vec3 = [40, 0, 20], g: Vec3 = [40, 30, 20], h: Vec3 = [0, 30, 20];
  return [
    [a, c, b], [a, d, c], [e, f, g], [e, g, h],
    [a, b, f], [a, f, e], [b, c, g], [b, g, f],
    [c, d, h], [c, h, g], [d, a, e], [d, e, h],
  ];
}

function sectionModel(triangles: Triangle[], bounds: Bounds, axis: Axis, percent: number, unit: "mm" | "in"): SectionResult {
  const axisIndex = axis === "top" ? 2 : axis === "front" ? 1 : 0;
  const projected = axis === "top" ? [0, 1] : axis === "front" ? [0, 2] : [1, 2];
  const range = bounds.max[axisIndex] - bounds.min[axisIndex];
  if (!(range > 0)) throw new Error("The selected model axis has no measurable size. Try another section direction.");
  const planeValue = bounds.min[axisIndex] + (range * percent) / 100;
  const diagonal = Math.hypot(
    bounds.max[0] - bounds.min[0],
    bounds.max[1] - bounds.min[1],
    bounds.max[2] - bounds.min[2],
  );
  const epsilon = Math.max(diagonal * 1e-8, 1e-8);
  type Segment = { a: [number, number]; b: [number, number]; used: boolean };
  const segments: Segment[] = [];
  const pointKey = (p: [number, number]) => Math.round(p[0] / (epsilon * 4)) + ":" + Math.round(p[1] / (epsilon * 4));
  const segmentKeys = new Set<string>();

  for (const tri of triangles) {
    const distances = tri.map((p) => p[axisIndex] - planeValue);
    if (distances.every((d) => Math.abs(d) <= epsilon)) continue;
    const hits: [number, number][] = [];
    const addHit = (p: [number, number]) => {
      if (!hits.some((q) => Math.hypot(q[0] - p[0], q[1] - p[1]) <= epsilon * 4)) hits.push(p);
    };
    for (let edge = 0; edge < 3; edge++) {
      const next = (edge + 1) % 3;
      const p1 = tri[edge], p2 = tri[next], d1 = distances[edge], d2 = distances[next];
      if (Math.abs(d1) <= epsilon) addHit([p1[projected[0]], p1[projected[1]]]);
      if ((d1 < -epsilon && d2 > epsilon) || (d1 > epsilon && d2 < -epsilon)) {
        const t = d1 / (d1 - d2);
        addHit([
          p1[projected[0]] + (p2[projected[0]] - p1[projected[0]]) * t,
          p1[projected[1]] + (p2[projected[1]] - p1[projected[1]]) * t,
        ]);
      }
    }
    if (hits.length === 2) {
      const ka = pointKey(hits[0]), kb = pointKey(hits[1]);
      if (ka !== kb) {
        const key = ka < kb ? ka + "|" + kb : kb + "|" + ka;
        if (!segmentKeys.has(key)) {
          segmentKeys.add(key);
          segments.push({ a: hits[0], b: hits[1], used: false });
        }
      }
    }
  }
  if (!segments.length) throw new Error("No section lines were found at this position. Move the section slider or choose another direction.");

  const adjacency = new Map<string, number[]>();
  segments.forEach((segment, index) => {
    for (const p of [segment.a, segment.b]) {
      const key = pointKey(p);
      const list = adjacency.get(key) || [];
      list.push(index);
      adjacency.set(key, list);
    }
  });
  const contours: { points: [number, number][]; closed: boolean }[] = [];
  for (let start = 0; start < segments.length; start++) {
    if (segments[start].used) continue;
    segments[start].used = true;
    const points: [number, number][] = [segments[start].a, segments[start].b];
    const startKey = pointKey(points[0]);
    let currentKey = pointKey(points[1]);
    let closed = false;
    let guard = 0;
    while (guard++ <= segments.length + 1) {
      if (currentKey === startKey) { closed = true; break; }
      const nextIndex = (adjacency.get(currentKey) || []).find((id) => !segments[id].used);
      if (nextIndex === undefined) break;
      const segment = segments[nextIndex];
      segment.used = true;
      const nextPoint = pointKey(segment.a) === currentKey ? segment.b : segment.a;
      points.push(nextPoint);
      currentKey = pointKey(nextPoint);
    }
    if (points.length >= 2) contours.push({ points, closed });
  }

  const allPoints = contours.flatMap((c) => c.points);
  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
  for (const p of allPoints) {
    minX = Math.min(minX, p[0]); maxX = Math.max(maxX, p[0]);
    minY = Math.min(minY, p[1]); maxY = Math.max(maxY, p[1]);
  }
  const rawWidth = maxX - minX, rawHeight = maxY - minY;
  if (!(rawWidth > epsilon && rawHeight > epsilon)) throw new Error("The selected section has no usable 2D area. Move the plane or choose another direction.");
  const factor = unit === "in" ? 25.4 : 1;
  const fmt = (n: number) => Number(n.toFixed(4)).toString();
  const padding = Math.max(rawWidth, rawHeight) * 0.025;
  const width = rawWidth + padding * 2 || 1;
  const height = rawHeight + padding * 2 || 1;
  const paths = contours.map((contour) => {
    const commands = contour.points.map((p, index) => {
      const x = p[0] - minX + padding;
      const y = maxY - p[1] + padding;
      return (index === 0 ? "M " : "L ") + fmt(x) + " " + fmt(y);
    });
    if (contour.closed) commands.push("Z");
    return { d: commands.join(" "), closed: contour.closed };
  });
  return {
    paths,
    viewBox: "0 0 " + fmt(width) + " " + fmt(height),
    widthMm: width * factor,
    heightMm: height * factor,
    segmentCount: segments.length,
    closedCount: contours.filter((c) => c.closed).length,
    openCount: contours.filter((c) => !c.closed).length,
    planeValue,
  };
}

function buildSvg(result: SectionResult, unit: "mm" | "in") {
  const width = result.widthMm;
  const height = result.heightMm;
  const label = unit === "in" ? "STL coordinate units assumed to be inches" : "STL coordinate units assumed to be millimetres";
  const paths = result.paths.map((p) => '<path d="' + p.d + '" />').join("\n  ");
  return '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<svg xmlns="http://www.w3.org/2000/svg" width="' + width.toFixed(4) + 'mm" height="' + height.toFixed(4) + 'mm" viewBox="' + result.viewBox + '">\n' +
    '  <title>STL section exported by ConvertImageNow</title>\n' +
    '  <desc>' + label + '. Section contours are stroke paths.</desc>\n' +
    '  <g fill="none" stroke="#000000" stroke-width="0.25" stroke-linecap="round" stroke-linejoin="round">\n  ' + paths + '\n  </g>\n</svg>';
}

export default function STLToSVGConverter() {
  const [triangles, setTriangles] = useState<Triangle[]>([]);
  const [fileName, setFileName] = useState("");
  const [axis, setAxis] = useState<Axis>("top");
  const [position, setPosition] = useState(50);
  const [unit, setUnit] = useState<"mm" | "in">("mm");
  const [result, setResult] = useState<SectionResult | null>(null);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [busy, setBusy] = useState(false);
  const bounds = useMemo(() => triangles.length ? getBounds(triangles) : null, [triangles]);

  useEffect(() => {
    if (!bounds || !triangles.length) { setResult(null); return; }
    try {
      setResult(sectionModel(triangles, bounds, axis, position, unit));
      setError("");
    } catch (e) {
      setResult(null);
      setError(e instanceof Error ? e.message : "Could not calculate this section.");
    }
  }, [triangles, bounds, axis, position, unit]);

  async function loadFile(file: File) {
    setError(""); setNotice(""); setResult(null);
    if (!/\.stl$/i.test(file.name) && file.type !== "model/stl" && file.type !== "application/sla") {
      setError("Please choose an STL file.");
      return;
    }
    if (file.size > MAX_FILE_BYTES) { setError("Please use an STL file smaller than 50 MB."); return; }
    setBusy(true);
    try {
      const parsed = parseSTL(await file.arrayBuffer());
      setTriangles(parsed);
      setFileName(file.name.replace(/\.stl$/i, "") || "stl-section");
      setNotice("Loaded " + parsed.length.toLocaleString() + " triangles. Adjust the section plane to create your SVG.");
    } catch (e) {
      setTriangles([]);
      setError(e instanceof Error ? e.message : "Could not read this STL file.");
    } finally { setBusy(false); }
  }

  function loadSample() {
    setTriangles(sampleModel());
    setFileName("sample-cube");
    setAxis("top");
    setPosition(50);
    setUnit("mm");
    setError("");
    setNotice("Sample cube loaded: 12 triangles. Move the slider to explore different cross-sections.");
  }

  function downloadSvg() {
    if (!result) return;
    const blob = new Blob([buildSvg(result, unit)], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = (fileName || "stl-section") + "-" + axis + "-section.svg";
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  const axisLabels: Record<Axis, { label: string; description: string }> = {
    top: { label: "Top (XY)", description: "Horizontal cut along the Z axis" },
    front: { label: "Front (XZ)", description: "Vertical cut along the Y axis" },
    side: { label: "Side (YZ)", description: "Vertical cut along the X axis" },
  };

  return (
    <div className="space-y-6">
      <section className="overflow-hidden rounded-3xl border border-[#314969] bg-[#172642] shadow-2xl shadow-black/20">
        <div className="border-b border-[#314969] p-5 sm:p-7">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-300">Browser-based 3D mesh section tool</p>
          <h2 className="mt-1 text-xl font-bold text-white sm:text-2xl">STL to SVG workspace</h2>
          <p className="mt-1 text-sm text-slate-400">Slice an STL mesh at a chosen position and export its 2D section contours as a scalable SVG drawing.</p>
        </div>
        <div className="grid gap-6 p-5 sm:p-7 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <label className="flex min-h-40 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[#557095] bg-[#101b33]/70 p-6 text-center transition hover:border-blue-400">
              <FileUp size={30} className="text-blue-300" />
              <span className="mt-3 font-bold text-white">{fileName ? fileName + ".stl" : "Choose an STL file"}</span>
              <span className="mt-1 text-xs text-slate-400">Binary or ASCII STL · up to 50 MB</span>
              <input type="file" accept=".stl,model/stl,application/sla" className="sr-only" onChange={(e) => { const file = e.target.files?.[0]; if (file) void loadFile(file); e.currentTarget.value = ""; }} />
            </label>
            <button type="button" onClick={loadSample} className="rounded-lg border border-[#557095] px-3 py-2 text-xs font-semibold text-blue-200 hover:border-blue-400">Load sample STL</button>

            <div>
              <p className="mb-2 text-sm font-semibold text-slate-200">Section direction</p>
              <div className="grid grid-cols-3 gap-2">
                {(Object.keys(axisLabels) as Axis[]).map((key) => (
                  <button key={key} type="button" onClick={() => setAxis(key)} aria-pressed={axis === key} className={"rounded-xl border px-2 py-3 text-sm font-semibold transition " + (axis === key ? "border-blue-400 bg-blue-500/20 text-white" : "border-[#405777] bg-[#101b33] text-slate-300 hover:border-blue-400")}>
                    {axisLabels[key].label}
                  </button>
                ))}
              </div>
              <p className="mt-2 text-xs text-slate-400">{axisLabels[axis].description}</p>
            </div>

            <div>
              <div className="flex items-center justify-between gap-3">
                <label htmlFor="stl-section-position" className="text-sm font-semibold text-slate-200">Section position</label>
                <span className="rounded-lg bg-[#101b33] px-2 py-1 text-xs tabular-nums text-blue-200">{position}%</span>
              </div>
              <input id="stl-section-position" type="range" min="1" max="99" step="1" value={position} onChange={(e) => setPosition(Number(e.target.value))} disabled={!triangles.length} className="mt-3 w-full accent-blue-500" />
              <div className="mt-1 flex justify-between text-[11px] text-slate-500"><span>Near side</span><span>Middle</span><span>Far side</span></div>
            </div>

            <label className="block">
              <span className="text-sm font-semibold text-slate-200">STL coordinate units</span>
              <select value={unit} onChange={(e) => setUnit(e.target.value as "mm" | "in")} className="mt-2 min-h-11 w-full rounded-xl border border-[#405777] bg-[#101b33] px-3 text-white">
                <option value="mm">Millimetres (mm)</option>
                <option value="in">Inches (in) — convert to mm</option>
              </select>
              <span className="mt-1 block text-xs text-slate-400">STL files do not store units. Choose the units used by the model coordinates.</span>
            </label>

            <button type="button" disabled={!result || busy} onClick={downloadSvg} className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-blue-500 px-4 py-3 font-bold text-white transition hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-50">
              {busy ? <RefreshCw className="animate-spin" size={18} /> : <Download size={18} />} Download SVG
            </button>
            {error && <p role="alert" className="rounded-xl border border-red-400/30 bg-red-400/10 p-3 text-sm text-red-200">{error}</p>}
            {notice && <p role="status" className="rounded-xl border border-emerald-400/20 bg-emerald-400/[0.06] p-3 text-sm text-emerald-200">{notice}</p>}
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-bold text-white">2D section preview</h3>
              {triangles.length > 0 && <span className="text-xs text-slate-400">{triangles.length.toLocaleString()} triangles</span>}
            </div>
            <div className="flex min-h-64 items-center justify-center overflow-hidden rounded-2xl border border-[#405777] bg-white p-4">
              {result ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox={result.viewBox} role="img" aria-label="STL cross-section SVG preview" className="max-h-80 w-full">
                  {result.paths.map((path, index) => <path key={index} d={path.d} fill="none" stroke="#172642" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />)}
                </svg>
              ) : (
                <div className="max-w-xs text-center text-slate-500">
                  <Scissors className="mx-auto text-blue-500" size={32} />
                  <p className="mt-3 text-sm font-semibold">Your section drawing will appear here</p>
                  <p className="mt-1 text-xs">Upload an STL or load the sample model to begin.</p>
                </div>
              )}
            </div>
            {result && (
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                <div className="rounded-xl border border-[#405777] bg-[#101b33] p-3"><p className="text-[11px] text-slate-400">Width</p><p className="mt-1 text-sm font-bold text-white">{result.widthMm.toFixed(2)} mm</p></div>
                <div className="rounded-xl border border-[#405777] bg-[#101b33] p-3"><p className="text-[11px] text-slate-400">Height</p><p className="mt-1 text-sm font-bold text-white">{result.heightMm.toFixed(2)} mm</p></div>
                <div className="rounded-xl border border-[#405777] bg-[#101b33] p-3"><p className="text-[11px] text-slate-400">Closed contours</p><p className="mt-1 text-sm font-bold text-white">{result.closedCount}</p></div>
                <div className="rounded-xl border border-[#405777] bg-[#101b33] p-3"><p className="text-[11px] text-slate-400">Open contours</p><p className="mt-1 text-sm font-bold text-white">{result.openCount}</p></div>
              </div>
            )}
            <div className="rounded-xl border border-[#405777] bg-[#101b33] p-4 text-xs leading-relaxed text-slate-300"><Info size={15} className="mr-1 inline text-blue-300" /> This tool exports the intersection of the mesh and a selected plane. It does not create a top-view silhouette or a perspective rendering.</div>
            <div className="rounded-xl border border-amber-300/20 bg-amber-300/[0.05] p-4 text-xs leading-relaxed text-amber-100"><TriangleAlert size={15} className="mr-1 inline" /> Open or non-manifold meshes can produce open contours. Check the exported paths in your CAD, vector or cutting software before manufacturing.</div>
          </div>
        </div>
      </section>
      <p className="text-center text-xs text-slate-400">STL files are parsed and sectioned locally in this browser. Your model is not uploaded to a conversion server.</p>
    </div>
  );
}
