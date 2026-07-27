import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How ConvertImageNow uses cookies.",
  alternates: { canonical: "/cookie-policy" },
};

export default function CookiePolicyPage() {
  return (
    <div className="container-page max-w-2xl py-14 sm:py-20">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Cookie Policy
      </h1>
      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
        Last updated: January 2026
      </p>

      <div className="mt-8 space-y-6 text-slate-700 dark:text-slate-300">
        <p>
          Cookies are small text files stored on your device by your
          browser. ConvertImageNow uses a minimal set of cookies to keep the
          site working well and to understand overall usage.
        </p>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            Types of cookies we use
          </h2>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>
              <strong>Preference cookies</strong> — remember settings like
              your light/dark mode choice.
            </li>
            <li>
              <strong>Analytics cookies</strong> — help us understand which
              pages are useful so we can improve the site.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            Managing cookies
          </h2>
          <p className="mt-2">
            Most browsers let you block or delete cookies through their
            settings. Doing so may affect some site preferences, but the
            core image converter will continue to work.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            Contact
          </h2>
          <p className="mt-2">
            Questions about this policy can be sent to{" "}
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
