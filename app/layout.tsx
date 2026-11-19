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
    'Convert JPG, PNG, WebP, and supported AVIF images in your browser. Batch processing and no conversion-server upload for supported image files.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'ConvertImageNow',
    title: 'ConvertImageNow — Free Online Image Converter & Compressor',
    description:
      'Convert supported image formats in your browser. Adjust quality, resize, and download JPG, PNG, or WebP files.',
    url: 'https://convertimagenow.com',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'ConvertImageNow — Free browser-based image converter',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ConvertImageNow — Free Online Image Converter',
    description:
      'Convert supported image formats in your browser. Adjust quality, resize, and download.',
    images: ['/twitter-image'],
  },
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
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-HVE3DZHGFR"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){window.dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-HVE3DZHGFR');`,
          }}
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5442747651786672"
          crossOrigin="anonymous"
        />
      </head>
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
