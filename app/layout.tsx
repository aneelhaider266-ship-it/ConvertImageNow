import type { Metadata } from 'next';
import './globals.css';
import Footer from '@/components/Footer'; // 👉 YEH IMPORT CHECK KARO

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
    <html lang="en">
      <body className="antialiased min-h-screen bg-slate-50 text-slate-900 flex flex-col justify-between">
        <main className="flex-grow">
          {children}
        </main>
        <Footer /> {/* 👉 YEH FOOTER ADD HO JAYEGA */}
      </body>
    </html>
  );
}
