// app/png-to-jpg/page.tsx

import type { Metadata } from "next";
import ImageConverter from "@/components/ImageConverter";
import { ShieldCheck, WifiOff, Infinity as InfinityIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "PNG to JPG Converter – Convert PNG to JPG Online Free",
  description:
    "Convert PNG to JPG (JPEG) online for free. Private, browser-based conversion — no upload, no signup, no watermark. Batch convert multiple PNG files at once.",
  alternates: { canonical: "/png-to-jpg" },
};

const POINTS = [
  {
    icon: ShieldCheck,
    title: "Truly private",
    desc: "Your images never touch a server. Conversion happens directly in your browser.",
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
    q: "Is this PNG to JPG converter really free?",
    a: "Yes. ConvertImageNow provides free browser-based PNG to JPG conversion without requiring registration or adding a watermark.",
  },
  {
    q: "Is JPG the same as JPEG?",
    a: "Yes. JPG and JPEG refer to the same image format. JPG is simply the shortened file extension used on some systems, while JPEG is the full name of the format.",
  },
  {
    q: "Will converting PNG to JPG lose the transparent background?",
    a: "Yes. JPG does not support transparency, so any transparent areas in your PNG will be filled with a solid background (white by default) when converted to JPG.",
  },
  {
    q: "Can I convert multiple PNG files at once?",
    a: "Yes. You can select multiple PNG images, convert them together, and download the results individually or as a ZIP archive — no limit on how many files you batch convert.",
  },
  {
    q: "Are my images uploaded to a server?",
    a: "No. Conversion happens locally in your browser using the HTML5 Canvas API. Your files never leave your device — unlike most other online converters, which require uploading your images first.",
  },
  {
    q: "Does converting PNG to JPG reduce image quality?",
    a: "JPG uses lossy compression, but you can adjust the quality setting to balance file size and visual quality.",
  },
  {
    q: "Why is my JPG file so much smaller than the original PNG?",
    a: "PNG uses lossless compression, which keeps files large, especially for photos — often 4 to 10 times larger than an equivalent JPG. JPG's lossy compression reduces file size significantly while remaining visually similar at a good quality setting.",
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

export default function PngToJpgPage() {
  return (
    <div className="container-page py-14 sm:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(FAQ_SCHEMA),
        }}
      />

      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          PNG to JPG Converter
        </h1>

        <p className="mt-3 text-slate-600 dark:text-slate-300">
          Convert PNG images to JPG (JPEG) instantly — no uploads, no signup,
          and no waiting. Drop your files below and convert them directly in
          your browser.
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-3xl">
        <ImageConverter initialFormat="jpg" />
      </div>

      <div className="mx-auto mt-12 max-w-4xl space-y-6 text-left text-slate-700 dark:text-slate-300">

        <h2 className="text-2xl font-bold">
          Why Convert PNG to JPG?
        </h2>

        <p>
          PNG is a lossless format that preserves transparency and sharp
          detail, which makes files larger — often 4 to 10 times bigger than
          an equivalent JPG. Converting PNG to JPEG is useful when you need
          smaller files for email attachments, faster website loading, or
          uploading to platforms that don't accept PNG.
        </p>

        <h2 className="text-2xl font-bold">
          Why ConvertImageNow Is Different
        </h2>

        <p>
          Many online image converters require you to upload your files to a
          remote server for processing. ConvertImageNow takes a different
          approach. Your PNG image can be processed directly in your browser
          using your device's local resources.
        </p>

        <p>
          This means you can convert personal photos, screenshots, or work
          files without sending them to a remote conversion server. There is
          also no account registration required and no watermark added to
          your converted images.
        </p>

        <div className="grid gap-6 sm:grid-cols-3">
          {POINTS.map(({ icon: Icon, title, desc }) => (
            <div key={title}>
              <Icon className="h-6 w-6" />

              <h3 className="mt-2 font-semibold">
                {title}
              </h3>

              <p className="mt-1 text-sm">
                {desc}
              </p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold">
          What Happens to Transparency?
        </h2>

        <p>
          JPG does not support transparent backgrounds. When you convert a
          PNG with transparency to JPG, the transparent areas are filled with
          a solid background. If you need to keep transparency, consider
          converting to WebP instead, which supports both transparency and
          smaller file sizes.
        </p>

        <h2 className="text-2xl font-bold">
          How to Convert PNG to JPG
        </h2>

        <ol className="list-decimal space-y-2 pl-5">
          <li>Select or drag one or more PNG images into the converter above.</li>
          <li>Choose JPG as the output format.</li>
          <li>Adjust the quality setting if you want to control file size.</li>
          <li>Start the conversion.</li>
          <li>Download your JPG image, or download multiple files as a ZIP.</li>
        </ol>

        <h2 className="text-2xl font-bold">
          Bulk Convert Multiple PNG Files
        </h2>

        <p>
          Need to convert several screenshots or images at once? Select
          multiple PNG files, batch convert them together in one go, and
          download the results as a single ZIP file.
        </p>

        <h2 className="text-2xl font-bold">
          PNG vs JPG: Which Should You Use?
        </h2>

        <p>
          PNG and JPG serve different purposes. PNG is best when you need
          lossless quality or transparency — logos, screenshots, and graphics
          with sharp edges. JPG is best when you need smaller, more portable
          files — photos, email attachments, and web images where file size
          matters more than pixel-perfect transparency.
        </p>

        <h2 className="text-2xl font-bold">
          Frequently Asked Questions
        </h2>

        <div className="space-y-5">
          {FAQS.map(({ q, a }) => (
            <div key={q}>
              <h3 className="font-semibold">
                {q}
              </h3>

              <p className="mt-1 text-sm">
                {a}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
