import type { Metadata } from "next";
import { FAQ_ITEMS } from "@/lib/faq";

const SITE_URL = "https://convertimagenow.com";
const PAGE_URL = `${SITE_URL}/faq`;

export const metadata: Metadata = {
  title: "Frequently Asked Questions | ConvertImageNow Help & FAQ",
  description:
    "Find answers about supported image formats, browser-based processing, output quality, batch downloads, and practical device limits.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Frequently Asked Questions | ConvertImageNow Help & FAQ",
    description:
      "Find answers about our free browser-based image conversion tools and supported formats.",
    url: PAGE_URL,
    siteName: "ConvertImageNow",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frequently Asked Questions | ConvertImageNow",
    description:
      "Learn about supported formats, browser processing, and batch conversion.",
  },
};

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div className="container-page py-14 sm:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Frequently Asked Questions
        </h1>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          Can&apos;t find what you&apos;re looking for?{" "}
          <a href="/contact" className="text-brand-primary hover:underline">
            Contact us
          </a>
          .
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-2xl">
        <h2 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">Common questions</h2>
        <div className="divide-y divide-slate-200 dark:divide-[#314969]">
        {FAQ_ITEMS.map((item) => (
          <details key={item.question} className="group py-4">
            <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
              {item.question}
              <span className="ml-4 text-slate-400 transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              {item.answer}
            </p>
          </details>
        ))}
        </div>
      </div>
    </div>
  );
}
