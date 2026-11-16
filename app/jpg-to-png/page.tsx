import type { Metadata } from "next";
import Link from "next/link";
import ImageConverter from "@/components/ImageConverter";
import {
  ShieldCheck,
  WifiOff,
  Infinity as InfinityIcon,
  CheckCircle2,
  ArrowRight,
  Lock,
  Zap,
  HelpCircle,
  Cpu,
  Monitor,
  Smartphone,
  Sparkles,
  ChevronRight,
} from "lucide-react";

const SITE_URL = "https://convertimagenow.com";
const PAGE_URL = `${SITE_URL}/jpg-to-png`;

export const metadata: Metadata = {
  title: "Convert JPG to PNG Online Free – Browser-Based Tool",
  description:
    "Convert JPG to PNG online in your browser. Create PNG files from JPG images with batch processing and ZIP downloads.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Convert JPG to PNG Online Free – Private & Browser-Based",
    description:
      "Convert JPG images to PNG in your browser. PNG uses lossless encoding, but converting a JPG cannot restore detail already lost during JPEG compression.",
    url: PAGE_URL,
    siteName: "ConvertImageNow",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JPG to PNG Converter – Free Browser-Based Tool",
    description:
      "Convert JPG images to PNG locally in your browser with batch conversion and ZIP downloads.",
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
      name: "JPG to PNG Converter",
      item: PAGE_URL,
    },
  ],
};

const SOFTWARE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "ConvertImageNow JPG to PNG Converter",
  url: PAGE_URL,
  applicationCategory: "MultimediaApplication",
  operatingSystem: "All (Browser-based: Windows, macOS, Linux, iOS, Android)",
  browserRequirements: "Requires HTML5 Canvas support",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Browser-based conversion using Canvas and Blob APIs",
    "Selected image files are processed in the browser rather than sent to a conversion server",
    "Batch JPG to PNG processing",
    "Batch conversion with individual downloads and ZIP export",
    
    "ZIP archive download for multiple converted files",
  ],
};

