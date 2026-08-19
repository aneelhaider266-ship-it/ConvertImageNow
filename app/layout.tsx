import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const SITE_URL = "https://www.convertimagenow.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "ConvertImageNow — Convert Images Instantly, Fast & Secure",
    template: "%s | ConvertImageNow",
  },

  description:
    "Convert JPG, PNG, WebP and AVIF images online in seconds. 100% free, no sign-up, and everything runs securely in your browser — nothing is ever uploaded.",

  alternates: {
    canonical: SITE_URL,
  },

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

  verification: {
    other: {
      "msvalidate.01": "60CAA555BAE22AFA89B6DFDFCB1E8BB8",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
  };

  return (
    <html
      lang="en"
      className={inter.variable}
      suppressHydrationWarning
    >
      <head>
        {/* Organization structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(orgSchema),
          }}
        />

        {/* Website structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />

        {/* AdSense - loaded asynchronously */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5442747651786672"
          crossOrigin="anonymous"
        />
      </head>

      <body className="flex min-h-screen flex-col font-sans antialiased">
        <Header />

        <main className="flex-1">
          {children}
        </main>

        <Footer />

        {/* Google Analytics - load after page is idle */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HNPJHT8NMN"
          strategy="lazyOnload"
        />

        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HNPJHT8NMN');
          `}
        </Script>
      </body>
    </html>
  );
}
