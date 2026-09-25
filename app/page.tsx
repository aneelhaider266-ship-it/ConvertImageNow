import type { Metadata } from "next";
import Link from "next/link";
import {
  Zap,
  Lock,
  Gift,
  UploadCloud,
  Infinity as InfinityIcon,
  Layers,
  ArrowRight,
  ShieldCheck,
  Cpu,
  FileCheck2,
  Sparkles,
  SlidersHorizontal,
  FolderArchive,
  CheckCircle2,
  ArrowRightLeft,
  Minimize2,
  Maximize2,
  FileCode2,
  HelpCircle,
  BookOpen,
} from "lucide-react";
import ImageConverter from "@/components/ImageConverter";

export const metadata: Metadata = {
  title: "Free Online Image Converter – Convert JPG, PNG, WebP, AVIF & HEIC",
  description:
    "Convert images online directly in your browser. 100% private client-side processing with zero server uploads. Batch convert PNG, JPG, WebP, AVIF, and HEIC instantly.",
  alternates: {
    canonical: "https://www.convertimagenow.com/",
  },
  openGraph: {
    title: "Free Online Image Converter – Private In-Browser Image Conversion",
    description:
      "Batch convert JPG, PNG, WebP, AVIF, and HEIC files locally in your browser. Fast, private, watermark-free, and 100% free.",
    url: "https://www.convertimagenow.com/",
    siteName: "ConvertImageNow",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Online Image Converter | ConvertImageNow",
    description:
      "Private, browser-based batch image converter. Zero uploads, zero quality compromises.",
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

// Tool Directory Data: Hub linking directly to every specific converter & utility
const CONVERTER_TOOLS = [
  {
    category: "Popular Conversions",
    description: "The most requested everyday web image transformations",
    tools: [
      {
        name: "PNG to JPG Converter",
        slug: "/png-to-jpg",
        badge: "Fast & Lossless",
        from: "PNG",
        to: "JPG",
        desc: "Flatten transparent PNG assets into compact JPGs for photography and fast web delivery.",
      },
      {
        name: "JPG to PNG Converter",
        slug: "/jpg-to-png",
        badge: "Pixel Accurate",
        from: "JPG",
        to: "PNG",
        desc: "Convert standard JPG photographs into uncompressed PNG graphics for editing and overlays.",
      },
      {
        name: "JPG to WebP Converter",
        slug: "/jpg-to-webp",
        badge: "Core Web Vitals",
        from: "JPG",
        to: "WEBP",
        desc: "Cut file sizes by 25–35% while preserving visual clarity for modern Google PageSpeed scores.",
      },
      {
        name: "PNG to WebP Converter",
        slug: "/png-to-webp",
        badge: "Alpha Channel",
        from: "PNG",
        to: "WEBP",
        desc: "Retain crisp transparent edges while drastically reducing file payload for responsive websites.",
      },
    ],
  },
  {
    category: "Next-Gen & Mobile Formats",
    description: "Format bridges for Apple iOS snapshots and bleeding-edge codecs",
    tools: [
      {
        name: "HEIC to JPG Converter",
        slug: "/heic-to-jpg",
        badge: "iPhone Default",
        from: "HEIC",
        to: "JPG",
        desc: "Transform Apple High-Efficiency photos into universally compatible JPGs for Windows and web.",
      },
      {
        name: "AVIF to JPG Converter",
        slug: "/avif-to-jpg",
        badge: "Compatibility",
        from: "AVIF",
        to: "JPG",
        desc: "Turn modern AV1-encoded AVIF files into legacy JPG format for older editors and platforms.",
      },
      {
        name: "WebP to JPG Converter",
        slug: "/webp-to-jpg",
        badge: "Universal Export",
        from: "WEBP",
        to: "JPG",
        desc: "Export downloaded WebP website graphics into standard JPG images for desktop software.",
      },
      {
        name: "WebP to PNG Converter",
        slug: "/webp-to-png",
        badge: "Design Ready",
        from: "WEBP",
        to: "PNG",
        desc: "Convert WebP graphics into editable lossless PNG format preserving 24-bit color fidelity.",
      },
    ],
  },
  {
    category: "Image Optimization Utilities",
    description: "Dimension scaling and byte-level compression utilities",
    tools: [
      {
        name: "Online Image Compressor",
        slug: "/image-compressor",
        badge: "Byte Reducer",
        from: "MULTI",
        to: "MIN",
        desc: "Intelligently squeeze image file weights by up to 80% without introducing visible noise or blur.",
      },
      {
        name: "Online Image Resizer",
        slug: "/image-resizer",
        badge: "Aspect Ratio Lock",
        from: "SCALE",
        to: "DIMS",
        desc: "Resize pixel dimensions for social banners, thumbnails, e-commerce listings, and UI mockups.",
      },
    ],
  },
];

const CORE_BENEFITS = [
  {
    icon: Lock,
    title: "100% Client-Side Privacy",
    desc: "Files never travel across the internet. Your photos are drawn directly into your browser's local HTML5 Canvas memory and processed on-device.",
    highlight: "Zero Server Uploads",
  },
  {
    icon: Zap,
    title: "Hardware-Accelerated Speed",
    desc: "Bypasses upload queues and remote worker latency. Batch conversions execute using your computer or smartphone's native GPU/CPU cycles.",
    highlight: "Sub-Second Renders",
  },
  {
    icon: Layers,
    title: "True Bulk Processing",
    desc: "Queue dozens of mixed format files simultaneously. Convert entire collections in parallel with one-click individual or bundled ZIP downloads.",
    highlight: "Batch Ready",
  },
  {
    icon: SlidersHorizontal,
    title: "Granular Quality Calibration",
    desc: "Dial in the exact compression threshold between 1% and 100% to hit strict target file weight requirements without destroying detail.",
    highlight: "Precise Control",
  },
  {
    icon: InfinityIcon,
    title: "Unmetered & Unlimited",
    desc: "No artificial monthly limits, no daily conversion credits, and no paywalls. Convert high-resolution files continuously without registration.",
    highlight: "Zero Paywalls",
  },
  {
    icon: Gift,
    title: "Clean, Watermark-Free Exports",
    desc: "Every converted file is 100% clean and pristine. ConvertImageNow leaves source metadata unblemished with zero promotional branding.",
    highlight: "Pristine Output",
  },
];

const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Select or Drop Images",
    desc: "Drag individual files or entire folders into the converter zone. We support JPG, PNG, WebP, AVIF, and HEIC source files directly from local storage.",
  },
  {
    step: "02",
    title: "Target Output & Balance Quality",
    desc: "Pick your destination codec (JPG, PNG, WebP, or AVIF) and adjust the compression slider to strike the ideal balance between byte weight and visual crispness.",
  },
  {
    step: "03",
    title: "Instant In-Memory Render",
    desc: "Your browser decodes the image via HTML5 Canvas API and encodes it locally into the target container. No external network requests are made.",
  },
  {
    step: "04",
    title: "Download Clean Files or Archive",
    desc: "Save converted images one by one or export your full batch in a structured, uncompressed ZIP archive with preserved filenames.",
  },
];

