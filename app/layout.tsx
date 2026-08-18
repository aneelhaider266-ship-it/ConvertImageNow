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
  alternates: { canonical: SITE_URL },
  verification: {
    other: {
      "msvalidate.01": "60CAA555BAE22AFA89B6DFDFCB1E8BB8",
    },
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
    sameAs: [
      "https://www.linkedin.com/in/aneel-haider-539460307",
      "https://x.com/Aneel7157791",
    ],
  };
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ConvertImageNow",
    url: SITE_URL,
    description:
      "Convert JPG, PNG, WebP and AVIF images online in seconds. 100% free, no sign-up, and everything runs securely in your browser — nothing is ever uploaded.",
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/converter`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
  async
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5442747651786672"
  crossOrigin="anonymous"
></script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HNPJHT8NMN"
          strategy="lazyOnload"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HNPJHT8NMN');
          `}
        </Script>
      </head>
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
