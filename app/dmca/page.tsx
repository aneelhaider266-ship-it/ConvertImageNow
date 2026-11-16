import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DMCA Policy | ConvertImageNow",
  description:
    "Read the ConvertImageNow copyright and DMCA notice process for material published on this website.",
  alternates: {
    canonical: "https://convertimagenow.com/dmca",
  },
};

export default function DmcaPage() {
  return (
    <div className="container-page max-w-2xl py-14 sm:py-20">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        DMCA Policy
      </h1>
      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
        Last updated: November 2026
      </p>

      <div className="mt-8 space-y-6 text-slate-700 dark:text-slate-300">
        <p>
          ConvertImageNow respects the intellectual property rights of
          others. For supported conversions, selected image files are
          processed in your browser rather than uploaded to a conversion
          server. This does not change our responsibility to review valid
          copyright notices concerning material published on this website.
        </p>
        <p>
          If you believe content published on this website (such as blog
          content or site graphics) infringes your copyright, please send a
          notice to the email below including:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>A description of the copyrighted work you believe is infringed</li>
          <li>The URL of the material on our site</li>
          <li>Your contact information</li>
          <li>
            A statement that you have a good-faith belief the use is not
            authorized
          </li>
        </ul>
        <section>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            Contact
          </h2>
          <p className="mt-2">
            Send DMCA notices to{" "}
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
