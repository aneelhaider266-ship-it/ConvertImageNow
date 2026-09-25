import type { Metadata } from "next";
import Link from "next/link";
import ImageConverter from "@/components/ImageConverter";
import {
  ShieldCheck,
  WifiOff,
  Infinity as InfinityIcon,
  Gauge,
  Zap,
  Layers,
  Info,
  CheckCircle2,
  Image as ImageIcon,
  MousePointerClick
} from "lucide-react";

const SITE_URL = "https://www.convertimagenow.com";
const PAGE_URL = `${SITE_URL}/jpg-to-webp`;

export const metadata: Metadata = {
  title: "JPG to WebP Converter – Convert JPG to WebP Online Free",
  description:
    "Convert JPG to WebP online for free. Reduce image file size by 25-35% for faster websites — private, browser-based, no upload, no signup, no watermark.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "JPG to WebP Converter – Convert JPG to WebP Online Free",
    description:
      "Convert JPG to WebP online for free. Reduce image file size by 25-35% for faster websites.",
    url: PAGE_URL,
    siteName: "ConvertImageNow",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JPG to WebP Converter – Free & Private",
    description: "Batch convert JPGs to WebP instantly in your browser to improve Core Web Vitals.",
  }
};

const POINTS = [
  {
    icon: ShieldCheck,
    title: "Truly Private",
    desc: "Your images never touch a server. Conversion happens directly in your browser using the HTML5 Canvas API.",
  },
  {
    icon: WifiOff,
    title: "Works Offline",
    desc: "Once the page has loaded, conversion happens entirely on your device's local memory.",
  },
  {
    icon: InfinityIcon,
    title: "No Artificial Limits",
    desc: "No daily quota, no watermark, and no server-side upload bottlenecks for bulk batches.",
  },
];

const FAQS = [
  {
    q: "Is this JPG to WebP converter really free?",
    a: "Yes. ConvertImageNow provides free browser-based JPG to WebP conversion without requiring registration, subscription, or adding a watermark.",
  },
  {
    q: "How much smaller will my file be after converting to WebP?",
    a: "WebP files are typically 25 to 35 percent smaller than an equivalent JPEG at a similar visual quality, though the exact reduction depends on the image complexity and the quality setting you choose.",
  },
  {
    q: "Will converting JPG to WebP reduce image quality?",
    a: "Because both JPG and WebP use lossy compression, converting between them involves a re-encoding step that can introduce minor additional artifacts. At high quality settings (80-95%), this difference is usually imperceptible.",
  },
  {
    q: "Is WebP supported by all browsers?",
    a: "WebP is natively supported by over 96% of modern browsers, including Chrome, Firefox, Safari, and Edge. Some older image editors and specialized workflows, such as print production using CMYK color, may still expect JPG or PNG instead.",
  },
  {
    q: "Why should I use WebP instead of JPG for my website?",
    a: "WebP typically produces smaller files at equivalent visual quality, which means faster page loads, lower bandwidth usage, and a better LCP score on performance tools like Google PageSpeed Insights.",
  },
  {
    q: "Can I batch convert multiple JPG files to WebP at once?",
    a: "Yes. You can select multiple JPG images, convert them all together in a single bulk action, and download the results individually or grouped as a ZIP archive.",
  },
  {
    q: "Are my images uploaded to a server?",
    a: "No. Conversion happens completely locally. Unlike standard cloud converters, your files never leave your device, ensuring maximum privacy and zero upload wait times.",
  },
];

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};

const SOFTWARE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "JPG to WebP Converter",
  operatingSystem: "Any",
  applicationCategory: "UtilitiesApplication",
  browserRequirements: "Requires a modern web browser with HTML5 Canvas support.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  description: "Free, browser-based utility to bulk convert JPG images to WebP format locally without server uploads to improve website load times.",
  url: PAGE_URL,
};

