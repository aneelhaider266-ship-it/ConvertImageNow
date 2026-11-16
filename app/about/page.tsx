import type { Metadata } from "next";
import Link from "next/link";
import { Zap, BookOpen, ArrowRight } from "lucide-react";

const SITE_URL = "https://convertimagenow.com";
const PAGE_URL = `${SITE_URL}/about`;

export const metadata: Metadata = {
  title: "About ConvertImageNow | Browser-Based Tools",
  description:
    "Learn how ConvertImageNow processes supported image files in the browser and publishes practical guides to image formats and optimization.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "About ConvertImageNow – Privacy-First Image Conversion",
    description:
      "Learn about our browser-based conversion workflow and image format guides.",
    url: PAGE_URL,
    siteName: "ConvertImageNow",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About ConvertImageNow | Privacy-First Image Converter",
    description:
      "Browser-based image conversion for supported formats.",
  },
};

const ABOUT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About ConvertImageNow",
  url: PAGE_URL,
  description:
    "Background and browser-based processing approach behind ConvertImageNow.",
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
          Why we built a browser-based image converter and how we help people make informed image format choices.
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
              Some online image converters send selected files to a remote server for processing. For supported formats, browser APIs can perform the conversion on the user&apos;s device instead.
            </p>

            <p>
              If you&apos;re a designer working with client files under NDA, a photographer dealing with personal photos, or a developer optimizing images for a website, uploading to a remote server introduces unnecessary privacy risk and adds complexity to a simple task.
            </p>

            <p>
              Common format conversions such as PNG to JPG or JPG to WebP can be handled with browser image decoding and Canvas APIs. Browser support varies by format; HEIC is not currently accepted by our converter.
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
              ConvertImageNow uses browser APIs to process supported image files on your device rather than sending the selected image data to a conversion server.
            </p>

            <p>
              The converter uses browser image decoding and the HTML5 Canvas API for supported JPG, PNG, WebP, and AVIF inputs. It offers JPG, PNG, and WebP output, does not require an account, and does not add a watermark to converted downloads. Practical batch capacity depends on your device and browser memory.
            </p>

            <p>
              Processing selected image data in the browser avoids sending those files to a remote conversion server. Conversion time still depends on image dimensions, browser, and device.
            </p>
          </div>
        </section>

        {/* By the Numbers */}
        <section className="rounded-3xl border border-slate-200 bg-slate-50 p-8 dark:border-[#314969] dark:bg-[#172642]">
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
              <p className="text-4xl font-bold text-brand-primary">3</p>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                Available output formats: JPG, PNG, and WebP. File-size results vary by image and settings.
              </p>
            </div>

            <div>
              <p className="text-4xl font-bold text-brand-primary">4</p>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                Accepted input formats: JPG, PNG, WebP, and AVIF where browser decoding is supported. HEIC is not currently supported.
              </p>
            </div>

            <div>
              <p className="text-4xl font-bold text-brand-primary">Local</p>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                Selected image files are processed in the browser rather than uploaded to a conversion server.
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
              For supported conversions, selected image data is processed in your browser rather than sent to a conversion server. The website still makes normal requests to load pages and may collect limited technical or contact information as described in the Privacy Policy.
            </p>

            <p>
              This approach can be useful for people working with personal photos, design files, or client images. Review the Privacy Policy and your browser environment before processing sensitive material.
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
              Our blog isn&apos;t just promotional—it&apos;s designed to be genuinely useful whether or not you use our converter. We publish practical explainers, format comparisons, and step-by-step guides to help people make better decisions about their images.
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
              Our aim is to keep the converter straightforward to access and easy to use.
            </p>

            <p>
              The listed converter tools are free to use and do not require an account. We support them with educational content that explains formats, output settings, and practical workflows.
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
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-3 font-medium text-brand-primary hover:bg-white dark:border-[#314969] dark:hover:bg-[#263956]"
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
