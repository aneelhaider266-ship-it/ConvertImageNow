import type { Metadata } from "next";
import ToolBreadcrumbs from "@/components/ToolBreadcrumbs";
import ImageConverter from "@/components/ImageConverter";
import {
  ShieldCheck,
  WifiOff,
  Infinity as InfinityIcon,
  FileWarning,
  Monitor,
  Apple,
  Smartphone,
  Zap,
  Layers,
} from "lucide-react";

const SITE_URL = "https://convertimagenow.com";
const PAGE_URL = `${SITE_URL}/png-to-jpg`;
const OG_IMAGE = `${SITE_URL}/png-to-jpg/og-image.webp`;

export const metadata: Metadata = {
  title: "PNG to JPG Converter – Convert PNG to JPG Online Free",
  description:
    "Convert PNG to JPG (JPEG) online for free. Browser-based conversion with JPG quality controls, multiple-file selection, and ZIP downloads.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "PNG to JPG Converter – Convert PNG to JPG Online Free",
    description:
      "Convert PNG to JPG (JPEG) online for free. Browser-based conversion with adjustable JPG output quality.",
    type: "website",
    url: PAGE_URL,
    images: [{ url: OG_IMAGE }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PNG to JPG Converter – Convert PNG to JPG Online Free",
    description:
      "Convert PNG to JPG (JPEG) online for free. Private, browser-based conversion — no upload, no signup, no watermark.",
    images: [OG_IMAGE],
  },
};

const POINTS = [
  {
    icon: ShieldCheck,
    title: "Browser-Based Processing",
    desc: "Selected image files are processed in your browser rather than sent to a conversion server.",
  },
  {
    icon: WifiOff,
    title: "No Conversion-Server Upload",
    desc: "The selected image data is processed by your browser Canvas API. An internet connection may still be needed to load the website and its resources.",
  },
  {
    icon: InfinityIcon,
    title: "Batch Downloads",
    desc: "Add multiple supported PNG files and download JPG results individually or together as a ZIP. Practical capacity depends on your device and browser memory.",
  },
];

const DEVICES = [
  {
    icon: Apple,
    name: "Mac & iPhone",
    steps: [
      "Open this page in Safari or Chrome.",
      "Select your PNG images or screenshots.",
      "Choose JPG as the output format.",
      "Adjust quality to reduce file size.",
      "Download your new JPG files directly.",
    ],
  },
  {
    icon: Monitor,
    name: "Windows PC",
    steps: [
      "Open the converter in Edge, Chrome, or Firefox.",
      "Drag and drop your PNG files into the box.",
      "Ensure JPG is selected as output.",
      "Click convert to process the files locally.",
      "Download the JPGs (or save as a ZIP archive).",
    ],
  },
  {
    icon: Smartphone,
    name: "Android Devices",
    steps: [
      "Open ConvertImageNow in your mobile browser.",
      "Tap to upload a PNG from your gallery.",
      "Select JPG format.",
      "Tap convert to process the selected images in your browser.",
      "Save the JPG directly to your photos.",
    ],
  },
];

