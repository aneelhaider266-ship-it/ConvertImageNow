import type { Metadata } from "next";
import Link from "next/link";
import {
  Zap,
  Lock,
  Gift,
  Infinity as InfinityIcon,
  Layers,
  ArrowRight,
  ShieldCheck,
  Image as ImageIcon,
  Cpu,
  SlidersHorizontal,
  CheckCircle2,
} from "lucide-react";
import ImageConverter from "@/components/ImageConverter";

const SITE_URL = "https://convertimagenow.com";

export const metadata: Metadata = {
  title: "Free Online Image Converter – Convert JPG, PNG & WebP",
  description:
    "Convert images online directly in your browser. Browser-based image conversion for JPG, PNG, WebP, and supported AVIF files, with batch processing and no conversion-server upload.",
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  openGraph: {
    title: "Free Online Image Converter – Private In-Browser Image Conversion",
    description:
      "Convert supported image formats in your browser. Batch processing, adjustable output quality, and ZIP downloads.",
    url: `${SITE_URL}/`,
    siteName: "ConvertImageNow",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Online Image Converter | ConvertImageNow",
    description:
      "Convert supported image formats in your browser with batch processing and adjustable output quality.",
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

const CONVERTER_TOOLS = [
  {
    category: "Popular Conversions",
    description: "Popular everyday image format transformations",
    tools: [
      {
        name: "PNG to JPG Converter",
        slug: "/png-to-jpg",
        badge: "Format Conversion",
        from: "PNG",
        to: "JPG",
        desc: "Convert PNG images to JPG for photographs that do not need transparency. Compare file size and visual quality after conversion.",
      },
      {
        name: "JPG to PNG Converter",
        slug: "/jpg-to-png",
        badge: "PNG Output",
        from: "JPG",
        to: "PNG",
        desc: "Convert JPG images to PNG when you need a PNG file for graphics workflows. Converting to PNG does not restore detail lost in the original JPG.",
      },
      {
        name: "JPG to WebP Converter",
        slug: "/jpg-to-webp",
        badge: "Core Web Vitals",
        from: "JPG",
        to: "WEBP",
        desc: "Convert JPG images to WebP. Resulting file size and visual quality depend on the source image and chosen settings.",
      },
    ],
  },
  {
    category: "Modern Image Formats",
    description: "Convert supported modern image formats for broader compatibility",
    tools: [
      {
        name: "AVIF to JPG Converter",
        slug: "/avif-to-jpg",
        badge: "Compatibility",
        from: "AVIF",
        to: "JPG",
        desc: "Convert supported AVIF images to JPG. Browser format support can vary by device and browser.",
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
        desc: "Reduce image file size with adjustable output quality. Results depend on the source image and chosen settings.",
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
    title: "Private Browser Processing",
    desc: "Supported image conversions are processed locally in your browser. The converter does not send those image files to a conversion server.",
    highlight: "Zero Server Uploads",
  },
  {
    icon: Zap,
    title: "Local Browser Processing",
    desc: "Supported conversions run in your browser using the Canvas API. Processing speed depends on your device, image dimensions, and browser.",
    highlight: "No server upload",
  },
  {
    icon: Layers,
    title: "Batch Conversion",
    desc: "Add multiple supported images to the queue, convert them, and download files individually or together as a ZIP archive.",
    highlight: "Batch Ready",
  },
  {
    icon: SlidersHorizontal,
    title: "Output Quality Control",
    desc: "Adjust output quality for JPG and WebP. PNG output does not use the lossy quality slider.",
    highlight: "Precise Control",
  },
  {
    icon: InfinityIcon,
    title: "Free to Use",
    desc: "Use the browser-based converter without creating an account. Practical file limits depend on your device and available browser memory.",
    highlight: "No Account Needed",
  },
  {
    icon: Gift,
    title: "Watermark-Free Downloads",
    desc: "Converted files are exported without an added ConvertImageNow watermark. Canvas-based conversion may not preserve all original metadata.",
    highlight: "No Added Watermark",
  },
];

const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Select or Drop Images",
    desc: "Choose supported image files from your device and add them to the conversion queue. The main converter accepts JPG, PNG, WebP, and AVIF inputs.",
  },
  {
    step: "02",
    title: "Target Output & Balance Quality",
    desc: "Choose JPG, PNG, or WebP as the output format. Adjust quality for JPG and WebP; PNG output does not use the lossy quality slider.",
  },
  {
    step: "03",
    title: "Browser-Based Conversion",
    desc: "The browser decodes supported images and converts them with the Canvas API. The image data is processed locally rather than sent to a conversion server.",
  },
  {
    step: "04",
    title: "Download Clean Files or Archive",
    desc: "Download converted images individually or together in a ZIP archive.",
  },
];

const FORMAT_COMPARISON = [
  {
    format: "JPG / JPEG",
    bestFor: "Photographs, complex color gradients, camera exports",
    transparency: "No",
    compression: "Lossy; quality and file size depend on encoder settings",
    compatibility: "Very broad support; confirm requirements for specialist workflows",
    verdict: "Essential fallback when broad compatibility is paramount.",
  },
  {
    format: "PNG",
    bestFor: "Logos, UI icons, sharp text, screenshots, line art",
    transparency: "Yes",
    compression: "Lossless (DEFLATE)",
    compatibility: "Very broad support across browsers and operating systems",
    verdict: "Standard for crisp transparent graphics where artifacts are unacceptable.",
  },
  {
    format: "WebP",
    bestFor: "Production websites, Core Web Vitals, hero headers",
    transparency: "Yes (Lossy & Lossless)",
    compression: "Lossy and lossless options; file size varies by image and settings",
    compatibility: "Supported by modern browsers; check older-device requirements",
    verdict: "A practical web format when browser support and output size suit your use case.",
  },
  {
    format: "AVIF",
    bestFor: "Next-gen web graphics, extreme data compression",
    transparency: "Yes",
    compression: "AV1-based compression; results vary by image and encoder",
    compatibility: "Supported by many modern browsers; check target-device compatibility",
    verdict: "Often offers strong compression; compare output quality, encoding time, and browser support.",
  },
];

const REAL_WORLD_USE_CASES = [
  {
    title: "Core Web Vitals & Google PageSpeed Optimization",
    scenario: "Fix slow Largest Contentful Paint (LCP) caused by oversized banners",
    solution:
      "Converting suitable large JPG or PNG images to WebP or AVIF can reduce transfer size. Measure the result and test page performance after changing formats.",
  },
  {
    title: "Overcoming Strict Marketplace & CMS Upload Limits",
    scenario: "E-commerce portals rejecting oversized product images",
    solution:
      "Image upload requirements vary by marketplace and listing type. Check the current platform requirements before converting an image for upload.",
  },
  {
    title: "Eliminating Transparency Bloat on Solid Backgrounds",
    scenario: "Accidental PNG captures bloating blog layouts and newsletters",
    solution:
      "For photographs without transparency, JPG may produce smaller files than PNG. Compare the output visually and choose a quality setting appropriate for the image.",
  },
  {
    title: "Cross-Platform Asset Distribution & Printing",
    scenario: "Sharing image files across devices and applications",
    solution:
      "Image compatibility varies across operating systems, apps, and upload forms. Check the destination requirements and choose a supported format when a JPG copy is needed.",
  },
];

const HOMEPAGE_FAQS = [
  {
    q: "Is ConvertImageNow completely free to use?",
    a: "The converter is available without an account. The number and size of images you can process at once may depend on your device and browser memory.",
  },
  {
    q: "Are my uploaded photos kept private and secure?",
    a: "The supported conversion workflow processes image data in your browser rather than uploading it to a conversion server. Normal website requests, such as loading the page, may still contact the site.",
  },
  {
    q: "What is the difference between converting to WebP versus JPG?",
    a: "WebP supports lossy and lossless compression as well as transparency. Whether it produces a smaller file than JPG depends on the image and encoding settings. JPG does not support transparency.",
  },
  {
    q: "Can I convert multiple images at the same time?",
    a: "Yes. ConvertImageNow supports client-side batch processing. Drop multiple files into the conversion area, pick your target format and compression level, and download all files individually or packaged as a single ZIP archive.",
  },
  {
    q: "Will converting an image degrade its visual quality?",
    a: "Converting to JPG or lossy WebP can reduce image quality, depending on the selected setting. PNG output does not use the quality slider. Keep an original copy if preserving the source is important.",
  },
  {
    q: "Does ConvertImageNow work on mobile phones?",
    a: "Yes. ConvertImageNow is fully responsive and functions seamlessly across iOS (Safari) and Android (Chrome, Firefox, Samsung Internet). You can convert photos directly from your phone's photo library or camera roll.",
  },
  {
    q: "Do you place watermarks on converted images?",
    a: "The converter does not add a ConvertImageNow watermark to converted downloads. Format conversion can change image encoding and may not preserve all original metadata.",
  },
];

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: "ConvertImageNow",
        description:
          "Free online image converter for browser-based batch conversion of supported JPG, PNG, WebP, and AVIF images.",
        inLanguage: "en-US",
      },
      {
        "@type": "WebApplication",
        "@id": `${SITE_URL}/#webapp`,
        name: "ConvertImageNow Universal Image Converter",
        url: `${SITE_URL}/`,
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
          "Adjustable quality for supported lossy output formats",
          "No added watermark on converted downloads",
          "JPG, PNG, WebP, and supported AVIF input formats",
        ],
      },
      {
        "@type": "ItemList",
        "@id": `${SITE_URL}/#tool-directory`,
        name: "ConvertImageNow Image Conversion Suite",
        description:
          "Directory of specialized image conversion tools and utilities available on ConvertImageNow.",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "PNG to JPG Converter",
            url: `${SITE_URL}/png-to-jpg`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "JPG to PNG Converter",
            url: `${SITE_URL}/jpg-to-png`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "JPG to WebP Converter",
            url: `${SITE_URL}/jpg-to-webp`,
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "AVIF to JPG Converter",
            url: `${SITE_URL}/avif-to-jpg`,
          },
          {
            "@type": "ListItem",
            position: 5,
            name: "Online Image Compressor",
            url: `${SITE_URL}/image-compressor`,
          },
          {
            "@type": "ListItem",
            position: 6,
            name: "Online Image Resizer",
            url: `${SITE_URL}/image-resizer`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
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

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-[#263956] bg-gradient-to-b from-[#172642] via-[#101B33] to-[#101B33] py-10 dark:border-[#263956] sm:py-16 lg:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-brand-primary/20 to-brand-accent/20 opacity-40 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] dark:opacity-20" />
        </div>

        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex max-w-full items-center justify-center gap-2 rounded-full border border-[#398BFF]/30 bg-[#398BFF]/10 px-3 py-1.5 text-[10px] font-medium leading-snug tracking-wide text-[#9CC5FF] sm:px-3.5 sm:py-1 sm:text-xs">
              <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-emerald-600 dark:text-emerald-400" />
              <span>Browser-Based Processing • No Conversion-Server Upload</span>
            </div>

            <h1 className="mt-5 text-[2rem] font-extrabold leading-[1.12] tracking-tight text-white sm:text-5xl sm:leading-tight lg:text-6xl">
              Free Online Image Converter
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
              Convert JPG, PNG, WebP, and supported AVIF files in your browser. Batch process images, choose an output format, and download converted files without uploading them to a conversion server.
            </p>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-slate-500 dark:text-slate-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-brand-primary" />
                No server-side image uploads
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

          <div className="mx-auto mt-7 flex max-w-2xl items-center justify-center gap-2 rounded-2xl border border-[#314969] bg-[#172642]/70 px-2 py-3 shadow-xl shadow-black/20 sm:mt-10 sm:gap-6 sm:px-8 sm:py-6" aria-label="JPG, PNG and WebP image format illustration">
            {["JPG", "PNG", "WebP"].map((format, index) => (
              <div key={format} className="flex items-center gap-3 sm:gap-6">
                <div className="flex h-14 w-14 flex-col items-center justify-center rounded-xl border border-[#398BFF]/35 bg-[#101B33] text-[#9CC5FF] shadow-lg shadow-[#398BFF]/10 sm:h-20 sm:w-20">
                  <ImageIcon aria-hidden="true" className="h-7 w-7 sm:h-9 sm:w-9" />
                  <span className="text-[10px] font-bold tracking-wider sm:text-xs">{format}</span>
                </div>
                {index < 2 && <ArrowRight className="h-5 w-5 shrink-0 text-[#398BFF] sm:h-7 sm:w-7" aria-hidden="true" />}
              </div>
            ))}
          </div>

          <div className="mx-auto mt-7 max-w-4xl rounded-2xl border border-[#314969] bg-[#172642]/95 p-2 shadow-2xl shadow-black/30 backdrop-blur-xl sm:mt-10 sm:p-4">
            <ImageConverter />
          </div>
        </div>
      </section>

      {/* Tool Directory */}
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
            Choose a tool for common format conversions, image compression, or resizing.
          </p>
        </div>

        <div className="mt-14 space-y-12">
          {CONVERTER_TOOLS.map((group) => (
            <div key={group.category}>
              <div className="mb-5 flex flex-col justify-between border-b border-slate-200/80 pb-3 dark:border-[#314969] sm:flex-row sm:items-end">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {group.category}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-300">
                    {group.description}
                  </p>
                </div>
                <span className="mt-2 text-xs font-semibold text-slate-400 dark:text-slate-400 sm:mt-0">
                  {group.tools.length} Tools Available
                </span>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {group.tools.map((tool) => (
                  <Link
                    key={tool.slug}
                    href={tool.slug}
                    className="group relative flex flex-col justify-between rounded-xl border border-[#314969] bg-[#172642]/80 p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#398BFF]/70 hover:bg-[#1b2d4c] hover:shadow-lg hover:shadow-[#398BFF]/10"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 dark:text-slate-200">
                          <span className="rounded bg-[#101B33] px-1.5 py-0.5 text-slate-200">
                            {tool.from}
                          </span>
                          <ArrowRight className="h-3 w-3 text-brand-primary" />
                          <span className="rounded bg-brand-primary/10 px-1.5 py-0.5 text-brand-primary">
                            {tool.to}
                          </span>
                        </div>
                        <span className="rounded-full border border-[#314969] bg-[#101B33] px-2 py-0.5 text-[10px] font-semibold text-slate-300">
                          {tool.badge}
                        </span>
                      </div>

                      <h4 className="mt-4 text-base font-semibold text-slate-900 transition-colors group-hover:text-brand-primary dark:text-white dark:group-hover:text-brand-primary">
                        {tool.name}
                      </h4>

                      <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
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

      {/* Benefits Section */}
      <section className="border-y border-slate-200/80 bg-slate-50/50 py-16 dark:border-[#314969] dark:bg-[#101B33]/60 sm:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">
              Designed for Browser-Based Processing
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Why Convert Images with ConvertImageNow?
            </h2>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
              For supported formats, image conversion runs in your browser using its
              image decoding and Canvas APIs. Selected image files are not sent
              to a conversion server.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CORE_BENEFITS.map((b) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.title}
                  className="rounded-2xl border border-slate-200/80 bg-white p-7 shadow-sm transition-shadow hover:shadow-md dark:border-[#314969] dark:bg-[#172642]"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400">
                      {b.highlight}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-900 dark:text-white">
                    {b.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {b.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
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
              className="relative flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm dark:border-[#314969] dark:bg-[#172642]"
            >
              <div>
                <span className="font-mono text-3xl font-black text-brand-primary/30">
                  {step.step}
                </span>
                <h3 className="mt-3 text-lg font-bold text-slate-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Format Comparison Table */}
      <section className="border-y border-slate-200/80 bg-slate-50/50 py-16 dark:border-[#314969] dark:bg-[#101B33]/60 sm:py-24">
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

          <div className="mt-12 overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm dark:border-[#314969] dark:bg-[#172642]">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="border-b border-slate-200 bg-slate-100/60 text-xs font-bold uppercase tracking-wider text-slate-700 dark:border-[#314969] dark:bg-[#172642] dark:text-slate-300">
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
                <tbody className="divide-y divide-slate-200/80 dark:divide-[#314969]">
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
                      <td className="px-6 py-4 text-slate-600 dark:text-slate-300">
                        {row.transparency}
                      </td>
                      <td className="px-6 py-4 text-slate-600 dark:text-slate-300">
                        {row.compression}
                      </td>
                      <td className="px-6 py-4 text-slate-600 dark:text-slate-300">
                        {row.compatibility}
                      </td>
                      <td className="px-6 py-4 text-xs leading-relaxed text-slate-500 dark:text-slate-300">
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

      {/* Practical Use Cases */}
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
              className="rounded-2xl border border-slate-200/80 bg-white p-7 shadow-sm dark:border-[#314969] dark:bg-[#172642]"
            >
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {uc.title}
              </h3>
              <div className="mt-2 inline-block rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600 dark:bg-[#101B33] dark:text-slate-300">
                Issue: {uc.scenario}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {uc.solution}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* In-Browser Security Deep Dive */}
      <section className="border-y border-slate-200/80 bg-slate-50/50 py-16 dark:border-[#314969] dark:bg-[#101B33]/60 sm:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200/90 bg-white p-8 shadow-sm dark:border-[#314969] dark:bg-[#172642] sm:p-12">
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
                For supported formats, ConvertImageNow processes image data locally in your browser rather than uploading the selected image to a conversion server.
              </p>

              <p>
                <strong>ConvertImageNow works fundamentally differently.</strong>{" "}
                The converter uses the browser’s image decoding and Canvas capabilities to create the selected output format. The conversion workflow does not upload the selected image to a conversion server.
              </p>

              <div className="grid gap-4 pt-4 sm:grid-cols-3">
                <div className="rounded-xl border border-slate-200/70 p-4 dark:border-[#314969]">
                  <p className="font-mono text-xl font-bold text-brand-primary">
                    Local
                  </p>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-300">
                    Image conversion runs in your browser
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200/70 p-4 dark:border-[#314969]">
                  <p className="font-mono text-xl font-bold text-brand-primary">
                    Canvas API
                  </p>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-300">
                    Uses browser image processing capabilities
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200/70 p-4 dark:border-[#314969]">
                  <p className="font-mono text-xl font-bold text-brand-primary">
                    Your Device
                  </p>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-300">
                    Keep your original files under your control
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              className="group rounded-2xl border border-slate-200/80 bg-white p-6 transition-all open:border-brand-primary/40 open:shadow-sm dark:border-[#314969] dark:bg-[#172642]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-slate-900 dark:text-white">
                <span className="text-base">{faq.q}</span>
                <span
                  aria-hidden="true"
                  className="ml-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-500 transition-transform duration-200 group-open:rotate-45 dark:bg-[#101B33] dark:text-slate-300"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
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

      {/* Featured Articles Section */}
      <section className="border-t border-slate-200/80 bg-slate-50/50 py-16 dark:border-[#314969] dark:bg-[#101B33]/60 sm:py-24">
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
                  "Compare file size and visual quality using the same source image; results vary with content and encoding settings.",
                href: "/blog/jpg-vs-webp",
                category: "Format Comparison",
              },
              {
                title:
                  "How to Make an Image File Smaller Without Losing Quality",
                excerpt:
                  "Learn how image dimensions, file formats, and quality settings affect file size. Results vary by the original image and conversion settings.",
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
                className="group flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-brand-primary/60 hover:shadow-md dark:border-[#314969] dark:bg-[#172642]"
              >
                <div>
                  <span className="inline-flex items-center rounded-full bg-brand-primary/10 px-3 py-1 text-xs font-semibold text-brand-primary">
                    {post.category}
                  </span>
                  <h3 className="mt-4 text-base font-bold text-slate-900 transition-colors group-hover:text-brand-primary dark:text-white dark:group-hover:text-brand-primary">
                    {post.title}
                  </h3>
                  <p className="mt-2.5 line-clamp-3 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
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

      {/* CTA Banner */}
      <section className="container-page py-16 sm:py-20">
        <div className="relative overflow-hidden rounded-3xl bg-slate-900 px-8 py-14 text-center text-white shadow-2xl dark:border dark:border-[#314969] sm:px-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-primary/20 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-brand-accent/20 blur-3xl"
          />

          <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">
            Browser-Based Image Utility
          </span>
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
            Start Converting Your Images Today
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
            No registration or added watermarks. Supported image conversions run locally in your browser.
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
