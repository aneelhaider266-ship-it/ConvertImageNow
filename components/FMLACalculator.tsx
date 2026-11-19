"use client";

import { useMemo, useState } from "react";
import { CalendarDays, CheckCircle2, Info, ShieldAlert } from "lucide-react";

type LeaveReason = "standard" | "military";
type LeaveMethod = "rolling" | "calendar" | "fixed" | "forward";

const DAY = 24 * 60 * 60 * 1000;
const dateValue = (value: string) => value ? new Date(value + "T12:00:00") : null;
const whole = (value: string) => Number.isFinite(Number(value)) ? Math.max(0, Math.floor(Number(value))) : 0;
const fmtDate = (date: Date) => date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

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
  const [usedHours, setUsedHours] = useState("0");
  const [priorStart, setPriorStart] = useState("");
  const [priorEnd, setPriorEnd] = useState("");
  const [priorHours, setPriorHours] = useState("0");

  const result = useMemo(() => {
    const hire = dateValue(hireDate);
    const start = dateValue(leaveDate);
    const worked = whole(hoursWorked);
    const weekly = Number(weeklyHours);
    const headcount = whole(employeeCount);
    const employedDays = hire && start ? Math.floor((start.getTime() - hire.getTime()) / DAY) : -1;
    const monthsMet = !!hire && !!start && employedDays >= 365;
    const hoursMet = worked >= 1250;
    const employerMet = headcount >= 50;
    const eligible = monthsMet && hoursMet && employerMet;
    const entitlementWeeks = reason === "military" ? 26 : 12;
    const weeklyValid = Number.isFinite(weekly) && weekly > 0 && weekly <= 168;
    let used = whole(usedHours);
    let periodLabel = "Selected leave-year period";
    if (method === "rolling" && start) {
      const windowStart = new Date(start.getTime() - 365 * DAY);
      periodLabel = `Rolling look-back: ${fmtDate(windowStart)} – ${fmtDate(start)}`;
      const pStart = dateValue(priorStart);
      const pEnd = dateValue(priorEnd);
      if (pStart && pEnd && pEnd >= pStart) {
        const overlapStart = new Date(Math.max(pStart.getTime(), windowStart.getTime()));
        const overlapEnd = new Date(Math.min(pEnd.getTime(), start.getTime()));
        if (overlapEnd >= overlapStart) {
          const overlapDays = Math.floor((overlapEnd.getTime() - overlapStart.getTime()) / DAY) + 1;
          const totalDays = Math.floor((pEnd.getTime() - pStart.getTime()) / DAY) + 1;
          used += whole(priorHours) * Math.min(1, overlapDays / totalDays);
        }
      }
    } else if (method === "calendar" && start) {
      periodLabel = `Calendar year: Jan 1 – Dec 31, ${start.getFullYear()}`;
    } else if (method === "fixed" && start) {
      periodLabel = "Employer-designated fixed 12-month leave year";
    } else if (method === "forward" && start) {
      periodLabel = `12 months beginning ${fmtDate(start)}`;
    }
    const totalHours = entitlementWeeks * (weeklyValid ? weekly : 0);
    const remainingHours = Math.max(0, totalHours - used);
    return { eligible, monthsMet, hoursMet, employerMet, employedDays, entitlementWeeks, weeklyValid, used, totalHours, remainingHours, remainingWeeks: weeklyValid ? remainingHours / weekly : 0, periodLabel, start };
  }, [hireDate, leaveDate, hoursWorked, weeklyHours, employeeCount, reason, method, usedHours, priorStart, priorEnd, priorHours]);

  const inputClass = "min-h-11 rounded-xl border border-[#405777] bg-[#101b33] px-3 text-white";
  return <div className="space-y-6">
    <section className="overflow-hidden rounded-3xl border border-[#314969] bg-[#172642] shadow-2xl shadow-black/20">
      <div className="border-b border-[#314969] p-5 sm:p-7">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-300">Federal leave planning tool</p>
        <h2 className="mt-1 text-xl font-bold text-white sm:text-2xl">FMLA eligibility & leave balance</h2>
        <p className="mt-1 text-sm text-slate-400">Estimate federal FMLA eligibility and your remaining job-protected leave based on the details you enter.</p>
      </div>
      <div className="grid gap-6 p-5 sm:p-7 lg:grid-cols-2">
        <div className="space-y-4">
          <h3 className="font-bold text-white">Employment details</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Employment start date" type="date" value={hireDate} onChange={setHireDate} />
            <Field label="Planned leave start date" type="date" value={leaveDate} onChange={setLeaveDate} />
            <Field label="Hours worked in prior 12 months" value={hoursWorked} onChange={setHoursWorked} min="0" help="Use actual hours worked, not paid leave or vacation hours." />
            <Field label="Normal workweek (hours)" value={weeklyHours} onChange={setWeeklyHours} min="1" help="Your usual scheduled workweek." />
            <Field label="Employer employees within 75 miles" value={employeeCount} onChange={setEmployeeCount} min="0" help="FMLA generally requires 50 employees within 75 miles of your worksite." />
          </div>
          <div><span className="text-sm font-semibold text-slate-200">Leave reason</span><div className="mt-2 grid grid-cols-2 gap-2">
            <button type="button" onClick={() => setReason("standard")} className={`rounded-xl border px-3 py-3 text-sm font-semibold ${reason === "standard" ? "border-blue-400 bg-blue-500 text-white" : "border-[#405777] bg-[#101b33] text-slate-300"}`}>Most FMLA reasons · 12 weeks</button>
            <button type="button" onClick={() => setReason("military")} className={`rounded-xl border px-3 py-3 text-sm font-semibold ${reason === "military" ? "border-blue-400 bg-blue-500 text-white" : "border-[#405777] bg-[#101b33] text-slate-300"}`}>Military caregiver · up to 26 weeks</button>
          </div></div>
        </div>
        <div className="space-y-4">
          <h3 className="font-bold text-white">Leave balance estimate</h3>
          <label className="block"><span className="text-sm font-semibold text-slate-200">Employer's 12-month leave-year method</span><select value={method} onChange={e => setMethod(e.target.value as LeaveMethod)} className={`${inputClass} mt-2 w-full`}><option value="rolling">Rolling backward from leave start</option><option value="calendar">Calendar year</option><option value="fixed">Fixed 12-month year</option><option value="forward">12 months forward from first use</option></select></label>
          <Field label="FMLA leave already used in applicable period (hours)" value={usedHours} onChange={setUsedHours} min="0" help="Enter total hours already counted against this entitlement." />
          {method === "rolling" && <div className="rounded-xl border border-[#405777] bg-[#101b33] p-4 space-y-3"><p className="text-sm font-semibold text-slate-200">Optional prior leave episode for look-back</p><p className="text-xs text-slate-400">Enter one prior leave episode to estimate the portion falling inside the rolling 12-month look-back window. Include other episodes in the used-hours field.</p><div className="grid grid-cols-2 gap-3"><Field label="Prior leave start" type="date" value={priorStart} onChange={setPriorStart} /><Field label="Prior leave end" type="date" value={priorEnd} onChange={setPriorEnd} /></div><Field label="Hours in that episode" value={priorHours} onChange={setPriorHours} min="0" /></div>}
          <div className="rounded-xl border border-blue-400/20 bg-blue-400/[0.06] p-3 text-xs leading-relaxed text-blue-100"><Info size={15} className="mr-1 inline" /> For calendar, fixed-year, and forward methods, enter all leave used in that employer-defined period. The employer's chosen method controls the official balance.</div>
          <div className="grid grid-cols-2 gap-3">
            <Result label="Maximum entitlement" value={`${result.entitlementWeeks} weeks`} detail={`${result.totalHours.toLocaleString("en-US")} hours at your workweek`} />
            <Result label="Estimated remaining" value={result.weeklyValid ? `${result.remainingWeeks.toFixed(2)} weeks` : "—"} detail={result.weeklyValid ? `${Math.round(result.remainingHours).toLocaleString("en-US")} hours` : "Enter a valid workweek"} />
          </div>
          <p className="text-xs text-slate-400">{result.periodLabel}</p>
        </div>
      </div>
      <div className="border-t border-[#314969] p-5 sm:p-7">
        <div className="flex flex-wrap items-center justify-between gap-3"><h3 className="font-bold text-white">Preliminary eligibility check</h3><span className={`rounded-full px-3 py-1 text-xs font-bold ${result.eligible ? "bg-emerald-400/15 text-emerald-300" : "bg-amber-400/15 text-amber-200"}`}>{result.eligible ? "Meets entered federal criteria" : "One or more criteria not met"}</span></div>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {[[result.monthsMet, "Employed for at least 12 months", "12 months of employment by leave start"], [result.hoursMet, "Worked at least 1,250 hours", "During the 12 months before leave starts"], [result.employerMet, "50 employees within 75 miles", "At the worksite or within 75 miles"]].map(([ok, title, desc]) => <div key={String(title)} className="flex gap-3 rounded-xl border border-[#405777] bg-[#101b33] p-3"><CheckCircle2 className={`mt-0.5 shrink-0 ${ok ? "text-emerald-400" : "text-amber-300"}`} size={19} /><div><p className="text-sm font-semibold text-white">{String(title)}</p><p className="mt-1 text-xs text-slate-400">{String(desc)}</p></div></div>)}
        </div>
        {!result.eligible && <p className="mt-3 text-xs text-amber-200">Based only on the entries provided, one or more general federal criteria are not met. Special rules and employer-specific facts can change the assessment.</p>}
      </div>
    </section>
    <section className="rounded-2xl border border-amber-400/30 bg-amber-400/[0.06] p-5">
      <div className="flex gap-3"><ShieldAlert className="mt-0.5 shrink-0 text-amber-300" size={20} /><div><h3 className="font-bold text-white">Important FMLA limitations</h3><ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-slate-300"><li>Federal FMLA leave is generally unpaid, although accrued paid leave may run concurrently under applicable policies.</li><li>Eligibility also depends on the qualifying reason, employer coverage, worksite rules, and other legal requirements. Airline flight crew and certain special cases have different rules.</li><li>Most qualifying reasons allow up to 12 workweeks; military caregiver leave can allow up to 26 workweeks in a single 12-month period, subject to statutory limits.</li><li>This estimate is not an employer determination or legal advice. State paid-family-leave programs are separate and are not calculated here.</li></ul><p className="mt-3 text-xs text-slate-400">Official guidance: <a className="text-blue-300 underline" href="https://www.dol.gov/agencies/whd/fmla" target="_blank" rel="noreferrer">U.S. Department of Labor — FMLA</a> · <a className="text-blue-300 underline" href="https://www.dol.gov/agencies/whd/fmla/faq" target="_blank" rel="noreferrer">FMLA FAQs</a></p></div></div>
    </section>
  </div>;
}