const FAQS = [
  {
    q: "Is this PNG to JPG converter really free?",
    a: "Yes. ConvertImageNow provides free browser-based PNG to JPG conversion without requiring registration or adding a watermark.",
  },
  {
    q: "Is JPG the same as JPEG?",
    a: "Yes. JPG and JPEG refer to the same image format. JPG is simply the shortened file extension used on some systems, while JPEG is the full name of the format. Whether you search for a way to convert png to jpeg or png to jpg, you'll end up with the same result here.",
  },
  {
    q: "Will converting PNG to JPG lose the transparent background?",
    a: "Yes. JPG does not support transparency, so any transparent areas in your PNG will be filled with a solid background (white by default) when converted to JPG.",
  },
  {
    q: "Can I convert multiple PNG files at once?",
    a: "Yes. You can select multiple PNG images, convert them together, and download the results individually or as a ZIP archive — Batch capacity depends on your device and available browser memory.",
  },
  {
    q: "Are my images uploaded to a server?",
    a: "The selected image data is processed locally in your browser using the HTML5 Canvas API rather than uploaded to a conversion server.",
  },
  {
    q: "Does converting PNG to JPG reduce image quality?",
    a: "JPG uses lossy compression, but you can adjust the quality setting to balance file size and visual quality.",
  },
  {
    q: "Why is my JPG file so much smaller than the original PNG?",
    a: "PNG is lossless and supports transparency. JPG uses lossy compression and may create smaller files for photographs, but the size difference depends on the image and quality setting.",
  },
  {
    q: "Can I change PNG to JPG on my phone or tablet?",
    a: "Yes. This PNG to JPG converter online runs entirely in your browser, so you can convert PNG into JPG on any device — phone, tablet, or desktop — without installing an app.",
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
  "@type": "WebApplication",
  name: "PNG to JPG Converter",
  operatingSystem: "All",
  applicationCategory: "MultimediaApplication",
  browserRequirements: "Requires a modern web browser with HTML5 Canvas and JavaScript support.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  description:
    "Free, browser-based utility to convert PNG images to JPG format locally without server uploads.",
  url: PAGE_URL,
};

export default function PngToJpgPage() {
  return (
    <main className="container-page relative overflow-hidden pb-20 pt-16 sm:pb-32 sm:pt-24">
      <ToolBreadcrumbs label="PNG to JPG Converter" href="/png-to-jpg" />
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:linear-gradient(to_bottom,white_5%,transparent_90%)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-brand-primary/20 to-blue-500/20 opacity-40 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] dark:from-brand-primary/30 dark:to-blue-500/30" />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SOFTWARE_SCHEMA) }}
      />

      <section className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mb-6 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-primary/20 bg-brand-primary/5 px-4 py-1.5 text-sm font-medium text-brand-primary backdrop-blur-sm dark:border-brand-primary/30 dark:bg-brand-primary/10 dark:text-brand-primary/90">
            <Zap className="h-4 w-4" aria-hidden="true" />
            Free Browser-Based Conversion
          </span>
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
          PNG to JPG Converter
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300 sm:text-xl">
          Convert PNG images to JPG (JPEG) in your browser. Select multiple PNG files, adjust JPG output quality, and download the converted files individually or as a ZIP archive.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-slate-600 dark:text-slate-400">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-emerald-500" /> Secure
          </span>
          <span className="hidden h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-700 sm:block" />
          <span className="flex items-center gap-1.5">
            <Layers className="h-4 w-4 text-blue-500" /> Batch Support
          </span>
          <span className="hidden h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-700 sm:block" />
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-emerald-500" /> No Added Watermark
          </span>
        </div>
      </section>

      <section
        className="relative z-10 mx-auto mt-12 max-w-4xl px-4 sm:mt-16 sm:px-6 lg:px-8"
        aria-label="Image Converter Tool"
      >
        <div
          className="absolute inset-0 -z-10 rounded-[2.5rem] bg-gradient-to-b from-brand-primary/5 to-transparent blur-2xl dark:from-brand-primary/10"
          aria-hidden="true"
        />
        <ImageConverter initialFormat="jpg" />
      </section>

      <section className="mx-auto mt-24 max-w-4xl px-4 sm:mt-32 sm:px-6 lg:px-8">
        <div className="mb-24 grid gap-6 sm:grid-cols-3">
          {POINTS.map(({ icon: Icon, title, desc }) => (
            <article
              key={title}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white/60 p-6 shadow-sm backdrop-blur-xl transition-all hover:-translate-y-1 hover:shadow-md dark:border-[#314969] dark:bg-[#172642]/50"
            >
              <div
                className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-slate-50 opacity-50 transition-transform duration-500 group-hover:scale-150 dark:bg-[#263956]/30"
                aria-hidden="true"
              />

              <div className="relative mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-primary/10 text-brand-primary ring-1 ring-brand-primary/20 transition-transform group-hover:scale-110 group-hover:rotate-3 dark:bg-brand-primary/20 dark:ring-brand-primary/30">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>

              <h2 className="relative text-lg font-bold text-slate-900 dark:text-white">
                {title}
              </h2>

              <p className="relative mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {desc}
              </p>
            </article>
          ))}
        </div>

        <div className="prose prose-slate prose-lg max-w-none text-slate-700 dark:prose-invert dark:text-slate-300">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
            Why Convert PNG to JPG?
          </h2>
          <p>
            PNG is a lossless format that preserves transparency and sharp
            detail. A JPG copy may be smaller for some photographs, but the
            result depends on image content and quality settings. Converting
            PNG to JPEG is useful when you need a widely supported format for
            email attachments, websites, or platforms that do not accept PNG.
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
            Why ConvertImageNow Is Different
          </h2>
          <p>
            Many online image converters require you to upload your files to a
            remote server for processing. ConvertImageNow takes a different
            approach. Your PNG image can be processed directly in your browser
            using your device&apos;s local resources.
          </p>
          <p>
            This means you can convert personal photos, screenshots, or work
            files without sending them to a remote conversion server. There is
            also no account registration required and no watermark added to
            your converted images.
          </p>

          <div className="not-prose my-10 flex gap-4 rounded-2xl border border-amber-500/20 bg-amber-50/50 p-6 shadow-sm backdrop-blur-sm dark:border-amber-500/20 dark:bg-amber-950/30">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/50">
              <FileWarning
                className="h-6 w-6 text-amber-600 dark:text-amber-400"
                aria-hidden="true"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-amber-950 dark:text-amber-100">
                What Happens to Transparency?
              </h3>
              <p className="mt-2 text-base leading-relaxed text-amber-900 dark:text-amber-200/90">
                JPG does not support transparent backgrounds. When you convert a
                PNG with transparency to JPG, the transparent areas are filled with
                a solid background (usually white). If you need to keep transparency, consider
                converting to <strong>WebP</strong> instead, which supports transparency. Compare the resulting file size and appearance with the original.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
            How to Convert PNG to JPG Across Devices
          </h2>
          <p>
            Selected image data is processed in your browser. The steps and available format support can vary by browser and device; no separate app installation is required.
          </p>

          <div className="not-prose my-10 grid gap-6 sm:grid-cols-3">
            {DEVICES.map(({ icon: Icon, name, steps }) => (
              <div
                key={name}
                className="flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-[#314969] dark:bg-[#172642]/50"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700 dark:bg-[#263956] dark:text-slate-300">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {name}
                  </h3>
                </div>
                <ol className="relative flex-1 list-decimal space-y-3 pl-5 text-sm leading-relaxed text-slate-600 marker:text-slate-400 dark:text-slate-400 dark:marker:text-slate-500">
                  {steps.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ol>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
            Bulk Convert Multiple PNG Files
          </h2>
          <p>
            Need to convert several screenshots or images at once? Select
            multiple PNG files, batch convert them together in one go, and
            download the results as a single ZIP file. The practical batch size depends on your device, browser, image dimensions, and available memory.
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
            PNG vs JPG: Which Should You Use?
          </h2>
          <p>
            PNG and JPG serve different purposes. PNG is best when you need
            lossless quality or transparency — logos, screenshots, and graphics
            with sharp edges. JPG is best when you need smaller, more portable
            files — photos, email attachments, and web images where file size
            matters more than pixel-perfect transparency.
          </p>

          <div className="not-prose my-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-[#314969] dark:bg-[#172642]/50">
            <table className="w-full border-collapse text-left text-sm sm:text-base">
              <thead className="bg-slate-50/80 backdrop-blur-sm dark:bg-[#172642]/80">
                <tr>
                  <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-100">
                    Feature
                  </th>
                  <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-100">
                    PNG
                  </th>
                  <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-100">
                    JPG / JPEG
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-[#314969]">
                <tr className="transition-colors hover:bg-slate-50 dark:hover:bg-[#263956]/40">
                  <td className="px-6 py-4 font-medium text-slate-900 dark:text-slate-200">
                    Compression
                  </td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-400">
                    Lossless (larger files)
                  </td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-400">
                    Lossy (smaller files)
                  </td>
                </tr>
                <tr className="transition-colors hover:bg-slate-50 dark:hover:bg-[#263956]/40">
                  <td className="px-6 py-4 font-medium text-slate-900 dark:text-slate-200">
                    Transparency
                  </td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-400">
                    Supported
                  </td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-400">
                    Not supported
                  </td>
                </tr>
                <tr className="transition-colors hover:bg-slate-50 dark:hover:bg-[#263956]/40">
                  <td className="px-6 py-4 font-medium text-slate-900 dark:text-slate-200">
                    Best used for
                  </td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-400">
                    Logos, text, graphics, icons
                  </td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-400">
                    Photographs, web images
                  </td>
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
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:border-slate-300 dark:border-[#314969] dark:bg-[#172642]/40 dark:hover:border-slate-700"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-5 text-lg font-semibold text-slate-900 outline-none dark:text-slate-100 [&::-webkit-details-marker]:hidden">
                  {q}
                  <span className="ml-4 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-transform duration-300 group-open:rotate-45 dark:bg-[#263956] dark:text-slate-400">
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
