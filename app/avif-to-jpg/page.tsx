import type { Metadata } from "next";
import Link from "next/link";
import ImageConverter from "@/components/ImageConverter";
import {
  ShieldCheck,
  WifiOff,
  Infinity as InfinityIcon,
  Monitor,
  Apple,
  Smartphone,
  FileWarning,
  Zap,
  Layers,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AVIF to JPG Converter – Convert .AVIF to JPG Online Free",
  description:
    "Free online AVIF to JPG converter. Convert .AVIF files to JPG in your browser — no upload, no signup, no watermark. Works on Windows, Mac, Android and iOS.",
  alternates: {
    canonical: "https://www.convertimagenow.com/avif-to-jpg",
  },
  openGraph: {
    title: "AVIF to JPG Converter | ConvertImageNow",
    description:
      "Convert AVIF images to JPG privately in your browser with no signup or watermark.",
    url: "https://www.convertimagenow.com/avif-to-jpg",
    siteName: "ConvertImageNow",
    type: "website",
  },
};

const POINTS = [
  {
    icon: ShieldCheck,
    title: "Private browser processing",
    desc: "Supported image conversions run locally in your browser, so your files do not need to be sent to our conversion server.",
  },
  {
    icon: WifiOff,
    title: "Works without uploading",
    desc: "Once the page is loaded, supported conversions can be performed directly on your device.",
  },
  {
    icon: InfinityIcon,
    title: "No watermark or signup",
    desc: "Convert your images without creating an account or adding a watermark to the output.",
  },
];

const DEVICES = [
  {
    icon: Monitor,
    name: "Windows",
    steps: [
      "Open this page in Chrome, Edge, Firefox, or another modern browser.",
      "Select a .AVIF image from your computer.",
      "Choose JPG as the output format.",
      "Adjust quality if needed, then start the conversion.",
      "Download the converted JPG file to your Windows device.",
    ],
  },
  {
    icon: Apple,
    name: "Mac",
    steps: [
      "Open this page in Safari or Chrome.",
      "Select one or more .AVIF images from your Mac.",
      "Choose JPG as the output format.",
      "Adjust the quality setting if required, then convert.",
      "Download the converted JPG files to your Mac.",
    ],
  },
  {
    icon: Smartphone,
    name: "Android",
    steps: [
      "Open this page in Chrome or another modern mobile browser.",
      "Select a .AVIF image from your Android device.",
      "Choose JPG as the output format.",
      "Start the conversion.",
      "Download the JPG file to your device.",
    ],
  },
];

