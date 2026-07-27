import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Disclaimer for the use of ConvertImageNow.",
  alternates: { canonical: "/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <div className="container-page max-w-2xl py-14 sm:py-20">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Disclaimer
      </h1>
      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
        Last updated: January 2026
      </p>

      <div className="mt-8 space-y-6 text-slate-700 dark:text-slate-300">
        <p>
          ConvertImageNow is provided for general image conversion purposes.
          While we aim for accurate, reliable conversions, we make no
          guarantee that output files will be perfectly suited to every use
          case, device, or software.
        </p>
        <p>
          Blog content on this site is provided for general informational
          purposes only and should not be treated as professional or
          technical advice for your specific situation.
        </p>
        <p>
          You are responsible for verifying converted files meet your needs
          before relying on them for any important purpose.
        </p>
        <section>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            Contact
          </h2>
          <p className="mt-2">
            Questions about this disclaimer can be sent to{" "}
            <a
              href="mailto:contact@convertimagenow.com"
              className="text-brand-primary hover:underline"
            >
              contact@convertimagenow.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
