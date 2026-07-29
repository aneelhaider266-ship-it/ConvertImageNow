import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL = "https://www.convertimagenow.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "ConvertImageNow — Convert Images Instantly, Fast & Secure",
    template: "%s | ConvertImageNow",
  },
  description:
    "Convert JPG, PNG, WebP and AVIF images online in seconds. 100% free, no sign-up, and everything runs securely in your browser — nothing is ever uploaded.",
  keywords: [
    "image converter",
    "convert jpg to png",
    "convert png to jpg",
    "convert webp to jpg",
    "online image converter",
    "free image converter",
  ],
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "ConvertImageNow",
    title: "ConvertImageNow — Convert Images Instantly, Fast & Secure",
    description:
      "Convert JPG, PNG, WebP and AVIF images online in seconds. Free, secure, and processed entirely in your browser.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ConvertImageNow — Convert Images Instantly",
    description:
      "Free online image converter. Fast, secure, browser-based — no uploads, no limits.",
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ConvertImageNow",
    url: SITE_URL,
    email: "contact@convertimagenow.com",
    logo: `${SITE_URL}/logo.png`,
  };

  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
