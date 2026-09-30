import type { Metadata } from "next";
import Link from "next/link";
import { Zap, BookOpen, ArrowRight } from "lucide-react";

const SITE_URL = "https://convertimagenow.com";
const PAGE_URL = `${SITE_URL}/about`;

export const metadata: Metadata = {
  title: "About ConvertImageNow – Privacy-First Image Conversion",
  description:
    "Learn why we built ConvertImageNow. Discover our privacy-first in-browser design helping designers and developers optimize images without cloud uploads.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "About ConvertImageNow – Privacy-First Image Conversion",
    description:
      "Learn why we built ConvertImageNow and how our client-side architecture keeps your files 100% private.",
    url: PAGE_URL,
    siteName: "ConvertImageNow",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About ConvertImageNow | Privacy-First Image Converter",
    description:
      "100% client-side in-browser image conversion with zero server uploads.",
  },
};

const ABOUT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About ConvertImageNow",
  url: PAGE_URL,
  description:
    "Background, core privacy philosophy, and architecture of ConvertImageNow client-side tools.",
  mainEntity: {
    "@type": "Organization",
    name: "ConvertImageNow",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description: "Free in-browser client-side image converter and compressor.",
  },
};

export default function AboutPage() {
  return (
    <article className="container-page py-14 sm:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(ABOUT_SCHEMA),
        }}
      />

      {/* Header */}
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          About ConvertImageNow
        </h1>

        <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
          Why we built a privacy-first image converter and what we&apos;re doing to help people optimize images smarter.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-3xl space-y-12 text-slate-700 dark:text-slate-300">
        {/* The Problem */}
        <section>
          <h2 className="text-3xl font-bold tracking-tight">
            The Problem We Set Out to Solve
          </h2>

          <div className="mt-6 space-y-4">
            <p>
              Most online image converters require you to upload your files to a server before they&apos;ll do anything. That step was never actually necessary.
            </p>

            <p>
              If you&apos;re a designer working with client files under NDA, a photographer dealing with personal photos, or a developer optimizing images for a website, uploading to a remote server introduces unnecessary privacy risk and adds complexity to a simple task.
            </p>

            <p>
              Image conversion—changing a PNG to JPG, converting HEIC to a web-friendly format, or optimizing for WebP—is a fundamentally local operation. Your browser has all the tools it needs to do this work. The uploads were always an artifact of outdated web design, not a requirement.
            </p>
          </div>
        </section>

        {/* Our Solution */}
        <section>
          <h2 className="text-3xl font-bold tracking-tight">
            Our Approach: Browser-Based Processing
          </h2>

          <div className="mt-6 space-y-4">
            <p>
              ConvertImageNow was built around a simple principle: conversions should happen on your device, using your browser&apos;s built-in capabilities, with your files never leaving your control.
            </p>

            <p>
              Using the HTML5 Canvas API and modern compression techniques, we made it possible to convert JPG, PNG, WebP, and AVIF files directly in your browser—instantly, without any upload step. No account creation. No watermarks. No artificial limits. No data collection.
            </p>

            <p>
              This approach has a side benefit: it&apos;s faster. Your images don&apos;t have to travel to a server and back. Conversions start immediately, batch processing happens in seconds, and the results download directly from your device.
            </p>
          </div>
        </section>

        {/* By the Numbers */}
        <section className="rounded-3xl border border-slate-200 bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-3xl font-bold tracking-tight">
            By the Numbers
          </h2>

          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            <div>
              <p className="text-4xl font-bold text-brand-primary">16+</p>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                In-depth guides on image formats, optimization, and conversion best practices — with more being added regularly.
              </p>
            </div>

            <div>
              <p className="text-4xl font-bold text-brand-primary">25-35%</p>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                Average file size reduction when converting PNG to WebP at matched quality.
              </p>
            </div>

            <div>
              <p className="text-4xl font-bold text-brand-primary">4+</p>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                Supported image formats (JPG, PNG, WebP, AVIF, HEIC) for maximum flexibility.
              </p>
            </div>

            <div>
              <p className="text-4xl font-bold text-brand-primary">0</p>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                Images ever stored on our servers. All processing happens locally in your browser.
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Philosophy */}
        <section>
          <h2 className="text-3xl font-bold tracking-tight">
            Why Privacy Matters (And Why We Built It In)
          </h2>

          <div className="mt-6 space-y-4">
            <p>
              Image files often contain sensitive information—personal photos, client work, screenshots with private data, designs not yet public. Uploading to a remote service means trusting that service with your files, their infrastructure, their data retention policies, and their security practices.
            </p>

            <p>
              Browser-based processing removes that entire trust requirement. When conversions happen locally, we have no access to your files. We can&apos;t see them, store them, or accidentally expose them. You maintain complete control from start to finish.
            </p>

            <p>
              For professionals—designers, developers, photographers, consultants—this privacy guarantee is non-negotiable. For everyone else, it&apos;s just peace of mind.
            </p>
          </div>
        </section>

        {/* Learning & Education */}
        <section>
          <h2 className="text-3xl font-bold tracking-tight">
            Beyond the Tool: Educational Content
          </h2>

          <div className="mt-6 space-y-4">
            <p>
              A tool is only useful if people understand when to use it. That&apos;s why we&apos;ve built out a growing library of guides covering:
            </p>

            <ul className="space-y-3 pl-5">
              <li className="flex gap-3">
                <span className="text-brand-primary">•</span>
                <span>Format comparisons (JPG vs PNG vs WebP vs AVIF) and when each makes sense</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-primary">•</span>
                <span>Image optimization techniques for websites, e-commerce, and email</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-primary">•</span>
                <span>How image quality choices affect user experience and SEO</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-primary">•</span>
                <span>Practical workflows for designers, developers, and photographers</span>
              </li>
            </ul>

            <p className="mt-4">
              Our blog isn&apos;t just promotional—it&apos;s designed to be genuinely useful whether or not you use our converter. We publish research-backed recommendations, real-world use cases, and step-by-step guides that help people make better decisions about their images.
            </p>
          </div>
        </section>

        {/* How We Work */}
        <section className="rounded-3xl border border-slate-200 p-8 dark:border-slate-800">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
            <Zap size={24} aria-hidden="true" />
          </div>

          <h2 className="mt-6 text-3xl font-bold tracking-tight">
            How We Keep ConvertImageNow Free and Open
          </h2>

          <div className="mt-6 space-y-4">
            <p>
              There&apos;s no corporate bloat behind ConvertImageNow. No venture funding to chase. No investors demanding growth at any cost. No plan to add paywalls or invasive tracking.
            </p>

            <p>
              The tool exists because it was useful to build. It stays free because that was the point from the start. We&apos;re providing a tool that solves a real problem and backing it with educational content to help people use it well.
            </p>
          </div>
        </section>

        {/* What's Next */}
        <section>
          <h2 className="text-3xl font-bold tracking-tight">
            What We&apos;re Building Next
          </h2>

          <div className="mt-6 space-y-4">
            <p>
              ConvertImageNow is actively developed. We&apos;re working on:
            </p>

            <ul className="space-y-3 pl-5">
              <li className="flex gap-3">
                <span className="text-brand-primary">•</span>
                <span>Additional image formats and more advanced quality controls</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-primary">•</span>
                <span>Mobile-optimized workflows and progressive web app features</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-primary">•</span>
                <span>Deeper guides on image optimization for specific industries</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-primary">•</span>
                <span>Open-source release of core conversion utilities</span>
              </li>
            </ul>

            <p className="mt-4">
              If you have suggestions, find a bug, or just want to share how you&apos;re using ConvertImageNow, we&apos;d love to hear from you.
            </p>
          </div>
        </section>

        {/* Resources */}
        <section className="rounded-3xl border border-slate-200 bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-900">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
            <BookOpen size={24} aria-hidden="true" />
          </div>

          <h2 className="mt-6 text-3xl font-bold tracking-tight">
            Learning Resources
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Check out our guides and articles to learn more about image optimization:
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-3 font-medium text-brand-primary hover:bg-white dark:border-slate-700 dark:hover:bg-slate-950"
            >
              Visit our Blog
              <ArrowRight size={16} aria-hidden="true" />
            </Link>

            <Link
              href="/converter"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-3 font-medium text-brand-primary hover:bg-white dark:border-slate-700 dark:hover:bg-slate-950"
            >
              Start Converting
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </section>

        {/* Get in Touch */}
        <section>
          <h2 className="text-3xl font-bold tracking-tight">
            Get in Touch
          </h2>

          <p className="mt-4">
            Have questions, suggestions, or just want to say hello? Reach out:
          </p>

          <p className="mt-4">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:contact@convertimagenow.com"
              className="text-brand-primary hover:underline"
            >
              contact@convertimagenow.com
            </a>
          </p>

          <p className="mt-2">
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/aneelhaider266-ship-it/ConvertImageNow"
              className="text-brand-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              aneelhaider266-ship-it/ConvertImageNow
            </a>
          </p>
        </section>
      </div>
    </article>
  );
}
