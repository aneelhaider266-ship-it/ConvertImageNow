import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility Statement | ConvertImageNow Web Converter",
  description:
    "Learn about accessibility practices used on ConvertImageNow and how to report a barrier with keyboard navigation, page content, or image tools.",
  alternates: {
    canonical: "https://convertimagenow.com/accessibility",
  },
};

export default function AccessibilityPage() {
  return (
    <div className="container-page max-w-2xl py-14 sm:py-20">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Accessibility
      </h1>

      <div className="mt-8 space-y-6 text-slate-700 dark:text-slate-300">
        <p>
          We want ConvertImageNow to be usable by as many people as
          possible, including people who rely on keyboard navigation or
          screen readers.
        </p>
        <section>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            Accessibility practices
          </h2>
          <p className="mt-2">We work to improve accessibility as the site evolves. These practices are not a claim of full WCAG conformance; some parts of the site may still present barriers.</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Visible keyboard focus styles for links, buttons, and form controls</li>
            <li>Semantic page structure and accessible names on key interactive controls</li>
            <li>Support for reduced-motion preferences</li>
            <li>Color choices intended to support readable text in the site&apos;s dark interface</li>
          </ul>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            Let us know
          </h2>
          <p className="mt-2">
            If you encounter an accessibility barrier anywhere on this site,
            please tell us at{" "}
            <a
              href="mailto:contact@convertimagenow.com"
              className="text-brand-primary hover:underline"
            >
              contact@convertimagenow.com
            </a>{" "}
            so we can fix it.
          </p>
        </section>
      </div>
    </div>
  );
}
