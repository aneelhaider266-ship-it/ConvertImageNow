import Link from "next/link";
import {
  Zap,
  Lock,
  Gift,
  UploadCloud,
  Infinity as InfinityIcon,
  Layers,
  ArrowRight,
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

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Online Image Format Conversion",
  provider: {
    "@type": "Organization",
    name: "ConvertImageNow",
    url: "https://www.convertimagenow.com",
  },
  areaServed: "Worldwide",
  audience: {
    "@type": "Audience",
    audienceType: "Anyone converting image files",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  description:
    "Convert JPG, PNG, WebP and AVIF images instantly and securely in-browser, with no uploads, no sign-up, and no cost.",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }}
      />

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

      {/* Free Online Image Converter */}
      <section className="container-page py-16 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Free Online Image Converter
          </h2>

          <div className="mt-6 space-y-4 text-slate-600 dark:text-slate-300">
            <p>
              ConvertImageNow is a free online image converter that lets you
              convert JPG, PNG, WebP, and AVIF files directly in your browser.
              You can convert individual images or process multiple files at
              once without installing software or creating an account.
            </p>

            <p>
              The conversion process happens on your device using your
              browser&apos;s built-in image processing capabilities. Your
              images are not uploaded to our servers, making ConvertImageNow a
              convenient option for personal photos, website images, design
              files, screenshots, and other images that you want to keep
              private.
            </p>

            <p>
              Choose your output format, adjust the available quality setting,
              and download your converted images when the process is complete.
              The tool is designed to work on modern desktop and mobile
              browsers.
            </p>

            <p>
              Whether you need to change a PNG image to JPG, convert JPG to
              WebP for a website, or create another supported format,
              ConvertImageNow provides a simple way to convert your files
              without unnecessary software or complicated settings.
            </p>
          </div>
        </div>
      </section>

      {/* Image Formats */}
      <section className="border-y border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900">
        <div className="container-page py-16 sm:py-24">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Convert Between Popular Image Formats
            </h2>

            <p className="mt-5 text-slate-600 dark:text-slate-300">
              Different image formats are useful for different purposes.
              ConvertImageNow makes it easy to change your images into a format
              that works better for websites, applications, sharing, or
              storage.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
                <h3 className="font-semibold">JPG</h3>

                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  JPG is widely supported and works well for photographs and
                  everyday images where smaller file sizes are useful.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
                <h3 className="font-semibold">PNG</h3>

                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  PNG is useful for graphics, screenshots, logos, and images
                  where lossless quality or transparency is important.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
                <h3 className="font-semibold">WebP</h3>

                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  WebP is a modern web-friendly format that can provide
                  smaller files while maintaining good visual quality.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
                <h3 className="font-semibold">AVIF</h3>

                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  AVIF is a modern image format designed to provide efficient
                  compression while maintaining strong image quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container-page py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            How ConvertImageNow Works
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Convert your images in just a few simple steps without installing
            additional software.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 p-6 dark:border-slate-800">
            <span className="text-sm font-bold text-brand-primary">01</span>

            <h3 className="mt-3 font-semibold">Choose your images</h3>

            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Select or drag and drop the JPG, PNG, WebP, or AVIF images you
              want to convert.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6 dark:border-slate-800">
            <span className="text-sm font-bold text-brand-primary">02</span>

            <h3 className="mt-3 font-semibold">
              Select the output format
            </h3>

            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Choose the image format you need and adjust the available quality
              setting when supported.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6 dark:border-slate-800">
            <span className="text-sm font-bold text-brand-primary">03</span>

            <h3 className="mt-3 font-semibold">Download your images</h3>

            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Download your converted files individually or use the batch
              download option when working with multiple images.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="border-y border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900">
        <div className="container-page py-16 sm:py-24">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Useful for Websites, Work, and Everyday Images
            </h2>

            <p className="mt-5 text-slate-600 dark:text-slate-300">
              Image conversion is useful in many everyday situations.
              ConvertImageNow is designed to provide a simple browser-based
              workflow for people who need to change image formats quickly.
            </p>

            <div className="mt-8 space-y-5">
              <div>
                <h3 className="font-semibold">Website images</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  Convert images into web-friendly formats such as WebP or
                  other supported formats when preparing images for a website.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">E-commerce product photos</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  Convert product photos into a format that works with your
                  store, marketplace, or content management system.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">Design and creative work</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  Designers can quickly convert images between supported
                  formats when preparing assets for different projects.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">Batch image conversion</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  When you have multiple images to convert, batch processing
                  can save time by allowing several files to be handled in one
                  session.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy */}
      <section className="container-page py-16 sm:py-24">
        <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 p-8 dark:border-slate-800 sm:p-10">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
            <Lock size={22} />
          </div>

          <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
            Private Image Conversion in Your Browser
          </h2>

          <div className="mt-5 space-y-4 text-slate-600 dark:text-slate-300">
            <p>
              Privacy matters when working with personal photos, business
              graphics, screenshots, and other files. ConvertImageNow is
              designed around browser-based processing, so images can be
              converted without sending them to a remote conversion server.
            </p>

            <p>
              This client-side approach also means you do not need to create an
              account before using the converter. Open the tool, select your
              images, convert them, and download the results directly from your
              browser.
            </p>

            <p>
              Because the conversion takes place locally, your original image
              files remain on your device during the conversion process. This
              makes the tool useful when you prefer not to upload images to an
              online service.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-page py-16 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Frequently asked questions
          </h2>

          <p className="mt-3 text-slate-600 dark:text-slate-300">
            Find answers to common questions about converting images online.
          </p>
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
            conversion directly in your browser.
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
