"use client";

import { useMemo, useState } from "react";
import { Calculator, Ruler, RefreshCw, Grid3X3, Info, CheckCircle2 } from "lucide-react";

type Mode = "swatch" | "adjust" | "target" | "needles";
type Unit = "in" | "cm";

const NEEDLES = [
  ["US 000", "1.5 mm"], ["US 00", "1.75 mm"], ["US 0", "2.0 mm"],
  ["US 1", "2.25 mm"], ["US 2", "2.75 mm"], ["US 3", "3.25 mm"],
  ["US 4", "3.5 mm"], ["US 5", "3.75 mm"], ["US 6", "4.0 mm"],
  ["US 7", "4.5 mm"], ["US 8", "5.0 mm"], ["US 9", "5.5 mm"],
  ["US 10", "6.0 mm"], ["US 10.5", "6.5 mm"], ["US 11", "8.0 mm"],
  ["US 13", "9.0 mm"], ["US 15", "10.0 mm"], ["US 17", "12.0 mm"],
  ["US 19", "15.0 mm"], ["US 35", "19.0 mm"],
];

const number = (value: string, fallback = 0) => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
};
const clean = (value: number) => Number.isFinite(value) ? Number(value.toFixed(2)) : 0;
const whole = (value: number) => Math.max(0, Math.round(value));

