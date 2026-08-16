import type { Metadata } from "next";
import ImageConverter from "@/components/ImageConverter";
import { ShieldCheck, Gauge, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Free Online Image Converter — JPG, PNG, WebP, AVIF",
  description:
    "Convert JPG, PNG, WebP, and AVIF images online for free. Batch conversion, quality control, and zero uploads — everything runs in your browser.",
  alternates: { canonical: "/converter" },
};

const POINTS = [
  {
    icon: ShieldCheck,
    title: "Private by design",
    desc: "Files are processed with the Canvas API directly in your browser — nothing is ever sent to a server.",
  },
  {
    icon: Gauge,
    title: "Quality control",
    desc: "Adjust the quality slider and watch the resulting file size update as you go.",
  },
  {
    icon: Layers,
    title: "Batch friendly",
    desc: "Drop in a whole folder of images and convert them all in one pass.",
  },
];

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Online Image Format Conversion",
  provider: {
    "@type": "Organization",
    name: "ConvertImageNow",
    url: "https://www.convertimagenow.com",
  },
  areaServed: "Worldwide",
  audience: {
    "@type": "Audience",
    audienceType: "Anyone converting image files",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  description:
    "Convert JPG, PNG, WebP and AVIF images instantly and securely in-browser, with no uploads, no sign-up, and no cost.",
};

export default function ConverterPage() {
  return (
    <div className="container-page py-14 sm:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }}
      />
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Image Converter
        </h1>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          Drop your images below, choose an output format and quality, then
          download individually or as a ZIP.
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-3xl">
        <ImageConverter />
      </div>
       <div className="mx-auto mt-12 max-w-4xl space-y-6 text-left text-slate-700 dark:text-slate-300">
  <h2 className="text-2xl font-bold">
    Free Online Image Converter
  </h2>

  <p>
    Convert JPG, PNG, WebP, and AVIF images online without installing any software.
    ConvertImageNow processes your files directly in your browser, so your images
    stay private and are never uploaded to any server. Whether you need to reduce
    file size, change image format, or prepare images for websites and social media,
    our tool makes the process quick and simple.
  </p>

  <p>
    The converter supports batch image conversion, adjustable quality settings,
    and ZIP download for multiple files. It works on desktop, tablet, and mobile
    devices, allowing you to convert images anywhere. No registration, watermarks,
    or hidden fees are required.
  </p>

  <h2 className="text-2xl font-bold">
    Why Choose ConvertImageNow?
  </h2>

  <p>
    Our image converter is designed for speed, privacy, and ease of use. Since
    everything runs locally in your browser, your images remain secure while
    conversion is completed in seconds. Simply upload your images, choose the
    desired output format, adjust quality if needed, and download the converted
    files instantly.
  </p>
</div>
      <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-3">
        {POINTS.map((p) => (
          <div
            key={p.title}
            className="rounded-2xl border border-slate-200 p-6 dark:border-slate-800"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
              <p.icon size={20} />
            </span>
            <h2 className="mt-4 font-semibold">{p.title}</h2>
            <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-400">
              {p.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
