import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "ConvertImageNow was built to make image conversion instant, private, and free for everyone.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="container-page max-w-2xl py-14 sm:py-20">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        About ConvertImageNow
      </h1>
      <div className="mt-6 space-y-5 text-slate-700 dark:text-slate-300">
        <p>
          ConvertImageNow started from a simple frustration: converting a
          handful of images shouldn&apos;t require uploading them to a
          stranger&apos;s server, waiting through ads, or creating an
          account just to download the result.
        </p>
        <p>
          So we built a converter that runs entirely in your browser. Your
          images are read, converted, and prepared for download using your
          own device&apos;s processing power — nothing is ever transmitted
          to us or anyone else.
        </p>
        <p>
          Our goal is to keep building the fastest, most private set of
          image tools on the web, all free, all without registration.
        </p>
        <p>
          There&apos;s no company behind this beyond the person building it,
          no venture funding to chase, and no plan to add ads or a paywall.
          The tool exists because it was useful to build, and it stays free
          because that was the point from the start.
        </p>
        <p>
          If you run into a bug, have an idea for a feature, or just want to
          say the tool saved you time, the{" "}
          <Link href="/contact" className="text-brand-primary hover:underline">
            contact page
          </Link>{" "}
          reaches a real person.
        </p>
      </div>
    </div>
  );
}
