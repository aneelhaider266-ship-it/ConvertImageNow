import type { Metadata } from "next";
import Link from "next/link";
import {
  Zap,
  Lock,
  ShieldCheck,
  Layers,
  Cpu,
  CheckCircle2,
  ArrowRight,
  SlidersHorizontal,
  Smartphone,
  Laptop,
  Monitor,
  FolderArchive,
  RefreshCw,
  FileCheck2,
  FileQuestion,
  Sparkles,
  HelpCircle,
  BookOpen,
} from "lucide-react";
import ImageConverter from "@/components/ImageConverter";

export const metadata: Metadata = {
  title: "HEIC to JPG Converter – Free, Private & In-Browser Batch Convert",
  description:
    "Convert iPhone HEIC and HEIF photos to high-quality JPG online in your browser. 100% private client-side processing with zero server uploads, batch ZIP export, and no watermarks.",
  alternates: {
    canonical: "https://www.convertimagenow.com/heic-to-jpg",
  },
  openGraph: {
    title: "Convert HEIC to JPG Online – 100% Private In-Browser Tool",
    description:
      "Batch convert Apple HEIC photos to universal JPG format directly on your device. Fast, client-side, watermark-free, and completely free.",
    url: "https://www.convertimagenow.com/heic-to-jpg",
    siteName: "ConvertImageNow",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free HEIC to JPG Converter | ConvertImageNow",
    description:
      "Convert iPhone HEIC photos to JPG locally in your browser. No uploads, no file size caps, no registration.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const VALUE_POINTS = [
  {
    icon: Lock,
    title: "100% Private Client-Side",
    desc: "Your photos never touch an external cloud server. The HEIC-to-JPEG decoding occurs directly inside your device's browser memory.",
  },
  {
    icon: Zap,
    title: "Hardware-Accelerated Speed",
    desc: "Conversions run instantly using local CPU and GPU threads, eliminating slow remote network upload queues and server wait times.",
  },
  {
    icon: Layers,
    title: "True Bulk Batch Processing",
    desc: "Queue dozens of iPhone camera shots simultaneously. Process them in parallel and download them individually or as an uncompressed ZIP file.",
  },
  {
    icon: SlidersHorizontal,
    title: "Lossy & Lossless Quality Controls",
    desc: "Configure target JPG output compression anywhere from 1% to 100% to hit strict email, web upload, or marketplace file size thresholds.",
  },
  {
    icon: ShieldCheck,
    title: "Clean, Watermark-Free Exports",
    desc: "Every converted JPG is completely clean with zero added watermarks, branding stamps, or artificial image compression artifacts.",
  },
  {
    icon: RefreshCw,
    title: "Universal OS & App Compatibility",
    desc: "Transforms proprietary Apple iOS containers into universal sRGB 24-bit JPGs that open instantly across Windows, Android, and Photoshop.",
  },
];

const PLATFORM_STEPS = [
  {
    platform: "iPhone & iPad (iOS)",
    icon: Smartphone,
    badge: "Direct from Camera Roll",
    steps: [
      "Open ConvertImageNow in Safari on your iPhone or iPad.",
      "Tap the upload zone and select 'Photo Library' to pick HEIC snapshots or burst photos.",
      "Verify 'JPG' is selected as the output format and set your preferred quality level.",
      "Tap 'Convert' and save the converted JPG images straight back to your Photos app or Files.",
    ],
  },
  {
    platform: "Windows 10 & 11 PC",
    icon: Laptop,
    badge: "No Paid HEVC Codec Needed",
    steps: [
      "Open ConvertImageNow in Chrome, Edge, or Firefox without installing the paid Microsoft Store HEVC extension.",
      "Drag your .heic or .heif files directly from Windows File Explorer into the drop zone.",
      "Fine-tune the output quality slider (85–92% is recommended for photography).",
      "Click 'Download All' to receive your converted photos in a single convenient ZIP folder.",
    ],
  },
  {
    platform: "Apple Mac & macOS",
    icon: Monitor,
    badge: "Faster than Finder Export",
    steps: [
      "Navigate to the converter in Safari, Chrome, or Brave on your MacBook or iMac.",
      "Drag HEIC photos directly from Finder or the Apple Photos desktop app into the converter.",
      "Select JPG as target container and inspect real-time byte estimates.",
      "Download your batch directly to your ~/Downloads folder with original filenames intact.",
    ],
  },
];

const HEIC_VS_JPG_COMPARISON = [
  {
    feature: "Compression Codec",
    heic: "HEVC (H.265) intra-frame video compression",
    jpg: "Discrete Cosine Transform (DCT) lossy raster",
  },
  {
    feature: "Typical File Size",
    heic: "40–50% smaller than standard JPEG at equal visual quality",
    jpg: "Larger file footprint, but standard baseline delivery",
  },
  {
    feature: "Color Bit Depth",
    heic: "Supports up to 16-bit color and modern HDR capture",
    jpg: "Standard 8-bit per channel (24-bit TrueColor sRGB)",
  },
  {
    feature: "Live Photos & Bursts",
    heic: "Stores multiple photos, depth maps, and video in one container",
    jpg: "Single still image frame per file container",
  },
  {
    feature: "Device Compatibility",
    heic: "Native on Apple devices (iOS 11+, macOS High Sierra+); spotty on Windows/Linux",
    jpg: "100% universal across all browsers, operating systems, print kiosks, and portals",
  },
  {
    feature: "Web Browser Rendering",
    heic: "Not natively displayed by standard web HTML <img> tags",
    jpg: "Universally rendered across every web browser ever built",
  },
];

const RELATED_CONVERTERS = [
  {
    name: "JPG to PNG Converter",
    slug: "/jpg-to-png",
    from: "JPG",
    to: "PNG",
    desc: "Convert compressed JPG photos into uncompressed lossless PNG graphics.",
  },
  {
    name: "JPG to WebP Converter",
    slug: "/jpg-to-webp",
    from: "JPG",
    to: "WEBP",
    desc: "Cut photo byte weights by 30% to improve Google PageSpeed & Core Web Vitals.",
  },
  {
    name: "PNG to JPG Converter",
    slug: "/png-to-jpg",
    from: "PNG",
    to: "JPG",
    desc: "Flatten transparent or heavy PNG assets into compact, web-ready JPGs.",
  },
  {
    name: "AVIF to JPG Converter",
    slug: "/avif-to-jpg",
    from: "AVIF",
    to: "JPG",
    desc: "Transform modern AV1-encoded AVIF graphics back into universal JPG files.",
  },
  {
    name: "Online Image Compressor",
    slug: "/image-compressor",
    from: "MULTI",
    to: "MIN",
    desc: "Intelligently squeeze photo sizes by up to 80% without introducing visible noise.",
  },
  {
    name: "Online Image Resizer",
    slug: "/image-resizer",
    from: "SCALE",
    to: "DIMS",
    desc: "Scale pixel dimensions for social banners, e-commerce stores, and email attachments.",
  },
];

const FAQS = [
  {
    q: "Why do iPhones take photos in HEIC format instead of JPG?",
    a: "Apple adopted HEIC (High Efficiency Image Container) starting in iOS 11 because it uses the modern HEVC (H.265) compression algorithm. This allows photos to retain superior dynamic range and detail while consuming roughly half the storage space of a legacy JPG file.",
  },
  {
    q: "Are my private personal photos uploaded to your server?",
    a: "No. ConvertImageNow executes conversions entirely client-side inside your web browser using HTML5 Canvas and WebAssembly. Your photos are never sent across the internet, never saved on remote disks, and never logged on our servers.",
  },
  {
    q: "Why won't my Windows PC open HEIC files?",
    a: "Windows does not include the HEVC video codec by default due to patent licensing fees. Without installing Microsoft's paid 'HEVC Video Extensions' from the Microsoft Store, Windows Photos cannot decode HEIC files. Converting your photos to JPG bypasses this issue entirely.",
  },
  {
    q: "Can I convert multiple HEIC photos at the same time?",
    a: "Yes. Our tool supports true batch conversion. You can drag dozens of HEIC images into the drop zone at once, convert them simultaneously using your device's hardware, and download them all as a single organized ZIP archive.",
  },
  {
    q: "Is there any loss of image quality when converting HEIC to JPG?",
    a: "Because JPG is a lossy compression format, there is a minor technical re-encoding step. However, our converter defaults to a high-fidelity 90% quality setting, which produces an image visually indistinguishable from the original iPhone photo while ensuring universal compatibility.",
  },
  {
    q: "Does ConvertImageNow support .heif files as well as .heic?",
    a: "Yes. HEIF (High Efficiency Image Format) is the overarching container standard, while HEIC is Apple's specific implementation. Both .heif and .heic extensions are supported by our converter.",
  },
  {
    q: "Can I convert HEIC photos directly on my iPhone without downloading an app?",
    a: "Yes. Simply visit this page in Safari on your iPhone, select photos from your Camera Roll, and download the resulting JPG files directly to your device without installing third-party App Store utilities.",
  },
  {
    q: "Is ConvertImageNow free, or are there hidden limits?",
    a: "ConvertImageNow is 100% free with no subscriptions, no file size caps, no registration requirements, and no watermarks added to your images.",
  },
];

const SCHEMA_GRAPH = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.convertimagenow.com/heic-to-jpg/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.convertimagenow.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "HEIC to JPG Converter",
          item: "https://www.convertimagenow.com/heic-to-jpg",
        },
      ],
    },
    {
      "@type": "WebApplication",
      "@id": "https://www.convertimagenow.com/heic-to-jpg/#webapp",
      name: "ConvertImageNow HEIC to JPG Converter",
      url: "https://www.convertimagenow.com/heic-to-jpg",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "All (Web Browser)",
      browserRequirements: "Requires HTML5 Canvas and JavaScript support",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      featureList: [
        "100% Client-side in-browser conversion",
        "Zero server file uploads",
        "Batch HEIC to JPG processing with ZIP download",
        "Configurable quality slider (1-100%)",
        "No watermarks and no file size restrictions",
        "Full support for Apple iPhone and iPad HEIC/HEIF files",
      ],
    },
    {
      "@type": "HowTo",
      "@id": "https://www.convertimagenow.com/heic-to-jpg/#howto",
      name: "How to Convert HEIC to JPG Online",
      description:
        "Step-by-step instructions to convert iPhone HEIC and HEIF photos to universal JPG format online in your web browser.",
      totalTime: "PT10S",
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Select HEIC Images",
          text: "Drag and drop your HEIC or HEIF images into the converter box or select them from your local device storage.",
          url: "https://www.convertimagenow.com/heic-to-jpg#converter",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Set Output Quality",
          text: "Select JPG as the target format and adjust the compression slider between 1% and 100% depending on your file size needs.",
          url: "https://www.convertimagenow.com/heic-to-jpg#converter",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Convert Locally",
          text: "Your browser decodes the HEIC container in local memory and renders the image into standard JPG format.",
          url: "https://www.convertimagenow.com/heic-to-jpg#converter",
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "Download JPG Files",
          text: "Save your converted JPG files individually or download the entire batch as an organized ZIP archive.",
          url: "https://www.convertimagenow.com/heic-to-jpg#converter",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.convertimagenow.com/heic-to-jpg/#faq",
      mainEntity: FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
    },
  ],
};

