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
          Cookies are small text files stored on your device by your browser.
          Depending on the website features and third-party services enabled,
          cookies or similar technologies may be used for essential functions,
          security, analytics, or advertising. The categories below describe
          possible uses and do not mean every category is active on every visit.
        </p>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            Types of cookies and similar technologies
          </h2>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>
              <strong>Essential technologies</strong> — may support basic site
              functions, security, or service delivery where required.
            </li>
            <li>
              <strong>Analytics technologies</strong> — Google Analytics 4 is
              used to measure page views, general browser/device information,
              and engagement. It may use cookies or similar technologies for
              analytics and reporting.
            </li>
            <li>
              <strong>Advertising technologies</strong> — if advertising
              services such as Google AdSense are enabled, Google and its
              advertising partners may use cookies or similar technologies to
              deliver, measure, and personalize ads, subject to your choices
              and applicable requirements.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            Google advertising and privacy controls
          </h2>
          <p className="mt-2">
            When Google advertising services are active, Google may use
            information collected through cookies or similar technologies in
            accordance with its policies and your advertising settings. Learn
            more in{" "}
            <a
              href="https://policies.google.com/technologies/partner-sites"
              className="text-brand-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              how Google uses information from sites or apps that use its services
            </a>
            . You can review or change personalized advertising choices in{" "}
            <a
              href="https://www.google.com/settings/ads"
              className="text-brand-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Ads Settings
            </a>
            .
          </p>
          <p className="mt-2">
            Where required for personalized advertising in the European
            Economic Area, the United Kingdom, or Switzerland, Google requires
            publishers to use a Google-certified consent management platform
            that integrates with the IAB Transparency and Consent Framework.
            Any consent message and settings offered on this site will depend
            on the advertising services enabled and the regions served. See
            Google's{" "}
            <a
              href="https://support.google.com/adsense/answer/13554116"
              className="text-brand-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              publisher consent requirements
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            Managing cookies
          </h2>
          <p className="mt-2">
            Most browsers let you block or delete cookies through their
            settings. Blocking cookies may affect features that rely on them.
            Browser controls do not necessarily provide the same choices as a
            site's consent message. Third-party services may also provide their
            own privacy and advertising controls; review the relevant provider
            policies for details.
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
