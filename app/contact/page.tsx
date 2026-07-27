import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the ConvertImageNow team — questions, feedback, and feature requests welcome.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="container-page py-14 sm:py-20">
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
              <MapPin size={18} className="text-brand-primary" />
              Company
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              ConvertImageNow
              <br />
              convertimagenow.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
