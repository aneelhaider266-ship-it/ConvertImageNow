import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Tools",
  description:
    "Explore ConvertImageNow's image conversion tool, plus a growing roadmap of upcoming free tools including compression, resizing, cropping, and more.",
  alternates: { canonical: "/tools" },
};

const UPCOMING = [
  "Image Compressor",
  "Image Resizer",
  "Crop Image",
  "Rotate Image",
  "Convert JPG to PNG",
  "Convert PNG to JPG",
  "Convert WebP to JPG",
  "Convert JPG to WebP",
  "Convert AVIF to JPG",
  "Convert AVIF to PNG",
  "Image Optimizer",
];

export default function ToolsPage() {
  return (
    <div className="container-page py-14 sm:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Tools
        </h1>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          One tool is live today, with more on the way — all free, all
          browser-based.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-3xl">
        <div className="flex items-center justify-between rounded-2xl border border-brand-accent/30 bg-brand-accent/5 p-6">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="text-brand-accent" size={22} />
            <div>
              <p className="font-semibold">Image Converter</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Convert between JPG, PNG, WebP, and AVIF
              </p>
            </div>
          </div>
          <Link
            href="/converter"
            className="rounded-full bg-brand-primary px-4 py-2 text-sm font-semibold text-white"
          >
            Open
          </Link>
        </div>

        <h2 className="mt-12 text-xl font-semibold">Coming soon</h2>
        <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {UPCOMING.map((tool) => (
            <li
              key={tool}
              className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-600 dark:border-slate-800 dark:text-slate-400"
            >
              <Clock size={16} className="flex-shrink-0 text-slate-400" />
              {tool}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
