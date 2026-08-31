import type { Metadata } from "next";
import ImageConverter from "@/components/ImageConverter";
import { ShieldCheck, WifiOff, Infinity as InfinityIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "JPG to PNG Converter – Convert JPG to PNG Online Free",
  description:
    "Convert JPG to PNG online for free. Turn any JPEG image into PNG format — private, browser-based, no upload, no signup, no watermark.",
  alternates: { canonical: "/jpg-to-png" },
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
    q: "Is this JPG to PNG converter really free?",
    a: "Yes. ConvertImageNow provides free browser-based JPG to PNG conversion without requiring registration or adding a watermark.",
  },
  {
    q: "Does converting JPG to PNG add a transparent background?",
    a: "No. JPG images don't contain any transparency data, so converting to PNG will not create a transparent background — the image will look the same, just saved in PNG format. If you need to remove a background, you'll need a dedicated background-removal tool, not a format converter.",
  },
  {
    q: "Why would I convert JPG to PNG?",
    a: "PNG is a lossless format, so converting from JPG can be useful when you want to avoid further quality loss during future edits, or when a website, app, or document only accepts PNG files.",
  },
  {
    q: "Will converting JPG to PNG improve image quality?",
    a: "No. Converting a JPG to PNG cannot recover detail that was already lost during the original JPG compression. It prevents further lossy compression going forward, but it won't restore quality that's already gone.",
  },
  {
    q: "Can I convert multiple JPG files at once?",
    a: "Yes. You can select multiple JPG images, convert them together, and download the results individually or as a ZIP archive.",
  },
  {
    q: "Are my images uploaded to a server?",
    a: "No. Conversion happens locally in your browser using the HTML5 Canvas API. Your files never leave your device.",
  },
  {
    q: "Will my PNG file be larger than the original JPG?",
    a: "Usually yes. PNG uses lossless compression, so PNG files are typically larger than JPG files of the same image, especially for photos.",
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

export default function JpgToPngPage() {
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
          JPG to PNG Converter
        </h1>

        <p className="mt-3 text-slate-600 dark:text-slate-300">
          Convert JPG images into PNG format instantly — no uploads, no
          signup, and no waiting. Drop your files below and convert them
          directly in your browser.
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-3xl">
        <ImageConverter initialFormat="png" />
      </div>

      <div className="mx-auto mt-12 max-w-4xl space-y-6 text-left text-slate-700 dark:text-slate-300">

        <h2 className="text-2xl font-bold">
          Why Convert JPG to PNG?
        </h2>

        <p>
          PNG is a lossless format, which means it doesn't lose additional
          quality every time it's saved or edited, unlike JPG. Converting a
          JPG to PNG is useful when you need to prepare an image for further
          editing without compounding compression artifacts, or when a
          website, app, or document specifically requires a PNG file.
        </p>

        <h2 className="text-2xl font-bold">
          Why ConvertImageNow Is Different
        </h2>

        <p>
          Many online image converters require you to upload your files to a
          remote server for processing. ConvertImageNow takes a different
          approach. Your JPG image can be processed directly in your browser
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
          Does Converting JPG to PNG Add Transparency?
        </h2>

        <p>
          No. This is a common misunderstanding — JPG images don't contain
          any transparency information, so simply converting the file to PNG
          format won't remove or change the background. The image will look
          exactly the same, just saved differently. If you're trying to
          remove a background from a photo, you'll need a dedicated
          background-removal tool rather than a format converter.
        </p>

        <h2 className="text-2xl font-bold">
          How to Convert JPG to PNG
        </h2>

        <ol className="list-decimal space-y-2 pl-5">
          <li>Select or drag one or more JPG images into the converter above.</li>
          <li>Choose PNG as the output format.</li>
          <li>Start the conversion.</li>
          <li>Download your PNG image, or download multiple files as a ZIP.</li>
        </ol>

        <h2 className="text-2xl font-bold">
          Bulk Convert Multiple JPG Files
        </h2>

        <p>
          Need to convert several images at once? Select multiple JPG files,
          batch convert them together in one go, and download the results
          as a single ZIP file.
        </p>

        <h2 className="text-2xl font-bold">
          JPG vs PNG: Which Should You Use?
        </h2>

        <p>
          JPG is best for smaller, more portable files — photos, email
          attachments, and web images where file size matters. PNG is best
          when you need lossless quality for further editing, or when a
          platform specifically requires the PNG format.
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
