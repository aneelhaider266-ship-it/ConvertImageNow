import type { Metadata } from "next";
import { Mail, Clock, HelpCircle, ShieldCheck } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const SITE_URL = "https://convertimagenow.com";
const PAGE_URL = `${SITE_URL}/contact`;

export const metadata: Metadata = {
  title: "Contact Us | ConvertImageNow Support",
  description:
    "Get in touch with the ConvertImageNow team. Contact our support for questions, bug reports, feature suggestions, and browser-based converter feedback.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Contact Us | ConvertImageNow Support",
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
          Have questions, technical suggestions, or feedback about our image
          tools? Our dedicated support team is here to help you get the best
          experience.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-10 md:grid-cols-2">
        <div>
          <ContactForm />
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-200 p-6 dark:border-slate-800">
            <h2 className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white">
              <Mail size={18} className="text-brand-primary" />
              Direct Email
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              For partnership inquiries, privacy questions, or API integration
              ideas, email us directly at:
            </p>
            <p className="mt-2 text-sm font-semibold">
              <a
                href="mailto:contact@convertimagenow.com"
                className="text-brand-primary hover:underline"
              >
                contact@convertimagenow.com
              </a>
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6 dark:border-slate-800">
            <h2 className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white">
              <Clock size={18} className="text-brand-primary" />
              Response Time & Hours
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              We operate Monday through Friday and aim to reply to all user
              inquiries within 24 to 48 business hours. Emails receive highest
              priority.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6 dark:border-slate-800">
            <h2 className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white">
              <ShieldCheck size={18} className="text-emerald-500" />
              Privacy Assurance
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Your contact details are used solely to reply to your inquiry. We
              never sell, share, or market user communication to third-party
              advertisers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
