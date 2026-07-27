import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility",
  description: "ConvertImageNow's commitment to web accessibility.",
  alternates: { canonical: "/accessibility" },
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
            What we've done
          </h2>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Visible keyboard focus states on all interactive elements</li>
            <li>Semantic HTML and ARIA labels on controls like buttons and sliders</li>
            <li>Support for reduced-motion preferences</li>
            <li>Color contrast chosen to remain readable in both light and dark mode</li>
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
