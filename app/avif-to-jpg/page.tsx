import type { Metadata } from "next";
import Link from "next/link";
import ImageConverter from "@/components/ImageConverter";
import { ShieldCheck, WifiOff, Infinity as InfinityIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "AVIF to JPG Converter | Free, Private & Online",
  description:
    "Convert AVIF to JPG online for free. Process images privately in your browser with no signup, watermark, or server upload.",
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

const FAQS = [
  {
    q: "Is this AVIF to JPG converter free?",
    a: "Yes. ConvertImageNow provides free browser-based AVIF to JPG conversion without requiring registration.",
  },
  {
    q: "How do I convert AVIF to JPG?",
    a: "Upload an AVIF image, choose JPG as the output format, adjust quality if needed, click convert, and download the resulting JPG file.",
  },
  {
    q: "Can I convert AVIF to JPG on Windows?",
    a: "Yes. Open ConvertImageNow in a modern browser such as Chrome, Edge, or Firefox, upload your AVIF file, select JPG, and download the result.",
  },
  {
    q: "Can I convert AVIF to JPG on Mac?",
    a: "Yes. Open ConvertImageNow in Safari or Chrome, upload your AVIF image, choose JPG, and download the converted file.",
  },
  {
    q: "Can I convert AVIF to JPG on Android?",
    a: "Yes. Open ConvertImageNow in Chrome or another modern mobile browser, select your AVIF image, choose JPG, and download the converted file.",
  },
  {
    q: "Can I convert multiple AVIF files?",
    a: "Yes. You can select multiple supported images, convert them together, and download the results individually or as a ZIP archive.",
  },
  {
    q: "Does AVIF to JPG conversion reduce quality?",
    a: "JPG uses lossy compression, so some quality may be lost. You can adjust the quality setting to balance visual quality and file size.",
  },
  {
    q: "Why convert AVIF to JPG?",
    a: "JPG is supported by almost every device, website, image editor, and printing tool, while AVIF support is not available everywhere.",
  },
  {
    q: "Is there a file size limit?",
    a: "There is no server-imposed upload limit because supported conversion happens in your browser. The practical limit depends on your device memory and browser.",
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
    <main className="container-page py-14 sm:py-20">
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

      <section className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
          AVIF to JPG Converter
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
          Convert AVIF images to JPG online for free. Process your images
          directly in your browser without registration, watermarks, or
          unnecessary uploads.
        </p>
      </section>

      <section
        className="mx-auto mt-10 max-w-3xl"
        aria-label="AVIF to JPG conversion tool"
      >
        <ImageConverter initialFormat="jpg" />
      </section>

      <section className="mx-auto mt-16 max-w-4xl space-y-6 text-left text-slate-700 dark:text-slate-300">
        <h2 className="text-2xl font-bold">
          Why Convert AVIF to JPG?
        </h2>

        <p className="leading-7">
          AVIF is a modern image format that can provide efficient compression
          and good visual quality. However, some older apps, image editors,
          websites, printing tools, and devices may not support AVIF files.
        </p>

        <p className="leading-7">
          JPG is one of the most widely supported image formats. Converting AVIF
          to JPG can make an image easier to open, edit, print, email, upload,
          and share across different devices and applications.
        </p>

        <h2 className="text-2xl font-bold">
          How to Convert AVIF to JPG
        </h2>

        <ol className="list-decimal space-y-3 pl-6 leading-7">
          <li>Select or drag one or more AVIF images into the converter.</li>
          <li>Choose JPG as the output format.</li>
          <li>Adjust the quality setting if you want to control file size.</li>
          <li>Start the conversion.</li>
          <li>Download the JPG file or download multiple files as a ZIP archive.</li>
        </ol>

        <h2 className="text-2xl font-bold">
          Private AVIF to JPG Conversion
        </h2>

        <p className="leading-7">
          ConvertImageNow is designed for browser-based image conversion.
          Supported image processing takes place locally in your browser, so
          your files do not need to be sent to our conversion server.
        </p>

        <p className="leading-7">
          This can be useful when converting personal photos, work files, or
          other images that you prefer not to upload to an online service.
          Please review the privacy policy for complete information about data
          handling.
        </p>

        <h2 className="text-2xl font-bold">
          Convert AVIF to JPG on Windows
        </h2>

        <ol className="list-decimal space-y-3 pl-6 leading-7">
          <li>Open this page in Chrome, Edge, Firefox, or another modern browser.</li>
          <li>Select an AVIF image from your computer.</li>
          <li>Choose JPG as the output format.</li>
          <li>Adjust quality if needed.</li>
          <li>Download the converted JPG file.</li>
        </ol>

        <h2 className="text-2xl font-bold">
          Convert AVIF to JPG on Mac
        </h2>

        <ol className="list-decimal space-y-3 pl-6 leading-7">
          <li>Open this page in Safari or Chrome.</li>
          <li>Select one or more AVIF images.</li>
          <li>Choose JPG as the output format.</li>
          <li>Adjust the quality setting if required.</li>
          <li>Download the converted JPG files.</li>
        </ol>

        <h2 className="text-2xl font-bold">
          Convert AVIF to JPG on Android
        </h2>

        <ol className="list-decimal space-y-3 pl-6 leading-7">
          <li>Open this page in Chrome or another modern mobile browser.</li>
          <li>Select an AVIF image from your device.</li>
          <li>Choose JPG as the output format.</li>
          <li>Start the conversion.</li>
          <li>Download the JPG file to your device.</li>
        </ol>

        <h2 className="text-2xl font-bold">
          AVIF vs JPG
        </h2>

        <p className="leading-7">
          AVIF is a newer format focused on efficient compression, while JPG is
          an older format with extremely broad compatibility. AVIF may be a good
          choice for modern web delivery, but JPG is often more convenient when
          an image must work across many apps and devices.
        </p>

        <p className="leading-7">
          You can learn more in our{" "}
          <Link
            href="/blog/best-image-formats-explained"
            className="font-medium text-brand-primary underline underline-offset-4"
          >
            guide to the best image formats
          </Link>
          . For another format comparison, read our{" "}
          <Link
            href="/blog/png-vs-jpg"
            className="font-medium text-brand-primary underline underline-offset-4"
          >
            PNG vs JPG guide
          </Link>
          .
        </p>

        <h2 className="text-2xl font-bold">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {FAQS.map((faq) => (
            <div key={faq.q}>
              <h3 className="font-semibold">
                {faq.q}
              </h3>

              <p className="mt-2 leading-7">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-3">
        {POINTS.map(({ icon: Icon, title, desc }) => (
          <article
            key={title}
            className="rounded-2xl border border-slate-200 p-6 dark:border-slate-800"
          >
            <Icon
              className="h-6 w-6 text-brand-primary"
              aria-hidden="true"
            />

            <h2 className="mt-4 font-semibold">
              {title}
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
              {desc}
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}
