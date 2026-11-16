import type { Metadata } from "next";
import Link from "next/link";
import ImageConverter from "@/components/ImageConverter";
import {
  WifiOff,
  CheckCircle2,
  ArrowRight,
  Lock,
  Cpu,
  Sparkles,
  ChevronRight,
  TrendingDown,
  Monitor,
  Smartphone,
  Gauge,
  FileCheck,
} from "lucide-react";

const SITE_URL = "https://convertimagenow.com";
const PAGE_URL = `${SITE_URL}/image-compressor`;

export const metadata: Metadata = {
  title: "Free Online Image Compressor – Reduce Image Size in KB",
  description:
    "Compress supported JPG, PNG, WebP, and AVIF images in your browser. Adjust output quality and compare file size and appearance; results vary by image and settings.",
  keywords: [
    "image compressor",
    "compress image online",
    "reduce image size in kb",
    "compress jpg",
    "compress png",
    "image size reducer",
    "photo compressor free",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Free Online Image Compressor – Adjust Image Quality",
    description:
      "Compress supported images in your browser. Batch sizes depend on your device and available browser memory; download converted files individually or as a ZIP.",
    url: PAGE_URL,
    siteName: "ConvertImageNow",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Browser-Based Image Compressor",
    description:
      "Adjust output quality to reduce image file size. Results vary by source image and settings; lossy compression can affect visual quality.",
  },
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${SITE_URL}/`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Tools",
      item: `${SITE_URL}/tools`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Image Compressor",
      item: PAGE_URL,
    },
  ],
};

const SOFTWARE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "ConvertImageNow Free Online Image Compressor",
  url: PAGE_URL,
  applicationCategory: "MultimediaApplication",
  operatingSystem: "All (Browser-based: Windows, macOS, Linux, iOS, Android)",
  browserRequirements: "Requires modern web browser with HTML5 Canvas API support",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Browser-based image processing via Canvas and Blob APIs",
    "Selected image files are processed in the browser rather than sent to a conversion server",
    "Batch image compression for JPG, PNG, WebP, and AVIF",
    "Adjustable output quality for supported lossy formats",
    "One-click batch ZIP file download",

    "Individual downloads and ZIP export for multiple converted files",
  ],
};

const FAQS = [
  {
    q: "How can I reduce an image to a target size such as 100KB or 50KB?",
    a: "Choose JPG or WebP as the output format and lower the quality setting gradually, checking the resulting file size after each conversion. If the file is still too large, reduce its pixel dimensions with the Image Resizer and try again. A particular target size cannot be guaranteed because results depend on the image.",
  },
  {
    q: "Will compressing an image reduce its visual quality?",
    a: "JPG and WebP use lossy encoding, so lower quality settings can reduce detail or introduce visible artifacts. Compare the preview and resulting file size before downloading. PNG output does not use the quality slider; it is encoded as PNG by the browser.",
  },
  {
    q: "Are my selected images uploaded to a conversion server?",
    a: "The conversion workflow uses your browser's image decoding and Canvas APIs to create the output. Selected image files are processed in the browser rather than uploaded to a ConvertImageNow conversion server. General website requests and analytics are covered by the Privacy Policy.",
  },
  {
    q: "What is the difference between lossy and lossless image formats?",
    a: "Lossy formats such as JPG and lossy WebP can discard image information to reduce file size. PNG uses lossless encoding, which preserves the pixel data supplied to the PNG encoder. Converting an already-compressed image to PNG cannot restore detail that was lost earlier.",
  },
  {
    q: "Can I keep a transparent background when converting PNG images?",
    a: "PNG supports transparency. If you choose JPG as the output, transparent areas are flattened against a solid background. Choose PNG or a transparency-supporting WebP output when you need transparency.",
  },
  {
    q: "Can I compress multiple images at once?",
    a: "You can add multiple supported images to the queue and download converted files individually or together as a ZIP archive. The practical batch size depends on your device, browser, image dimensions, and available memory.",
  },
  {
    q: "Which image format creates the smallest file?",
    a: "There is no single smallest format for every image. Compare JPG, WebP, and AVIF outputs using the same source and inspect both file size and visual quality. PNG is often useful when transparency or exact pixel preservation matters.",
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

const STATS_CARDS = [
  {
    format: "JPEG / JPG",
    typicalSavings: "Varies by image",
    technique: "Lossy browser encoding",
    bestFor: "Photographs and general-purpose image sharing",
  },
  {
    format: "PNG",
    typicalSavings: "Varies by image",
    technique: "Lossless PNG encoding",
    bestFor: "Screenshots, logos, and images that need transparency",
  },
  {
    format: "WebP",
    typicalSavings: "Varies by image",
    technique: "Lossy or lossless encoding",
    bestFor: "Modern websites and general web graphics",
  },
  {
    format: "AVIF",
    typicalSavings: "Varies by image",
    technique: "AV1-based image encoding",
    bestFor: "Modern web images where browser support is suitable",
  },
];

const USE_CASES = [
  {
    icon: Gauge,
    target: "Web & Core Web Vitals",
    recommendation: "Target < 150 KB",
    desc: "Speed up Largest Contentful Paint (LCP) and cut bandwidth costs by compressing desktop hero images and product thumbnails.",
  },
  {
    icon: FileCheck,
    target: "Government & Job Portals",
    recommendation: "Target 20 KB – 100 KB",
    desc: "Meet strict upload size limits for passport photos, signatures, college admissions, and national ID document portals.",
  },
  {
    icon: Sparkles,
    target: "Email Attachments & Newsletters",
    recommendation: "Target < 500 KB",
    desc: "Prevent inbox delivery bounces and slow mobile download times by optimizing newsletter graphics and pitch deck slides.",
  },
];

const TECHNICAL_COMPARISON = [
  {
    attribute: "Compression Mode",
    jpeg: "Lossy",
    png: "Lossless",
    webp: "Lossy & Lossless",
    avif: "Lossy & Lossless",
  },
  {
    attribute: "Visual Quality Retention",
    jpeg: "High (at 75-85% slider)",
    png: "100% Exact Pixel Match",
    webp: "Superior visual fidelity",
    avif: "Maximum fidelity per byte",
  },
  {
    attribute: "Alpha Transparency",
    jpeg: "No",
    png: "Yes (Full 8-bit alpha)",
    webp: "Yes (Full 8-bit alpha)",
    avif: "Yes (Full 8-bit alpha)",
  },
  {
    attribute: "Browser Compatibility",
    jpeg: "100% Universal",
    png: "100% Universal",
    webp: "97%+ (All modern browsers)",
    avif: "93%+ (Modern engines)",
  },
  {
    attribute: "Ideal Use Case",
    jpeg: "Digital camera photos",
    png: "Icons, UI, screenshots",
    jpegFallback: "General web graphics",
    avif: "High-efficiency web assets",
  },
];

const RELATED_TOOLS = [
  {
    name: "Online Image Resizer",
    desc: "Change image pixel dimensions and aspect ratios before compression.",
    href: "/image-resizer",
  },
  {
    name: "JPG to WebP Converter",
    desc: "Convert legacy JPEG photos into lightweight next-generation WebP format.",
    href: "/jpg-to-webp",
  },
  {
    name: "PNG to JPG Converter",
    desc: "Strip heavy transparency channels to minimize photo file sizes.",
    href: "/png-to-jpg",
  },
  {
    name: "JPG to PNG Converter",
    desc: "Wrap JPG images into lossless PNG containers for safe multi-pass editing.",
    href: "/jpg-to-png",
  },
  {
    name: "HEIC to JPG Guide",
    desc: "Learn about HEIC compatibility and ways to create JPG copies on supported devices.",
    href: "/heic-to-jpg",
  },
  {
    name: "AVIF to JPG Converter",
    desc: "Convert compressed AVIF graphics into universal JPG format for legacy apps.",
    href: "/avif-to-jpg",
  },
];

export default function ImageCompressorPage() {
  return (
    <div className="relative min-h-screen bg-slate-50/70 font-sans text-slate-900 antialiased selection:bg-indigo-500 selection:text-white dark:bg-slate-950 dark:text-slate-100">
      {/* Structured Data Embeds */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SOFTWARE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      {/* Ambient Radial Gradient Accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[580px] overflow-hidden"
      >
        <div className="absolute left-1/2 top-0 h-[500px] w-[1050px] -translate-x-1/2 bg-gradient-to-b from-indigo-100/70 via-sky-50/40 to-transparent blur-3xl dark:from-indigo-950/25 dark:via-slate-900/10 dark:to-transparent" />
      </div>

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        {/* Breadcrumb Hierarchy */}
        <nav
          aria-label="Breadcrumb"
          className="mb-6 flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400"
        >
          <Link
            href="/"
            className="transition-colors hover:text-slate-900 dark:hover:text-slate-200"
          >
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5 opacity-60" />
          <Link
            href="/tools"
            className="transition-colors hover:text-slate-900 dark:hover:text-slate-200"
          >
            Tools
          </Link>
          <ChevronRight className="h-3.5 w-3.5 opacity-60" />
          <span
            className="font-semibold text-slate-800 dark:text-slate-200"
            aria-current="page"
          >
            Image Compressor
          </span>
        </nav>

        {/* Hero Section */}
        <header className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200/80 bg-indigo-50/80 px-3.5 py-1 text-xs font-medium tracking-wide text-indigo-700 shadow-sm backdrop-blur dark:border-indigo-900/60 dark:bg-indigo-950/40 dark:text-indigo-300">
            <Sparkles className="h-3.5 w-3.5 text-indigo-600 dark:text-indigo-400" />
            <span>Browser-Based Compression • No Conversion-Server Upload</span>
          </div>

          <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Free Online Image Compressor
          </h1>

          <p className="mt-3.5 text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
            Adjust output quality for supported image formats to help reduce file size.
            Results depend on the source image and selected settings. No conversion-server upload or added watermark.
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs font-medium text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" /> Local browser
              processing
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" /> Batch compress
              with ZIP export
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" /> Adjustable output
              quality
            </span>
          </div>
        </header>

        {/* Image Compressor Tool Component Card */}
        <section
          aria-label="Image Compressor Tool"
          className="mx-auto mt-8 max-w-4xl rounded-2xl border border-slate-200/90 bg-white/95 p-4 shadow-xl shadow-slate-200/40 backdrop-blur-md sm:p-7 dark:border-slate-800/80 dark:bg-slate-900/95 dark:shadow-black/40"
        >
          <ImageConverter />
        </section>

        {/* Savings Benchmark Cards */}
        <section
          aria-labelledby="benchmark-heading"
          className="mx-auto mt-16 max-w-5xl"
        >
          <div className="text-center">
            <h2
              id="benchmark-heading"
              className="text-2xl font-bold tracking-tight sm:text-3xl"
            >
              Compression Benchmarks Across File Formats
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Different file types respond differently to compression algorithms.
              Here is what you can realistically expect using our browser compressor:
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STATS_CARDS.map((card) => (
              <div
                key={card.format}
                className="group relative rounded-xl border border-slate-200/80 bg-white/80 p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-indigo-800"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {card.format}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-md bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">
                    <TrendingDown className="h-3 w-3" />
                    {card.typicalSavings}
                  </span>
                </div>
                <h3 className="mt-3 text-sm font-semibold text-slate-900 dark:text-slate-100">
                  {card.technique}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                  {card.bestFor}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Step-by-Step Practical Workflow */}
        <section
          aria-labelledby="how-to-heading"
          className="mx-auto mt-16 max-w-4xl rounded-2xl border border-slate-200/80 bg-white/60 p-6 shadow-sm sm:p-8 dark:border-slate-800 dark:bg-slate-900/40"
        >
          <div className="max-w-2xl">
            <h2
              id="how-to-heading"
              className="text-2xl font-bold tracking-tight sm:text-3xl"
            >
              How to Compress Images Online in 4 Steps
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              No desktop software to install, no accounts to register, and no
              lengthy upload times. Follow these straightforward steps:
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="relative flex flex-col rounded-lg border border-slate-200/70 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                1
              </span>
              <h3 className="mt-3 text-sm font-semibold">Select or Drop Files</h3>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                Drag your JPG, PNG, WebP, or AVIF images onto the tool area. Batch
                selection is supported for dozens of photos at once.
              </p>
            </div>

            <div className="relative flex flex-col rounded-lg border border-slate-200/70 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                2
              </span>
              <h3 className="mt-3 text-sm font-semibold">Set Quality & Format</h3>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                Keep the original format or switch to WebP. Adjust the quality slider
                Compare the preview and file size to choose a suitable quality setting.
              </p>
            </div>

            <div className="relative flex flex-col rounded-lg border border-slate-200/70 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                3
              </span>
              <h3 className="mt-3 text-sm font-semibold">Local Processing</h3>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                Click Convert/Compress. Your device&apos;s internal browser engine
                encodes the binary streams without transmitting any data over the internet.
              </p>
            </div>

            <div className="relative flex flex-col rounded-lg border border-slate-200/70 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                4
              </span>
              <h3 className="mt-3 text-sm font-semibold">Download Reduced Files</h3>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                Download your compressed images individually, or download all files
                packaged neatly into a single ZIP archive.
              </p>
            </div>
          </div>
        </section>

        {/* Use Cases: Specific File Size Targets */}
        <section
          aria-labelledby="usecases-heading"
          className="mx-auto mt-16 max-w-5xl"
        >
          <div className="text-center">
            <h2
              id="usecases-heading"
              className="text-2xl font-bold tracking-tight sm:text-3xl"
            >
              Tailored File Size Optimization for Real-World Tasks
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-slate-600 dark:text-slate-400">
              Whether you need to pass an automated file size checker or optimize web assets,
              here is how to calibrate your compression:
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {USE_CASES.map(({ icon: Icon, target, recommendation, desc }) => (
              <div
                key={target}
                className="rounded-xl border border-slate-200/80 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-3 text-base font-semibold text-slate-900 dark:text-slate-100">
                  {target}
                </h3>
                <span className="mt-1 inline-block rounded bg-indigo-100/70 px-2 py-0.5 text-xs font-medium text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-300">
                  {recommendation}
                </span>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Deep Dive: Lossy vs Lossless & Privacy */}
        <section className="mx-auto mt-16 max-w-4xl space-y-10">
          <div className="grid gap-8 lg:grid-cols-2">
            <article className="rounded-xl border border-slate-200/80 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                Lossy vs. Lossless Compression Explained
              </h2>
              <p className="mt-3 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                Understanding how compression algorithms handle your image pixels allows you to pick the ideal format:
              </p>
              <div className="mt-4 space-y-3 text-xs text-slate-600 dark:text-slate-300">
                <div className="rounded-lg bg-slate-50 p-3 dark:bg-slate-800/60">
                  <strong className="text-slate-900 dark:text-slate-100">
                    Lossy (JPG & WebP):
                  </strong>{" "}
                  Removes subtle color variations that human eyes rarely distinguish. The resulting file size and appearance depend on the source image, output format, and quality setting.
                </div>
                <div className="rounded-lg bg-slate-50 p-3 dark:bg-slate-800/60">
                  <strong className="text-slate-900 dark:text-slate-100">
                    Lossless (PNG):
                  </strong>{" "}
                  PNG uses lossless encoding and preserves the pixel data supplied to the encoder. It is often suitable for logos, icons, and graphics with sharp edges.
                </div>
              </div>
            </article>

            <article className="rounded-xl border border-slate-200/80 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                How Browser Processing Handles Selected Images
              </h2>
              <p className="mt-3 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                The converter uses browser image decoding and Canvas APIs to create output files. Selected image files are processed in the browser rather than sent to a conversion server:
              </p>
              <ul className="mt-4 space-y-2.5 text-xs text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <Lock className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                  <span>
                    <strong>Selected File Handling:</strong> Selected image files are processed in the browser rather than sent to a conversion server. Review the Privacy Policy for details about general website data.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Cpu className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                  <span>
                    <strong>Browser Processing:</strong> The converter uses browser image decoding and Canvas APIs to create output files.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <WifiOff className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                  <span>
                    <strong>No Conversion Upload Queue:</strong> The selected image data is not sent to a conversion server for processing.
                  </span>
                </li>
              </ul>
            </article>
          </div>

          {/* Technical Comparison Table */}
          <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="border-b border-slate-200/90 bg-slate-100/60 px-6 py-4 dark:border-slate-800 dark:bg-slate-800/50">
              <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                Format Compression Matrix
              </h2>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                Compare compression characteristics across popular web image formats.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-700 dark:text-slate-300">
                <thead className="border-b border-slate-200/80 bg-slate-50 text-xs uppercase font-semibold text-slate-600 dark:border-slate-800 dark:bg-slate-950/40 dark:text-slate-400">
                  <tr>
                    <th scope="col" className="px-5 py-3.5">
                      Specification
                    </th>
                    <th scope="col" className="px-5 py-3.5">
                      JPG / JPEG
                    </th>
                    <th scope="col" className="px-5 py-3.5">
                      PNG
                    </th>
                    <th scope="col" className="px-5 py-3.5 text-indigo-700 dark:text-indigo-400">
                      WebP
                    </th>
                    <th scope="col" className="px-5 py-3.5 text-emerald-700 dark:text-emerald-400">
                      AVIF
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200/70 dark:divide-slate-800">
                  {TECHNICAL_COMPARISON.map((row) => (
                    <tr
                      key={row.attribute}
                      className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40"
                    >
                      <td className="px-5 py-3.5 font-medium text-slate-900 dark:text-slate-100 text-xs sm:text-sm">
                        {row.attribute}
                      </td>
                      <td className="px-5 py-3.5 text-xs text-slate-600 dark:text-slate-300">
                        {row.jpeg}
                      </td>
                      <td className="px-5 py-3.5 text-xs text-slate-600 dark:text-slate-300">
                        {row.png}
                      </td>
                      <td className="px-5 py-3.5 text-xs font-medium text-indigo-600 dark:text-indigo-400">
                        {row.webp}
                      </td>
                      <td className="px-5 py-3.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                        {row.avif}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Cross-Device Optimization Tips */}
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-slate-900 dark:text-slate-100">
              Cross-Platform Compression: Desktop vs. Mobile
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              ConvertImageNow works across all operating systems without software installs:
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-200/80 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-indigo-50 p-2 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400">
                    <Monitor className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                    Windows, Mac & Linux Workstations
                  </h3>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                  Select supported JPG, PNG, WebP, or AVIF images. Add multiple files to the queue and download the results as a ZIP; practical capacity depends on your device and browser memory.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200/80 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-emerald-50 p-2 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
                    <Smartphone className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                    iPhone, iPad & Android Devices
                  </h3>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                  Upload photos directly from your Camera Roll or Files app. Adjust output quality and dimensions on your device, then check the resulting file size against the upload requirements.
                </p>
              </div>
            </div>
          </div>

          {/* Related Tools Topical Cluster */}
          <div className="rounded-2xl border border-slate-200/80 bg-slate-100/50 p-6 sm:p-8 dark:border-slate-800 dark:bg-slate-900/50">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                  Explore Related Image Optimization Tools
                </h2>
                <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                  Complementary browser-based utilities to convert, resize, and optimize graphics.
                </p>
              </div>
              <Link
                href="/tools"
                className="hidden text-xs font-semibold text-indigo-600 hover:text-indigo-500 sm:flex sm:items-center sm:gap-1 dark:text-indigo-400"
              >
                View all tools <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {RELATED_TOOLS.map((tool) => (
                <Link
                  key={tool.name}
                  href={tool.href}
                  className="group rounded-xl border border-slate-200/80 bg-white p-4 shadow-sm transition hover:border-indigo-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-indigo-700"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-slate-900 group-hover:text-indigo-600 dark:text-slate-100 dark:group-hover:text-indigo-400">
                      {tool.name}
                    </h3>
                    <ChevronRight className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:text-indigo-500" />
                  </div>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                    {tool.desc}
                  </p>
                </Link>
              ))}
            </div>

            <div className="mt-5 text-center sm:hidden">
              <Link
                href="/tools"
                className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400"
              >
                Browse all image tools <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Deep Guide Anchor Link */}
          <div className="rounded-xl border border-indigo-100 bg-indigo-50/50 p-4 text-xs text-indigo-900 dark:border-indigo-950/60 dark:bg-indigo-950/20 dark:text-indigo-200">
            <span>Want to learn more about next-gen web image compression? Read our in-depth analysis on </span>
            <Link
              href="/blog/jpg-vs-webp"
              className="font-semibold underline underline-offset-2 hover:text-indigo-700 dark:hover:text-indigo-300"
            >
              JPG vs WebP: Which Format Offers Better Compression and Quality?
            </Link>
          </div>

          {/* Frequently Asked Questions */}
          <div className="space-y-6">
            <div className="text-center sm:text-left">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                Frequently Asked Questions
              </h2>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                Clear answers regarding compression ratios, file sizes in KB, and image privacy.
              </p>
            </div>

            <div className="space-y-3">
              {FAQS.map(({ q, a }) => (
                <details
                  key={q}
                  className="group rounded-xl border border-slate-200/90 bg-white p-4 shadow-sm transition open:shadow-md dark:border-slate-800 dark:bg-slate-900"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-slate-900 focus:outline-none dark:text-slate-100">
                    <span>{q}</span>
                    <span className="ml-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-transform duration-200 group-open:rotate-180 dark:bg-slate-800 dark:text-slate-400">
                      <ChevronRight className="h-3.5 w-3.5 rotate-90" />
                    </span>
                  </summary>
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
