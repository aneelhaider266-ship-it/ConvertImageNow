import type { Metadata } from "next";
import KnittingGaugeCalculator from "@/components/KnittingGaugeCalculator";

const SITE_URL = "https://convertimagenow.com";
const PAGE_URL = `${SITE_URL}/knitting-gauge-calculator`;

export const metadata: Metadata = {
  title: "Knitting Gauge Calculator – Calculate Stitches & Rows",
  description:
    "Free knitting gauge calculator. Measure stitches and rows from a swatch, compare your gauge with a pattern, adjust stitch counts, and plan project dimensions.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Knitting Gauge Calculator – Calculate Stitches & Rows",
    description:
      "Calculate knitting stitch and row gauge, adjust pattern counts, and estimate stitches for a target size.",
    url: PAGE_URL,
    siteName: "ConvertImageNow",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Knitting Gauge Calculator",
    description:
      "Measure your knitting gauge and adjust stitch and row counts for your project.",
  },
  robots: { index: true, follow: true },
};

const FAQS = [
  {
    question: "What is knitting gauge?",
    answer:
      "Knitting gauge is the number of stitches and rows in a set measurement, commonly 4 inches or 10 centimeters. It helps you estimate the finished size of a knitted project.",
  },
  {
    question: "How do I calculate my knitting gauge?",
    answer:
      "Count the stitches and rows in a measured section of your swatch. Divide each count by the measured width or height, then multiply by 4 inches or 10 centimeters to get the standard gauge.",
  },
  {
    question: "Should I block my swatch before measuring gauge?",
    answer:
      "Usually, yes. Wash and dry or block your swatch in the same way you plan to treat the finished item, then measure the center area after it has dried.",
  },
  {
    question: "What if my knitting gauge is different from the pattern?",
    answer:
      "If your stitch gauge differs, the finished width can change. You may need to adjust needle size, yarn, or stitch counts. Check row gauge as well, especially for garments and shaping.",
  },
  {
    question: "What is the difference between stitch gauge and row gauge?",
    answer:
      "Stitch gauge measures the number of stitches across a set width. Row gauge measures the number of rows across a set height. Both affect finished project dimensions.",
  },
];

export default function KnittingGaugeCalculatorPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "@id": `${PAGE_URL}#app`,
        name: "Knitting Gauge Calculator",
        url: PAGE_URL,
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "Any",
        description:
          "A browser-based knitting gauge calculator for swatch measurements, pattern gauge adjustment, target dimensions, and needle size reference.",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        featureList: [
          "Calculate stitch and row gauge from swatch measurements",
          "Compare pattern gauge with personal gauge",
          "Adjust stitch and row counts",
          "Calculate stitches and rows for target dimensions",
          "Round stitch counts to pattern repeat multiples",
          "US knitting needle size reference",
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${PAGE_URL}#faq`,
        mainEntity: FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="border-b border-[#263956] bg-gradient-to-b from-[#172642] to-[#101B33] py-10 sm:py-14">
        <div className="container-page">
          <nav aria-label="Breadcrumb" className="text-xs text-slate-400">
            <a href="/" className="hover:text-blue-300">Home</a>
            <span className="mx-2">/</span>
            <a href="/tools" className="hover:text-blue-300">Tools</a>
            <span className="mx-2">/</span>
            <span className="text-slate-200">Knitting Gauge Calculator</span>
          </nav>
          <div className="mx-auto mt-7 max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-xs font-semibold text-blue-200">Free online knitting tool</span>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">Knitting Gauge Calculator</h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Calculate stitch and row gauge from your swatch, compare your tension with a knitting pattern, and estimate the stitch counts you need for your project.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs font-medium text-slate-300">
              <span>✓ Stitch & row gauge</span><span>✓ Pattern adjustment</span><span>✓ Inches & centimeters</span><span>✓ No sign-up</span>
            </div>
          </div>
        </div>
      </section>

      <main className="container-page py-8 sm:py-12">
        <KnittingGaugeCalculator />

        <article className="mx-auto mt-16 max-w-4xl space-y-10 text-slate-300">
          <section>
            <h2 className="text-2xl font-bold text-white">How to use the knitting gauge calculator</h2>
            <ol className="mt-4 list-decimal space-y-3 pl-6 text-sm leading-7">
              <li>Knit a swatch using the yarn, needles, and stitch pattern specified in your project.</li>
              <li>Wash or block the swatch as you expect to treat the finished item, then let it dry.</li>
              <li>Measure a section in the center and enter the stitch count, row count, width, and height.</li>
              <li>Use the pattern adjustment tab to compare your gauge with the pattern and estimate revised counts.</li>
            </ol>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white">Why knitting gauge matters</h2>
            <p className="mt-3 text-sm leading-7">Gauge affects the finished dimensions of a knitted item. If you knit more stitches per inch than the pattern, the fabric may turn out narrower. If you knit fewer stitches per inch, it may turn out wider. Row gauge also affects garment length and shaping. A swatch helps identify these differences before you commit to the full project.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white">Stitch gauge and row gauge formulas</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-[#314969] bg-[#172642] p-4"><p className="font-semibold text-white">Stitch gauge</p><p className="mt-2 font-mono text-sm text-blue-200">Stitches counted ÷ width × 4 in (or 10 cm)</p></div>
              <div className="rounded-xl border border-[#314969] bg-[#172642] p-4"><p className="font-semibold text-white">Row gauge</p><p className="mt-2 font-mono text-sm text-blue-200">Rows counted ÷ height × 4 in (or 10 cm)</p></div>
            </div>
            <p className="mt-3 text-sm leading-7">For pattern adjustments, a useful estimate is: pattern stitch count × your stitch gauge ÷ pattern stitch gauge. Treat the result as a planning calculation, not a replacement for checking the pattern's shaping and stitch-repeat instructions.</p>
          </section>
          <section id="faq">
            <h2 className="text-2xl font-bold text-white">Frequently asked questions</h2>
            <div className="mt-4 space-y-3">
              {FAQS.map((faq) => <details key={faq.question} className="group rounded-xl border border-[#314969] bg-[#172642] p-4">
                <summary className="cursor-pointer list-none font-semibold text-white">{faq.question}<span className="float-right text-blue-300 group-open:rotate-45">+</span></summary>
                <p className="mt-3 text-sm leading-7 text-slate-300">{faq.answer}</p>
              </details>)}
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
