import type { Metadata } from "next";
import {
  Zap,
  Lock,
  Globe2,
  CheckCircle2,
  UserX,
  Layers,
  Smartphone,
} from "lucide-react";

const SITE_URL = "https://convertimagenow.com";
const PAGE_URL = `${SITE_URL}/features`;

export const metadata: Metadata = {
  title: "ConvertImageNow Features | Browser-Based Tools",
  description:
    "Explore browser-based image conversion, adjustable output quality, batch downloads, and supported formats.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "ConvertImageNow Features | Fast & Private Image Tools",
    description:
      "Discover how supported image files are processed in your browser and how the available tools work.",
    url: PAGE_URL,
    siteName: "ConvertImageNow",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ConvertImageNow Features | Fast & Private Image Tools",
    description:
      "Browser-based processing, batch downloads, and no account requirement.",
  },
};

const FEATURES = [
  {
    icon: Zap,
    title: "Fast Processing",
    desc: "Selected image files are processed in your browser rather than sent to a conversion server. Processing time depends on your device and image size.",
  },
  {
    icon: Lock,
    title: "Privacy First",
    desc: "Selected image files are processed locally for supported conversions. The website still makes normal requests and may collect limited technical data as described in the Privacy Policy.",
  },
  {
    icon: Globe2,
    title: "Browser Based",
    desc: "No separate desktop software is required. Supported conversions use browser image decoding and Canvas APIs.",
  },
  {
    icon: CheckCircle2,
    title: "Free to Use",
    desc: "Use the listed tools without creating an account. Practical batch capacity depends on your device and browser memory.",
  },
  {
    icon: UserX,
    title: "No Registration",
    desc: "Skip the sign-up forms. Open the converter and start working immediately.",
  },
  {
    icon: Layers,
    title: "Batch Processing",
    desc: "Select multiple supported files. The converter processes queued images sequentially and offers individual downloads or ZIP export.",
  },
  {
    icon: Smartphone,
    title: "Cross Platform",
    desc: "The interface is responsive across desktop and mobile screen sizes. Available formats depend on browser support.",
  },
];

const FEATURES_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "ConvertImageNow Core Features",
  url: PAGE_URL,
  description:
    "Key architectural features and benefits of the ConvertImageNow client-side platform.",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: FEATURES.map((f, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: f.title,
      description: f.desc,
    })),
  },
};

export default function FeaturesPage() {
  return (
    <div className="container-page py-14 sm:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(FEATURES_SCHEMA),
        }}
      />

      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Built for speed, privacy, and simplicity
        </h1>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          Every part of ConvertImageNow is designed around one idea: your
          images are yours, and converting them shouldn&apos;t cost you
          anything — money, time, or privacy.
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f) => (
          <div
            key={f.title}
            className="rounded-2xl border border-slate-200 p-6 transition-shadow hover:shadow-md dark:border-[#314969]"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
              <f.icon size={20} />
            </span>
            <h2 className="mt-4 font-semibold">{f.title}</h2>
            <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-400">
              {f.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-16 max-w-2xl space-y-6 text-left text-slate-700 dark:text-slate-300">
        <h2 className="text-2xl font-bold">Why speed and privacy go together</h2>
        <p>
          Most online converters work by uploading your file to a server, converting it there, and sending the result back. That round trip is where the delay comes from, and it&apos;s also where your files leave your control. ConvertImageNow skips that step entirely — the conversion happens using your device&apos;s own processing power, through your browser, so there&apos;s nothing to upload and nothing to wait on.
        </p>
        <p>
          This also means the tool works the same way whether you&apos;re converting a single screenshot or a folder of a hundred product photos. There&apos;s no server queue to slow down under load, no file size limit imposed to protect someone else&apos;s bandwidth, and no account required to unlock batch processing.
        </p>

        <h2 className="text-2xl font-bold">No catches, no hidden costs</h2>
        <p>
          ConvertImageNow doesn&apos;t have a paid tier, a daily conversion cap, or a watermark added to your downloads. The features above aren&apos;t a trial version of something bigger — they&apos;re the whole tool, available to everyone who opens the page, on any device with a modern browser.
        </p>
      </div>
    </div>
  );
}
