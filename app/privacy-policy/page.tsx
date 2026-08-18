import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How ConvertImageNow handles your data and privacy.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container-page max-w-2xl py-14 sm:py-20">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
        Last updated: August 2026
      </p>

      <div className="mt-8 space-y-6 text-slate-700 dark:text-slate-300">
        <section>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            Your images
          </h2>
          <p className="mt-2">
            ConvertImageNow converts images entirely within your web browser
            using client-side technology. The images you convert are never
            uploaded to, transmitted to, or stored on our servers.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            Information we may collect
          </h2>
          <p className="mt-2">
            Like most websites, we may collect basic analytics information
            (such as pages visited and general device/browser type) to
            understand how the site is used and to improve it. If you
            contact us through our Contact page, we collect the name, email
            address, and message you choose to provide, solely to respond to
            your inquiry.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            Cookies
          </h2>
          <p className="mt-2">
            We may use cookies for basic site functionality and analytics.
            See our{" "}
            <a href="/cookie-policy" className="text-brand-primary hover:underline">
              Cookie Policy
            </a>{" "}
            for details.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            Advertising
          </h2>
          <p className="mt-2">
            We may use third-party advertising companies, including Google,
            to serve ads when you visit this site. These companies may use
            cookies or similar technologies (such as the DoubleClick DART
            cookie) to serve ads based on your prior visits to this site or
            other websites. Google&apos;s use of advertising cookies enables
            it and its partners to serve ads to you based on your visit to
            this site and/or other sites on the Internet.
          </p>
          <p className="mt-2">
            You may opt out of personalized advertising by visiting{" "}
            <a
              href="https://www.google.com/settings/ads"
              className="text-brand-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Ads Settings
            </a>
            . You can also learn more about how Google uses information from
            sites that use its services at{" "}
            <a
              href="https://policies.google.com/technologies/partner-sites"
              className="text-brand-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              policies.google.com/technologies/partner-sites
            </a>
            .
          </p>
          <p className="mt-2">
            This site is not directed at children under 13, and we do not
            knowingly collect personal information from children under 13.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            Third-party services
          </h2>
          <p className="mt-2">
            We may use third-party services such as analytics, advertising,
            or hosting providers that process limited technical data (like
            IP address) as part of operating the site. These providers do
            not receive your images, since conversion never leaves your
            browser.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            Your rights
          </h2>
          <p className="mt-2">
            You may request details about, or deletion of, any personal
            information you&apos;ve submitted to us (for example, through
            the contact form) by emailing{" "}
            <a
              href="mailto:contact@convertimagenow.com"
              className="text-brand-primary hover:underline"
            >
              contact@convertimagenow.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            Changes to this policy
          </h2>
          <p className="mt-2">
            We may update this policy from time to time. Changes will be
            posted on this page with an updated revision date.
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
