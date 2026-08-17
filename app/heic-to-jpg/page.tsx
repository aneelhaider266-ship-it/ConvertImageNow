import type { Metadata } from "next";
import ImageConverter from "@/components/ImageConverter";
import { ShieldCheck, WifiOff, Infinity as InfinityIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "HEIC to JPG Converter — Free, Online & Private",
  description:
    "Convert HEIC to JPG online for free. No uploads, no signup, no file limits — everything happens instantly in your browser. Works even offline.",
  alternates: { canonical: "/heic-to-jpg" },
};

const POINTS = [
  {
    icon: ShieldCheck,
    title: "Truly private",
    desc: "Your photos never touch a server — there's nothing to delete later because nothing was ever uploaded.",
  },
  {
    icon: WifiOff,
    title: "Works offline",
    desc: "Once the page has loaded, conversion happens entirely on your device — no live connection needed.",
  },
  {
    icon: InfinityIcon,
    title: "No artificial limits",
    desc: "No cap on how many images you convert, no daily quota, and no watermark on the output.",
  },
];

const FAQS = [
  {
    q: "Is this HEIC to JPG converter really free?",
    a: "Yes, completely. There's no premium tier, no daily limit, and no watermark on converted images.",
  },
  {
    q: "How do I convert HEIC to JPG on iPhone?",
    a: "Open this page directly in Safari on your iPhone and convert your photos the same way as on desktop — no app needed. iPhones can also auto-convert HEIC to JPG when sharing via Mail or Messages, depending on your Camera settings under Settings → Camera → Formats.",
  },
  {
    q: "How do I convert HEIC to JPG on Windows?",
    a: "Open this converter in any browser (Chrome, Edge, Firefox) on your PC. No software installation is needed — the conversion happens directly in the browser tab.",
  },
  {
    q: "How do I convert HEIC to JPG on Mac?",
    a: "Open this page in Safari or Chrome on your Mac and convert directly — no software install needed. Mac's built-in Preview app can also convert HEIC to JPG via File → Export, if you prefer not to use a browser tool.",
  },
  {
    q: "Can I batch convert multiple HEIC files at once?",
    a: "Yes — drag and drop several HEIC files together, convert them all in one pass, and download them as a single ZIP file.",
  },
  {
    q: "Can I convert HEIC to PNG instead of JPG?",
    a: "Yes, this tool also supports PNG and WebP as output formats. Just select PNG from the format options instead of JPG.",
  },
  {
    q: "Does converting HEIC to JPG reduce image quality?",
    a: "JPG uses lossy compression, so there's a technical difference, but at a high quality setting (80–95) the visual difference is generally not noticeable. Adjust the quality slider to balance file size and quality.",
  },
  {
    q: "Is there a file size limit?",
    a: "No artificial limit is imposed by this tool. Since conversion happens on your own device, the practical limit depends on your device's available memory rather than a server-imposed cap.",
  },
];

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function HeicToJpgPage() {
  return (
    <div className="container-page py-14 sm:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          HEIC to JPG Converter
        </h1>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          Convert your HEIC photos to JPG instantly — no uploads, no signup,
          no waiting. Drop your file below and it converts right in your
          browser in seconds.
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-3xl">
        <ImageConverter />
      </div>

      <div className="mx-auto mt-12 max-w-4xl space-y-6 text-left text-slate-700 dark:text-slate-300">
        <h2 className="text-2xl font-bold">Why Convert HEIC to JPG?</h2>
        <p>
          HEIC (High Efficiency Image Container) is the default photo format
          on iPhones since iOS 11. It saves storage space, but it doesn&apos;t
          open properly on many Windows PCs, older Android phones, some
          websites, and older software. Converting to JPG fixes that
          instantly — JPG opens everywhere, on every device, browser, and
          platform, without exception.
        </p>

        <h2 className="text-2xl font-bold">Why ConvertImageNow Is Different</h2>
        <p>
          Most HEIC to JPG converters ask you to upload your file to their
          servers first, wait for processing, then download the result. That
          upload step means your photos briefly leave your device and sit on
          someone else&apos;s storage, even if they say they delete it later.
          ConvertImageNow skips that step entirely — your file is converted
          locally, using your browser&apos;s own Canvas API.
        </p>

        <div className="grid gap-6 sm:grid-cols-3">
          {POINTS.map(({ icon: Icon, title, desc }) => (
            <div key={title}>
              <Icon className="h-6 w-6" />
              <h3 className="mt-2 font-semibold">{title}</h3>
              <p className="mt-1 text-sm">{desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold">How to Convert HEIC to JPG</h2>
        <ol className="list-decimal space-y-2 pl-5">
          <li>Drop your HEIC file (or several) into the box above, or click to browse.</li>
          <li>Choose JPG as the output format.</li>
          <li>Adjust the quality slider if you want a smaller file size.</li>
          <li>Download your converted image, or grab all of them at once as a ZIP.</li>
        </ol>

        <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
        <div className="space-y-5">
          {FAQS.map(({ q, a }) => (
            <div key={q}>
              <h3 className="font-semibold">{q}</h3>
              <p className="mt-1 text-sm">{a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
