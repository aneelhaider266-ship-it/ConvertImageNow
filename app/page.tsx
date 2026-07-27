import Link from "next/link";
import {
  Zap,
  Lock,
  Gift,
  UploadCloud,
  Infinity as InfinityIcon,
  Layers,
  ArrowRight,
  Star,
} from "lucide-react";
import ImageConverter from "@/components/ImageConverter";
import { FAQ_ITEMS } from "@/lib/faq";

const FEATURES = [
  {
    icon: Zap,
    title: "Fast",
    desc: "Conversions happen instantly using your device's own processing power.",
  },
  {
    icon: Lock,
    title: "Secure",
    desc: "Images never leave your browser — nothing is ever uploaded to a server.",
  },
  {
    icon: Gift,
    title: "Free",
    desc: "No subscriptions, no watermarks, no hidden limits. Ever.",
  },
  {
    icon: UploadCloud,
    title: "No Upload",
    desc: "Everything runs locally using the HTML5 Canvas API.",
  },
  {
    icon: InfinityIcon,
    title: "Unlimited",
    desc: "Convert as many images as you want, as often as you want.",
  },
  {
    icon: Layers,
    title: "Batch Conversion",
    desc: "Drop in dozens of images and convert them all in one go.",
  },
];

const STATS = [
  { value: "100%", label: "Browser-based processing" },
  { value: "0", label: "Images stored on our servers" },
  { value: "4", label: "Supported formats" },
  { value: "24/7", label: "Available, no sign-up needed" },
];

const TESTIMONIALS = [
  {
    quote:
      "I needed to batch-convert a few dozen product photos to WebP and this handled it in seconds, right from my phone.",
    name: "Priya S.",
    role: "E-commerce seller",
  },
  {
    quote:
      "Being able to see the file size drop in real time before downloading made picking the right quality setting effortless.",
    name: "Marcus T.",
    role: "Freelance web developer",
  },
  {
    quote:
      "The fact that nothing gets uploaded anywhere is exactly what I needed for client work under NDA.",
    name: "Fatima R.",
    role: "Graphic designer",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200 dark:border-slate-800">
        <div className="container-page py-16 sm:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600 dark:border-slate-700 dark:text-slate-300">
              <Lock size={12} className="text-brand-accent" />
              100% private — runs entirely in your browser
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Convert Images Online in Seconds
            </h1>
            <p className="mt-5 text-lg text-slate-600 dark:text-slate-300">
              Convert JPG, PNG, WebP and AVIF images instantly. Free, secure,
              and processed completely inside your browser.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-3xl">
            <ImageConverter />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container-page py-16 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need, nothing you don&apos;t
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            Built to be the fastest, most private image converter on the web.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-slate-200 p-6 transition-shadow hover:shadow-md dark:border-slate-800"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                <f.icon size={20} />
              </span>
              <h3 className="mt-4 font-semibold">{f.title}</h3>
              <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-400">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900">
        <div className="container-page grid grid-cols-2 gap-8 py-14 sm:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-bold text-brand-primary sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="container-page py-16 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Loved by people who work with images every day
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="rounded-2xl border border-slate-200 p-6 dark:border-slate-800"
            >
              <div className="flex gap-0.5 text-brand-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <blockquote className="mt-4 text-sm text-slate-600 dark:text-slate-300">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-sm font-semibold">
                {t.name}
                <span className="block font-normal text-slate-500 dark:text-slate-400">
                  {t.role}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* FAQ preview */}
      <section className="container-page py-16 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Frequently asked questions
          </h2>
        </div>
        <div className="mx-auto mt-10 max-w-2xl divide-y divide-slate-200 dark:divide-slate-800">
          {FAQ_ITEMS.slice(0, 5).map((item) => (
            <details key={item.question} className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                {item.question}
                <span className="ml-4 text-slate-400 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/faq"
            className="inline-flex items-center gap-1 text-sm font-semibold text-brand-primary hover:underline"
          >
            View all FAQs <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page pb-20">
        <div className="rounded-3xl bg-brand-secondary px-8 py-14 text-center text-white sm:px-16">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to convert your images?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-300">
            No sign-up, no watermark, no catch. Just fast, private image
            conversion.
          </p>
          <Link
            href="/converter"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            Start Converting Free <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
