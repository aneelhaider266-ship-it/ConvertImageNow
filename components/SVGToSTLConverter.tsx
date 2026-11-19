"use client";

import { useState } from "react";
import { Download, FileUp, Info, Layers3, RefreshCw, TriangleAlert } from "lucide-react";

type Point = { x: number; y: number };
type Triangle = [Point, Point, Point];

function polygonArea(points: Point[]) { return points.reduce((sum, p, i) => { const n = points[(i + 1) % points.length]; return sum + p.x * n.y - n.x * p.y; }, 0) / 2; }
function cross(a: Point, b: Point, c: Point) { return (b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x); }
function inside(p: Point, a: Point, b: Point, c: Point) { const d1 = cross(p, a, b), d2 = cross(p, b, c), d3 = cross(p, c, a); return !(d1 < -1e-8 || d2 < -1e-8 || d3 < -1e-8) || !(d1 > 1e-8 || d2 > 1e-8 || d3 > 1e-8); }
function triangulate(input: Point[]): Triangle[] {
  let pts = input.slice();
  if (pts.length > 2 && Math.hypot(pts[0].x - pts[pts.length - 1].x, pts[0].y - pts[pts.length - 1].y) < 1e-6) pts.pop();
  if (pts.length < 3) return [];
  if (polygonArea(pts) < 0) pts.reverse();
  const indices = pts.map((_, i) => i), out: Triangle[] = [];
  let guard = 0;
  while (indices.length > 3 && guard++ < pts.length * pts.length) {
    let clipped = false;
    for (let i = 0; i < indices.length; i++) {
      const ia = indices[(i + indices.length - 1) % indices.length], ib = indices[i], ic = indices[(i + 1) % indices.length];
      const a = pts[ia], b = pts[ib], c = pts[ic];
      if (cross(a, b, c) <= 1e-8) continue;
      let contains = false;
      for (const id of indices) if (id !== ia && id !== ib && id !== ic && inside(pts[id], a, b, c)) { contains = true; break; }
      if (!contains) { out.push([a, b, c]); indices.splice(i, 1); clipped = true; break; }
    }
    if (!clipped) return [];
  }
  if (indices.length === 3) out.push([pts[indices[0]], pts[indices[1]], pts[indices[2]]]);
  return out;
}
function parsePath(d: string): Point[] {
  if (/[AaCcSsQqTt]/.test(d)) throw new Error("Curved SVG path commands are not supported yet. Convert curves to straight segments in your vector editor, then try again.");
  const tokens = d.match(/[MLHVZmlhvz]|[-+]?(?:\d*\.\d+|\d+\.?\d*)(?:e[-+]?\d+)?/gi) || [];
  const points: Point[] = []; let i = 0, cmd = "", x = 0, y = 0, sx = 0, sy = 0;
  while (i < tokens.length) {
    if (/^[a-z]$/i.test(tokens[i])) cmd = tokens[i++];
    if (!cmd) break;
    const relative = cmd === cmd.toLowerCase(), upper = cmd.toUpperCase();
    if (upper === "Z") { x = sx; y = sy; cmd = ""; continue; }
    const read = () => Number(tokens[i++]);
    if (upper === "M" || upper === "L") { const nx = read(), ny = read(); x = relative ? x + nx : nx; y = relative ? y + ny : ny; if (upper === "M") { sx = x; sy = y; cmd = relative ? "l" : "L"; } points.push({ x, y }); }
    else if (upper === "H") { const nx = read(); x = relative ? x + nx : nx; points.push({ x, y }); }
    else if (upper === "V") { const ny = read(); y = relative ? y + ny : ny; points.push({ x, y }); }
    else break;
  }
  return points;
}
function readShapes(svg: string) {
  const doc = new DOMParser().parseFromString(svg, "image/svg+xml");
  if (doc.querySelector("parsererror")) throw new Error("This file is not valid SVG XML.");
  const root = doc.documentElement;
  if (doc.querySelector("[transform], text, use, image, foreignObject, clipPath, mask, filter")) throw new Error("This SVG contains text, transforms, images, clipping, masks, or filters that are not supported. Simplify or outline the design before converting.");
  const viewBox = (root.getAttribute("viewBox") || "").trim().split(/[ ,]+/).map(Number);
  const width = parseFloat(root.getAttribute("width") || "") || (viewBox.length === 4 ? viewBox[2] : 100);
  const height = parseFloat(root.getAttribute("height") || "") || (viewBox.length === 4 ? viewBox[3] : 100);
  const shapes: Point[][] = [];
  const add = (pts: Point[]) => { if (pts.length >= 3 && pts.every(p => Number.isFinite(p.x) && Number.isFinite(p.y))) shapes.push(pts); };
  doc.querySelectorAll("polygon, rect, circle, ellipse, path").forEach(el => {
    const tag = el.tagName.toLowerCase();
    if (tag === "polygon") {
      const nums = (el.getAttribute("points") || "").trim().split(/[ ,]+/).map(Number); const pts: Point[] = [];
      for (let i = 0; i + 1 < nums.length; i += 2) pts.push({ x: nums[i], y: nums[i + 1] }); add(pts);
    } else if (tag === "rect") {
      const x = Number(el.getAttribute("x") || 0), y = Number(el.getAttribute("y") || 0), w = Number(el.getAttribute("width")), h = Number(el.getAttribute("height"));
      if (w > 0 && h > 0) add([{x,y},{x:x+w,y},{x:x+w,y:y+h},{x,y:y+h}]);
    } else if (tag === "circle" || tag === "ellipse") {
      const cx = Number(el.getAttribute("cx") || 0), cy = Number(el.getAttribute("cy") || 0), rx = tag === "circle" ? Number(el.getAttribute("r")) : Number(el.getAttribute("rx")), ry = tag === "circle" ? rx : Number(el.getAttribute("ry"));
      if (rx > 0 && ry > 0) add(Array.from({length:64},(_,i)=>({x:cx+Math.cos(i*Math.PI/32)*rx,y:cy+Math.sin(i*Math.PI/32)*ry})));
    } else if (tag === "path") add(parsePath(el.getAttribute("d") || ""));
  });
  if (!shapes.length) throw new Error("No supported closed vector shapes were found. Use paths made from straight M/L/H/V segments, polygons, rectangles, circles, or ellipses.");
  return { shapes, width, height };
}
function normal(a: [number,number,number], b: [number,number,number], c: [number,number,number]): [number,number,number] {
  const u = [b[0]-a[0],b[1]-a[1],b[2]-a[2]], v = [c[0]-a[0],c[1]-a[1],c[2]-a[2]];
  const n: [number,number,number] = [u[1]*v[2]-u[2]*v[1],u[2]*v[0]-u[0]*v[2],u[0]*v[1]-u[1]*v[0]];
  const len = Math.hypot(...n) || 1; return [n[0]/len,n[1]/len,n[2]/len];
}
function makeSTL(shapes: Point[][], sourceW: number, sourceH: number, targetW: number, depth: number, base: number) {
  const scale = targetW / sourceW, tris: [number,number,number][][] = [];
  const push = (a: [number,number,number],b: [number,number,number],c: [number,number,number]) => tris.push([a,b,c]);
  for (const raw of shapes) {
    const pts = raw.map(p => ({x:p.x*scale,y:(sourceH-p.y)*scale}));
    const caps = triangulate(pts);
    if (!caps.length) throw new Error("A shape could not be triangulated. Check for self-intersections, overlapping points, or unsupported holes.");
    for (const [a,b,c] of caps) { push([a.x,a.y,base+depth],[b.x,b.y,base+depth],[c.x,c.y,base+depth]); push([c.x,c.y,base],[b.x,b.y,base],[a.x,a.y,base]); }
    for (let i=0;i<pts.length;i++) {
      const a=pts[i], b=pts[(i+1)%pts.length];
      push([a.x,a.y,base],[b.x,b.y,base],[b.x,b.y,base+depth]);
      push([a.x,a.y,base],[b.x,b.y,base+depth],[a.x,a.y,base+depth]);
    }
  }
  const buffer = new ArrayBuffer(84 + tris.length*50), view = new DataView(buffer);
  const header = new TextEncoder().encode("ConvertImageNow SVG to STL");
  new Uint8Array(buffer,0,header.length).set(header); view.setUint32(80,tris.length,true);
  let offset=84;
  for (const tri of tris) { const n=normal(tri[0],tri[1],tri[2]); for(const v of n) {view.setFloat32(offset,v,true);offset+=4;} for(const p of tri) for(const v of p) {view.setFloat32(offset,v,true);offset+=4;} view.setUint16(offset,0,true);offset+=2; }
  return new Blob([buffer],{type:"model/stl"});
}