export default function HeicToJpgPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(SCHEMA_GRAPH),
        }}
      />

      {/* ─────────────────────────────────────────────────────────────
          HERO SECTION & UNIVERSAL CONVERTER WORKSPACE
      ───────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-slate-50/70 via-white to-white py-12 dark:border-slate-800/80 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900 sm:py-16 lg:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-brand-primary/20 to-brand-accent/20 opacity-40 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] dark:opacity-20" />
        </div>

        <div className="container-page">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6 flex justify-center">
            <ol className="flex items-center space-x-2 text-xs font-medium text-slate-500 dark:text-slate-400">
              <li>
                <Link
                  href="/"
                  className="transition-colors hover:text-brand-primary"
                >
                  Home
                </Link>
              </li>
              <li>
                <span className="text-slate-300 dark:text-slate-600">/</span>
              </li>
              <li>
                <span className="text-slate-700 dark:text-slate-200">
                  HEIC to JPG
                </span>
              </li>
            </ol>
          </nav>

          <div className="mx-auto max-w-3xl text-center">
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3.5 py-1 text-xs font-medium tracking-wide text-emerald-700 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-300">
              <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-emerald-600 dark:text-emerald-400" />
              <span>100% Private In-Browser Conversion • Zero Cloud Uploads</span>
            </div>

            {/* Target H1 */}
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
              HEIC to JPG Converter
            </h1>

            {/* Intent-focused Subheadline */}
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
              Convert Apple iPhone HEIC and HEIF photos to universally compatible
              JPGs instantly. Process single files or massive batches right in
              your browser with no file uploads, no watermarks, and no sign-up.
            </p>

            {/* Fast Feature Checklist */}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-brand-primary" />
                No file size limits
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-brand-primary" />
                Batch ZIP download
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-brand-primary" />
                Works on Windows, Mac & iPhone
              </span>
            </div>
          </div>

          {/* Interactive Tool Component */}
          <div
            id="converter"
            className="mx-auto mt-10 max-w-4xl rounded-2xl border border-slate-200/90 bg-white/80 p-2 shadow-2xl shadow-slate-900/5 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80 sm:p-4"
          >
            <ImageConverter initialFormat="jpg" />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          CORE VALUE PROPOSITION & TECHNICAL ADVANTAGES
      ───────────────────────────────────────────────────────────── */}
      <section className="container-page py-16 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">
            Why ConvertImageNow Is Different
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Private, Local In-Browser Processing
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            Unlike legacy online converters that transmit private family photos to
            unverified remote servers, our conversion engine executes completely on
            your own hardware.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {VALUE_POINTS.map((point) => {
            const Icon = point.icon;
            return (
              <div
                key={point.title}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-brand-primary/60 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/50"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary ring-1 ring-brand-primary/20 transition-transform group-hover:scale-110 dark:bg-brand-primary/20 dark:ring-brand-primary/30">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-slate-900 dark:text-white">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {point.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          OS-SPECIFIC CONVERSION GUIDES (TARGETING USER QUERIES)
      ───────────────────────────────────────────────────────────── */}
      <section className="border-y border-slate-200/80 bg-slate-50/50 py-16 dark:border-slate-800 dark:bg-slate-900/40 sm:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">
              Step-by-Step Instructions
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              How to Convert HEIC to JPG on Any Device
            </h2>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
              No special drivers, third-party software, or paid codec packs
              required. Follow the quick guide for your operating system.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {PLATFORM_STEPS.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.platform}
                  className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-7 shadow-sm dark:border-slate-800 dark:bg-slate-950"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-primary/10 text-brand-primary">
                          <Icon className="h-5 w-5" />
                        </span>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                          {p.platform}
                        </h3>
                      </div>
                    </div>
                    <span className="mt-3 inline-block rounded-md bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                      {p.badge}
                    </span>

                    <ol className="mt-6 space-y-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {p.steps.map((step, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 font-mono text-xs font-bold text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                            {idx + 1}
                          </span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          FORMAT COMPARISON MATRIX (HEIC VS JPG ENTITY DEEP DIVE)
      ───────────────────────────────────────────────────────────── */}
      <section className="container-page py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">
            Technical Specification
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            HEIC vs JPG: Architectural Comparison
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            Understand the key differences between Apple&apos;s High Efficiency
            Image Container and the universal Joint Photographic Experts Group
            standard.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-slate-200 bg-slate-100/60 text-xs font-bold uppercase tracking-wider text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    Comparison Parameter
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Apple HEIC (.heic)
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Universal JPG / JPEG (.jpg)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/80 dark:divide-slate-800">
                {HEIC_VS_JPG_COMPARISON.map((row) => (
                  <tr
                    key={row.feature}
                    className="hover:bg-slate-50/50 dark:hover:bg-slate-900/50"
                  >
                    <th
                      scope="row"
                      className="whitespace-nowrap px-6 py-4 font-bold text-slate-900 dark:text-white"
                    >
                      {row.feature}
                    </th>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-400">
                      {row.heic}
                    </td>
                    <td className="px-6 py-4 font-medium text-slate-900 dark:text-slate-200">
                      {row.jpg}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          E-E-A-T TRUST & DATA SECURITY ARCHITECTURE
      ───────────────────────────────────────────────────────────── */}
      <section className="border-y border-slate-200/80 bg-slate-50/50 py-16 dark:border-slate-800 dark:bg-slate-900/40 sm:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200/90 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-950 sm:p-12">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-primary/10 text-brand-primary">
                <Cpu className="h-7 w-7" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">
                  Technical Architecture
                </span>
                <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
                  How Client-Side In-Browser HEIC Decoding Works
                </h2>
              </div>
            </div>

            <div className="mt-8 space-y-5 text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
              <p>
                Most online image converters send your photographs across the
                internet to a remote cloud worker. Once there, your image is
                saved to temporary storage, processed by a server-side CLI tool,
                and re-downloaded. This introduces latency, privacy risks, and
                file size limits.
              </p>

              <p>
                <strong>ConvertImageNow takes an engineering approach centered on privacy.</strong>{" "}
                We use WebAssembly (Wasm) ports of high-efficiency image decoders
                combined with the browser&apos;s native HTML5 Canvas 2D rasterizer.
                When you drag a HEIC file onto this page, JavaScript reads the
                local binary buffer directly from your device memory:
              </p>

              <ul className="list-disc space-y-2 pl-6 text-sm text-slate-600 dark:text-slate-400">
                <li>
                  <strong>Local Memory Allocation:</strong> The .heic file is
                  loaded directly into client RAM using the browser&apos;s{" "}
                  <code className="rounded bg-slate-100 px-1 py-0.5 font-mono text-xs dark:bg-slate-800">
                    FileReader API
                  </code>
                  .
                </li>
                <li>
                  <strong>In-Memory HEVC Decompression:</strong> The H.265 encoded
                  bitstream is unpacked locally without sending a single byte over
                  the network.
                </li>
                <li>
                  <strong>Canvas Rasterization & JPG Encoding:</strong> The raw
                  RGB pixel array is painted into a canvas buffer and exported
                  using native browser JPEG compression at your desired quality
                  setting.
                </li>
              </ul>

              <div className="grid gap-4 pt-4 sm:grid-cols-3">
                <div className="rounded-xl border border-slate-200/70 p-4 dark:border-slate-800">
                  <p className="font-mono text-xl font-bold text-brand-primary">
                    0 Bytes
                  </p>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    Uploaded to remote cloud servers
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200/70 p-4 dark:border-slate-800">
                  <p className="font-mono text-xl font-bold text-brand-primary">
                    100% Local
                  </p>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    Processed entirely on device CPU/GPU
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200/70 p-4 dark:border-slate-800">
                  <p className="font-mono text-xl font-bold text-brand-primary">
                    Zero Logs
                  </p>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    No databases, cookies, or user tracking
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          FREQUENTLY ASKED QUESTIONS (AEO & SCHEMA ALIGNED)
      ───────────────────────────────────────────────────────────── */}
      <section
        id="faq"
        className="container-page py-16 sm:py-24"
        aria-labelledby="faq-heading"
      >
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">
            Frequently Asked Questions
          </span>
          <h2
            id="faq-heading"
            className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl"
          >
            Common Questions About HEIC to JPG Conversion
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            Clear, honest answers about privacy, format compatibility, quality,
            and batch processing.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {FAQS.map(({ q, a }) => (
            <details
              key={q}
              className="group rounded-2xl border border-slate-200/80 bg-white p-6 transition-all open:border-brand-primary/40 open:shadow-sm dark:border-slate-800 dark:bg-slate-950"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-slate-900 dark:text-white">
                <span className="text-base">{q}</span>
                <span
                  aria-hidden="true"
                  className="ml-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-500 transition-transform duration-200 group-open:rotate-45 dark:bg-slate-800 dark:text-slate-400"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          RELATED IMAGE CONVERTERS (TOPICAL CLUSTER INTERNAL LINKS)
      ───────────────────────────────────────────────────────────── */}
      <section className="border-t border-slate-200/80 bg-slate-50/50 py-16 dark:border-slate-800 dark:bg-slate-900/40 sm:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">
              Topical Cluster Tools
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Explore More Free Image Conversion Tools
            </h2>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
              Need to convert to WebP, shrink large file sizes, or change
              dimensions? Use our full suite of free browser-based tools.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {RELATED_CONVERTERS.map((tool) => (
              <Link
                key={tool.slug}
                href={tool.slug}
                className="group flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-brand-primary/60 hover:shadow-md dark:border-slate-800 dark:bg-slate-950"
              >
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 dark:text-slate-200">
                    <span className="rounded bg-slate-100 px-1.5 py-0.5 dark:bg-slate-800">
                      {tool.from}
                    </span>
                    <ArrowRight className="h-3 w-3 text-brand-primary" />
                    <span className="rounded bg-brand-primary/10 px-1.5 py-0.5 text-brand-primary">
                      {tool.to}
                    </span>
                  </div>

                  <h3 className="mt-4 text-base font-bold text-slate-900 transition-colors group-hover:text-brand-primary dark:text-white dark:group-hover:text-brand-primary">
                    {tool.name}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                    {tool.desc}
                  </p>
                </div>

                <div className="mt-5 flex items-center gap-1.5 text-xs font-bold text-brand-primary">
                  <span>Open converter</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>

          {/* Hub Link Anchor */}
          <div className="mt-12 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-xs font-bold text-slate-700 shadow-sm transition-all hover:border-brand-primary hover:text-brand-primary dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
            >
              <span>View All Free Image Converters on ConvertImageNow</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          HIGH-CONVERSION CALL TO ACTION BANNER
      ───────────────────────────────────────────────────────────── */}
      <section className="container-page py-16 sm:py-20">
        <div className="relative overflow-hidden rounded-3xl bg-slate-900 px-8 py-14 text-center text-white shadow-2xl dark:border dark:border-slate-800 sm:px-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-primary/20 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-brand-accent/20 blur-3xl"
          />

          <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">
            Instant Client-Side Tool
          </span>
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
            Convert Your iPhone HEIC Photos Now
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
            No signup, no waiting, and zero uploads. Drag and drop your photos to
            convert them into universally compatible JPGs in seconds.
          </p>

          <div className="mt-8 flex justify-center">
            <a
              href="#converter"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-brand-primary px-8 py-3 text-sm font-bold text-white shadow-lg shadow-brand-primary/25 transition-transform hover:-translate-y-0.5 hover:bg-brand-primary/90"
            >
              Scroll to Converter
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
