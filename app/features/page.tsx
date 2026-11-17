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
    title: "ConvertImageNow Features | Browser-Based Tools",
    description:
      "Discover how supported image files are processed in your browser and how the available tools work.",
    url: PAGE_URL,
    siteName: "ConvertImageNow",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ConvertImageNow Features | Browser-Based Tools",
    description:
      "Browser-based processing, batch downloads, and no account requirement.",
  },
};

const FEATURES = [
  {
    icon: Zap,
    title: "Browser-Based Processing",
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
    "Features of the ConvertImageNow browser-based image conversion tools.",
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
            className="rounded-2xl border border-slate-200 bg-white/70 p-6 transition-shadow hover:shadow-md dark:border-[#314969] dark:bg-[#172642]/70"
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
          Some online converters upload files for remote processing. ConvertImageNow uses browser APIs for supported conversions, so selected image data does not need to be sent to a conversion server. Processing time depends on the file, browser, and device.
        </p>
        <p>
          You can add multiple supported files to the queue, but practical batch size depends on image dimensions, browser memory, and the device. The current converter processes files sequentially and does not require an account.
        </p>

        <h2 className="text-2xl font-bold">No catches, no hidden costs</h2>
        <p>
          The listed converter tools are free to use and do not require an account. Converted downloads do not include an added ConvertImageNow watermark. Browser and device limits still apply to large images and batches.
        </p>
      </div>
    </div>
  );
}