export default function SVGToSTLConverter() {\n  const [pasteOpen,setPasteOpen] = useState(false);\n  const [pasted,setPasted] = useState("");
  const [file,setFile]=useState<File|null>(null), [svg,setSvg]=useState(""), [width,setWidth]=useState("50"), [depth,setDepth]=useState("3"), [base,setBase]=useState("0"), [error,setError]=useState(""), [info,setInfo]=useState(""), [busy,setBusy]=useState(false);
  const [shapeCount,setShapeCount]=useState(0);
  const sampleSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect x="10" y="10" width="80" height="80"/></svg>';\n  function loadText(text: string, name = "pasted-design.svg") { setError(""); setInfo(""); setFile(new File([text],name,{type:"image/svg+xml"})); try { const parsed=readShapes(text); setSvg(text); setShapeCount(parsed.shapes.length); setInfo("Loaded "+parsed.shapes.length+" vector shape(s)."); } catch(e) { setSvg(""); setShapeCount(0); setError(e instanceof Error?e.message:"Could not read this SVG."); } }\n  async function load(f: File) { setError("");setInfo("");setFile(f);try {if(f.size>10*1024*1024) throw new Error("Please use an SVG smaller than 10 MB.");const text=await f.text();const parsed=readShapes(text);setSvg(text);setShapeCount(parsed.shapes.length);setInfo(`Loaded ${parsed.shapes.length} vector shape(s). Source viewBox: ${parsed.width} × ${parsed.height} units.`);}catch(e){setSvg("");setError(e instanceof Error?e.message:"Could not read this SVG.");}}
  async function convert() {setError("");setBusy(true);try {const parsed=readShapes(svg);const w=Number(width),d=Number(depth),b=Number(base);if(!(w>0&&w<=10000&&d>0&&d<=1000&&b>=0&&b<=1000))throw new Error("Enter a width up to 10,000 mm, extrusion height up to 1,000 mm, and base plate height from 0 to 1,000 mm.");const blob=makeSTL(parsed.shapes,parsed.width,parsed.height,w,d,b);const url=URL.createObjectURL(blob);const a=document.createElement("a");a.href=url;a.download=(file?.name.replace(/\.svg$/i,"")||"converted-model")+".stl";a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);setInfo(`STL exported: ${parsed.shapes.length} shape(s), ${w} mm wide, ${d} mm extrusion.`);}catch(e){setError(e instanceof Error?e.message:"Conversion failed.");}finally{setBusy(false);}}
  return <div className="space-y-6">
    <section className="overflow-hidden rounded-3xl border border-[#314969] bg-[#172642] shadow-2xl shadow-black/20">
      <div className="border-b border-[#314969] p-5 sm:p-7"><p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-300">Browser-based vector to 3D tool</p><h2 className="mt-1 text-xl font-bold text-white sm:text-2xl">SVG to STL workspace</h2><p className="mt-1 text-sm text-slate-400">Turn supported flat SVG shapes into an extruded 3D model and export a binary STL for 3D printing.</p></div>
      <div className="grid gap-6 p-5 sm:p-7 lg:grid-cols-[1fr_.9fr]">
        <div className="space-y-4">
          <label className="flex min-h-40 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[#557095] bg-[#101b33]/70 p-6 text-center transition hover:border-blue-400"><FileUp size={30} className="text-blue-300"/><span className="mt-3 font-bold text-white">{file?file.name:"Choose an SVG file"}</span><span className="mt-1 text-xs text-slate-400">SVG vector files · up to 10 MB</span><input type="file" accept=".svg,image/svg+xml" className="sr-only" onChange={e=>{const f=e.target.files?.[0];if(f)void load(f);}}/></label>
          <div className="flex flex-wrap gap-2"><button type="button" onClick={()=>loadText(sampleSvg,"sample-square.svg")} className="rounded-lg border border-[#557095] px-3 py-2 text-xs font-semibold text-blue-200">Load sample SVG</button><button type="button" onClick={()=>setPasteOpen(v=>!v)} className="rounded-lg border border-[#557095] px-3 py-2 text-xs font-semibold text-blue-200">{pasteOpen?"Hide SVG code":"Paste SVG code"}</button></div>{pasteOpen&&<div className="space-y-2"><textarea value={pasted} onChange={e=>setPasted(e.target.value)} rows={5} placeholder="Paste SVG markup here" className="w-full rounded-xl border border-[#405777] bg-[#101b33] p-3 font-mono text-xs text-white"/><button type="button" onClick={()=>loadText(pasted)} disabled={!pasted.trim()} className="rounded-lg bg-blue-500 px-3 py-2 text-xs font-bold text-white disabled:opacity-50">Use pasted SVG</button></div>}\n          <div className="grid grid-cols-2 gap-4">
            <label className="block"><span className="text-sm font-semibold text-slate-200">Model width (mm)</span><input type="number" min="0.1" step="0.1" value={width} onChange={e=>setWidth(e.target.value)} className="mt-2 min-h-11 w-full rounded-xl border border-[#405777] bg-[#101b33] px-3 text-white"/></label>
            <label className="block"><span className="text-sm font-semibold text-slate-200">Extrusion height (mm)</span><input type="number" min="0.1" step="0.1" value={depth} onChange={e=>setDepth(e.target.value)} className="mt-2 min-h-11 w-full rounded-xl border border-[#405777] bg-[#101b33] px-3 text-white"/></label>
            <label className="col-span-2 block"><span className="text-sm font-semibold text-slate-200">Z offset (mm)</span><input type="number" min="0" step="0.1" value={base} onChange={e=>setBase(e.target.value)} className="mt-2 min-h-11 w-full rounded-xl border border-[#405777] bg-[#101b33] px-3 text-white"/><span className="mt-1 block text-xs text-slate-400">Moves the entire model upward from Z = 0. It does not create a separate base plate.</span></label>
          </div>
          <button type="button" disabled={!svg||busy} onClick={()=>void convert()} className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-blue-500 px-4 py-3 font-bold text-white transition hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-50">{busy?<RefreshCw className="animate-spin" size={18}/>:<Download size={18}/>} Export STL</button>
          {error&&<p role="alert" className="rounded-xl border border-red-400/30 bg-red-400/10 p-3 text-sm text-red-200">{error}</p>}
          {info&&<p role="status" className="rounded-xl border border-emerald-400/20 bg-emerald-400/[0.06] p-3 text-sm text-emerald-200">{info}</p>}
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between"><h3 className="font-bold text-white">SVG preview</h3>{svg&&<span className="text-xs text-slate-400">{shapeCount} shapes detected</span>}</div>
          <div className="flex min-h-64 items-center justify-center overflow-hidden rounded-2xl border border-[#405777] bg-[#101b33] p-4"><div className="text-center text-slate-300"><Layers3 className="mx-auto text-blue-300" size={32}/><p className="mt-3 text-sm font-semibold">{svg ? "SVG file parsed successfully" : "Your vector file details will appear here."}</p><p className="mt-1 text-xs text-slate-400">{svg ? `${shapeCount} supported shape(s) detected. Export to create your STL model.` : "Upload a supported SVG to begin."}</p></div></div>
          <div className="rounded-xl border border-[#405777] bg-[#101b33] p-4 text-xs leading-relaxed text-slate-300"><Info size={15} className="mr-1 inline text-blue-300"/> Supported: polygons, rectangles, circles, ellipses, and closed paths using straight M/L/H/V/Z commands. Curves, holes, text, strokes, clipping, masks, and complex transforms are not converted in this first version.</div>
          <div className="rounded-xl border border-amber-300/20 bg-amber-300/[0.05] p-4 text-xs leading-relaxed text-amber-100"><TriangleAlert size={15} className="mr-1 inline"/> Overlapping or self-intersecting paths may create non-manifold geometry. Inspect the exported STL in your slicer before printing.</div>
        </div>
      </div>
    </section>
    <p className="text-center text-xs text-slate-400">Files are parsed and converted locally in this browser. Your SVG is not uploaded to a conversion server.</p>
  </div>;
}