const FORMAT_COMPARISON = [
  {
    format: "JPG / JPEG",
    bestFor: "Photographs, complex color gradients, camera exports",
    transparency: "No",
    compression: "Lossy (Variable 1–100%)",
    compatibility: "100% Universal (All browsers, OSs, print)",
    verdict: "Essential fallback when broad compatibility is paramount.",
  },
  {
    format: "PNG",
    bestFor: "Logos, UI icons, sharp text, screenshots, line art",
    transparency: "Yes (Full 8-bit Alpha Channel)",
    compression: "Lossless (DEFLATE / Canvas)",
    compatibility: "100% Universal",
    verdict: "Standard for crisp transparent graphics where artifacts are unacceptable.",
  },
  {
    format: "WebP",
    bestFor: "Production websites, Core Web Vitals, hero headers",
    transparency: "Yes (Lossy & Lossless)",
    compression: "Lossy & Lossless (25–35% smaller than JPG)",
    compatibility: "97%+ Modern Browsers (Chrome, Safari, Edge, Firefox)",
    verdict: "Default format choice for maximum web page speed and SEO performance.",
  },
  {
    format: "AVIF",
    bestFor: "Next-gen web graphics, extreme data compression",
    transparency: "Yes (10-bit & 12-bit HDR)",
    compression: "Advanced AV1-based lossy/lossless (50% smaller than JPG)",
    compatibility: "Modern desktop & mobile evergreen browsers",
    verdict: "The highest compression efficiency available for modern web platforms.",
  },
];

