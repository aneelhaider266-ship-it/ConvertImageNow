import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Clock, Zap, ShieldCheck } from "lucide-react";

const SITE_URL = "https://convertimagenow.com";
const PAGE_URL = `${SITE_URL}/tools`;

export const metadata: Metadata = {
  title: "Free Online Image Tools | ConvertImageNow",
  description:
    "Explore ConvertImageNow free online image tools. Fast, private browser-based utilities to convert, compress, and resize JPG, PNG, WebP, and AVIF photos.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Free Online Image Tools | ConvertImageNow",
    description:
      "Explore our complete suite of browser-based image converters, compressors, and resizers.",
    url: PAGE_URL,
    siteName: "ConvertImageNow",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Online Image Tools | ConvertImageNow",
    description:
      "Convert, compress, and resize images locally in your browser with zero server uploads.",
  },
};

const LIVE_TOOLS = [
  {
    title: "Image Converter",
    desc: "Convert between JPG, PNG, WebP, and AVIF",
    href: "/converter",
  },
  {
    title: "HEIC to JPG Converter",
    desc: "Convert iPhone HEIC photos to JPG",
    href: "/heic-to-jpg",
  },
  {
    title: "AVIF to JPG Converter",
    desc: "Convert modern AVIF images to JPG",
    href: "/avif-to-jpg",
  },
  {
    title: "PNG to JPG Converter",
    desc: "Convert PNG images to JPG",
    href: "/png-to-jpg",
  },
  {
    title: "JPG to PNG Converter",
    desc: "Convert JPG images to PNG",
    href: "/jpg-to-png",
  },
  {
    title: "JPG to WebP Converter",
    desc: "Convert JPG images to WebP",
    href: "/jpg-to-webp",
  },
  {
    title: "Image Compressor",
    desc: "Compress JPG, PNG, and WebP without losing quality",
    href: "/image-compressor",
  },
  {
    title: "Image Resizer",
    desc: "Resize images by exact pixels or percentage",
    href: "/image-resizer",
  },
];

const UPCOMING = [
  "Crop Image",
  "Rotate Image",
  "Convert WebP to JPG",
  "Convert AVIF to PNG",
  "Image Optimizer",
];

const TOOLS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "ConvertImageNow Image Tools Suite",
  url: PAGE_URL,
  description:
    "Directory of free online image utilities including converters, compressors, and resizers.",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: LIVE_TOOLS.map((tool, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: tool.title,
      url: `${SITE_URL}${tool.href}`,
      description: tool.desc,
    })),
  },
};

export default function ToolsPage() {
  return (
    <div className="container-page py-14 sm:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(TOOLS_SCHEMA),
        }}
      />

      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Free Online Image Tools
        </h1>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          Eight professional image utilities are live today, with more active
          features in development. All tools execute locally on your device with
          zero file uploads and complete data privacy.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-3xl">
        <div className="space-y-3">
          {LIVE_TOOLS.map((tool) => (
            <div
              key={tool.href}
              className="flex items-center justify-between rounded-2xl border border-brand-accent/30 bg-brand-accent/5 p-5 transition-shadow hover:shadow-sm"
            >
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-brand-accent shrink-0" size={22} />
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">{tool.title}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {tool.desc}
                  </p>
                </div>
              </div>
              <Link
                href={tool.href}
                className="rounded-full bg-brand-primary px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                Open
              </Link>
            </div>
          ))}
        </div>

        <h2 className="mt-12 text-xl font-semibold text-slate-900 dark:text-white">Upcoming Tools & Roadmap</h2>
        <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {UPCOMING.map((tool) => (
            <li
              key={tool}
              className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-600 dark:border-slate-800 dark:text-slate-400"
            >
              <Clock size={16} className="flex-shrink-0 text-slate-400" />
              {tool}
            </li>
          ))}
        </ul>

        <div className="mt-14 space-y-6 text-left text-slate-700 dark:text-slate-300">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">One Universal Converter Suite, Built to Scale</h2>
          <p>
            ConvertImageNow offers a complete browser-based workstation for
            developers, web designers, content creators, and photographers. Our
            tools eliminate common headaches like email attachment size limits,
            government upload caps, and slow-loading websites.
          </p>
          <p>
            Every utility on this platform is powered by modern HTML5 Canvas, Web
            Workers, and WebAssembly decoders. Unlike legacy cloud converters that
            force you to wait in server queues, our conversions process
            instantaneously using your device&apos;s own CPU and GPU memory.
          </p>
          <p>
            Whether you are batch-converting dozens of camera snapshots into
            compact WebP files for better Google Core Web Vitals, or flattening
            transparent PNG graphics into standard JPG images, your photos never
            leave your browser. No registration is required, no subscriptions
            exist, and no watermarks are ever stamped on your downloads.
          </p>
          <p>
            Have a feature request or need a specialized conversion preset? Feel
            free to{" "}
            <Link href="/contact" className="text-brand-primary hover:underline">
              contact our support team
            </Link>{" "}
            anytime.
          </p>
        </div>
      </div>
    </div>
  );
}