function Field({ label, value, onChange, min = "0.1", step = "0.1", suffix, help }: {
  label: string; value: string; onChange: (value: string) => void;
  min?: string; step?: string; suffix?: string; help?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-slate-200">{label}</span>
      <span className="relative block">
        <input type="number" min={min} step={step} value={value} onChange={(e) => onChange(e.target.value)}
          className="h-12 w-full rounded-xl border border-[#3a506f] bg-[#101b33] px-3 text-base text-white outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
        />
        {suffix && <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400">{suffix}</span>}
      </span>
      {help && <span className="mt-1 block text-xs text-slate-400">{help}</span>}
    </label>
  );
}

function Result({ label, value, detail }: { label: string; value: string; detail?: string }) {
  return <div className="rounded-xl border border-blue-400/20 bg-blue-400/[0.07] p-4">
    <p className="text-xs font-medium uppercase tracking-wide text-blue-200">{label}</p>
    <p className="mt-1 text-2xl font-bold tabular-nums text-white">{value}</p>
    {detail && <p className="mt-1 text-xs text-slate-400">{detail}</p>}
  </div>;
}

export default function KnittingGaugeCalculator() {
  const [mode, setMode] = useState<Mode>("swatch");
  const [unit, setUnit] = useState<Unit>("in");
  const standard = unit === "in" ? 4 : 10;
  const unitLabel = unit === "in" ? "inches" : "cm";

  const [swatchStitches, setSwatchStitches] = useState("24");
  const [swatchRows, setSwatchRows] = useState("32");
  const [swatchWidth, setSwatchWidth] = useState("4");
  const [swatchHeight, setSwatchHeight] = useState("4");

  const [patternStitches, setPatternStitches] = useState("20");
  const [patternRows, setPatternRows] = useState("28");
  const [actualStitches, setActualStitches] = useState("24");
  const [actualRows, setActualRows] = useState("32");
  const [patternCount, setPatternCount] = useState("120");
  const [patternRowCount, setPatternRowCount] = useState("160");
  const [repeat, setRepeat] = useState("1");

  const [targetWidth, setTargetWidth] = useState("20");
  const [targetHeight, setTargetHeight] = useState("24");
  const [targetStitchGauge, setTargetStitchGauge] = useState("20");
  const [targetRowGauge, setTargetRowGauge] = useState("28");
  const [targetRepeat, setTargetRepeat] = useState("1");

  const gauge = useMemo(() => ({
    stitches: number(swatchWidth) > 0 ? number(swatchStitches) / number(swatchWidth) * standard : 0,
    rows: number(swatchHeight) > 0 ? number(swatchRows) / number(swatchHeight) * standard : 0,
  }), [swatchStitches, swatchRows, swatchWidth, swatchHeight, standard]);

  const adjusted = useMemo(() => {
    const pSt = number(patternStitches), aSt = number(actualStitches);
    const pRw = number(patternRows), aRw = number(actualRows);
    const step = Math.max(1, whole(number(repeat, 1)));
    const rawStitches = pSt > 0 ? number(patternCount) * aSt / pSt : 0;
    const rawRows = pRw > 0 ? number(patternRowCount) * aRw / pRw : 0;
    const rounded = Math.max(step, Math.round(rawStitches / step) * step);
    return { rawStitches, rawRows, rounded, stitchDelta: rounded - number(patternCount), width: aSt > 0 ? rounded / (aSt / standard) : 0 };
  }, [patternStitches, actualStitches, patternRows, actualRows, patternCount, patternRowCount, repeat, standard]);

  const target = useMemo(() => {
    const stitchGauge = number(targetStitchGauge), rowGauge = number(targetRowGauge);
    const step = Math.max(1, whole(number(targetRepeat, 1)));
    const rawStitches = number(targetWidth) * stitchGauge / standard;
    const rawRows = number(targetHeight) * rowGauge / standard;
    return {
      stitches: Math.round(rawStitches / step) * step,
      rows: whole(rawRows),
      actualWidth: stitchGauge > 0 ? Math.round(rawStitches / step) * step / (stitchGauge / standard) : 0,
    };
  }, [targetWidth, targetHeight, targetStitchGauge, targetRowGauge, targetRepeat, standard]);

  const tabs: { id: Mode; label: string; icon: typeof Calculator }[] = [
    { id: "swatch", label: "Measure swatch", icon: Ruler },
    { id: "adjust", label: "Adjust pattern", icon: RefreshCw },
    { id: "target", label: "Plan a size", icon: Calculator },
    { id: "needles", label: "Needle sizes", icon: Grid3X3 },
  ];

  return (
    <div className="space-y-8">
      <section className="overflow-hidden rounded-3xl border border-[#314969] bg-[#172642] shadow-2xl shadow-black/20">
        <div className="border-b border-[#314969] p-5 sm:p-7">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-300">Interactive knitting tool</p>
              <h2 className="mt-1 text-xl font-bold text-white sm:text-2xl">Knitting gauge workspace</h2>
              <p className="mt-1 text-sm text-slate-400">Measure your swatch, compare pattern tension, and calculate stitch counts.</p>
            </div>
            <label className="flex items-center gap-2 rounded-xl border border-[#405777] bg-[#101b33] px-3 py-2 text-sm text-slate-200">
              <span>Units</span>
              <select value={unit} onChange={(e) => setUnit(e.target.value as Unit)} className="bg-transparent font-semibold text-white outline-none">
                <option value="in" className="bg-[#172642]">Inches</option>
                <option value="cm" className="bg-[#172642]">Centimeters</option>
              </select>
            </label>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {tabs.map(({ id, label, icon: Icon }) => (
              <button key={id} type="button" onClick={() => setMode(id)}
                aria-pressed={mode === id}
                className={`flex min-h-11 items-center justify-center gap-2 rounded-xl border px-2 py-2 text-xs font-semibold transition sm:text-sm ${mode === id ? "border-blue-400 bg-blue-500 text-white shadow-lg shadow-blue-950/30" : "border-[#405777] bg-[#101b33]/70 text-slate-300 hover:border-blue-400/60 hover:text-white"}`}>
                <Icon size={16} />{label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 p-5 sm:p-7 lg:grid-cols-[1.05fr_.95fr]">
          {mode === "swatch" && <>
            <div className="space-y-4">
              <div><h3 className="text-lg font-bold text-white">Enter your swatch measurements</h3><p className="mt-1 text-sm text-slate-400">Count stitches and rows across a measured section of your blocked swatch.</p></div>
              <div className="grid grid-cols-2 gap-4">
                <Field label="Stitches counted" value={swatchStitches} onChange={setSwatchStitches} min="1" step="1" />
                <Field label="Rows counted" value={swatchRows} onChange={setSwatchRows} min="1" step="1" />
                <Field label={`Measured width (${unitLabel})`} value={swatchWidth} onChange={setSwatchWidth} suffix={unit} />
                <Field label={`Measured height (${unitLabel})`} value={swatchHeight} onChange={setSwatchHeight} suffix={unit} />
              </div>
              <div className="rounded-xl border border-amber-300/20 bg-amber-300/[0.06] p-3 text-xs leading-relaxed text-amber-100/90"><Info size={15} className="mr-1 inline" /> For the most useful result, wash or block your swatch as your finished project will be treated, then measure the center area rather than the edges.</div>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-white">Your calculated gauge</h3>
              <Result label={`Stitches per ${standard} ${unit}`} value={clean(gauge.stitches).toFixed(2)} detail="Stitch gauge" />
              <Result label={`Rows per ${standard} ${unit}`} value={clean(gauge.rows).toFixed(2)} detail="Row gauge" />
              <p className="text-xs leading-relaxed text-slate-400">Gauge = stitches (or rows) counted ÷ measured length × {standard} {unit}. Use these values in the pattern adjustment tab.</p>
              <button type="button" onClick={() => { setActualStitches(clean(gauge.stitches).toString()); setActualRows(clean(gauge.rows).toString()); setMode("adjust"); }}
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-blue-500 px-4 py-3 text-sm font-bold text-white transition hover:bg-blue-400">Use this gauge to adjust a pattern <RefreshCw size={16} /></button>
            </div>
          </>}

          {mode === "adjust" && <>
            <div className="space-y-4">
              <div><h3 className="text-lg font-bold text-white">Compare pattern and personal gauge</h3><p className="mt-1 text-sm text-slate-400">Enter both gauges using the same {standard} {unit} standard.</p></div>
              <div className="grid grid-cols-2 gap-4">
                <Field label="Pattern stitches" value={patternStitches} onChange={setPatternStitches} min="0.1" />
                <Field label="Your stitches" value={actualStitches} onChange={setActualStitches} min="0.1" />
                <Field label="Pattern rows" value={patternRows} onChange={setPatternRows} min="0.1" />
                <Field label="Your rows" value={actualRows} onChange={setActualRows} min="0.1" />
                <Field label="Pattern stitch count" value={patternCount} onChange={setPatternCount} min="1" step="1" />
                <Field label="Pattern row count" value={patternRowCount} onChange={setPatternRowCount} min="1" step="1" />
                <Field label="Stitch repeat multiple" value={repeat} onChange={setRepeat} min="1" step="1" help="Use 1 if there is no repeat." />
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-white">Adjusted pattern counts</h3>
              <Result label="Adjusted stitches" value={String(adjusted.rounded)} detail={`Raw calculation: ${clean(adjusted.rawStitches)} stitches`} />
              <Result label="Adjusted rows" value={String(whole(adjusted.rawRows))} detail={`Raw calculation: ${clean(adjusted.rawRows)} rows`} />
              <Result label="Stitch count change" value={`${adjusted.stitchDelta > 0 ? "+" : ""}${adjusted.stitchDelta}`} detail="After repeat rounding" />
              <p className="text-xs leading-relaxed text-slate-400">The adjusted stitch count is rounded to your chosen repeat multiple. Always check shaping, neckline, sleeve, and pattern instructions before substituting counts.</p>
            </div>
          </>}

          {mode === "target" && <>
            <div className="space-y-4">
              <div><h3 className="text-lg font-bold text-white">Calculate stitches for a finished size</h3><p className="mt-1 text-sm text-slate-400">Enter the target dimensions and the gauge you expect to achieve.</p></div>
              <div className="grid grid-cols-2 gap-4">
                <Field label={`Target width (${unitLabel})`} value={targetWidth} onChange={setTargetWidth} suffix={unit} />
                <Field label={`Target height (${unitLabel})`} value={targetHeight} onChange={setTargetHeight} suffix={unit} />
                <Field label={`Stitches per ${standard} ${unit}`} value={targetStitchGauge} onChange={setTargetStitchGauge} min="0.1" />
                <Field label={`Rows per ${standard} ${unit}`} value={targetRowGauge} onChange={setTargetRowGauge} min="0.1" />
                <Field label="Stitch repeat multiple" value={targetRepeat} onChange={setTargetRepeat} min="1" step="1" help="Use 1 if there is no repeat." />
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-white">Estimated stitch and row counts</h3>
              <Result label="Stitches to cast on" value={String(target.stitches)} detail={`Rounded to a multiple of ${Math.max(1, whole(number(targetRepeat, 1)))}`} />
              <Result label="Rows for target height" value={String(target.rows)} detail="Rounded to the nearest whole row" />
              <Result label="Estimated width after rounding" value={`${clean(target.actualWidth)} ${unit}`} />
              <p className="text-xs leading-relaxed text-slate-400">This is a gauge-based estimate. Real patterns may require extra stitches for seams, borders, ease, shaping, or stitch-pattern repeats.</p>
            </div>
          </>}

          {mode === "needles" && <div className="lg:col-span-2">
            <div><h3 className="text-lg font-bold text-white">Knitting needle size reference</h3><p className="mt-1 text-sm text-slate-400">Common US needle sizes and approximate metric equivalents.</p></div>
            <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {NEEDLES.map(([us, mm]) => <div key={us} className="flex items-center justify-between rounded-xl border border-[#405777] bg-[#101b33]/70 px-3 py-3"><span className="text-sm font-semibold text-white">{us}</span><span className="text-sm tabular-nums text-blue-200">{mm}</span></div>)}
            </div>
            <p className="mt-4 text-xs leading-relaxed text-slate-400">Needle size is only a starting reference. Actual gauge depends on yarn, stitch pattern, needle material, and individual tension. Always knit a swatch.</p>
          </div>}
        </div>
      </section>

      <div className="grid gap-4 sm:grid-cols-3">
        {[
          ["Measure after blocking", "Wash and dry your swatch as you plan to treat the finished garment."],
          ["Measure the center", "Avoid edge stitches, which can distort the measured gauge."],
          ["Check the pattern repeat", "Rounding stitch counts may affect shaping and stitch-pattern alignment."],
        ].map(([title, description]) => <div key={title} className="rounded-2xl border border-[#314969] bg-[#172642]/70 p-4"><CheckCircle2 className="h-5 w-5 text-emerald-400" /><h3 className="mt-2 text-sm font-bold text-white">{title}</h3><p className="mt-1 text-xs leading-relaxed text-slate-400">{description}</p></div>)}
      </div>
    </div>
  );
}
