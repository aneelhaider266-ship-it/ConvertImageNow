import type { Metadata } from "next";
import ImageResizer from "@/components/ImageResizer";
import { ShieldCheck, WifiOff, Infinity as InfinityIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Image Resizer Online – Resize by Pixels or Percent Free",
  description:
    "Resize JPG, PNG, WebP and AVIF images free by exact pixels or percentage. Lock aspect ratio, batch resize photos, and download as ZIP — no upload needed.",
  keywords: [
    "image resizer",
    "resize image online",
    "how to resize an image",
    "how to reduce image file size",
    "increase image size",
    "image resizer for instagram",
    "bulk image resizer",
    "resize image pixels",
  ],
  alternates: { canonical: "/image-resizer" },
  openGraph: {
    title: "Free Image Resizer – Resize by Pixels or Percentage",
    description:
      "Browser-based tool to resize images by exact pixels or percentage. No upload needed, no quality loss, no watermark.",
    url: "/image-resizer",
    type: "website",
  },
};

const POINTS = [
  {
    icon: ShieldCheck,
    title: "Truly private",
    desc: "Your images never touch a server. Resizing happens directly in your browser.",
  },
  {
    icon: WifiOff,
    title: "Works offline",
    desc: "Once the page has loaded, you can resize images entirely on your device.",
  },
  {
    icon: InfinityIcon,
    title: "No artificial limits",
    desc: "No daily quota, no watermark. Resize unlimited images for free.",
  },
];

const FAQS = [
  {
    q: "Is this image resizer really free?",
    a: "Yes. ConvertImageNow provides a 100% free browser-based image resizer without registration or watermark. You can resize unlimited images.",
  },
  {
    q: "How do I resize an image without losing quality?",
    a: "Making an image smaller always keeps it sharp. If you are enlarging a small image to a much larger size, some softness is unavoidable — always start from the highest-resolution original you have.",
  },
  {
    q: "How do I reduce image file size without changing how it looks?",
    a: "Use the percentage mode to scale the image down slightly (e.g., to 80-90%), which reduces file size while keeping the image visually identical. For maximum size reduction, also lower the dimensions to only what you actually need.",
  },
  {
    q: "How do I resize an image for Instagram?",
    a: "For an Instagram feed post, resize to 1080 x 1080 pixels (square) or 1080 x 1350 (portrait). For Stories and Reels, use 1080 x 1920 pixels. Enter these exact dimensions in the Width and Height fields above.",
  },
  {
    q: "Can I resize an image by percentage?",
    a: "Yes. Switch to Percentage mode and drag the slider — for example, 50% makes the image half its original width and height, while values above 100% enlarge it.",
  },
  {
    q: "Will resizing keep the aspect ratio?",
    a: "Yes, by default the aspect ratio is locked to prevent stretching. If you change the width, height adjusts automatically to match. You can unlock it if you need a custom, non-proportional size.",
  },
  {
    q: "Are my images uploaded to a server?",
    a: "No. All resizing is done locally in your browser using the HTML5 Canvas API. Your files never leave your device, so there is no upload wait and no privacy risk.",
  },
  {
    q: "Can I resize multiple images at once?",
    a: "Yes. You can select multiple JPG, PNG, WebP, or AVIF images and resize them together to the same dimensions, then download them individually or as a single ZIP file.",
  },
  {
    q: "What image formats are supported?",
    a: "You can upload and resize JPG, PNG, WebP, and AVIF images. The output keeps the same format as the original file.",
  },
];

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};

