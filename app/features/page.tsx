import type { Metadata } from "next";
import {
  Zap,
  Lock,
  Globe2,
  InfinityIcon,
  UserX,
  Layers,
  Smartphone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Features",
  description:
    "See why ConvertImageNow is one of the fastest, most private image converters on the web — browser-based processing, unlimited use, and no registration.",
  alternates: { canonical: "/features" },
};

const FEATURES = [
  {
    icon: Zap,
    title: "Fast Processing",
    desc: "Conversions run on your own device, so there's no upload wait or server queue slowing you down.",
  },
  {
    icon: Lock,
    title: "Privacy First",
    desc: "Your images are never transmitted anywhere. What happens in your browser stays in your browser.",
  },
  {
    icon: Globe2,
    title: "Browser Based",
    desc: "No software to install — ConvertImageNow works entirely inside modern web browsers using the Canvas API.",
  },
  {
    icon: InfinityIcon,
    title: "Unlimited Usage",
    desc: "Convert one image or one thousand — there's no cap on how much you can use the tool.",
  },
  {
    icon: UserX,
    title: "No Registration",
    desc: "Skip the sign-up forms. Open the converter and start working immediately.",
  },
  {
    icon: Layers,
    title: "Batch Processing",
    desc: "Select or drag in multiple files at once and convert them all together.",
  },
  {
    icon: Smartphone,
    title: "Cross Platform",
    desc: "Works on desktop, tablet, and mobile browsers alike, with a fully responsive interface.",
  },
];

export default function FeaturesPage() {
  return (
    <div className="container-page py-14 sm:py-20">
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
            className="rounded-2xl border border-slate-200 p-6 transition-shadow hover:shadow-md dark:border-slate-800"
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
    </div>
  );
}
