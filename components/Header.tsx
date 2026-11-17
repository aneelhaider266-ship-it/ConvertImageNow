"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ImageIcon } from "lucide-react";

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


  return (
    <header className="sticky top-0 z-50 h-14 shrink-0 border-b border-[#263956] bg-[#101B33]/95 backdrop-blur sm:h-16">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between gap-2 px-3 sm:h-16 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          aria-label="ConvertImageNow home"
          className="flex min-w-0 shrink items-center gap-1.5 font-semibold sm:gap-2"
        >
          <span
            aria-hidden="true"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-primary text-white"
          >
            <ImageIcon size={18} />
          </span>

          <span className="whitespace-nowrap text-[14px] tracking-tight sm:text-lg">
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
              className="flex h-16 items-center text-sm font-medium text-slate-300 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex h-14 shrink-0 items-center gap-1 sm:h-16 sm:gap-2">
          <Link
            href="/converter"
            className="inline-flex h-9 shrink-0 items-center whitespace-nowrap rounded-full bg-[#398BFF] px-2.5 text-[11px] font-semibold text-white transition-transform hover:-translate-y-0.5 sm:h-10 sm:px-4 sm:text-sm"
          >
            <span className="sm:hidden">Convert</span><span className="hidden sm:inline">Start Converting</span>
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-slate-300 hover:bg-[#263956] hover:text-white lg:hidden"
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
          className="border-t border-[#314969] bg-[#172642] px-4 pb-4 text-white lg:hidden"
        >
          <ul className="flex flex-col gap-1 pt-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-200 hover:bg-[#263956] hover:text-white"
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
