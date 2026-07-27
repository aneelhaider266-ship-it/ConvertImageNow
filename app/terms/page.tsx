import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern your use of ConvertImageNow.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="container-page max-w-2xl py-14 sm:py-20">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Terms of Service
      </h1>
      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
        Last updated: January 2026
      </p>

      <div className="mt-8 space-y-6 text-slate-700 dark:text-slate-300">
        <section>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            Acceptance of terms
          </h2>
          <p className="mt-2">
            By using ConvertImageNow, you agree to these Terms of Service.
            If you don&apos;t agree, please don&apos;t use the site.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            Use of the service
          </h2>
          <p className="mt-2">
            ConvertImageNow provides free, browser-based image conversion
            tools. You are responsible for the images you convert and for
            ensuring you have the right to use and process them.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            No warranty
          </h2>
          <p className="mt-2">
            The service is provided &ldquo;as is&rdquo; without warranties
            of any kind. We do not guarantee the service will be
            uninterrupted, error-free, or suitable for every use case.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            Limitation of liability
          </h2>
          <p className="mt-2">
            To the fullest extent permitted by law, ConvertImageNow is not
            liable for any indirect, incidental, or consequential damages
            arising from your use of the service.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            Changes to the service or terms
          </h2>
          <p className="mt-2">
            We may update these terms or change the service at any time.
            Continued use of the site after changes means you accept the
            updated terms.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            Contact
          </h2>
          <p className="mt-2">
            Questions about these terms can be sent to{" "}
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
