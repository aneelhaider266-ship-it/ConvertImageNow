import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://convertimagenow.com'),
  title: {
    default: 'ConvertImageNow — Free Online Image Converter & Compressor',
    template: '%s',
  },
  description:
    'Convert JPG, PNG, WebP, and AVIF images instantly in your browser. Browser-based image conversion for JPG, PNG, WebP, and AVIF, with batch processing and no conversion-server upload.',
  alternates: {
    canonical: './',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased min-h-screen bg-[#101B33] text-slate-100 flex flex-col justify-between">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
