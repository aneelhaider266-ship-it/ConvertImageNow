import Link from "next/link";
import { ImageIcon } from "lucide-react";

const COLUMNS = [
  {
    title: "Tools",
    links: [
      { href: "/converter", label: "Image Converter" },
      { href: "/heic-to-jpg", label: "HEIC to JPG" },
      { href: "/avif-to-jpg", label: "AVIF to JPG" },
      { href: "/tools", label: "All Tools" },
      { href: "/features", label: "Features" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/blog", label: "Blog" },
      { href: "/faq", label: "FAQ" },
      { href: "/about", label: "About Us" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/contact", label: "Contact" },
      { href: "/accessibility", label: "Accessibility" },
      { href: "/dmca", label: "DMCA Policy" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy-policy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
      { href: "/cookie-policy", label: "Cookie Policy" },
      { href: "/disclaimer", label: "Disclaimer" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
      <div className="container-page grid grid-cols-2 gap-8 py-12 sm:grid-cols-3 lg:grid-cols-5">
        <div className="col-span-2 lg:col-span-1">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-primary text-white">
              <ImageIcon size={18} />
            </span>
            <span className="text-lg tracking-tight">
              Convert<span className="text-brand-primary">ImageNow</span>
            </span>
          </Link>
          <p className="mt-3 max-w-xs text-sm text-slate-500 dark:text-slate-400">
            Convert images instantly, right in your browser. Fast, free, and
            always private.
          </p>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title}>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
              {col.title}
            </h3>
            <ul className="mt-3 space-y-2">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-500 transition-colors hover:text-brand-primary dark:text-slate-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-slate-200 py-6 dark:border-slate-800">
        <p className="container-page text-center text-sm text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} ConvertImageNow.com — All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
