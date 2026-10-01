import Link from "next/link";
import { ImageIcon } from "lucide-react";

const COLUMNS = [
  {
    title: "Converters",
    links: [
      { href: "/converter", label: "Image Converter" },
      { href: "/png-to-jpg", label: "PNG to JPG" },
      { href: "/jpg-to-png", label: "JPG to PNG" },
      { href: "/jpg-to-webp", label: "JPG to WebP" },
      { href: "/heic-to-jpg", label: "HEIC to JPG" },
      { href: "/avif-to-jpg", label: "AVIF to JPG" },
      { href: "/image-compressor", label: "Image Compressor" },
      { href: "/image-resizer", label: "Image Resizer" },
    ],
  },
  {
    title: "Image Guides",
    links: [
      { href: "/blog/how-to-make-image-file-smaller", label: "Make Image Smaller" },
      { href: "/blog/heic-to-jpg-guide", label: "HEIC to JPG Guide" },
      { href: "/blog/jpg-to-webp-guide", label: "JPG to WebP Guide" },
      { href: "/blog/image-seo-guide", label: "Image SEO Guide" },
      { href: "/blog/what-is-webp", label: "What is WebP?" },
      { href: "/blog/what-is-avif", label: "What is AVIF?" },
      { href: "/blog/avif-vs-webp", label: "AVIF vs WebP" },
      { href: "/blog/batch-convert-images", label: "Batch Conversion" },
    ],
  },
  {
    title: "Platform",
    links: [
      { href: "/tools", label: "All Tools" },
      { href: "/features", label: "Features" },
      { href: "/blog", label: "Blog" },
      { href: "/faq", label: "FAQ" },
      { href: "/about", label: "About Us" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Legal & Privacy",
    links: [
      { href: "/privacy-policy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
      { href: "/cookie-policy", label: "Cookie Policy" },
      { href: "/disclaimer", label: "Disclaimer" },
      { href: "/accessibility", label: "Accessibility" },
      { href: "/dmca", label: "DMCA Policy" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
      <div className="container-page mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          {/* Brand Col */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-primary text-white">
                <ImageIcon size={18} />
              </span>
              <span className="text-lg tracking-tight">
                Convert<span className="text-brand-primary">ImageNow</span>
              </span>
            </Link>
            <p className="mt-3 max-w-xs text-xs text-slate-500 dark:text-slate-400">
              Convert images instantly, right in your browser. Fast, free, and always private.
            </p>
            <address className="mt-4 max-w-xs text-xs text-slate-400 not-italic">
              6103 Third St, Apt 842<br />
              Philadelphia, CA 63823<br />
              <a
                href="tel:+14585311441"
                className="mt-1 block text-brand-primary hover:underline"
              >
                +1 (458) 531-1441
              </a>
            </address>
          </div>

          {/* Links Cols */}
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                {col.title}
              </h3>
              <ul className="mt-3 space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs text-slate-500 transition-colors hover:text-brand-primary dark:text-slate-400 dark:hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-slate-200 pt-6 text-center text-xs text-slate-400 dark:border-slate-800">
          <p>© {new Date().getFullYear()} ConvertImageNow. All rights reserved. 100% In-Browser Local Processing.</p>
        </div>
      </div>
    </footer>
  );
}
