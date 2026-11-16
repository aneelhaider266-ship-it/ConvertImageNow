import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
        <Footer /> {/* 👉 YEH FOOTER ADD HO JAYEGA */}
      </body>
    </html>
  );
}
