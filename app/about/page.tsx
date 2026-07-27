import type { Metadata } from "next";

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
      </div>
    </div>
  );
}
