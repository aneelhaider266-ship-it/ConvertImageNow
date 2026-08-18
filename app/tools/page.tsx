import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Tools",
  description:
    "Explore ConvertImageNow's image conversion tools, plus a growing roadmap of upcoming free tools including compression, resizing, and more.",
  alternates: { canonical: "/tools" },
};

const LIVE_TOOLS = [
  {
    title: "Image Converter",
    desc: "Convert between JPG, PNG, WebP, and AVIF",
    href: "/converter",
  },
  {
    title: "HEIC to JPG Converter",
    desc: "Convert iPhone HEIC photos to JPG",
    href: "/heic-to-jpg",
  },
  {
    title: "AVIF to JPG Converter",
    desc: "Convert modern AVIF images to JPG",
    href: "/avif-to-jpg",
  },
];

const UPCOMING = [
  "Image Compressor",
  "Image Resizer",
  "Crop Image",
  "Rotate Image",
  "Convert JPG to PNG",
  "Convert PNG to JPG",
  "Convert WebP to JPG",
  "Convert JPG to WebP",
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
          Three tools are live today, with more on the way — all free, all
          browser-based.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-3xl">
        <div className="space-y-3">
          {LIVE_TOOLS.map((tool) => (
            <div
              key={tool.href}
              className="flex items-center justify-between rounded-2xl border border-brand-accent/30 bg-brand-accent/5 p-5"
            >
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-brand-accent" size={22} />
                <div>
                  <p className="font-semibold">{tool.title}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {tool.desc}
                  </p>
                </div>
              </div>
              <Link
                href={tool.href}
                className="rounded-full bg-brand-primary px-4 py-2 text-sm font-semibold text-white"
              >
                Open
              </Link>
            </div>
          ))}
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

        <div className="mt-14 space-y-6 text-left text-slate-700 dark:text-slate-300">
          <h2 className="text-2xl font-bold">One converter, built to grow</h2>
          <p>
            The image converter above is the foundation of ConvertImageNow, and it already handles the most common conversion needs — swapping between JPG, PNG, WebP, and AVIF with full control over output quality and batch processing. Everything on this page runs the same way: locally in your browser, with nothing uploaded to a server.
          </p>
          <p>
            The tools listed under &quot;Coming soon&quot; are the next things we&apos;re building, based on what people actually ask for after converting an image — resizing it for a specific use, compressing it further without a second converter, or making a quick crop or rotation before downloading. Each one will follow the same rule as the converter: free, no sign-up, no file ever leaving your device.
          </p>
          <p>
            If there&apos;s a specific tool you&apos;d like to see prioritized, you&apos;re welcome to{" "}
            <Link href="/contact" className="text-brand-primary hover:underline">
              reach out
            </Link>{" "}
            and let us know what you&apos;re trying to do.
          </p>
        </div>
      </div>
    </div>
  );
}
