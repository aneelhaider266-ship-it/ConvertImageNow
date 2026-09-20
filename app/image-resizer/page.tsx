import type { Metadata } from "next";
import ImageResizer from "@/components/ImageResizer";
import { ShieldCheck, WifiOff, Infinity as InfinityIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Image Resizer - Resize JPG, PNG, WebP Online Free",
  description:
    "Resize JPG, PNG, WebP and AVIF images online for free. Change dimensions by pixels or percentage. Private, browser-based, no upload — works offline.",
  keywords: [
    "image resizer",
    "resize image",
    "resize jpg",
    "resize png",
    "photo resizer",
    "image dimensions changer",
  ],
  alternates: { canonical: "/image-resizer" },
  openGraph: {
    title: "Image Resizer - Resize Images Online Free",
    description:
      "Free browser-based tool to resize images by pixels or percentage. No upload needed.",
    url: "/image-resizer",
    type: "website",
  },
};

const POINTS = [
  {
    icon: ShieldCheck,
    title: "Truly private",
    desc: "Your images never touch a server. Resizing happens directly in your browser using Canvas API.",
  },
  {
    icon: WifiOff,
    title: "Works offline",
    desc: "Once the page has loaded, you can resize images entirely on your device — no internet needed.",
  },
  {
    icon: InfinityIcon,
    title: "No artificial limits",
    desc: "No daily quota, no watermark, no file size limit. Resize as many images as you want.",
  },
];

const FAQS = [
  {
    q: "Is this image resizer really free?",
    a: "Yes. ConvertImageNow provides a 100% free browser-based image resizer without requiring registration, watermark, or any hidden fees. You can resize unlimited images.",
  },
  {
    q: "Can I resize by exact pixel dimensions?",
    a: "Yes. Switch to the Pixels tab and enter your target width and height. Turn on the aspect ratio lock to keep the image proportions consistent automatically.",
  },
  {
    q: "Can I resize multiple images at once?",
    a: "Yes. Upload several images at once and apply the same width, height, or percentage to all of them, then download the results individually or as a ZIP file.",
  },
  {
    q: "Will resizing reduce image quality?",
    a: "Resizing down generally preserves quality well. You can also adjust the output quality slider for JPG and WebP formats to balance file size and sharpness.",
  },
];

export default function ImageResizerPage() {
  return (
    <div className="container-page py-14 sm:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Image Resizer
        </h1>
        <p className="mt-3 text-slate-500 dark:text-slate-400">
          Resize JPG, PNG, WebP, and AVIF images by exact pixels or
          percentage — free, private, and processed entirely in your
          browser.
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-3xl">
        <ImageResizer />
      </div>

      <div className="mx-auto mt-16 grid max-w-4xl gap-6 sm:grid-cols-3">
        {POINTS.map((point) => (
          <div
            key={point.title}
            className="rounded-2xl border border-slate-200 p-5 dark:border-slate-700"
          >
            <point.icon
              size={22}
              className="text-brand-primary"
              aria-hidden="true"
            />
            <h3 className="mt-3 font-semibold">{point.title}</h3>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              {point.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-16 max-w-3xl">
        <h2 className="text-2xl font-bold tracking-tight">
          Frequently Asked Questions
        </h2>
        <div className="mt-6 space-y-6">
          {FAQS.map((faq) => (
            <div key={faq.q}>
              <h3 className="font-semibold">{faq.q}</h3>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