const REAL_WORLD_USE_CASES = [
  {
    title: "Core Web Vitals & Google PageSpeed Optimization",
    scenario: "Fix slow Largest Contentful Paint (LCP) caused by oversized banners",
    solution:
      "Modernizing high-resolution JPG/PNG banners into WebP or AVIF reduces transfer weight by up to 70%. Faster byte transfers directly improve LCP and mobile bounce rates.",
  },
  {
    title: "Overcoming Strict Marketplace & CMS Upload Limits",
    scenario: "E-commerce portals rejecting raw HEIC snapshots or heavy PNG product renders",
    solution:
      "Platforms like eBay, Etsy, and Amazon enforce strict JPG/PNG specifications under 10MB. Converting files client-side ensures immediate validation without software setup.",
  },
  {
    title: "Eliminating Transparency Bloat on Solid Backgrounds",
    scenario: "Accidental PNG captures bloating blog layouts and newsletters",
    solution:
      "Photographs saved as PNG waste enormous memory storing unused alpha channels. Re-encoding solid-background assets to 85% quality JPG slashes file size by up to 5x.",
  },
  {
    title: "Cross-Platform Asset Distribution & Printing",
    scenario: "Sharing iPhone HEIC photos with Windows, Android, and print labs",
    solution:
      "Apple's default HEIC container fails to open natively on older Windows builds and consumer photo kiosks. Batch converting to JPG restores instant plug-and-play viewing.",
  },
];

const HOMEPAGE_FAQS = [
  {
    q: "Is ConvertImageNow completely free to use?",
    a: "Yes. ConvertImageNow is 100% free with no hidden tiers, no credit cards, no subscriptions, and no conversion limits. You can process single photos or large bulk folders without hitting paywalls.",
  },
  {
    q: "Are my uploaded photos kept private and secure?",
    a: "Your images are never uploaded to any remote server or third-party cloud. ConvertImageNow processes all conversions locally on your computer or phone using your browser's built-in HTML5 Canvas engine. Your files never leave your device.",
  },
  {
    q: "What is the difference between converting to WebP versus JPG?",
    a: "WebP provides modern compression algorithms that achieve 25% to 35% smaller file sizes than JPG at equivalent visual quality. Additionally, WebP supports transparent backgrounds, whereas JPG always flattens transparent pixels into solid backgrounds.",
  },
  {
    q: "Can I convert multiple images at the same time?",
    a: "Yes. ConvertImageNow supports client-side batch processing. Drop multiple files into the conversion area, pick your target format and compression level, and download all files individually or packaged as a single ZIP archive.",
  },
  {
    q: "Will converting an image degrade its visual quality?",
    a: "Converting between lossless formats (such as WebP lossless to PNG) preserves pixel-for-pixel visual quality. When converting to lossy formats (like JPG or standard WebP), our quality slider lets you configure compression from 1% to 100%, allowing you to retain imperceptible visual fidelity.",
  },
  {
    q: "Does ConvertImageNow work on mobile phones?",
    a: "Yes. ConvertImageNow is fully responsive and functions seamlessly across iOS (Safari) and Android (Chrome, Firefox, Samsung Internet). You can convert photos directly from your phone's photo library or camera roll.",
  },
  {
    q: "Do you place watermarks on converted images?",
    a: "No. None of our tools add watermarks, branding, stamps, or promotional overlays to your files. Your images remain completely unaltered outside of the requested format conversion.",
  },
  {
    q: "Why should I convert HEIC photos to JPG?",
    a: "HEIC is Apple's proprietary capture format for iPhones. While it saves disk space on iOS, many Windows applications, web forms, and desktop photo editors cannot open HEIC files. Converting them to JPG makes them universally accessible anywhere.",
  },
];

