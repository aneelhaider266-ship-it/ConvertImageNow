"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun, ImageIcon } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/converter", label: "Image Converter" },
  { href: "/features", label: "Features" },
  { href: "/tools", label: "Tools" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("cin-theme");

    const prefersDark =
      window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;

    const isDark = stored === "dark" || (!stored && prefersDark);

    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleDark = () => {
    const nextDark = !dark;

    setDark(nextDark);
    document.documentElement.classList.toggle("dark", nextDark);
    window.localStorage.setItem("cin-theme", nextDark ? "dark" : "light");
  };

  return (
    <header className="sticky top-0 z-50 h-16 shrink-0 border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
      <div className="container-page flex h-16 items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          aria-label="ConvertImageNow home"
          className="flex h-10 items-center gap-2 font-semibold"
        >
          <span
            aria-hidden="true"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-primary text-white"
          >
            <ImageIcon size={18} />
          </span>

          <span className="whitespace-nowrap text-lg tracking-tight">
            Convert<span className="text-brand-primary">ImageNow</span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden h-16 items-center gap-7 lg:flex"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex h-16 items-center text-sm font-medium text-slate-600 transition-colors hover:text-brand-primary dark:text-slate-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex h-16 items-center gap-2">
          <button
            type="button"
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            aria-pressed={dark}
            onClick={toggleDark}
            className="flex h-10 w-10 items-center justify-center rounded-full text-slate-600 transition-colors hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            {dark ? (
              <Sun size={18} aria-hidden="true" />
            ) : (
              <Moon size={18} aria-hidden="true" />
            )}
          </button>

          <Link
            href="/converter"
            className="hidden h-10 items-center rounded-full bg-brand-primary px-4 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            Start Converting
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="flex h-10 w-10 items-center justify-center rounded-full text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 lg:hidden"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <X size={20} aria-hidden="true" />
            ) : (
              <Menu size={20} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-slate-200 bg-white px-4 pb-4 dark:border-slate-800 dark:bg-slate-950 lg:hidden"
        >
          <ul className="flex flex-col gap-1 pt-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