export default function ImageResizerPage() {
  return (
    <div className="container-page py-14 sm:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(FAQ_SCHEMA),
        }}
      />

      {/* Hero Section */}
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Free Online Image Resizer
        </h1>
        <p className="mt-4 text-gray-600">
          Resize JPG, PNG, WebP, and AVIF images online for free. Set exact
          width and height in pixels or scale by percentage, lock the aspect
          ratio, and reduce file size — all without losing quality.
        </p>
      </div>

      {/* Tool Component */}
      <div className="mx-auto mt-10 max-w-4xl">
        <ImageResizer />
      </div>

      {/* TRUST POINTS */}
      <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
        {POINTS.map((p) => (
          <div key={p.title} className="flex gap-3 rounded-xl border bg-gray-50 p-5">
            <p.icon className="h-6 w-6 text-blue-600 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-sm">{p.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* SEO ARTICLE */}
      <article className="prose prose-gray mx-auto mt-16 max-w-3xl prose-h2:text-2xl prose-h2:font-bold prose-a:text-blue-600">
        <h2>What is an Image Resizer and Why Do You Need It?</h2>
        <p>
          An <strong>image resizer</strong> is a tool that changes the pixel
          dimensions (width and height) of an image — for example, shrinking
          a 4000×3000 photo straight from a camera down to 800×600 for a
          website, or enlarging a small logo for print.
        </p>
        <p>
          Getting the dimensions right matters: an oversized image slows down
          your website and wastes storage, while an undersized one looks
          blurry or gets stretched. This tool lets you <strong>resize an
          image</strong> to the exact pixels or percentage you need in
          seconds.
        </p>

        <h2>How to Resize an Image Online in 4 Steps</h2>
        <p>
          Resizing images with ConvertImageNow is simple and requires no
          technical skills. All processing happens locally in your browser.
        </p>
        <ol>
          <li>
            <strong>Upload images:</strong> Drag &amp; drop your JPG, PNG,
            WebP, or AVIF files, or click to browse. You can select multiple
            images at once.
          </li>
          <li>
            <strong>Set new dimensions:</strong> Enter your desired width and
            height in pixels (e.g., 800 x 600), or switch to Percentage mode
            to scale by a percentage instead.
          </li>
          <li>
            <strong>Lock aspect ratio:</strong> Keep the lock icon enabled to
            prevent the image from stretching — height adjusts automatically
            to match the width you enter.
          </li>
          <li>
            <strong>Resize &amp; download:</strong> Click resize, then
            download your images individually or all together as a ZIP file.
          </li>
        </ol>

        <h2>How to Reduce Image File Size Without Losing Quality</h2>
        <p>
          The golden rule of resizing is simple: you can always make an image
          smaller without visibly losing quality, but enlarging a small image
          too much will make it look soft or pixelated.
        </p>
        <p>
          To reduce file size, lower the pixel dimensions to only what you
          actually need — for example, a website rarely needs an image wider
          than 1920px. Smaller dimensions mean a smaller file, faster page
          loads, and less storage used, without any visible drop in sharpness.
        </p>

        <h2>Common Image Sizes for Social Media and Web</h2>
        <p>
          Using the correct dimensions is crucial for a professional look
          across platforms. Here are the most commonly required sizes:
        </p>
        <div className="overflow-x-auto not-prose">
          <table className="w-full border text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-2">Platform / Use</th>
                <th className="border p-2">Recommended Size (px)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2 font-semibold">Instagram Post (Square)</td>
                <td className="border p-2">1080 x 1080</td>
              </tr>
              <tr>
                <td className="border p-2 font-semibold">Instagram Story / Reels</td>
                <td className="border p-2">1080 x 1920</td>
              </tr>
              <tr>
                <td className="border p-2 font-semibold">Facebook Cover</td>
                <td className="border p-2">1640 x 924</td>
              </tr>
              <tr>
                <td className="border p-2 font-semibold">YouTube Thumbnail</td>
                <td className="border p-2">1280 x 720</td>
              </tr>
              <tr>
                <td className="border p-2 font-semibold">Website Blog Image</td>
                <td className="border p-2">800 x 600</td>
              </tr>
              <tr>
                <td className="border p-2 font-semibold">Passport Photo</td>
                <td className="border p-2">600 x 600</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          <strong>Pro tip:</strong> For websites, never upload an image wider
          than your content area actually displays. If your blog content is
          800px wide, resizing your image to 800px will keep it sharp while
          keeping the file size small.
        </p>

        <h2>Resizing for Instagram, Bulk Images, and Batch Uploads</h2>
        <p>
          If you need to <strong>resize an image for Instagram</strong>, use
          1080 x 1080 pixels for a standard square post, or 1080 x 1920 for
          Stories and Reels. Simply type these numbers into the Width and
          Height fields above.
        </p>
        <p>
          This tool also works as a <strong>bulk image resizer</strong> —
          upload several photos at once and resize all of them to the same
          dimensions in one click, then download everything as a single ZIP
          file instead of saving each image one by one.
        </p>

        <h2>Why Choose Our Browser-Based Image Resizer?</h2>
        <p>
          Unlike many other websites that upload your private photos to a
          cloud server, ConvertImageNow processes everything directly on your
          device using your browser&apos;s built-in Canvas technology. That
          means no waiting for uploads, no privacy risk, and no limit on how
          many images you can resize.
        </p>

        <h2>Frequently Asked Questions</h2>
        {FAQS.map((f) => (
          <div key={f.q}>
            <h3>{f.q}</h3>
            <p>{f.a}</p>
          </div>
        ))}
      </article>
    </div>
  );
}
