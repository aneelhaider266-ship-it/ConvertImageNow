import type { Metadata } from "next";
import FMLACalculator from "@/components/FMLACalculator";

const SITE_URL = "https://convertimagenow.com";
const PAGE_URL = `${SITE_URL}/fmla-calculator`;

export const metadata: Metadata = {
  title: "FMLA Calculator – Check Eligibility & Remaining Leave",
  description: "Use this free FMLA calculator to estimate federal Family and Medical Leave Act eligibility, 12- or 26-week leave entitlement, and remaining hours based on your leave-year method.",
  alternates: { canonical: PAGE_URL },
  openGraph: { title: "FMLA Calculator – Check Eligibility & Remaining Leave", description: "Estimate federal FMLA eligibility and remaining job-protected leave hours with a free interactive calculator.", url: PAGE_URL, siteName: "ConvertImageNow", type: "website" },
  twitter: { card: "summary", title: "FMLA Calculator – Eligibility & Leave Balance", description: "Estimate federal FMLA eligibility and remaining leave." },
};

export default function FMLACalculatorPage() {
  return <div className="container-page py-10 sm:py-14">
    <div className="mx-auto max-w-4xl">
      <nav aria-label="Breadcrumb" className="mb-5 text-sm text-slate-400"><a href="/" className="hover:text-white">Home</a><span className="mx-2">/</span><a href="/tools" className="hover:text-white">Tools</a><span className="mx-2">/</span><span className="text-slate-200">FMLA Calculator</span></nav>
      <header className="mb-8"><p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-300">Free federal leave estimator</p><h1 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">FMLA Calculator</h1><p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300">Check the general federal FMLA eligibility requirements and estimate how much job-protected leave may remain. Enter your employment details, normal workweek, leave reason, and leave already used.</p><div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-300"><span className="rounded-full border border-[#405777] px-3 py-1">Eligibility estimate</span><span className="rounded-full border border-[#405777] px-3 py-1">12- and 26-week limits</span><span className="rounded-full border border-[#405777] px-3 py-1">Leave-year methods</span></div></header>
      <FMLACalculator />
      <section className="prose prose-invert mt-12 max-w-none prose-headings:text-white prose-p:text-slate-300 prose-li:text-slate-300">
        <h2>How does federal FMLA eligibility work?</h2>
        <p>For most employees, the general federal test includes at least 12 months of employment, at least 1,250 hours actually worked during the 12 months before leave begins, and employment at a worksite where the employer has at least 50 employees within 75 miles. Other coverage and employee-specific rules apply.</p>
        <h2>How much FMLA leave can an eligible employee take?</h2>
        <p>Eligible employees may take up to 12 workweeks of qualifying unpaid, job-protected leave in the applicable 12-month period. Eligible employees taking leave to care for a covered servicemember with a serious injury or illness may have up to 26 workweeks in a single 12-month period, subject to the combined entitlement rules.</p>
        <h2>Why does the employer's leave-year method matter?</h2>
        <p>An employer may use a calendar year, another fixed 12-month year, a 12-month period measured forward from the first FMLA use, or a rolling 12-month period measured backward from each use. The applicable method affects how previously used leave is counted. Confirm the method in your employer's FMLA policy.</p>
        <h2>Is FMLA paid leave?</h2>
        <p>Federal FMLA itself generally provides unpaid leave. Employees may be able or required to use accrued paid leave concurrently under certain policies. State paid-family-leave and temporary disability programs are separate and have different eligibility and benefit rules.</p>
        <h2>Can this calculator make an official eligibility decision?</h2>
        <p>No. It is an educational estimate based on the information entered. Your employer is responsible for making the formal eligibility and designation determinations, and special rules may apply. Review the U.S. Department of Labor's <a href="https://www.dol.gov/agencies/whd/fmla">official FMLA guidance</a>.</p>
      </section>
    </div>
  </div>;
}
