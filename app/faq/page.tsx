import type { Metadata } from "next";
import { FAQ_ITEMS } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about ConvertImageNow — pricing, privacy, supported formats, batch conversion, and more.",
  alternates: { canonical: "/faq" },
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

      <div className="mx-auto mt-10 max-w-2xl divide-y divide-slate-200 dark:divide-slate-800">
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
  );
}
