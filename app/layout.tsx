import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://convertimagenow.com'),
  title: {
    default: 'ConvertImageNow — Free Online Image Converter & Compressor',
    template: '%s | ConvertImageNow',
  },
  description:
    'Convert JPG, PNG, WebP, and AVIF images instantly in your browser. 100% private, free batch processing, no file uploads to servers.',
  alternates: {
    canonical: './',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://convertimagenow.com',
    siteName: 'ConvertImageNow',
    title: 'ConvertImageNow — Free Online Image Converter & Compressor',
    description:
      'Convert JPG, PNG, WebP, and AVIF directly in your browser. Fast, free, and completely private.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ConvertImageNow — Free Online Image Converter',
    description:
      'Private in-browser image conversion for JPG, PNG, WebP, and AVIF.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen bg-slate-50 text-slate-900">
        {children}
      </body>
    </html>
  );
}