const FAQS = [
  {
    q: "Is this AVIF to JPG converter free?",
    a: "Yes. ConvertImageNow provides free browser-based AVIF to JPG conversion without requiring registration.",
  },
  {
    q: "How do I convert AVIF to JPG?",
    a: "Open this online AVIF to JPG converter, select your .AVIF image, choose JPG as the output format, adjust quality if needed, click convert, and download the resulting JPG file.",
  },
  {
    q: "Can I convert AVIF to JPG on Windows?",
    a: "Yes. Open ConvertImageNow in a modern browser such as Chrome, Edge, or Firefox, upload your .AVIF file, select JPG, and download the result. This free AVIF to JPG converter runs entirely in your browser.",
  },
  {
    q: "Can I convert AVIF to JPG on Mac?",
    a: "Yes. Open ConvertImageNow in Safari or Chrome, select one or more .AVIF images from your Mac, choose JPG as the output format, adjust quality if needed, and download the converted JPG files.",
  },
  {
    q: "Can I convert AVIF to JPG on Android?",
    a: "Yes. Open ConvertImageNow in Chrome or another modern mobile browser, select a .AVIF image from your Android device, choose JPG as the output format, start the conversion, and download the JPG file to your device.",
  },
  {
    q: "Can I convert multiple AVIF files?",
    a: "Yes. You can select multiple supported images, convert them together, and download the results individually or as a ZIP archive.",
  },
  {
    q: "Does AVIF to JPG conversion reduce quality?",
    a: "JPG uses lossy compression, so some quality may be lost when converting AVIF to JPG. For photos, a quality setting of 85–92 usually keeps visible loss minimal while reducing file size. You can adjust the quality slider in this converter to balance visual quality and file size.",
  },
  {
    q: "What happens to transparency when converting AVIF to JPG?",
    a: "AVIF files can include a transparent background, but JPG does not support transparency. Any transparent areas in your AVIF image will be filled with a solid background (usually white) after conversion. If you need to keep transparency, convert to PNG instead.",
  },
  {
    q: "Why convert AVIF to JPG?",
    a: "JPG is supported by almost every device, website, image editor, and printing tool, while AVIF support is not available everywhere. Converting AVIF to JPG improves compatibility for sharing and editing.",
  },
  {
    q: "Is there a file size or batch limit?",
    a: "There is no server-imposed upload limit because supported conversion happens in your browser. The practical limit depends on your device's available memory and browser — most phones and computers handle dozens of images at once without issue.",
  },
];

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AVIF to JPG Converter",
  serviceType: "AVIF to JPG Image Conversion",
  url: "https://www.convertimagenow.com/avif-to-jpg",
  provider: {
    "@type": "Organization",
    name: "ConvertImageNow",
    url: "https://www.convertimagenow.com",
  },
  areaServed: "Worldwide",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  description:
    "Free browser-based AVIF to JPG conversion without registration or server upload.",
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export default function AvifToJpgPage() {
  return (
    <main className="container-page relative overflow-hidden pb-24 pt-16 sm:pb-32 sm:pt-24">
      {/* Premium Background Decorators (SaaS Aesthetic) */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:linear-gradient(to_bottom,white_5%,transparent_90%)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-brand-primary/20 to-purple-500/20 opacity-40 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] dark:from-brand-primary/30 dark:to-purple-500/30" />
      </div>

      {/* Structured Data Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(SERVICE_SCHEMA),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(FAQ_SCHEMA),
        }}
      />

      {/* Hero Section */}
      <section className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mb-6 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-primary/20 bg-brand-primary/5 px-4 py-1.5 text-sm font-semibold text-brand-primary shadow-sm backdrop-blur-sm dark:border-brand-primary/30 dark:bg-brand-primary/10 dark:text-brand-primary/90">
            <Zap className="h-4 w-4" aria-hidden="true" />
            100% Free & Browser-Based
          </span>
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
          AVIF to JPG Converter – Convert .AVIF to JPG Online Free
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300 sm:text-xl">
          Free online AVIF to JPG converter. Convert .AVIF files to JPG directly in your browser — no upload, no signup, no watermark. Works on Windows, Mac, Android and iOS.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-5 text-sm font-medium text-slate-600 dark:text-slate-400">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="h-4.5 w-4.5 text-emerald-500" /> Secure Processing
          </span>
          <span className="hidden h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-700 sm:block" />
          <span className="flex items-center gap-1.5">
            <Layers className="h-4.5 w-4.5 text-blue-500" /> No File Limit
          </span>
          <span className="hidden h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-700 sm:block" />
          <span className="flex items-center gap-1.5">
            <WifiOff className="h-4.5 w-4.5 text-brand-primary" /> Works Offline
          </span>
        </div>
      </section>

      {/* Converter Component Area */}
      <section
        className="relative z-10 mx-auto mt-12 max-w-4xl px-4 sm:mt-16 sm:px-6 lg:px-8"
        aria-label="AVIF to JPG conversion tool"
      >
        <div className="absolute inset-0 -z-10 rounded-[2.5rem] bg-gradient-to-b from-brand-primary/5 to-transparent blur-2xl dark:from-brand-primary/10" aria-hidden="true" />
        <ImageConverter initialFormat="jpg" />
      </section>

      {/* Main Content Layout */}
      <section className="mx-auto mt-24 max-w-4xl px-4 sm:mt-32 sm:px-6 lg:px-8">
        
        {/* Bento Grid: Value Propositions (POINTS) */}
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
            Why Convert AVIF to JPG?
          </h2>
          <p>
            AVIF is a modern image format with efficient compression and good visual quality. However, many older apps, image editors, websites, printing tools, and devices still do not fully support AVIF files.
          </p>
          <p>
            JPG is one of the most widely supported image formats. Converting AVIF to JPG makes your images easier to open, edit, print, email, upload, and share across different devices and applications — especially when you need maximum compatibility.
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
            Private AVIF to JPG Conversion
          </h2>
          <p>
            ConvertImageNow is designed for browser-based image conversion. Supported image processing takes place locally in your browser, so your files do not need to be sent to our conversion server. This makes it a private option when you want to convert AVIF to JPG without uploading your images.
          </p>
          <p>
            You can verify this yourself: open your browser&apos;s developer tools (Network tab) while converting, and you&apos;ll see no image data being sent anywhere. Please review the privacy policy for complete information about data handling.
          </p>

          {/* Common Mistake Transparency Callout */}
          <div className="not-prose my-10 flex flex-col gap-4 rounded-2xl border border-amber-500/20 bg-amber-50/50 p-6 shadow-sm backdrop-blur-sm sm:flex-row sm:items-start dark:border-amber-500/20 dark:bg-amber-950/30">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/50">
              <FileWarning className="h-6 w-6 text-amber-600 dark:text-amber-400" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-amber-950 dark:text-amber-100">
                Common Mistake: Transparent Backgrounds
              </h3>
              <p className="mt-2 text-base leading-relaxed text-amber-900 dark:text-amber-200/90">
                If your AVIF image has a transparent background, converting it to JPG will fill that area with a solid color, since JPG does not support transparency. Convert to <strong>PNG</strong> instead if you need to preserve the background.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
            How to Convert AVIF to JPG
          </h2>
          <ol className="mt-6 list-none space-y-4 text-base">
            {[
              "Select or drag one or more .AVIF images into the converter.",
              "Choose JPG as the output format.",
              "Adjust the quality setting if you want to control file size and visual quality.",
              "Start the conversion to convert AVIF to JPG in your browser.",
              "Download the JPG file, or download multiple converted files as a ZIP archive."
            ].map((step, idx) => (
              <li key={idx} className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-sm font-bold text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                  {idx + 1}
                </span>
                <span className="leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
            Convert AVIF to JPG by Device
          </h2>
          <div className="not-prose my-10 grid gap-6 sm:grid-cols-3">
            {DEVICES.map(({ icon: Icon, name, steps }) => (
              <div
                key={name}
                className="flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-900/50"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{name}</h3>
                </div>
                <ol className="relative flex-1 list-decimal space-y-3 pl-5 text-sm leading-relaxed text-slate-600 marker:text-slate-400 dark:text-slate-400 dark:marker:text-slate-500">
                  {steps.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ol>
              </div>
            ))}
          </div>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
            AVIF vs JPG
          </h2>

          {/* Semantic Comparison Table */}
          <div className="not-prose my-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900/50">
            <table className="w-full text-left text-sm sm:text-base">
              <thead className="border-b border-slate-200 bg-slate-50/80 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/80">
                <tr>
                  <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-100">Feature</th>
                  <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-100">AVIF</th>
                  <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-100">JPG</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                <tr className="transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/40">
                  <td className="px-6 py-4 font-medium text-slate-900 dark:text-slate-200">Compatibility</td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-400">Limited on older apps and devices</td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-400">Supported almost everywhere</td>
                </tr>
                <tr className="transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/40">
                  <td className="px-6 py-4 font-medium text-slate-900 dark:text-slate-200">Compression</td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-400">More efficient at similar quality</td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-400">Less efficient, larger files</td>
                </tr>
                <tr className="transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/40">
                  <td className="px-6 py-4 font-medium text-slate-900 dark:text-slate-200">Transparency</td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-400">Supported</td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-400">Not supported</td>
                </tr>
                <tr className="transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/40">
                  <td className="px-6 py-4 font-medium text-slate-900 dark:text-slate-200">Best for</td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-400">Modern web delivery</td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-400">Maximum compatibility, printing, editing</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-8 text-lg leading-relaxed">
            You can learn more in our{" "}
            <Link
              href="/blog/best-image-formats-explained"
              className="font-semibold text-brand-primary underline decoration-brand-primary/30 underline-offset-4 transition-colors hover:decoration-brand-primary"
            >
              guide to the best image formats
            </Link>
            . For another format comparison, read our{" "}
            <Link
              href="/blog/png-vs-jpg"
              className="font-semibold text-brand-primary underline decoration-brand-primary/30 underline-offset-4 transition-colors hover:decoration-brand-primary"
            >
              PNG vs JPG guide
            </Link>
            .
          </p>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
            Frequently Asked Questions
          </h2>
          
          <div className="not-prose mt-8 space-y-4">
            {FAQS.map((faq) => (
              <details
                key={faq.q}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900/40 dark:hover:border-slate-700"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-5 text-lg font-semibold text-slate-900 outline-none dark:text-slate-100 [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <span className="ml-4 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-transform duration-300 group-open:rotate-45 dark:bg-slate-800 dark:text-slate-400">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6 pt-1">
                  <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400">
                    {faq.a}
                  </p>
                </div>
              </details>
            ))}
          </div>

          <p className="mt-12 text-sm font-medium text-slate-500 dark:text-slate-400">
            Last updated: September 2026.
          </p>

        </div>
      </section>
    </main>
  );
}
