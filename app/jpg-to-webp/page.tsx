import type { Metadata } from "next";
import ImageConverter from "@/components/ImageConverter";
import { ShieldCheck, WifiOff, Infinity as InfinityIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "JPG to WebP Converter – Convert JPG to WebP Online Free",
  description:
    "Convert JPG to WebP online for free. Reduce image file size by 25-35% for faster websites — private, browser-based, no upload, no signup, no watermark.",
  alternates: { canonical: "/jpg-to-webp" },
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
    q: "Is this JPG to WebP converter really free?",
    a: "Yes. ConvertImageNow provides free browser-based JPG to WebP conversion without requiring registration or adding a watermark.",
  },
  {
    q: "How much smaller will my file be after converting to WebP?",
    a: "WebP files are typically 25 to 35 percent smaller than an equivalent JPEG at a similar visual quality, though the exact reduction depends on the image content and the quality setting you choose.",
  },
  {
    q: "Will converting JPG to WebP reduce image quality?",
    a: "Because both JPG and WebP use lossy compression, converting between them involves a re-encoding step that can introduce minor additional artifacts. At high quality settings, this difference is usually imperceptible.",
  },
  {
    q: "Is WebP supported by all browsers?",
    a: "WebP is supported by all major modern browsers, including Chrome, Firefox, Safari, and Edge. Some older image editors and specialized workflows, such as print production using CMYK color, may still expect JPG or PNG instead.",
  },
  {
    q: "Why should I use WebP instead of JPG for my website?",
    a: "WebP typically produces smaller files at equivalent visual quality, which means faster page loads, lower bandwidth usage, and a better score on tools like Google PageSpeed Insights.",
  },
  {
    q: "Can I convert multiple JPG files to WebP at once?",
    a: "Yes. You can select multiple JPG images, convert them together, and download the results individually or as a ZIP archive.",
  },
  {
    q: "Are my images uploaded to a server?",
    a: "No. Conversion happens locally in your browser using the HTML5 Canvas API. Your files never leave your device.",
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

export default function JpgToWebpPage() {
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
          JPG to WebP Converter
        </h1>

        <p className="mt-3 text-slate-600 dark:text-slate-300">
          Convert JPG images to WebP instantly — smaller files, faster
          websites, no uploads, and no signup. Everything runs directly in
          your browser.
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-3xl">
        <ImageConverter initialFormat="webp" />
      </div>

      <div className="mx-auto mt-12 max-w-4xl space-y-6 text-left text-slate-700 dark:text-slate-300">

        <h2 className="text-2xl font-bold">
          Why Convert JPG to WebP?
        </h2>

        <p>
          WebP is a modern image format built specifically for the web.
          Converting JPG images to WebP typically reduces file size by 25 to
          35 percent at a similar visual quality, which means faster page
          loads, lower bandwidth usage, and a better score on performance
          tools like Google PageSpeed Insights.
        </p>

        <h2 className="text-2xl font-bold">
          Why ConvertImageNow Is Different
        </h2>

        <p>
          Many online image converters require you to upload your files to a
          remote server for processing. ConvertImageNow processes your JPG
          images directly in your browser using your device's local
          resources, so nothing is sent anywhere before you choose to
          download the result.
        </p>

        <p>
          There is no account registration required and no watermark added
          to your converted images.
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
          Does Converting JPG to WebP Reduce Quality?
        </h2>

        <p>
          Since both JPG and WebP are lossy formats, converting from one to
          the other involves a re-encoding step that can introduce minor
          additional artifacts. At high quality settings, this difference is
          usually imperceptible. Use the quality slider in the converter
          above to balance file size against visual quality for your
          specific image.
        </p>

        <h2 className="text-2xl font-bold">
          How to Convert JPG to WebP
        </h2>

        <ol className="list-decimal space-y-2 pl-5">
          <li>Select or drag one or more JPG images into the converter above.</li>
          <li>Choose WebP as the output format.</li>
          <li>Adjust the quality setting to balance file size and visual quality.</li>
          <li>Start the conversion.</li>
          <li>Download your WebP image, or download multiple files as a ZIP.</li>
        </ol>

        <h2 className="text-2xl font-bold">
          Bulk Convert Multiple JPG Files
        </h2>

        <p>
          Optimizing a website often means converting many images at once.
          Select multiple JPG files, batch convert them together in one go,
          and download the results as a single ZIP file.
        </p>

        <h2 className="text-2xl font-bold">
          JPG vs WebP: Which Should You Use?
        </h2>

        <p>
          For web publishing, WebP is generally the better choice — it
          produces smaller files at equivalent visual quality, which
          directly improves page load speed. JPG remains more universally
          supported in older image editors and some specialized workflows,
          such as print production using CMYK color, so it's still worth
          keeping your original JPG files as a backup.
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

