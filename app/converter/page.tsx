import type { Metadata } from "next";
import Link from "next/link";
import ImageConverter from "@/components/ImageConverter";
import { ShieldCheck, Gauge, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Free Online Image Converter | JPG, PNG, WebP & AVIF",
  description:
    "Convert JPG, PNG, WebP, and AVIF images online for free. Batch conversion, quality controls, ZIP downloads, and private browser-based processing.",
  alternates: {
    canonical: "https://www.convertimagenow.com/converter",
  },
  openGraph: {
    title: "Free Online Image Converter | ConvertImageNow",
    description:
      "Convert JPG, PNG, WebP, and AVIF images privately in your browser.",
    url: "https://www.convertimagenow.com/converter",
    siteName: "ConvertImageNow",
    type: "website",
  },
};

const POINTS = [
  {
    icon: ShieldCheck,
    title: "Private browser processing",
    desc: "Supported conversions run locally in your browser, so your files do not need to be uploaded to a conversion server.",
  },
  {
    icon: Gauge,
    title: "Quality controls",
    desc: "Choose an output format and adjust quality when available to balance visual quality and file size.",
  },
  {
    icon: Layers,
    title: "Batch conversion",
    desc: "Upload multiple supported images and download converted files individually or together as a ZIP archive.",
  },
];

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "ConvertImageNow Image Converter",
  serviceType: "Online Image Format Conversion",
  url: "https://www.convertimagenow.com/converter",
  provider: {
    "@type": "Organization",
    name: "ConvertImageNow",
    url: "https://www.convertimagenow.com",
  },
  areaServed: "Worldwide",
  audience: {
    "@type": "Audience",
    audienceType: "People converting image files",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  description:
    "Free browser-based conversion for JPG, PNG, WebP, and AVIF images.",
};

export default function ConverterPage() {
  return (
    <main className="container-page py-14 sm:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(SERVICE_SCHEMA),
        }}
      />

      <section className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
          Free Online Image Converter
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
          Convert JPG, PNG, WebP, and AVIF images online for free. Choose an
          output format, adjust quality when available, and download your files
          directly from your browser.
        </p>
      </section>

      <section
        className="mx-auto mt-10 max-w-3xl"
        aria-label="Image conversion tool"
      >
        <ImageConverter />
      </section>

      <section className="mx-auto mt-16 max-w-4xl">
        <h2 className="text-2xl font-bold">
          How to Convert an Image Online
        </h2>

        <ol className="mt-5 list-decimal space-y-3 pl-6 leading-7 text-slate-700 dark:text-slate-300">
          <li>Upload one or more supported image files.</li>
          <li>Choose JPG, PNG, or WebP as the output format.</li>
          <li>Adjust the quality setting when available.</li>
          <li>Convert and download your images individually or as a ZIP file.</li>
        </ol>
      </section>

      <section className="mx-auto mt-14 max-w-4xl space-y-6 text-left text-slate-700 dark:text-slate-300">
        <h2 className="text-2xl font-bold">
          Private Browser-Based Image Conversion
        </h2>

        <p className="leading-7">
          ConvertImageNow is a browser-based image converter for common image
          conversion tasks. Supported files are processed locally in your
          browser, so they do not need to be uploaded to a remote conversion
          server.
        </p>

        <p className="leading-7">
          You can use the tool to change image formats, prepare files for
          websites and social media, and create smaller copies when suitable.
          Actual output size depends on the original image, dimensions, format,
          and quality setting.
        </p>

        <h2 className="text-2xl font-bold">
          Which Image Format Should You Choose?
        </h2>

        <p className="leading-7">
          JPG is commonly used for photographs, PNG is useful for transparency
          and sharp graphics, WebP is a practical choice for modern websites,
          and AVIF can provide efficient compression when it fits your
          browser and workflow requirements.
        </p>

        <p className="leading-7">
          Learn more in our{" "}
          <Link
            href="/blog/best-image-formats-explained"
            className="font-medium text-brand-primary underline underline-offset-4"
          >
            guide to image formats
          </Link>{" "}
          and{" "}
          <Link
            href="/blog/png-vs-jpg"
            className="font-medium text-brand-primary underline underline-offset-4"
          >
            PNG vs JPG comparison
          </Link>
          .
        </p>

        <h2 className="text-2xl font-bold">
          How to Make an Image File Smaller
        </h2>

        <p className="leading-7">
          To reduce an image file size, choose suitable dimensions, select an
          efficient format, and use moderate compression. Read our guide on{" "}
          <Link
            href="/blog/how-to-make-image-file-smaller"
            className="font-medium text-brand-primary underline underline-offset-4"
          >
            how to make an image file smaller
          </Link>{" "}
          for more practical advice.
        </p>

        <h2 className="text-2xl font-bold">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="font-semibold">
              Is ConvertImageNow free?
            </h3>
            <p className="mt-2 leading-7">
              Yes. ConvertImageNow provides free browser-based image conversion
              for supported formats without requiring registration.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              Are my images uploaded?
            </h3>
            <p className="mt-2 leading-7">
              Supported conversions are processed locally in your browser.
              Check the privacy policy for complete information about data
              handling.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              Can I convert multiple images?
            </h3>
            <p className="mt-2 leading-7">
              Yes. You can upload multiple supported images and download the
              converted files separately or as a ZIP archive.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              Does the converter work on mobile?
            </h3>
            <p className="mt-2 leading-7">
              Yes. The tool is designed to work in modern desktop and mobile
              browsers.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-3">
        {POINTS.map((point) => (
          <div
            key={point.title}
            className="rounded-2xl border border-slate-200 p-6 dark:border-slate-800"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
              <point.icon size={20} aria-hidden="true" />
            </span>

            <h3 className="mt-4 font-semibold">{point.title}</h3>

            <p className="mt-1.5 text-sm leading-6 text-slate-600 dark:text-slate-400">
              {point.desc}
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}
