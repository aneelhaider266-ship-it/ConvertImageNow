import type { Metadata } from "next";
import Link from "next/link";
import ImageResizer from "@/components/ImageResizer";
import {
  ShieldCheck,
  Infinity as InfinityIcon,
  CheckCircle2,
  ArrowRight,
  Zap,
  Sparkles,
  ChevronRight,
  Monitor,
  Smartphone,
  Maximize2,
  Scale,
} from "lucide-react";

const SITE_URL = "https://convertimagenow.com";
const PAGE_URL = `${SITE_URL}/image-resizer`;

export const metadata: Metadata = {
  title: "Free Online Image Resizer – Change Dimensions",
  description:
    "Resize JPG, PNG, WebP, and AVIF images free by exact pixels or percentage. Batch resize multiple photos in your browser with zero server uploads or watermarks.",
  keywords: [
    "image resizer",
    "resize image online",
    "resize image pixels",
    "bulk image resizer",
    "free photo resizer",
    "resize image for instagram",
    "change image dimensions",
    "resize picture online free",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Free Online Image Resizer – Resize Image Pixels & Dimensions",
    description:
      "Resize images by pixel dimensions or percentage, with an aspect-ratio option and batch downloads. Processing capacity depends on your device and browser memory.",
    url: PAGE_URL,
    siteName: "ConvertImageNow",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Online Image Resizer – Change Image Dimensions",
    description:
      "Change image width, height, or scale percentage in your browser. Resizing can affect sharpness, especially when enlarging small images.",
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
      name: "Image Resizer",
      item: PAGE_URL,
    },
  ],
};

const SOFTWARE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "ConvertImageNow Online Image Resizer",
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
    "Exact pixel (width x height) dimension customization",
    "Proportional percentage scaling with aspect ratio lock",
    "Browser-based image rendering via HTML5 Canvas",
    "Batch image resizing with one-click ZIP packaging",
    "Format preservation for JPG, PNG, WebP, and AVIF",

    "Batch resizing with ZIP downloads; practical capacity depends on your device and browser memory",
  ],
};