export default function JpgToWebpPage() {
  return (
    <main className="container-page relative overflow-hidden pb-24 pt-16 sm:pb-32 sm:pt-24">
      {/* Premium Background Decorators (SaaS Aesthetic) */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:linear-gradient(to_bottom,white_5%,transparent_90%)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-brand-primary/20 to-emerald-500/20 opacity-40 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] dark:from-brand-primary/30 dark:to-emerald-500/30" />
      </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SOFTWARE_SCHEMA) }}
      />

      {/* Hero Section */}
      <section className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mb-6 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-50/80 px-4 py-1.5 text-sm font-semibold text-emerald-700 shadow-sm backdrop-blur-sm dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300">
            <Gauge className="h-4 w-4" aria-hidden="true" />
            Optimize for Core Web Vitals
          </span>
        </div>
        
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
          JPG to WebP Converter
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300 sm:text-xl">
          Convert JPG images to WebP instantly to create smaller files and faster websites. No uploads, no waiting, no signup — everything runs locally in your browser.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-5 text-sm font-medium text-slate-600 dark:text-slate-400">
          <span className="flex items-center gap-1.5">
            <Zap className="h-4.5 w-4.5 text-brand-primary" /> Instant Results
          </span>
          <span className="hidden h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-700 sm:block" />
          <span className="flex items-center gap-1.5">
            <Layers className="h-4.5 w-4.5 text-blue-500" /> Free Bulk/Batch
          </span>
          <span className="hidden h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-700 sm:block" />
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="h-4.5 w-4.5 text-emerald-500" /> 100% Private
          </span>
        </div>
      </section>

      {/* Converter Component Area */}
      <section 
        className="relative z-10 mx-auto mt-12 max-w-4xl px-4 sm:mt-16 sm:px-6 lg:px-8"
        aria-label="Image Converter Tool"
      >
        {/* Soft glowing backlight for the tool */}
        <div className="absolute inset-0 -z-10 rounded-[2.5rem] bg-gradient-to-b from-brand-primary/5 to-transparent blur-2xl dark:from-brand-primary/10" aria-hidden="true" />
        <ImageConverter initialFormat="webp" />
      </section>

      {/* Main Content Layout */}
      <section className="mx-auto mt-24 max-w-4xl px-4 sm:mt-32 sm:px-6 lg:px-8">
        
        {/* Bento Grid: Value Propositions */}
        <div className="mb-24 grid gap-6 sm:grid-cols-3">
          {POINTS.map(({ icon: Icon, title, desc }) => (
            <article
              key={title}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white/70 p-7 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/60"
            >
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-slate-50 opacity-50 transition-transform duration-500 group-hover:scale-150 dark:bg-slate-800/30" aria-hidden="true" />
              
              <div className="relative mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-primary/10 text-brand-primary ring-1 ring-brand-primary/20 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 dark:bg-brand-primary/20 dark:ring-brand-primary/30">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>

              <h3 className="relative text-lg font-bold text-slate-900 dark:text-white">
                {title}
              </h3>

              <p className="relative mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {desc}
              </p>
            </article>
          ))}
        </div>

        <div className="prose prose-slate prose-lg max-w-none text-slate-700 dark:prose-invert dark:text-slate-300">
          
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
            Why Convert JPG to WebP?
          </h2>
          <p>
            WebP is a modern image format built specifically for the web by Google.
            Converting JPG images to WebP typically <strong>reduces file size by 25 to 35 percent</strong> at an identical visual quality. For web developers and site owners, this translates directly to faster page loads, lower bandwidth consumption, and massive improvements to <strong>Core Web Vitals</strong> (specifically the LCP—Largest Contentful Paint score).
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
            Why ConvertImageNow Is Different
          </h2>
          <p>
            Traditional online image converters require you to upload your files to a
            cloud server, wait in a queue, and download them back. ConvertImageNow 
            processes your JPG images <strong>directly in your browser</strong> using HTML5 and your device's native hardware. 
          </p>
          <p>
            Nothing is ever uploaded. This means zero wait times for bulk processing, no artificial daily file limits, and absolute privacy for your personal or client photos.
          </p>

          {/* Warning / Quality Info Callout */}
          <div className="not-prose my-10 flex flex-col gap-4 rounded-2xl border border-blue-500/20 bg-blue-50/50 p-6 shadow-sm backdrop-blur-sm sm:flex-row sm:items-start dark:border-blue-500/20 dark:bg-blue-950/30">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/50">
              <Info className="h-6 w-6 text-blue-600 dark:text-blue-400" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-950 dark:text-blue-100">
                Does Converting JPG to WebP Reduce Quality?
              </h3>
              <p className="mt-2 text-base leading-relaxed text-blue-900 dark:text-blue-200/90">
                Because both JPG and WebP are lossy compression formats, converting from one to
                another involves a re-encoding step that can introduce minor
                digital artifacts. However, <strong>at high quality settings (80-95%), this difference is
                imperceptible to the human eye.</strong> Use the quality slider in the tool
                above to instantly preview and perfectly balance file size against visual sharpness.
              </p>
            </div>
          </div>

          <div className="grid gap-12 sm:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
                How to Convert JPG to WebP
              </h2>
              <ol className="mt-6 list-none space-y-4 text-base">
                {[
                  "Drag and drop your JPG images directly into the converter box.",
                  "Ensure WebP is selected as the output format.",
                  "Adjust the quality slider (85% is recommended for web).",
                  "Click Convert to process the files locally.",
                  "Download your new WebP images (or click Download ZIP for batches)."
                ].map((step, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-sm font-bold text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
                Bulk Convert Multiple JPG Files
              </h2>
              <p className="mt-6">
                Optimizing an entire blog post or gallery? You don't need to do it one by one. 
                Select multiple JPG files, <strong>batch convert them together</strong> in one click,
                and download the results as a neatly packaged ZIP file. Because it runs on your machine, there's no server bottleneck slowing down your bulk conversions.
              </p>
            </div>
          </div>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
            JPG vs WebP: Which Should You Use?
          </h2>
          <p>
            For websites, blogs, and app interfaces, <strong>WebP is the superior choice</strong>. It
            generates dramatically smaller files at the same visual quality, which
            improves loading times and SEO rankings. However, JPG is still globally recognized by 
            legacy desktop software, email clients, and print production workflows. Keep your original JPGs as master copies and serve WebP to your web users.
          </p>

          {/* Semantic Comparison Table for AEO / Featured Snippets */}
          <div className="not-prose my-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900/50">
            <table className="w-full text-left text-sm sm:text-base">
              <thead className="border-b border-slate-200 bg-slate-50/80 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/80">
                <tr>
                  <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-100">Feature</th>
                  <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-100">JPG (JPEG)</th>
                  <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-100">WebP</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                <tr className="transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/40">
                  <td className="px-6 py-4 font-medium text-slate-900 dark:text-slate-200">Web File Size</td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-400">Baseline / Standard</td>
                  <td className="px-6 py-4 font-bold text-emerald-600 dark:text-emerald-400">25–35% Smaller</td>
                </tr>
                <tr className="transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/40">
                  <td className="px-6 py-4 font-medium text-slate-900 dark:text-slate-200">Compression Type</td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-400">Lossy only</td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-400">Lossy & Lossless</td>
                </tr>
                <tr className="transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/40">
                  <td className="px-6 py-4 font-medium text-slate-900 dark:text-slate-200">Transparency (Alpha)</td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-400">Not Supported</td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-400">Supported</td>
                </tr>
                <tr className="transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/40">
                  <td className="px-6 py-4 font-medium text-slate-900 dark:text-slate-200">Best Used For</td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-400">Photography, Print, Archival</td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-400">Websites, Blogs, PageSpeed</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
            Frequently Asked Questions
          </h2>
          
          <div className="not-prose mt-8 space-y-4">
            {FAQS.map(({ q, a }) => (
              <details
                key={q}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900/40 dark:hover:border-slate-700"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-5 text-lg font-semibold text-slate-900 outline-none dark:text-slate-100 [&::-webkit-details-marker]:hidden">
                  {q}
                  <span className="ml-4 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-transform duration-300 group-open:rotate-45 dark:bg-slate-800 dark:text-slate-400">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6 pt-1">
                  <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400">
                    {a}
                  </p>
                </div>
              </details>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}
