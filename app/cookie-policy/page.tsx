import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | ConvertImageNow",
  description:
    "Learn how cookies and similar technologies may be used by ConvertImageNow and services integrated with the website.",
  alternates: {
    canonical: "https://convertimagenow.com/cookie-policy",
  },
};

export default function CookiePolicyPage() {
  return (
    <div className="container-page max-w-2xl py-14 sm:py-20">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Cookie Policy
      </h1>
      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
        Last updated: November 2026
      </p>

      <div className="mt-8 space-y-6 text-slate-700 dark:text-slate-300">
        <p>
          Cookies are small text files stored on your device by your
          browser. Depending on the website features and third-party services
          enabled, cookies or similar technologies may be used for essential
          functions, security, analytics, or advertising. The categories below
          describe possible uses and do not mean every category is active on
          every visit.
        </p>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            Types of cookies we use
          </h2>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>
              <strong>Essential cookies</strong> — may support basic site
              functions, security, or service delivery where required.
            </li>
            <li>
              <strong>Analytics or advertising cookies</strong> — may be set
              by services integrated with the site to measure usage or deliver
              advertising, if those services are enabled.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            Managing cookies
          </h2>
          <p className="mt-2">
            Most browsers let you block or delete cookies through their
            settings. Blocking cookies may affect features that rely on them.
            Third-party services may also have their own cookie and privacy
            controls; review the relevant provider policies for details.
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
