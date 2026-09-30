import Link from "next/link";
import { ArrowRight, Layers } from "lucide-react";

export default function NotFound() {
  const QUICK_TOOLS = [
    { name: "PNG to JPG", href: "/png-to-jpg" },
    { name: "JPG to WebP", href: "/jpg-to-webp" },
    { name: "HEIC to JPG", href: "/heic-to-jpg" },
    { name: "Image Compressor", href: "/image-compressor" },
  ];

  return (
    <div className="container-page flex flex-col items-center justify-center py-24 sm:py-32 text-center">
      <span className="rounded-full bg-brand-primary/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-primary">
        Error 404
      </span>

      <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl text-slate-900 dark:text-white">
        Page Not Found
      </h1>

      <p className="mt-3 max-w-md text-base text-slate-600 dark:text-slate-300">
        The page you&apos;re looking for doesn&apos;t exist or may have been moved. Try one of our free image tools below:
      </p>

      {/* Quick Navigation to Popular Converters */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-2 max-w-md">
        {QUICK_TOOLS.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm transition-all hover:border-brand-primary hover:text-brand-primary dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
          >
            {tool.name}
          </Link>
        ))}
      </div>

      <div className="mt-8 flex items-center gap-4">
        <Link
          href="/"
          className="rounded-full bg-brand-primary px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand-primary/20 transition-transform hover:-translate-y-0.5 hover:bg-brand-primary/90"
        >
          Back to Homepage
        </Link>
        <Link
          href="/tools"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-brand-primary dark:text-slate-400"
        >
          <span>View all tools</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
