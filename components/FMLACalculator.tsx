"use client";

import { useMemo, useState } from "react";
import { CheckCircle2, Info, Plus, ShieldAlert, Trash2 } from "lucide-react";

type LeaveReason = "standard" | "military";
type LeaveMethod = "rolling" | "calendar" | "fixed" | "forward";
type LeaveEntry = { id: number; date: string; hours: string; reason: "standard" | "military" };

const dateValue = (value: string) => value ? new Date(value + "T12:00:00") : null;
const whole = (value: string) => Number.isFinite(Number(value)) ? Math.max(0, Math.floor(Number(value))) : 0;
const fmtDate = (date: Date) => date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
const addYear = (date: Date) => { const next = new Date(date); next.setFullYear(next.getFullYear() + 1); return next; };
const iso = (date: Date) => { const y = date.getFullYear(), m = String(date.getMonth()+1).padStart(2,"0"), d = String(date.getDate()).padStart(2,"0"); return `${y}-${m}-${d}`; };

function Field({ label, value, onChange, type = "number", min, help }: { label: string; value: string; onChange: (v: string) => void; type?: string; min?: string; help?: string }) {
  return <label className="block"><span className="text-sm font-semibold text-slate-200">{label}</span><input type={type} min={min} value={value} onChange={e => onChange(e.target.value)} className="mt-2 min-h-11 w-full rounded-xl border border-[#405777] bg-[#101b33] px-3 text-white outline-none focus:border-blue-400" />{help && <span className="mt-1 block text-xs text-slate-400">{help}</span>}</label>;
}
function Result({ label, value, detail }: { label: string; value: string; detail?: string }) {
  return <div className="rounded-xl border border-[#405777] bg-[#101b33] p-4"><p className="text-xs font-medium uppercase tracking-wide text-blue-200">{label}</p><p className="mt-1 text-2xl font-bold tabular-nums text-white">{value}</p>{detail && <p className="mt-1 text-xs text-slate-400">{detail}</p>}</div>;
}