const FAQS = [
  {
    q: "How do I convert JPG to PNG for free?",
    a: "To convert JPG to PNG for free on ConvertImageNow, drag and drop your JPG or JPEG files into the converter area above, verify that PNG is selected as your output format, and click Convert. Once rendered, download your individual PNG files or save them all at once in a single ZIP archive.",
  },
  {
    q: "Does converting JPG to PNG automatically create a transparent background?",
    a: "No. Standard JPG images do not store alpha channel (transparency) data—their background pixels are completely opaque (often solid white, black, or colored). Converting a JPG to PNG encapsulates the raster image in a PNG container that supports transparency, but it does not remove the existing background pixels. To make a JPG background transparent, you must use a background removal tool after converting.",
  },
  {
    q: "Will converting a JPG to PNG improve its image quality?",
    a: "No. Converting an existing JPG to PNG cannot restore image detail, sharpness, or clarity that was discarded during the original lossy JPEG compression. However, saving the file as a PNG stops generational quality loss—meaning any future edits, crops, or re-saves will not introduce further compression artifacts.",
  },
  {
    q: "Why is the converted PNG file larger in file size than the original JPG?",
    a: "PNG uses lossless DEFLATE compression, while JPG uses lossy compression. Converting a JPG to PNG does not restore details already lost in the JPG. The resulting PNG may be larger, depending on the image.",
  },
  {
    q: "Are my photos uploaded to your server during conversion?",
    a: "The selected image data is processed locally in your browser using the Canvas and Blob APIs rather than uploaded to a conversion server. See the privacy policy for details about general website data.",
  },
  {
    q: "Can I convert multiple JPG files to PNG at the same time?",
    a: "Yes. Add multiple JPG files to the queue, convert them in your browser, and download the results individually or together as a ZIP archive.",
  },
  {
    q: "What is the difference between JPG and JPEG?",
    a: "JPG and JPEG are identical file formats. The '.jpg' extension was introduced historically because legacy MS-DOS file systems enforced a three-character file extension limit, whereas UNIX and modern operating systems used '.jpeg'. Both refer to the Joint Photographic Experts Group standard.",
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

const FEATURE_CARDS = [
  {
    icon: ShieldCheck,
    title: "Browser-Based Processing",
    desc: "Selected image files are processed in your browser using Canvas and Blob APIs rather than uploaded to a conversion server.",
    accent: "from-emerald-500/10 to-teal-500/10 text-emerald-600 dark:text-emerald-400",
  },
  {
    icon: Zap,
    title: "No Conversion-Server Upload",
    desc: "The selected JPG image is processed in your browser using Canvas and Blob APIs rather than uploaded to a conversion server.",
    accent: "from-blue-500/10 to-cyan-500/10 text-blue-600 dark:text-blue-400",
  },
  {
    icon: WifiOff,
    title: "Local Image Processing",
    desc: "The conversion workflow uses your browser Canvas API. An active internet connection may still be needed to load the website and its resources.",
    accent: "from-violet-500/10 to-purple-500/10 text-violet-600 dark:text-violet-400",
  },
  {
    icon: InfinityIcon,
    title: "Batch Conversion",
    desc: "Add multiple JPG files to the queue and download the PNG results individually or together as a ZIP. Practical batch capacity depends on your device and browser memory.",
    accent: "from-amber-500/10 to-orange-500/10 text-amber-600 dark:text-amber-400",
  },
];

const COMPARISON_ROWS = [
  {
    feature: "Compression Type",
    jpg: "Lossy (DCT compression, discards data)",
    png: "Lossless (DEFLATE, exact pixel retention)",
  },
  {
    feature: "Alpha Transparency",
    jpg: "Not supported (solid backgrounds only)",
    png: "Full 8-bit alpha channel & transparent layers",
  },
  {
    feature: "Ideal Content",
    jpg: "Complex real-world photographs & gradients",
    png: "Screenshots, UI assets, logos, sharp text, icons",
  },
  {
    feature: "Re-saving & Editing",
    jpg: "Degrades quality each save (compression artifacts)",
    png: "Lossless PNG encoding after conversion",
  },
  {
    feature: "Relative File Size",
    jpg: "Small to moderate (efficient web delivery)",
    png: "Larger (uncompressed bitmap representation)",
  },
  {
    feature: "Color Space Support",
    jpg: "RGB, CMYK, Grayscale",
    png: "RGB, Grayscale, Indexed (Palette) — No CMYK",
  },
];

const RELATED_TOOLS = [
  {
    name: "PNG to JPG Converter",
    desc: "Turn bulky transparent PNGs into lightweight, highly shareable JPG images.",
    href: "/png-to-jpg",
  },
  {
    name: "JPG to WebP Converter",
    desc: "Convert JPG images to WebP; file size and visual quality depend on the source and selected quality setting.",
    href: "/jpg-to-webp",
  },
  {
    name: "HEIC to JPG Guide",
    desc: "Learn about HEIC compatibility and ways to create JPG copies on supported devices.",
    href: "/blog/heic-to-jpg-guide",
  },
  {
    name: "AVIF to JPG Converter",
    desc: "Transform modern AVIF graphics into standard JPG images for older software.",
    href: "/avif-to-jpg",
  },
  {
    name: "Free Image Compressor",
    desc: "Adjust output quality and compare the resulting file size and appearance.",
    href: "/image-compressor",
  },
  {
    name: "Online Image Resizer",
    desc: "Scale pixel dimensions and crop photos to exact proportions for social and web.",
    href: "/image-resizer",
  },
];

export default function JpgToPngPage() {
  return (
    <div className="relative min-h-screen bg-slate-50/60 font-sans text-slate-900 antialiased selection:bg-indigo-500 selection:text-white dark:bg-[#101B33] dark:text-slate-100">
      {/* Structured Data Scripts */}
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

      {/* Decorative Ambient Gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px] overflow-hidden"
      >
        <div className="absolute left-1/2 top-0 h-[480px] w-[1000px] -translate-x-1/2 bg-gradient-to-b from-indigo-100/70 via-sky-50/40 to-transparent blur-3xl dark:from-indigo-950/20 dark:via-[#172642]/10 dark:to-transparent" />
      </div>

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumbs"
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
            JPG to PNG
          </span>
        </nav>

        {/* Hero Section */}
        <header className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200/80 bg-indigo-50/80 px-3.5 py-1 text-xs font-medium tracking-wide text-indigo-700 shadow-sm backdrop-blur dark:border-indigo-900/60 dark:bg-indigo-950/40 dark:text-indigo-300">
            <Sparkles className="h-3.5 w-3.5 text-indigo-600 dark:text-indigo-400" />
            <span>Browser-Based Processing • No Conversion-Server Upload</span>
          </div>

          <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Convert JPG to PNG Online Free
          </h1>

          <p className="mt-3.5 text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
            Convert JPEG images to PNG format in your browser. PNG uses lossless
            encoding, but it cannot restore detail already lost in the original
            JPG. Add multiple files and download the converted results together.
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs font-medium text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" /> No server
              file transfer
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" /> Free batch &
              ZIP downloads
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" /> No added watermark
            </span>
          </div>
        </header>

        {/* Converter Tool Area */}
        <section
          aria-label="Image Converter Tool"
          className="mx-auto mt-8 max-w-3xl rounded-2xl border border-slate-200/90 bg-white/95 p-4 shadow-xl shadow-slate-200/40 backdrop-blur-md transition-all sm:p-7 dark:border-[#314969]/80 dark:bg-[#172642]/95 dark:shadow-black/40"
        >
          <ImageConverter initialFormat="png" />
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
              Browser-Based Image Conversion
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Most online converters upload your files to remote web servers.
              ConvertImageNow relies on modern client-side browser technology to
              processes supported images locally in your browser.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURE_CARDS.map(({ icon: Icon, title, desc, accent }) => (
              <div
                key={title}
                className="group relative rounded-xl border border-slate-200/80 bg-white/70 p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-md dark:border-[#314969] dark:bg-[#172642]/60 dark:hover:border-indigo-800"
              >
                <div
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${accent}`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-3 text-base font-semibold text-slate-900 dark:text-slate-100">
                  {title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Step-by-Step Guide Section */}
        <section
          aria-labelledby="how-to-heading"
          className="mx-auto mt-16 max-w-4xl rounded-2xl border border-slate-200/80 bg-white/60 p-6 shadow-sm sm:p-8 dark:border-[#314969] dark:bg-[#172642]/40"
        >
          <div className="max-w-2xl">
            <h2
              id="how-to-heading"
              className="text-2xl font-bold tracking-tight sm:text-3xl"
            >
              How to Convert JPG to PNG in 4 Simple Steps
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Converting an image shouldn&apos;t require desktop installations or
              convoluted menus. Here is how our browser tool works:
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="relative flex flex-col rounded-lg border border-slate-200/70 bg-white p-4 shadow-sm dark:border-[#314969] dark:bg-[#172642]">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                1
              </span>
              <h3 className="mt-3 text-sm font-semibold">Select JPG Files</h3>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                Drag and drop your .jpg or .jpeg images directly into the converter box, or click browse to pick files.
              </p>
            </div>

            <div className="relative flex flex-col rounded-lg border border-slate-200/70 bg-white p-4 shadow-sm dark:border-[#314969] dark:bg-[#172642]">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                2
              </span>
              <h3 className="mt-3 text-sm font-semibold">Confirm PNG Output</h3>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                Ensure PNG is chosen in the target format dropdown. You can also fine-tune settings or add extra images.
              </p>
            </div>

            <div className="relative flex flex-col rounded-lg border border-slate-200/70 bg-white p-4 shadow-sm dark:border-[#314969] dark:bg-[#172642]">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                3
              </span>
              <h3 className="mt-3 text-sm font-semibold">Execute Conversion</h3>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                Click Convert. Your browser decodes the image and exports a PNG file using the Canvas API.
              </p>
            </div>

            <div className="relative flex flex-col rounded-lg border border-slate-200/70 bg-white p-4 shadow-sm dark:border-[#314969] dark:bg-[#172642]">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                4
              </span>
              <h3 className="mt-3 text-sm font-semibold">Download PNG Files</h3>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                Save individual PNG files directly to your device or click Download All to retrieve a tidy ZIP archive.
              </p>
            </div>
          </div>
        </section>

        {/* Educational Content Section */}
        <section className="mx-auto mt-16 max-w-4xl space-y-12">
          <div className="rounded-2xl border border-amber-200/90 bg-amber-50/50 p-6 shadow-sm dark:border-amber-900/60 dark:bg-amber-950/20 sm:p-7">
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-amber-100 p-2 text-amber-700 dark:bg-amber-900/60 dark:text-amber-300">
                <HelpCircle className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-amber-950 dark:text-amber-200">
                  Critical Fact: Does Converting JPG to PNG Add a Transparent Background?
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-amber-900/90 dark:text-amber-200/80">
                  A common misconception is that converting a JPG to PNG automatically erases the background to make it transparent.{" "}
                  <strong>It does not.</strong> JPG files do not contain an alpha channel; their background pixels are solid color values (usually white, black, or gray).
                </p>
                <p className="mt-2 text-sm leading-relaxed text-amber-900/90 dark:text-amber-200/80">
                  When converted, the image is encoded into the PNG format (which <em>supports</em> transparency), but the background remains solid until manually clipped with a graphic editor or AI background remover. What converting does achieve is preventing further compression artifacts during your design and editing workflow.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <article className="rounded-xl border border-slate-200/80 bg-white p-6 shadow-sm dark:border-[#314969] dark:bg-[#172642]">
              <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                Why Convert from JPG to PNG?
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-600 dark:text-indigo-400" />
                  <span>
                    <strong>Understand format conversion:</strong> PNG encoding is lossless, but converting an already-compressed JPG to PNG does not recover detail lost in the original JPG.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-600 dark:text-indigo-400" />
                  <span>
                    <strong>Preparation for Alpha Transparency:</strong> Once saved in PNG format, you can open the file in Photoshop, Figma, or GIMP and punch out transparent layers that save correctly.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-600 dark:text-indigo-400" />
                  <span>
                    <strong>Strict Platform Compliance:</strong> Many government portals, application submission forms, and web apps require uncompressed PNG files for legal documentation and ID verification.
                  </span>
                </li>
              </ul>
            </article>

            <article className="rounded-xl border border-slate-200/80 bg-white p-6 shadow-sm dark:border-[#314969] dark:bg-[#172642]">
              <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                How ConvertImageNow Protects Your Files
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-2.5">
                  <Lock className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                  <span>
                    <strong>Browser Processing:</strong> The selected image data is processed in your browser rather than uploaded to a conversion server. General website requests and analytics are covered by the Privacy Policy.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Cpu className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                  <span>
                    <strong>Canvas API Processing:</strong> The browser draws your image into an in-memory bitmap canvas element and serializes it to a PNG Blob using the browser Canvas API.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Zap className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                  <span>
                    <strong>Temporary browser data:</strong> The browser manages temporary image data and object URLs used during conversion.
                  </span>
                </li>
              </ul>
            </article>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm dark:border-[#314969] dark:bg-[#172642]">
            <div className="border-b border-slate-200/90 bg-slate-100/60 px-6 py-4 dark:border-[#314969] dark:bg-[#263956]/50">
              <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                Technical Comparison: JPG (JPEG) vs. PNG
              </h2>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                Understanding the mathematical and structural differences between lossy DCT and lossless DEFLATE formats.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-700 dark:text-slate-300">
                <thead className="border-b border-slate-200/80 bg-slate-50 text-xs uppercase font-semibold text-slate-600 dark:border-[#314969] dark:bg-[#101B33]/40 dark:text-slate-400">
                  <tr>
                    <th scope="col" className="px-6 py-3.5">
                      Specification
                    </th>
                    <th scope="col" className="px-6 py-3.5 text-indigo-700 dark:text-indigo-400">
                      JPG / JPEG
                    </th>
                    <th scope="col" className="px-6 py-3.5 text-emerald-700 dark:text-emerald-400">
                      PNG
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200/70 dark:divide-[#314969]">
                  {COMPARISON_ROWS.map((row) => (
                    <tr
                      key={row.feature}
                      className="hover:bg-slate-50/50 dark:hover:bg-[#263956]/40"
                    >
                      <td className="px-6 py-4 font-medium text-slate-900 dark:text-slate-100">
                        {row.feature}
                      </td>
                      <td className="px-6 py-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                        {row.jpg}
                      </td>
                      <td className="px-6 py-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                        {row.png}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-slate-900 dark:text-slate-100">
              Converting JPG to PNG Across Devices
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              ConvertImageNow requires no specialized software or app store downloads. Use it across any desktop or mobile operating system:
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-200/80 bg-white p-5 shadow-sm dark:border-[#314969] dark:bg-[#172642]">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-indigo-50 p-2 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400">
                    <Monitor className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                    Windows & macOS Desktop
                  </h3>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                  Open a supported browser, add multiple JPG images to the queue, and convert them to PNG. Download the results individually or together as a ZIP archive.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200/80 bg-white p-5 shadow-sm dark:border-[#314969] dark:bg-[#172642]">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-emerald-50 p-2 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
                    <Smartphone className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                    iPhone, iPad & Android
                  </h3>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                  Open the site in Mobile Safari or Chrome. Tap the upload area to choose photos from your Photo Library or File manager. Converted PNGs can be saved directly back to your device camera roll.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200/80 bg-slate-100/50 p-6 sm:p-8 dark:border-[#314969] dark:bg-[#172642]/50">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                  Explore Complementary Image Tools
                </h2>
                <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                  Convert, compress, and optimize visual assets right inside your browser without installing software.
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

          <div className="space-y-6">
            <div className="text-center sm:text-left">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                Frequently Asked Questions
              </h2>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                Direct answers to common technical questions about converting JPG files to PNG.
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
