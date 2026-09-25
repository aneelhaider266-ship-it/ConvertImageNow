import type { Metadata } from "next";
import ImageConverter from "@/components/ImageConverter";
import { ShieldCheck, WifiOff, Infinity as InfinityIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "HEIC to JPG Converter — Free, Online & Private",
  description:
    "Convert HEIC to JPG online for free. Learn how to convert HEIC photos to JPG on iPhone, Windows, and Mac with no signup, uploads, or watermark.",
  alternates: { canonical: "/heic-to-jpg" },
};

const POINTS = [
  {
    icon: ShieldCheck,
    title: "Truly private",
    desc: "Your photos never touch a server. Conversion happens directly in your browser.",
  },
  {
    icon: WifiOff,
    title: "Works offline",
    desc: "Once the page has loaded, conversion happens entirely on your device.",
  },
  {
    icon: InfinityIcon,
    title: "No artificial limits",
    desc: "No daily quota, no watermark, and no server upload limit.",
  },
];

const FAQS = [
  {
    q: "Is this HEIC to JPG converter really free?",
    a: "Yes. ConvertImageNow lets you convert HEIC images to JPG for free without a signup or watermark.",
  },
  {
    q: "How do I convert HEIC to JPG on iPhone?",
    a: "Open ConvertImageNow in Safari, select your HEIC photo, choose JPG as the output format, and download the converted image.",
  },
  {
    q: "How do I convert HEIC to JPG on Windows?",
    a: "Open ConvertImageNow in Chrome, Edge, Firefox, or another modern browser. Select your HEIC file, choose JPG, and download the converted image.",
  },
  {
    q: "How do I convert HEIC to JPG on Mac?",
    a: "Open ConvertImageNow in Safari or Chrome, select your HEIC image, choose JPG, and download the result. You can also use the Preview app on Mac.",
  },
  {
    q: "Can I batch convert multiple HEIC files?",
    a: "Yes. Select or drag multiple HEIC files into the converter, convert them together, and download the results as a ZIP file.",
  },
  {
    q: "Can I convert HEIC to PNG or WebP?",
    a: "Yes. ConvertImageNow also supports PNG and WebP output formats.",
  },
  {
    q: "Does converting HEIC to JPG reduce image quality?",
    a: "JPG uses lossy compression, but you can adjust the quality setting to balance image quality and file size.",
  },
  {
    q: "Is there a file size limit?",
    a: "There is no artificial server-imposed file size limit. Because conversion happens in your browser, the practical limit depends on your device's available memory.",
  },
  {
    q: "Is HEIF the same as HEIC?",
    a: "HEIF is the general image container format, and HEIC is Apple's specific implementation of it. Most photos with a .heic extension are HEIF files, and both can be converted to JPG the same way.",
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

export default function HeicToJpgPage() {
  return (
    <main className="container-page relative overflow-hidden pb-20 pt-16 sm:pb-32 sm:pt-24">
      {/* Decorative background grid and gradients for a premium SaaS feel */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:linear-gradient(to_bottom,white_10%,transparent_90%)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)]" />
      <div className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-brand-primary/20 to-blue-500/20 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] dark:from-brand-primary/30 dark:to-blue-500/30" />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(FAQ_SCHEMA),
        }}
      />

      {/* Hero Section */}
      <section className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
          HEIC to JPG Converter
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300 sm:text-xl">
          Convert your HEIC photos to JPG instantly — no uploads, no signup,
          and no waiting. Drop your files below and convert them directly in
          your browser.
        </p>
      </section>

      {/* Converter Section */}
      <section className="relative z-10 mx-auto mt-12 max-w-4xl px-4 sm:mt-16 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-b from-brand-primary/5 to-transparent blur-2xl dark:from-brand-primary/10" />
        <ImageConverter initialFormat="jpg" />
      </section>

      {/* Main Content & Guides */}
      <section className="mx-auto mt-20 max-w-3xl px-4 sm:mt-32 sm:px-6 lg:max-w-4xl lg:px-8">
        <div className="prose-slate text-left text-slate-700 dark:text-slate-300">
          
          <h2 className="mb-6 mt-16 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
            Why Convert HEIC to JPG?
          </h2>

          <p className="mb-5 text-lg leading-relaxed">
            HEIC (High Efficiency Image Container) is widely used by modern
            iPhones because it can store high-quality photos using less storage
            space than many older image formats. However, HEIC is not supported
            equally by every website, application, or device.
          </p>

          <p className="mb-10 text-lg leading-relaxed">
            Converting HEIC to JPG makes your photos easier to open, share,
            edit, email, and upload. JPG is widely supported across devices,
            browsers, apps, and websites, making it a convenient format when
            compatibility is important.
          </p>

          <h2 className="mb-6 mt-16 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
            Why ConvertImageNow Is Different
          </h2>

          <p className="mb-5 text-lg leading-relaxed">
            Many online image converters require you to upload your photos to a
            remote server for processing. ConvertImageNow takes a different
            approach. Your HEIC image can be processed directly in your browser
            using your device's local resources.
          </p>

          <p className="mb-10 text-lg leading-relaxed">
            This means you can convert personal photos without sending them to a
            remote conversion server. There is also no account registration
            required and no watermark added to your converted images.
          </p>

          {/* Value Proposition Cards */}
          <div className="mb-16 mt-12 grid gap-6 sm:grid-cols-3">
            {POINTS.map(({ icon: Icon, title, desc }) => (
              <article
                key={title}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/50"
              >
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-slate-50 opacity-50 transition-transform duration-500 group-hover:scale-150 dark:bg-slate-800/30" />
                
                <div className="relative mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-primary/10 text-brand-primary ring-1 ring-brand-primary/20 transition-transform group-hover:scale-110 dark:bg-brand-primary/20 dark:ring-brand-primary/30">
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

          <h2 className="mb-6 mt-16 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
            How to Convert HEIC to JPG
          </h2>

          <p className="mb-5 text-lg leading-relaxed">
            Converting a HEIC image to JPG only takes a few steps:
          </p>

          <ol className="mb-10 list-decimal space-y-4 pl-6 text-lg leading-relaxed marker:text-slate-400 dark:marker:text-slate-500">
            <li>Select or drag your HEIC file into the converter above.</li>
            <li>Choose JPG as the output format.</li>
            <li>Adjust the quality setting if you want to control the file size.</li>
            <li>Start the conversion.</li>
            <li>Download your JPG image or download multiple converted images as a ZIP file.</li>
          </ol>

          <h2 className="mb-6 mt-16 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
            How to Convert HEIC to JPG on iPhone
          </h2>

          <p className="mb-5 text-lg leading-relaxed">
            iPhones commonly save photos in the HEIC format because it helps
            reduce storage usage while maintaining good image quality. If you
            need a JPG version for a website, email, app, or another device,
            you can convert the photo directly in your browser.
          </p>

          <ol className="mb-6 list-decimal space-y-4 pl-6 text-lg leading-relaxed marker:text-slate-400 dark:marker:text-slate-500">
            <li>Open ConvertImageNow in Safari on your iPhone.</li>
            <li>Select the HEIC photo you want to convert.</li>
            <li>Choose JPG as the output format.</li>
            <li>Start the conversion.</li>
            <li>Download the converted JPG image.</li>
          </ol>

          <p className="mb-10 text-lg leading-relaxed">
            No additional conversion app is required when using the browser
            converter.
          </p>

          <h2 className="mb-6 mt-16 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
            How to Convert HEIC to JPG on Windows
          </h2>

          <p className="mb-5 text-lg leading-relaxed">
            HEIC files may not work with every Windows application or website.
            Converting them to JPG can make the images easier to open, edit,
            share, and upload.
          </p>

          <ol className="mb-6 list-decimal space-y-4 pl-6 text-lg leading-relaxed marker:text-slate-400 dark:marker:text-slate-500">
            <li>Open ConvertImageNow in Chrome, Edge, Firefox, or another modern browser.</li>
            <li>Drag your HEIC image into the converter or select it from your computer.</li>
            <li>Select JPG as the output format.</li>
            <li>Adjust the quality setting if needed.</li>
            <li>Download your converted JPG image.</li>
          </ol>

          <p className="mb-10 text-lg leading-relaxed">
            The browser-based converter does not require you to install separate
            conversion software.
          </p>

          <h2 className="mb-6 mt-16 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
            How to Convert HEIC to JPG on Mac
          </h2>

          <p className="mb-5 text-lg leading-relaxed">
            Mac users can convert HEIC images to JPG using built-in macOS tools
            or a browser-based converter. ConvertImageNow provides a quick
            option when you want to convert one or multiple HEIC files.
          </p>

          <ol className="mb-6 list-decimal space-y-4 pl-6 text-lg leading-relaxed marker:text-slate-400 dark:marker:text-slate-500">
            <li>Open ConvertImageNow in Safari or Chrome.</li>
            <li>Select one or more HEIC images.</li>
            <li>Choose JPG as the output format.</li>
            <li>Select your preferred quality.</li>
            <li>Download the converted JPG files.</li>
          </ol>

          <p className="mb-10 text-lg leading-relaxed">
            If you prefer a built-in Mac solution, you can also use Preview to
            export a HEIC image as JPG.
          </p>

          <h2 className="mb-6 mt-16 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
            Convert HEIC to JPG Free Online
          </h2>

          <p className="mb-5 text-lg leading-relaxed">
            ConvertImageNow is a free HEIC to JPG converter designed to keep the
            conversion process simple. You do not need to create an account, and
            converted images do not contain a watermark.
          </p>

          <p className="mb-10 text-lg leading-relaxed">
            You can convert individual HEIC images or process multiple files at
            once. This is useful when you have several iPhone photos that need
            to be converted before uploading or sharing them.
          </p>

          <h2 className="mb-6 mt-16 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
            Convert HEIC to JPG Without Uploading Photos
          </h2>

          <p className="mb-5 text-lg leading-relaxed">
            Privacy can be important when converting personal photos. With
            ConvertImageNow, image conversion is performed directly in your
            browser rather than requiring your photos to be uploaded to a
            remote conversion server.
          </p>

          <p className="mb-10 text-lg leading-relaxed">
            Once the page has loaded, your device can perform the conversion
            locally. This approach can be useful when working with private
            photos or images that you do not want to send to an online service.
          </p>

          <h2 className="mb-6 mt-16 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
            HEIC vs JPG: What's the Difference?
          </h2>

          <p className="mb-5 text-lg leading-relaxed">
            HEIC is designed to provide efficient storage while maintaining high
            image quality. JPG is an older and extremely common image format
            supported by a wide range of devices, applications, and websites.
          </p>

          <p className="mb-10 text-lg leading-relaxed">
            The main reason to convert HEIC to JPG is usually compatibility. If
            a website, application, or device does not accept HEIC files, JPG
            can be a practical alternative.
          </p>

          <h2 className="mb-6 mt-16 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
            Is HEIF the Same as HEIC?
          </h2>

          <p className="mb-5 text-lg leading-relaxed">
            HEIF (High Efficiency Image Format) is the container format, and
            HEIC is the specific way Apple devices store photos using that
            container with HEVC compression. In practice, most HEIF photos from
            an iPhone or iPad use the .heic file extension, so the terms are
            often used interchangeably.
          </p>

          <p className="mb-16 text-lg leading-relaxed">
            If your files show a .heif or .heic extension and will not open on
            Windows, a website, or an older app, the conversion process to JPG
            is the same. You can use the converter above for both file types.
          </p>

          <h2 className="mb-8 mt-16 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
            Frequently Asked Questions
          </h2>

          <div className="mb-10 space-y-4">
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