const FAQS = [
  {
    q: "How do I resize an image without losing quality or making it blurry?",
    a: "Downscaling (reducing pixel width and height) preserves sharpness because pixel density is condensed. However, upscaling (enlarging a small image to higher pixel counts) forces the browser to interpolate missing pixels, causing softness. To avoid blur, always resize from the highest-resolution original file and maintain the locked aspect ratio.",
  },
  {
    q: "What is the difference between resizing an image and compressing it?",
    a: "Resizing changes the physical canvas dimensions (pixel width and height, e.g., 4000x3000 to 1200x900). Compressing reduces the file byte size (KB or MB) by optimizing internal color data (lossy) or byte structures (lossless) without altering pixel counts. For maximum optimization, resize pixel dimensions first, then use our Image Compressor.",
  },
  {
    q: "What are the exact pixel dimensions for Instagram, YouTube, and LinkedIn?",
    a: "Standard platform sizes are: Instagram Post (Square): 1080x1080 px; Instagram Story/Reel: 1080x1920 px (9:16); YouTube Thumbnail: 1280x720 px (16:9); LinkedIn Post: 1200x627 px; Facebook Cover: 1640x924 px; and Passport/Visa photos: 600x600 px (2x2 inches at 300 DPI).",
  },
  {
    q: "Are my photos uploaded to a remote server when I resize them?",
    a: "The resizing workflow uses your browser Canvas API to render and export the selected image. Selected image files are processed in the browser rather than uploaded to a ConvertImageNow conversion server. General website requests and analytics are covered by the Privacy Policy.",
  },
  {
    q: "Can I batch resize multiple images at once?",
    a: "Yes. Add multiple supported JPG, PNG, WebP, or AVIF images, set the target dimensions or percentage, and download the results individually or as a ZIP. Practical batch capacity depends on your device and browser memory.",
  },
  {
    q: "How does the aspect ratio lock work?",
    a: "When the aspect ratio lock is enabled (the default setting), modifying the width automatically calculates the mathematically proportional height (and vice versa). This prevents distortion, unnatural stretching, or squishing.",
  },
  {
    q: "Can I resize an image by percentage instead of exact pixels?",
    a: "Yes. Select Percentage mode in the tool to scale your image uniformly (e.g., 50% for half-size, or 75% for quick file footprint reduction) without having to calculate exact pixel dimensions.",
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

const SOCIAL_PRESETS = [
  {
    platform: "Instagram Square Post",
    dimensions: "1080 × 1080 px",
    ratio: "1:1 Aspect Ratio",
    tag: "Social Feed",
  },
  {
    platform: "Instagram / TikTok Story & Reel",
    dimensions: "1080 × 1920 px",
    ratio: "9:16 Vertical",
    tag: "Stories / Video",
  },
  {
    platform: "YouTube Video Thumbnail",
    dimensions: "1280 × 720 px",
    ratio: "16:9 HD Widescreen",
    tag: "Video Preview",
  },
  {
    platform: "LinkedIn Feed Post",
    dimensions: "1200 × 627 px",
    ratio: "1.91:1 Landscape",
    tag: "Professional",
  },
  {
    platform: "Facebook Cover Banner",
    dimensions: "1640 × 924 px",
    ratio: "16:9 Desktop / Mobile",
    tag: "Header",
  },
  {
    platform: "Passport & Visa Standard",
    dimensions: "600 × 600 px",
    ratio: "2 × 2 in @ 300 DPI",
    tag: "Official Form",
  },
];

const CORE_DIFFERENTIATORS = [
  {
    icon: ShieldCheck,
    title: "Browser-Based Processing",
    desc: "The resizing workflow uses your browser Canvas API. Selected image files are processed in the browser rather than sent to a conversion server.",
    badge: "Local Processing",
  },
  {
    icon: Maximize2,
    title: "Canvas-Based Resizing",
    desc: "The browser Canvas API resamples the image when dimensions change. Results depend on the source image and chosen output dimensions.",
    badge: "Adjustable Dimensions",
  },
  {
    icon: Zap,
    title: "No Conversion Upload Queue",
    desc: "Resize supported image files in your browser without sending the selected image data to a conversion server.",
    badge: "Browser-Based",
  },
  {
    icon: InfinityIcon,
    title: "Batch Image Resizing",
    desc: "Add multiple files and export the resized results as a ZIP archive. Practical batch size depends on your device and browser memory.",
    badge: "Batch ZIP Export",
  },
];

const RELATED_TOOLS = [
  {
    name: "Free Image Compressor",
    desc: "Adjust output quality to help reduce image file size. Results depend on the source image and selected settings.",
    href: "/image-compressor",
  },
  {
    name: "JPG to PNG Converter",
    desc: "Convert photos into lossless PNG format to preserve sharp line art and layers.",
    href: "/jpg-to-png",
  },
  {
    name: "PNG to JPG Converter",
    desc: "Remove transparent alpha channels to create lightweight, shareable photos.",
    href: "/png-to-jpg",
  },
  {
    name: "JPG to WebP Converter",
    desc: "Convert resized images to modern WebP for faster Google Core Web Vitals.",
    href: "/jpg-to-webp",
  },
  {
    name: "HEIC to JPG Guide",
    desc: "Convert Apple iPhone camera captures into universally editable JPG files.",
    href: "/blog/heic-to-jpg-guide",
  },
  {
    name: "AVIF to JPG Converter",
    desc: "Decompress next-generation AVIF images into universally compatible JPEGs.",
    href: "/avif-to-jpg",
  },
];

export default function ImageResizerPage() {
  return (
    <div className="relative min-h-screen bg-slate-50/70 font-sans text-slate-900 antialiased selection:bg-indigo-500 selection:text-white dark:bg-[#101B33] dark:text-slate-100">
      {/* Search Engine Schemas */}
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

      {/* Atmospheric Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[580px] overflow-hidden"
      >
        <div className="absolute left-1/2 top-0 h-[480px] w-[1000px] -translate-x-1/2 bg-gradient-to-b from-indigo-100/70 via-sky-50/30 to-transparent blur-3xl dark:from-indigo-950/20 dark:via-[#172642]/10 dark:to-transparent" />
      </div>

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        {/* Breadcrumb Navigation */}
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
            Image Resizer
          </span>
        </nav>

        {/* Hero Section */}
        <header className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200/80 bg-indigo-50/80 px-3.5 py-1 text-xs font-medium tracking-wide text-indigo-700 shadow-sm backdrop-blur dark:border-indigo-900/60 dark:bg-indigo-950/40 dark:text-indigo-300">
            <Sparkles className="h-3.5 w-3.5 text-indigo-600 dark:text-indigo-400" />
            <span>Browser-Based Resizing • No Conversion-Server Upload</span>
          </div>

          <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Free Online Image Resizer
          </h1>

          <p className="mt-3.5 text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
            Resize supported JPG, PNG, WebP, and AVIF images by pixel dimensions or percentage. Keep the aspect ratio when needed; sharpness depends on the source image and chosen dimensions. Add multiple files and download a ZIP archive.
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs font-medium text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" /> No server
              uploads
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" /> Exact pixel
              & percent scaling
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" /> Batch ZIP
              downloads
            </span>
          </div>
        </header>

        {/* Interactive Tool Container */}
        <section
          aria-label="Image Resizer Tool"
          className="mx-auto mt-8 max-w-4xl rounded-2xl border border-slate-200/90 bg-white/95 p-4 shadow-xl shadow-slate-200/40 backdrop-blur-md sm:p-7 dark:border-[#314969]/80 dark:bg-[#172642]/95 dark:shadow-black/40"
        >
          <ImageResizer />
        </section>

        {/* Feature Cards Grid */}
        <section
          aria-labelledby="features-heading"
          className="mx-auto mt-16 max-w-5xl"
        >
          <div className="text-center">
            <h2
              id="features-heading"
              className="text-2xl font-bold tracking-tight sm:text-3xl"
            >
              Precision Browser-Based Image Resizing
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Unlike cloud services that throttle file counts or compress images on
              untrusted remote servers, ConvertImageNow resizes directly in your
              browser without uploading selected image files to a conversion server.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CORE_DIFFERENTIATORS.map((item) => (
              <div
                key={item.title}
                className="group relative rounded-xl border border-slate-200/80 bg-white/80 p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-md dark:border-[#314969] dark:bg-[#172642]/60 dark:hover:border-indigo-800"
              >
                <div className="flex items-center justify-between">
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider dark:text-slate-400">
                    {item.badge}
                  </span>
                </div>
                <h3 className="mt-3 text-sm font-semibold text-slate-900 dark:text-slate-100">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Social Media Dimension Reference Matrix */}
        <section
          aria-labelledby="presets-heading"
          className="mx-auto mt-16 max-w-5xl"
        >
          <div className="text-center sm:text-left">
            <h2
              id="presets-heading"
              className="text-2xl font-bold tracking-tight sm:text-3xl"
            >
              Standard Preset Dimensions for Web & Social Platforms
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Use these verified pixel dimensions to prevent awkward cropping and
              maintain sharp previews across platforms:
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SOCIAL_PRESETS.map((preset) => (
              <div
                key={preset.platform}
                className="flex flex-col justify-between rounded-xl border border-slate-200/80 bg-white p-4 shadow-sm dark:border-[#314969] dark:bg-[#172642]"
              >
                <div className="flex items-start justify-between">
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                    {preset.platform}
                  </h3>
                  <span className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-600 dark:bg-[#263956] dark:text-slate-300">
                    {preset.tag}
                  </span>
                </div>
                <div className="mt-3 flex items-baseline justify-between border-t border-slate-100 pt-3 dark:border-[#314969]/80">
                  <span className="font-mono text-sm font-bold text-indigo-600 dark:text-indigo-400">
                    {preset.dimensions}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    {preset.ratio}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How-to Workflow Section */}
        <section
          aria-labelledby="workflow-heading"
          className="mx-auto mt-16 max-w-4xl rounded-2xl border border-slate-200/80 bg-white/60 p-6 shadow-sm sm:p-8 dark:border-[#314969] dark:bg-[#172642]/40"
        >
          <div className="max-w-2xl">
            <h2
              id="workflow-heading"
              className="text-2xl font-bold tracking-tight sm:text-3xl"
            >
              How to Resize Images Online in 4 Simple Steps
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Resize individual photos or bulk-process entire galleries in
              seconds:
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="relative flex flex-col rounded-lg border border-slate-200/70 bg-white p-4 shadow-sm dark:border-[#314969] dark:bg-[#172642]">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                1
              </span>
              <h3 className="mt-3 text-sm font-semibold">Select Photos</h3>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                Drag and drop JPG, PNG, WebP, or AVIF files into the upload zone,
                or browse from your device.
              </p>
            </div>

            <div className="relative flex flex-col rounded-lg border border-slate-200/70 bg-white p-4 shadow-sm dark:border-[#314969] dark:bg-[#172642]">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                2
              </span>
              <h3 className="mt-3 text-sm font-semibold">Set Dimensions</h3>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                Enter target pixel width and height, or switch to Percentage mode
                for uniform proportional scaling.
              </p>
            </div>

            <div className="relative flex flex-col rounded-lg border border-slate-200/70 bg-white p-4 shadow-sm dark:border-[#314969] dark:bg-[#172642]">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                3
              </span>
              <h3 className="mt-3 text-sm font-semibold">Lock Aspect Ratio</h3>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                Keep the aspect ratio lock enabled when you want to preserve the
                original proportions and avoid stretching or distortion.
              </p>
            </div>

            <div className="relative flex flex-col rounded-lg border border-slate-200/70 bg-white p-4 shadow-sm dark:border-[#314969] dark:bg-[#172642]">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                4
              </span>
              <h3 className="mt-3 text-sm font-semibold">Download Your Resized Images</h3>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                Download resized images individually, or export all files
                together in a neat, organized ZIP archive.
              </p>
            </div>
          </div>
        </section>

        {/* Resizing vs. Compressing */}
        <section className="mx-auto mt-16 max-w-4xl space-y-10">
          <div className="rounded-2xl border border-indigo-200/90 bg-indigo-50/50 p-6 shadow-sm sm:p-8 dark:border-indigo-900/60 dark:bg-indigo-950/20">
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-indigo-100 p-2.5 text-indigo-700 dark:bg-indigo-900/60 dark:text-indigo-300">
                <Scale className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-indigo-950 dark:text-indigo-200">
                  Resizing vs. Compressing: Which Tool Do You Need?
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-indigo-900/90 dark:text-indigo-200/80">
                  Many users confuse <strong>image resizing</strong> with{" "}
                  <strong>image compressing</strong>. Understanding the
                  difference ensures optimal quality and file size:
                </p>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-indigo-200/60 bg-white/80 p-4 dark:border-indigo-900/50 dark:bg-[#172642]/80">
                    <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                      Image Resizing (This Tool)
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                      Changes the <strong>pixel dimensions</strong> (e.g.,
                      shrinking a 6000×4000 camera photo down to 1200×800).
                      Essential when an app or website has strict width/height
                      constraints.
                    </p>
                  </div>
                  <div className="rounded-xl border border-indigo-200/60 bg-white/80 p-4 dark:border-indigo-900/50 dark:bg-[#172642]/80">
                    <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                      Image Compressing
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                      Reduces the <strong>file size in KB/MB</strong> while
                      keeping the exact same pixel dimensions. Ideal for fast
                      loading times and meeting portal upload limits.
                    </p>
                  </div>
                </div>
                <div className="mt-4 text-xs text-indigo-900 dark:text-indigo-300">
                  <span>Need to reduce file size in KB without changing pixel dimensions? Use our </span>
                  <Link
                    href="/image-compressor"
                    className="font-semibold underline underline-offset-2 hover:text-indigo-700 dark:hover:text-white"
                  >
                    Free Online Image Compressor &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Cross-Device Guidance */}
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-slate-900 dark:text-slate-100">
              Cross-Device Workflow: Desktop vs. Mobile Resizing
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              ConvertImageNow requires no app installations or operating system
              permissions:
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-200/80 bg-white p-5 shadow-sm dark:border-[#314969] dark:bg-[#172642]">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-indigo-50 p-2 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400">
                    <Monitor className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                    Windows, Mac & Linux Workstations
                  </h3>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                  Add supported image files from your desktop, choose the target dimensions, and download the resized files individually or together as a ZIP archive.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200/80 bg-white p-5 shadow-sm dark:border-[#314969] dark:bg-[#172642]">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-emerald-50 p-2 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
                    <Smartphone className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                    iOS iPhone, iPad & Android
                  </h3>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                  Select pictures directly from your Photo Library or Files app.
                  Resize mobile captures for Instagram Stories (1080×1920) or
                  profile avatars without installing third-party ad-heavy mobile
                  apps.
                </p>
              </div>
            </div>
          </div>

          {/* Related Tools Topical Cluster */}
          <div className="rounded-2xl border border-slate-200/80 bg-slate-100/50 p-6 sm:p-8 dark:border-[#314969] dark:bg-[#172642]/50">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                  Explore Complementary Image Tools
                </h2>
                <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                  Convert, compress, and optimize visual assets right inside your
                  browser.
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
                  className="group rounded-xl border border-slate-200/80 bg-white p-4 shadow-sm transition hover:border-indigo-300 hover:shadow-md dark:border-[#314969] dark:bg-[#172642] dark:hover:border-indigo-700"
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

          {/* Frequently Asked Questions */}
          <div className="space-y-6">
            <div className="text-center sm:text-left">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                Frequently Asked Questions
              </h2>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                Answers regarding pixel dimensions, aspect ratio locks, quality,
                and batch processing.
              </p>
            </div>

            <div className="space-y-3">
              {FAQS.map(({ q, a }) => (
                <details
                  key={q}
                  className="group rounded-xl border border-slate-200/90 bg-white p-4 shadow-sm transition open:shadow-md dark:border-[#314969] dark:bg-[#172642]"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-slate-900 focus:outline-none dark:text-slate-100">
                    <span>{q}</span>
                    <span className="ml-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-transform duration-200 group-open:rotate-180 dark:bg-[#263956] dark:text-slate-400">
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
