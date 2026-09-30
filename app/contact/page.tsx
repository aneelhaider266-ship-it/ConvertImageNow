import type { Metadata } from "next";
import { Mail, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const SITE_URL = "https://convertimagenow.com";
const PAGE_URL = `${SITE_URL}/contact`;

export const metadata: Metadata = {
  title: "Contact Us | ConvertImageNow Support & Feedback",
  description:
    "Get in touch with the ConvertImageNow team. Contact our support for questions, bug reports, feature suggestions, and browser-based converter feedback.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Contact Us | ConvertImageNow Support & Feedback",
    description:
      "Reach out to ConvertImageNow for assistance, feedback, and inquiries regarding our free online image tools.",
    url: PAGE_URL,
    siteName: "ConvertImageNow",
    type: "website",
  },
};

const CONTACT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact ConvertImageNow",
  url: PAGE_URL,
  description:
    "Contact ConvertImageNow support team for inquiries, bug reports, and converter suggestions.",
  mainEntity: {
    "@type": "Organization",
    name: "ConvertImageNow",
    url: SITE_URL,
    email: "contact@convertimagenow.com",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "contact@convertimagenow.com",
      availableLanguage: ["English"],
    },
  },
};

export default function ContactPage() {
  return (
    <div className="container-page py-14 sm:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(CONTACT_SCHEMA),
        }}
      />

      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Contact Us
        </h1>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          Questions, feedback, or a feature you&apos;d like to see? We&apos;d
          love to hear from you.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-10 md:grid-cols-2">
        <div>
          <ContactForm />
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-200 p-6 dark:border-slate-800">
            <h2 className="flex items-center gap-2 font-semibold">
              <Mail size={18} className="text-brand-primary" />
              Email
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              <a
                href="mailto:contact@convertimagenow.com"
                className="text-brand-primary hover:underline"
              >
                contact@convertimagenow.com
              </a>
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6 dark:border-slate-800">
            <h2 className="flex items-center gap-2 font-semibold">
              <Clock size={18} className="text-brand-primary" />
              Response time
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              We typically respond within 24–48 hours. For urgent issues,
              email is the fastest way to reach us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