export default function FMLACalculator() {
  const [hireDate, setHireDate] = useState("2024-01-01");
  const [leaveDate, setLeaveDate] = useState("2026-11-19");
  const [hoursWorked, setHoursWorked] = useState("1250");
  const [weeklyHours, setWeeklyHours] = useState("40");
  const [employeeCount, setEmployeeCount] = useState("50");
  const [reason, setReason] = useState<LeaveReason>("standard");
  const [method, setMethod] = useState<LeaveMethod>("rolling");
  const [fixedStart, setFixedStart] = useState("2026-01-01");
  const [firstUse, setFirstUse] = useState("2026-01-01");
  const [militaryFirstUse, setMilitaryFirstUse] = useState("2026-11-19");
  const [entries, setEntries] = useState<LeaveEntry[]>([]);
  const [nextId, setNextId] = useState(1);

  const result = useMemo(() => {
    const hire = dateValue(hireDate), start = dateValue(leaveDate);
    const worked = whole(hoursWorked), weekly = Number(weeklyHours), headcount = whole(employeeCount);
    const anniversary = hire ? addYear(hire) : null;
    const monthsMet = !!anniversary && !!start && start >= anniversary;
    const hoursMet = worked >= 1250, employerMet = headcount >= 50;
    const eligible = monthsMet && hoursMet && employerMet;
    const entitlementWeeks = reason === "military" ? 26 : 12;
    const weeklyValid = Number.isFinite(weekly) && weekly > 0 && weekly <= 168;
    let periodStart: Date | null = null, periodEnd: Date | null = null, periodLabel = "Enter a valid leave start date";
    if (reason === "military") {
      const anchor = dateValue(militaryFirstUse);
      if (anchor) { periodStart = anchor; periodEnd = addYear(anchor); periodEnd.setDate(periodEnd.getDate()-1); periodLabel = `Military caregiver single period: ${fmtDate(periodStart)} – ${fmtDate(periodEnd)}`; }
    } else if (start) {
      if (method === "rolling") { periodEnd = start; periodStart = new Date(start); periodStart.setFullYear(periodStart.getFullYear()-1); periodLabel = `Rolling look-back: ${fmtDate(periodStart)} – ${fmtDate(periodEnd)}`; }
      if (method === "calendar") { periodStart = new Date(start.getFullYear(),0,1,12); periodEnd = new Date(start.getFullYear()+1,0,1,12); periodEnd.setDate(periodEnd.getDate()-1); periodLabel = `Calendar year: ${fmtDate(periodStart)} – ${fmtDate(periodEnd)}`; }
      if (method === "fixed") { const anchor = dateValue(fixedStart); if (anchor) { periodStart = new Date(anchor); while (periodStart > start) periodStart.setFullYear(periodStart.getFullYear()-1); while (addYear(periodStart) <= start) periodStart = addYear(periodStart); periodEnd = addYear(periodStart); periodEnd.setDate(periodEnd.getDate()-1); periodLabel = `Employer fixed year: ${fmtDate(periodStart)} – ${fmtDate(periodEnd)}`; } }
      if (method === "forward") { const anchor = dateValue(firstUse); if (anchor) { periodStart = new Date(anchor); periodEnd = addYear(periodStart); periodEnd.setDate(periodEnd.getDate()-1); periodLabel = `Forward period: ${fmtDate(periodStart)} – ${fmtDate(periodEnd)}`; } }
    }
    const counted = entries.filter(entry => { const d = dateValue(entry.date); const reasonMatches = reason === "military" || entry.reason === "standard"; return reasonMatches && !!d && !!periodStart && !!periodEnd && d >= periodStart && d <= periodEnd; });
    const otherReasonHours = reason === "military" ? counted.filter(entry => entry.reason === "standard").reduce((sum, entry) => sum + whole(entry.hours), 0) : 0;
    const usedHours = counted.reduce((sum, entry) => sum + whole(entry.hours), 0);
    const totalHours = entitlementWeeks * (weeklyValid ? weekly : 0);
    const remainingHours = Math.max(0, totalHours-usedHours);
    return { monthsMet, hoursMet, employerMet, eligible, entitlementWeeks, weeklyValid, totalHours, remainingHours, remainingWeeks: weeklyValid ? remainingHours/weekly : 0, periodLabel, counted, usedHours, otherReasonHours, periodStart, periodEnd };
  }, [hireDate,leaveDate,hoursWorked,weeklyHours,employeeCount,reason,method,fixedStart,firstUse,militaryFirstUse,entries]);

  const inputClass = "min-h-11 rounded-xl border border-[#405777] bg-[#101b33] px-3 text-white";
  const addEntry = () => { setEntries(current => [...current, { id: nextId, date: leaveDate, hours: "8", reason: "standard" }]); setNextId(n => n+1); };
  const updateEntry = (id: number, key: "date"|"hours"|"reason", value: string) => setEntries(current => current.map(entry => entry.id===id ? {...entry,[key]:value} : entry));
  return <div className="space-y-6">
    <section className="overflow-hidden rounded-3xl border border-[#314969] bg-[#172642] shadow-2xl shadow-black/20">
      <div className="border-b border-[#314969] p-5 sm:p-7"><p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-300">Federal leave planning tool</p><h2 className="mt-1 text-xl font-bold text-white sm:text-2xl">FMLA eligibility & leave balance</h2><p className="mt-1 text-sm text-slate-400">Estimate general federal eligibility and calculate leave used from individual dated entries in the selected 12-month period.</p></div>
      <div className="grid gap-6 p-5 sm:p-7 lg:grid-cols-2">
        <div className="space-y-4"><h3 className="font-bold text-white">Employment details</h3><div className="grid gap-4 sm:grid-cols-2">
          <Field label="Employment start date" type="date" value={hireDate} onChange={setHireDate}/><Field label="Planned leave start date" type="date" value={leaveDate} onChange={setLeaveDate}/>
          <Field label="Hours actually worked in prior 12 months" value={hoursWorked} onChange={setHoursWorked} min="0" help="Exclude paid leave and vacation hours."/>
          <Field label="Normal workweek (hours)" value={weeklyHours} onChange={setWeeklyHours} min="1" help="Use the employee's normal workweek."/>
          <Field label="Employer employees within 75 miles" value={employeeCount} onChange={setEmployeeCount} min="0" help="General employee-count test for a covered private employer."/>
        </div>
        <div><span className="text-sm font-semibold text-slate-200">Leave reason</span><div className="mt-2 grid grid-cols-2 gap-2">
          <button type="button" onClick={()=>setReason("standard")} className={`rounded-xl border px-3 py-3 text-sm font-semibold ${reason==="standard"?"border-blue-400 bg-blue-500 text-white":"border-[#405777] bg-[#101b33] text-slate-300"}`}>Most FMLA reasons · 12 weeks</button>
          <button type="button" onClick={()=>setReason("military")} className={`rounded-xl border px-3 py-3 text-sm font-semibold ${reason==="military"?"border-blue-400 bg-blue-500 text-white":"border-[#405777] bg-[#101b33] text-slate-300"}`}>Military caregiver · up to 26 weeks</button>
        </div></div></div>
        <div className="space-y-4"><h3 className="font-bold text-white">Leave balance period</h3>
          {reason === "military" ? <Field label="First day of military caregiver leave in this single 12-month period" type="date" value={militaryFirstUse} onChange={setMilitaryFirstUse} help="This date starts the separate military caregiver period, regardless of the employer leave-year method."/> : <label className="block"><span className="text-sm font-semibold text-slate-200">Employer's 12-month leave-year method</span><select value={method} onChange={e=>setMethod(e.target.value as LeaveMethod)} className={`${inputClass} mt-2 w-full`}><option value="rolling">Rolling backward from leave start</option><option value="calendar">Calendar year</option><option value="fixed">Employer-designated fixed 12-month year</option><option value="forward">12 months forward from first use</option></select></label>}
          {reason === "standard" && method==="fixed"&&<Field label="Start date of employer fixed leave year" type="date" value={fixedStart} onChange={setFixedStart}/> }
          {reason === "standard" && method==="forward"&&<Field label="Date of first FMLA use in this forward period" type="date" value={firstUse} onChange={setFirstUse}/> }
          <div className="grid grid-cols-2 gap-3"><Result label="Maximum entitlement" value={`${result.entitlementWeeks} weeks`} detail={`${result.totalHours.toLocaleString("en-US")} hours at your workweek`}/><Result label="Estimated remaining" value={result.weeklyValid?`${result.remainingWeeks.toFixed(2)} weeks`:"—"} detail={result.weeklyValid?`${Math.round(result.remainingHours).toLocaleString("en-US")} hours`:"Enter a valid workweek"}/></div>
          <p className="text-xs text-slate-400">{result.periodLabel}</p>
          <p className="text-xs text-slate-400">{result.counted.length} dated leave entr{result.counted.length===1?"y":"ies"} counted · {result.usedHours.toLocaleString("en-US")} hours used in this period.</p>
          {reason === "military" && <p className="text-xs text-slate-300">{result.otherReasonHours.toLocaleString("en-US")} hours of other FMLA leave counted toward the combined 26-week limit. Other qualifying reasons remain capped at 12 weeks in this period.</p>}
        </div>
      </div>
      <div className="border-t border-[#314969] p-5 sm:p-7"><div className="flex flex-wrap items-center justify-between gap-3"><h3 className="font-bold text-white">Leave already used</h3><button type="button" onClick={addEntry} className="inline-flex items-center gap-2 rounded-lg bg-blue-500 px-3 py-2 text-sm font-bold text-white hover:bg-blue-400"><Plus size={16}/> Add leave entry</button></div>
        <p className="mt-1 text-xs text-slate-400">Add each FMLA absence with its date and hours. Only entries inside the selected leave-year period are included in the estimate.</p>
        {entries.length===0?<p className="mt-4 rounded-xl border border-dashed border-[#557095] p-4 text-sm text-slate-400">No leave entries yet. Add dates and hours to calculate used leave.</p>:<div className="mt-4 space-y-2">{entries.map(entry=><div key={entry.id} className="grid grid-cols-1 gap-2 rounded-xl border border-[#405777] bg-[#101b33] p-3 sm:grid-cols-[1fr_1fr_1fr_auto] sm:items-end"><Field label="Leave date" type="date" value={entry.date} onChange={v=>updateEntry(entry.id,"date",v)}/><Field label="Hours used" value={entry.hours} onChange={v=>updateEntry(entry.id,"hours",v)} min="0"/><label className="block"><span className="text-sm font-semibold text-slate-200">FMLA leave type</span><select value={entry.reason} onChange={e=>updateEntry(entry.id,"reason",e.target.value as "standard" | "military")} className={`${inputClass} mt-2 w-full`}><option value="standard">Other FMLA reason</option><option value="military">Military caregiver</option></select></label><button type="button" aria-label="Remove leave entry" onClick={()=>setEntries(current=>current.filter(item=>item.id!==entry.id))} className="mb-1 rounded-lg border border-red-400/30 p-3 text-red-300 hover:bg-red-400/10"><Trash2 size={17}/></button></div>)}</div>}
        <div className="mt-4 rounded-xl border border-blue-400/20 bg-blue-400/[0.06] p-3 text-xs leading-relaxed text-blue-100"><Info size={15} className="mr-1 inline"/> This is a simplified planning estimate. FMLA may be tracked in workweeks, days, or hours depending on the employee's schedule; intermittent and reduced-schedule leave, holidays, and employer records can require more detailed treatment.</div>
      </div>
      <div className="border-t border-[#314969] p-5 sm:p-7"><h3 className="font-bold text-white">Preliminary eligibility check</h3><div className="mt-4 grid gap-3 sm:grid-cols-3">
        {[[result.monthsMet,"Employed for at least 12 months","12 months by leave start"],[result.hoursMet,"Worked at least 1,250 hours","During prior 12 months"],[result.employerMet,"50 employees within 75 miles","Worksite coverage test"]].map(([ok,title,desc])=><div key={String(title)} className="flex gap-3 rounded-xl border border-[#405777] bg-[#101b33] p-3"><CheckCircle2 className={`mt-0.5 shrink-0 ${ok?"text-emerald-400":"text-amber-300"}`} size={19}/><div><p className="text-sm font-semibold text-white">{String(title)}</p><p className="mt-1 text-xs text-slate-400">{String(desc)}</p></div></div>)}
      </div>{!result.eligible&&<p className="mt-3 text-xs text-amber-200">One or more entered general federal criteria are not met. This is not a final legal eligibility determination.</p>}</div>
    </section>
    <section className="rounded-2xl border border-amber-400/30 bg-amber-400/[0.06] p-5"><div className="flex gap-3"><ShieldAlert className="mt-0.5 shrink-0 text-amber-300" size={20}/><div><h3 className="font-bold text-white">Important FMLA limitations</h3><ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-slate-300"><li>Federal FMLA is generally unpaid; accrued paid leave may run concurrently under applicable policies.</li><li>Eligibility also depends on employer coverage, worksite rules, qualifying reason, and other legal requirements. Airline flight crew and certain special cases have different rules.</li><li>Military caregiver leave has its own single 12-month period, beginning on the first day it is used, regardless of the employer leave-year method. All FMLA leave during that period shares a 26-workweek combined limit; no more than 12 weeks may be used for other FMLA reasons. The 26-week entitlement is generally per covered servicemember, per qualifying injury or illness.</li><li>This educational estimate is not an employer determination or legal advice. State paid-family-leave programs are separate.</li></ul><p className="mt-3 text-xs text-slate-400">Official guidance: <a className="text-blue-300 underline" href="https://www.dol.gov/agencies/whd/fmla" target="_blank" rel="noreferrer">U.S. Department of Labor — FMLA</a> · <a className="text-blue-300 underline" href="https://www.dol.gov/agencies/whd/fmla/faq" target="_blank" rel="noreferrer">FMLA FAQs</a></p></div></div></section>
  </div>;
}