export default function HomePage() {
  // Comprehensive Structured Data Graph
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.convertimagenow.com/#website",
        url: "https://www.convertimagenow.com/",
        name: "ConvertImageNow",
        description:
          "Free online image converter providing private, browser-based batch conversion across JPG, PNG, WebP, AVIF, and HEIC formats.",
        inLanguage: "en-US",
      },
      {
        "@type": "WebApplication",
        "@id": "https://www.convertimagenow.com/#webapp",
        name: "ConvertImageNow Universal Image Converter",
        url: "https://www.convertimagenow.com/",
        applicationCategory: "MultimediaApplication",
        operatingSystem: "All (Web Browser)",
        browserRequirements: "Requires HTML5 Canvas and JavaScript support",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        featureList: [
          "100% Client-side in-browser processing",
          "Zero file uploads to external servers",
          "Batch conversion with ZIP export",
          "Precision lossy and lossless quality control",
          "No watermarks or file size restrictions",
          "Support for JPG, PNG, WebP, AVIF, and HEIC",
        ],
      },
      {
        "@type": "ItemList",
        "@id": "https://www.convertimagenow.com/#tool-directory",
        name: "ConvertImageNow Image Conversion Suite",
        description:
          "Directory of specialized image conversion tools and utilities available on ConvertImageNow.",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "PNG to JPG Converter",
            url: "https://www.convertimagenow.com/png-to-jpg",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "JPG to PNG Converter",
            url: "https://www.convertimagenow.com/jpg-to-png",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "JPG to WebP Converter",
            url: "https://www.convertimagenow.com/jpg-to-webp",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "PNG to WebP Converter",
            url: "https://www.convertimagenow.com/png-to-webp",
          },
          {
            "@type": "ListItem",
            position: 5,
            name: "HEIC to JPG Converter",
            url: "https://www.convertimagenow.com/heic-to-jpg",
          },
          {
            "@type": "ListItem",
            position: 6,
            name: "AVIF to JPG Converter",
            url: "https://www.convertimagenow.com/avif-to-jpg",
          },
          {
            "@type": "ListItem",
            position: 7,
            name: "WebP to JPG Converter",
            url: "https://www.convertimagenow.com/webp-to-jpg",
          },
          {
            "@type": "ListItem",
            position: 8,
            name: "WebP to PNG Converter",
            url: "https://www.convertimagenow.com/webp-to-png",
          },
          {
            "@type": "ListItem",
            position: 9,
            name: "Online Image Compressor",
            url: "https://www.convertimagenow.com/image-compressor",
          },
          {
            "@type": "ListItem",
            position: 10,
            name: "Online Image Resizer",
            url: "https://www.convertimagenow.com/image-resizer",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.convertimagenow.com/#faq",
        mainEntity: HOMEPAGE_FAQS.map((faq) => ({
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      {/* ─────────────────────────────────────────────────────────────
          HERO & UNIVERSAL TOOL WIDGET
          Visual Upgrade: Subtle ambient radial glow, tight typography scale,
          Linear-style badge, and focused converter workspace.
      ───────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-slate-50/60 via-white to-white py-12 dark:border-slate-800/80 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900 sm:py-16 lg:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-brand-primary/20 to-brand-accent/20 opacity-40 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] dark:opacity-20" />
        </div>

        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            {/* Trust Chip */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3.5 py-1 text-xs font-medium tracking-wide text-emerald-700 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-300">
              <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-emerald-600 dark:text-emerald-400" />
              <span>100% Private Client-Side Engine • Zero Cloud Uploads</span>
            </div>

            {/* Category H1 */}
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
              Free Online Image Converter
            </h1>

            {/* Hub Value Proposition */}
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
              Convert JPG, PNG, WebP, AVIF, and HEIC files instantly in your
              browser. Clean batch conversions with zero file size limits, no
              watermarks, and complete data privacy.
            </p>

            {/* Quick Feature Tickers */}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-brand-primary" />
                No file upload queues
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-brand-primary" />
                Batch & ZIP export
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-brand-primary" />
                No registration required
              </span>
            </div>
          </div>

          {/* Primary Universal Interactive Converter Component */}
          <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-slate-200/90 bg-white/80 p-2 shadow-2xl shadow-slate-900/5 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80 sm:p-4">
            <ImageConverter />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          TOOL DIRECTORY & CONVERTER CLUSTER (PRIMARY HUB FUNCTION)
          Provides search engines and users with a clear path to every
          specific converter page with rich contextual anchors.
      ───────────────────────────────────────────────────────────── */}
      <section
        id="converters"
        className="container-page py-16 sm:py-24"
        aria-labelledby="converters-heading"
      >
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">
            Image Conversion Suite
          </span>
          <h2
            id="converters-heading"
            className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl"
          >
            Explore All Online Image Converters & Tools
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            Select a dedicated tool below for format-specific presets, batch
            processing controls, and custom optimization guides.
          </p>
        </div>

        <div className="mt-14 space-y-12">
          {CONVERTER_TOOLS.map((group) => (
            <div key={group.category}>
              <div className="mb-5 flex flex-col justify-between border-b border-slate-200/80 pb-3 dark:border-slate-800 sm:flex-row sm:items-end">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {group.category}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {group.description}
                  </p>
                </div>
                <span className="mt-2 text-xs font-semibold text-slate-400 dark:text-slate-500 sm:mt-0">
                  {group.tools.length} Tools Available
                </span>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {group.tools.map((tool) => (
                  <Link
                    key={tool.slug}
                    href={tool.slug}
                    className="group relative flex flex-col justify-between rounded-xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-brand-primary/60 hover:shadow-lg hover:shadow-brand-primary/5 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-brand-primary/60"
                  >
                    <div>
                      {/* Format Badge Bar */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 dark:text-slate-200">
                          <span className="rounded bg-slate-100 px-1.5 py-0.5 dark:bg-slate-800">
                            {tool.from}
                          </span>
                          <ArrowRight className="h-3 w-3 text-brand-primary" />
                          <span className="rounded bg-brand-primary/10 px-1.5 py-0.5 text-brand-primary">
                            {tool.to}
                          </span>
                        </div>
                        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                          {tool.badge}
                        </span>
                      </div>

                      {/* Tool Title */}
                      <h4 className="mt-4 text-base font-semibold text-slate-900 transition-colors group-hover:text-brand-primary dark:text-white dark:group-hover:text-brand-primary">
                        {tool.name}
                      </h4>

                      {/* Tool Purpose */}
                      <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                        {tool.desc}
                      </p>
                    </div>

                    <div className="mt-5 flex items-center gap-1.5 text-xs font-semibold text-brand-primary">
                      <span>Open tool</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          CORE SYSTEM ADVANTAGES & CAPABILITIES
      ───────────────────────────────────────────────────────────── */}
      <section className="border-y border-slate-200/80 bg-slate-50/50 py-16 dark:border-slate-800 dark:bg-slate-900/40 sm:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">
              Engineered for Privacy & Speed
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Why Convert Images with ConvertImageNow?
            </h2>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
              Unlike legacy online converters that send private files to cloud
              queues, ConvertImageNow utilizes your device&apos;s native web APIs.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CORE_BENEFITS.map((b) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.title}
                  className="rounded-2xl border border-slate-200/80 bg-white p-7 shadow-sm transition-shadow hover:shadow-md dark:border-slate-800 dark:bg-slate-950"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      {b.highlight}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-900 dark:text-white">
                    {b.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {b.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          HOW IT WORKS (AEO & FEATURED SNIPPET TARGET)
      ───────────────────────────────────────────────────────────── */}
      <section className="container-page py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">
            Step-by-Step Guide
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            How to Convert Images Online in 4 Simple Steps
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            Convert any photograph or digital graphic in seconds without
            installing external applications or registering an account.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {HOW_IT_WORKS_STEPS.map((step) => (
            <div
              key={step.step}
              className="relative flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950"
            >
              <div>
                <span className="font-mono text-3xl font-black text-brand-primary/30">
                  {step.step}
                </span>
                <h3 className="mt-3 text-lg font-bold text-slate-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SUPPORTED FORMAT MATRIX (ENTITY & COMPARISON SEO)
      ───────────────────────────────────────────────────────────── */}
      <section className="border-y border-slate-200/80 bg-slate-50/50 py-16 dark:border-slate-800 dark:bg-slate-900/40 sm:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">
              Format Specification Guide
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Supported Image Formats & Codec Characteristics
            </h2>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
              Compare compression algorithms, transparency support, and platform
              compatibility to pick the ideal target file type.
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="border-b border-slate-200 bg-slate-100/60 text-xs font-bold uppercase tracking-wider text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      Format
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Alpha Transparency
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Compression Model
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Platform Support
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Recommended Application
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200/80 dark:divide-slate-800">
                  {FORMAT_COMPARISON.map((row) => (
                    <tr
                      key={row.format}
                      className="hover:bg-slate-50/50 dark:hover:bg-slate-900/50"
                    >
                      <th
                        scope="row"
                        className="whitespace-nowrap px-6 py-4 font-bold text-slate-900 dark:text-white"
                      >
                        {row.format}
                      </th>
                      <td className="px-6 py-4 text-slate-600 dark:text-slate-400">
                        {row.transparency}
                      </td>
                      <td className="px-6 py-4 text-slate-600 dark:text-slate-400">
                        {row.compression}
                      </td>
                      <td className="px-6 py-4 text-slate-600 dark:text-slate-400">
                        {row.compatibility}
                      </td>
                      <td className="px-6 py-4 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                        {row.verdict}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          WHEN TO CONVERT & WHY (SEARCH INTENT & PROBLEM SOLVING)
      ───────────────────────────────────────────────────────────── */}
      <section className="container-page py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">
            Practical Applications
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            When Should You Convert an Image?
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            Converting image containers addresses speed bottlenecks, format
            rejections, and presentation errors before assets go live.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {REAL_WORLD_USE_CASES.map((uc) => (
            <div
              key={uc.title}
              className="rounded-2xl border border-slate-200/80 bg-white p-7 shadow-sm dark:border-slate-800 dark:bg-slate-950"
            >
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {uc.title}
              </h3>
              <div className="mt-2 inline-block rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                Issue: {uc.scenario}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {uc.solution}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          E-E-A-T & TRUST ARCHITECTURE (IN-BROWSER CANVAS DEEP DIVE)
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
                  Technical Architecture & Data Safety
                </span>
                <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
                  How Client-Side Image Processing Protects Your Files
                </h2>
              </div>
            </div>

            <div className="mt-8 space-y-5 text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
              <p>
                Traditional web converters require you to transmit photos over
                HTTP to an unfamiliar cloud server. That server decodes your image,
                writes it to temporary disk storage, and makes it vulnerable to
                logging, data interception, or third-party scraping.
              </p>

              <p>
                <strong>ConvertImageNow works fundamentally differently.</strong>{" "}
                We utilize the standard HTML5 Canvas 2D Context API and browser
                WebAssembly image codecs. When you select an image, your browser
                reads the local binary buffer directly via JavaScript{" "}
                <code className="rounded bg-slate-100 px-1 py-0.5 font-mono text-xs dark:bg-slate-800">
                  FileReader
                </code>
                , mounts it in client memory, and rasterizes it into the target
                format without making an external network dispatch.
              </p>

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
                    Processing executes on local CPU/GPU
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200/70 p-4 dark:border-slate-800">
                  <p className="font-mono text-xl font-bold text-brand-primary">
                    Zero Logs
                  </p>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    No database retention or user tracking
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          FREQUENTLY ASKED QUESTIONS (AEO & SCHEMA-ALIGNED)
      ───────────────────────────────────────────────────────────── */}
      <section
        id="faq"
        className="container-page py-16 sm:py-24"
        aria-labelledby="faq-heading"
      >
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">
            Got Questions?
          </span>
          <h2
            id="faq-heading"
            className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl"
          >
            Frequently Asked Questions About Converting Images
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            Everything you need to know about formats, privacy, quality control,
            and batch conversion.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {HOMEPAGE_FAQS.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-2xl border border-slate-200/80 bg-white p-6 transition-all open:border-brand-primary/40 open:shadow-sm dark:border-slate-800 dark:bg-slate-950"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-slate-900 dark:text-white">
                <span className="text-base">{faq.q}</span>
                <span
                  aria-hidden="true"
                  className="ml-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-500 transition-transform duration-200 group-open:rotate-45 dark:bg-slate-800 dark:text-slate-400"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {faq.a}
              </p>
            </details>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/faq"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary hover:underline"
          >
            <span>Visit the complete Help & FAQ Center</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          FEATURED OPTIMIZATION GUIDES & ARTICLES (TOPICAL CLUSTER)
      ───────────────────────────────────────────────────────────── */}
      <section className="border-t border-slate-200/80 bg-slate-50/50 py-16 dark:border-slate-800 dark:bg-slate-900/40 sm:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">
              Learn Image Optimization
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Web Image Guides & Format Tutorials
            </h2>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
              Learn how to choose codecs, reduce loading times, and optimize
              graphics for web performance.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              {
                title:
                  "JPG vs WebP: Which Format Wins for Size, Quality, and Speed",
                excerpt:
                  "Comprehensive benchmark comparisons show WebP yielding 25–35% smaller file sizes at visually identical quality thresholds.",
                href: "/blog/jpg-vs-webp",
                category: "Format Comparison",
              },
              {
                title:
                  "How to Make an Image File Smaller Without Losing Quality",
                excerpt:
                  "A practical guide to lossy and lossless compression, dimension scaling, and modern container selection to cut image payload by up to 80%.",
                href: "/blog/how-to-make-image-file-smaller",
                category: "Optimization Strategy",
              },
              {
                title: "PNG vs JPG: Which Image Format Should You Use?",
                excerpt:
                  "Understand when to choose alpha channel transparency versus discrete 24-bit photographic compression for web assets.",
                href: "/blog/png-vs-jpg",
                category: "Asset Architecture",
              },
            ].map((post) => (
              <Link
                key={post.href}
                href={post.href}
                className="group flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-brand-primary/60 hover:shadow-md dark:border-slate-800 dark:bg-slate-950"
              >
                <div>
                  <span className="inline-flex items-center rounded-full bg-brand-primary/10 px-3 py-1 text-xs font-semibold text-brand-primary">
                    {post.category}
                  </span>
                  <h3 className="mt-4 text-base font-bold text-slate-900 transition-colors group-hover:text-brand-primary dark:text-white dark:group-hover:text-brand-primary">
                    {post.title}
                  </h3>
                  <p className="mt-2.5 line-clamp-3 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                    {post.excerpt}
                  </p>
                </div>
                <div className="mt-5 flex items-center gap-1.5 text-xs font-bold text-brand-primary">
                  <span>Read tutorial</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          HIGH-CONVERSION CALL-TO-ACTION BANNER
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
            Instant In-Browser Utility
          </span>
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
            Start Converting Your Images Today
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
            No registration, no watermarks, and no cloud uploads. Fast, private
            image conversions directly inside your web browser.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#converters"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-brand-primary px-7 py-3 text-sm font-bold text-white shadow-lg shadow-brand-primary/25 transition-transform hover:-translate-y-0.5 hover:bg-brand-primary/90"
            >
              Browse All Converters
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              href="/converter"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-slate-700 bg-slate-800/80 px-7 py-3 text-sm font-semibold text-slate-200 transition-colors hover:bg-slate-800 hover:text-white"
            >
              Launch Universal Converter
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
