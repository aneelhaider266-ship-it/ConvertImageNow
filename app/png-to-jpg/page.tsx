import type { Metadata } from "next";
import Converter from "@/components/Converter"; // ⚠️ apna actual import path check karo
import Link from "next/link";

export const metadata: Metadata = {
  title: "PNG to JPG Converter – Convert PNG to JPG Online Free",
  description:
    "Convert PNG to JPG (JPEG) online for free. Private, browser-based conversion — no upload, no signup, no watermark. Batch convert multiple PNG files at once.",
  alternates: {
    canonical: "https://www.convertimagenow.com/png-to-jpg",
  },
  openGraph: {
    title: "PNG to JPG Converter | ConvertImageNow",
    description: "Convert PNG images to JPG privately in your browser — no upload required.",
    url: "https://www.convertimagenow.com/png-to-jpg",
    siteName: "ConvertImageNow",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PNG to JPG Converter | ConvertImageNow",
    description: "Free online image converter. Fast, secure, browser-based — no uploads, no limits.",
  },
};

const faqs = [
  {
    q: "Is this PNG to JPG converter really free?",
    a: "Yes. ConvertImageNow provides free browser-based PNG to JPG conversion without requiring registration or adding a watermark.",
  },
  {
    q: "Is JPG the same as JPEG?",
    a: "Yes. JPG and JPEG refer to the same image format. JPG is simply the shortened file extension used on some systems, while JPEG is the full name of the format.",
  },
  {
    q: "Will converting PNG to JPG lose the transparent background?",
    a: "Yes. JPG does not support transparency, so any transparent areas in your PNG will be filled with a solid background (white by default) when converted to JPG.",
  },
  {
    q: "Can I convert multiple PNG files at once?",
    a: "Yes. You can select multiple PNG images, convert them together, and download the results individually or as a ZIP archive — no limit on how many files you batch convert.",
  },
  {
    q: "Are my images uploaded to a server?",
    a: "No. Conversion happens locally in your browser using the HTML5 Canvas API. Your files never leave your device — unlike most other online converters, which require uploading your images first.",
  },
  {
    q: "Does converting PNG to JPG reduce image quality?",
    a: "JPG uses lossy compression, but you can adjust the quality setting in the converter to balance file size and visual quality.",
  },
  {
    q: "Why is my JPG file so much smaller than the original PNG?",
    a: "PNG uses lossless compression, which keeps files large, especially for photos — often 4 to 10 times larger than an equivalent JPG. JPG's lossy compression reduces file size significantly while remaining visually similar at a good quality setting.",
  },
];

export default function PngToJpgPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

      <main>
        <section className="hero">
          <h1>PNG to JPG Converter</h1>
          <p>
            Convert PNG images to JPG (JPEG) instantly — free, private, and
            no uploads. Everything happens directly in your browser.
          </p>

          {/* ⚠️ adjust props to match your actual Converter component's API */}
          <Converter
            defaultInputFormat="png"
            defaultOutputFormat="jpg"
            acceptedFormats={["png"]}
          />
        </section>

        <section>
          <h2>Why Convert PNG to JPG?</h2>
          <p>
            PNG is a lossless format that preserves transparency and sharp
            detail, which makes files larger — often 4 to 10 times bigger
            than an equivalent JPG. Converting PNG to JPEG is useful when
            you need smaller files for email attachments, faster website
            loading, or uploading to platforms that don't accept PNG.
          </p>
        </section>

        <section>
          <h2>What Happens to Transparency?</h2>
          <p>
            JPG does not support transparent backgrounds. When you convert a
            PNG with transparency to JPG, the transparent areas are filled
            with a solid background. If you need to keep transparency,
            consider converting to{" "}
            <Link href="/converter">WebP instead</Link>, which supports both
            transparency and smaller file sizes.
          </p>
        </section>

        <section>
          <h2>How to Convert PNG to JPG</h2>
          <ol>
            <li>Select or drag one or more PNG images into the converter above.</li>
            <li>Choose JPG as the output format.</li>
            <li>Adjust the quality setting if you want to control file size.</li>
            <li>Start the conversion.</li>
            <li>Download your JPG image, or download multiple files as a ZIP.</li>
          </ol>
        </section>

        <section>
          <h2>Private PNG to JPG Conversion — No Upload Required</h2>
          <p>
            Most online converters require uploading your file to a server
            and deleting it hours later. ConvertImageNow processes PNG to
            JPG conversion entirely in your browser using the HTML5 Canvas
            API — your images are never uploaded anywhere, making it a
            practical option for personal photos, screenshots, or work files
            you'd rather keep private.
          </p>
        </section>

        <section>
          <h2>Bulk Convert Multiple PNG Files</h2>
          <p>
            Need to convert several screenshots or images at once? Select
            multiple PNG files, batch convert them together in one go, and
            download the results as a single ZIP file. Read more in our{" "}
            <Link href="/blog/batch-convert-images">
              guide to batch converting images
            </Link>
            .
          </p>
        </section>

        <section>
          <h2>PNG vs JPG: Which Should You Use?</h2>
          <p>
            PNG and JPG serve different purposes — PNG for lossless quality
            and transparency, JPG for smaller, more portable files. See our
            full comparison in{" "}
            <Link href="/blog/png-vs-jpg">PNG vs JPG: Which Image Format Should You Use?</Link>
          </p>
        </section>

        <section>
          <h2>Frequently Asked Questions</h2>
          {faqs.map((f, i) => (
            <div key={i}>
              <h3>{f.q}</h3>
              <p>{f.a}</p>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
