import type { Metadata } from "next";
import ImageConverter from "@/components/ImageConverter";
import { ShieldCheck, WifiOff, Infinity as InfinityIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "AVIF to JPG Converter — Free, Online & Private",
  description:
    "Convert AVIF to JPG online for free. Learn how to convert AVIF images to JPG on Windows, Mac, and Android with no signup, uploads, or watermark.",
  alternates: {
    canonical: "/avif-to-jpg",
  },
};

const POINTS = [
  {
    icon: ShieldCheck,
    title: "Truly private",
    desc: "Your images never touch a server. Conversion happens directly in your browser.",
  },
  {
    icon: WifiOff,
    title: "Works offline",
    desc: "Once the page has loaded, conversion happens entirely on your device.",
  },
  {
    icon: InfinityIcon,
    title: "No artificial limits",
    desc: "No daily quota, no watermark, and no server upload limit.",
  },
];

const FAQS = [
  {
    q: "Is this AVIF to JPG converter really free?",
    a: "Yes. ConvertImageNow lets you convert AVIF images to JPG for free without a signup or watermark.",
  },
  {
    q: "How do I convert AVIF to JPG on Windows?",
    a: "Open ConvertImageNow in Chrome, Edge, Firefox, or another modern browser. Select your AVIF file, choose JPG as the output format, and download the converted image.",
  },
  {
    q: "How do I convert AVIF to JPG on Mac?",
    a: "Open ConvertImageNow in Safari or Chrome, select your AVIF image, choose JPG, and download the result.",
  },
  {
    q: "How do I convert AVIF to JPG on Android?",
    a: "Open ConvertImageNow in Chrome or another mobile browser, select your AVIF image, choose JPG, and download the converted file to your device.",
  },
  {
    q: "Why won't my AVIF image open in some apps?",
    a: "AVIF is a newer format, and not every app, editor, or older device has added support for it yet. Converting to JPG makes the image compatible with virtually any app, website, or device.",
  },
  {
    q: "Can I batch convert multiple AVIF files?",
    a: "Yes. Select or drag multiple AVIF files into the converter, convert them together, and download the results as a ZIP file.",
  },
  {
    q: "Can I convert AVIF to PNG or WebP instead?",
    a: "Yes. ConvertImageNow also supports PNG and WebP output formats.",
  },
  {
    q: "Does converting AVIF to JPG reduce image quality?",
    a: "JPG uses lossy compression, but you can adjust the quality setting to balance image quality and file size.",
  },
  {
    q: "Is there a file size limit?",
    a: "There is no artificial server-imposed file size limit. Because conversion happens in your browser, the practical limit depends on your device's available memory.",
  },
];

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export default function AvifToJpgPage() {
  return (
    <div className="container-page py-14 sm:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(FAQ_SCHEMA),
        }}
      />

      {/* Hero */}
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          AVIF to JPG Converter
        </h1>

        <p className="mt-3 text-slate-600 dark:text-slate-300">
          Convert your AVIF images to JPG instantly — no uploads, no signup,
          and no waiting. Drop your files below and convert them directly in
          your browser.
        </p>
      </div>

      {/* Converter */}
      <div className="mx-auto mt-10 min-h-[400px] max-w-3xl">
        <ImageConverter />
      </div>

      {/* SEO Content */}
      <div className="mx-auto mt-12 max-w-4xl space-y-6 text-left text-slate-700 dark:text-slate-300">
        <h2 className="text-2xl font-bold">Why Convert AVIF to JPG?</h2>

        <p>
          AVIF (AV1 Image File Format) is a modern image format built on the
          AV1 video codec. It can produce very small file sizes while keeping
          strong image quality, which is why many websites and browsers have
          started serving images in AVIF instead of older formats.
        </p>

        <p>
          However, AVIF is still newer than formats like JPG, and not every
          app, image editor, printing tool, or older device supports it yet.
          Converting AVIF to JPG makes the image easy to open, edit, print,
          email, and upload almost anywhere.
        </p>

        <h2 className="text-2xl font-bold">
          Why ConvertImageNow Is Different
        </h2>

        <p>
          Many online image converters require you to upload your files to a
          remote server for processing. ConvertImageNow takes a different
          approach. Your AVIF image can be processed directly in your browser
          using your device&apos;s local resources.
        </p>

        <p>
          This means you can convert images without sending them to a remote
          conversion server. There is also no account registration required
          and no watermark added to your converted images.
        </p>

        {/* Benefits */}
        <div className="grid gap-6 sm:grid-cols-3">
          {POINTS.map(({ icon: Icon, title, desc }) => (
            <div key={title}>
              <Icon
                className="h-6 w-6"
                aria-hidden="true"
              />

              <h3 className="mt-2 font-semibold">{title}</h3>

              <p className="mt-1 text-sm">{desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold">
          How to Convert AVIF to JPG
        </h2>

        <p>Converting an AVIF image to JPG only takes a few steps:</p>

        <ol className="list-decimal space-y-2 pl-5">
          <li>Select or drag your AVIF file into the converter above.</li>
          <li>Choose JPG as the output format.</li>
          <li>
            Adjust the quality setting if you want to control the file size.
          </li>
          <li>Start the conversion.</li>
          <li>
            Download your JPG image or download multiple converted images as a
            ZIP file.
          </li>
        </ol>

        <h2 className="text-2xl font-bold">
          How to Convert AVIF to JPG on Windows
        </h2>

        <p>
          AVIF images downloaded from the web or received from another device
          may not open correctly in every Windows app. Converting them to JPG
          can make the images easier to open, edit, and share.
        </p>

        <ol className="list-decimal space-y-2 pl-5">
          <li>
            Open ConvertImageNow in Chrome, Edge, Firefox, or another modern
            browser.
          </li>
          <li>
            Drag your AVIF image into the converter or select it from your
            computer.
          </li>
          <li>Select JPG as the output format.</li>
          <li>Adjust the quality setting if needed.</li>
          <li>Download your converted JPG image.</li>
        </ol>

        <p>
          The browser-based converter does not require you to install
          separate conversion software.
        </p>

        <h2 className="text-2xl font-bold">
          How to Convert AVIF to JPG on Mac
        </h2>

        <p>
          Mac users can convert AVIF images to JPG using a browser-based
          converter without installing extra software.
        </p>

        <ol className="list-decimal space-y-2 pl-5">
          <li>Open ConvertImageNow in Safari or Chrome.</li>
          <li>Select one or more AVIF images.</li>
          <li>Choose JPG as the output format.</li>
          <li>Select your preferred quality.</li>
          <li>Download the converted JPG files.</li>
        </ol>

        <h2 className="text-2xl font-bold">
          How to Convert AVIF to JPG on Android
        </h2>

        <p>
          Many Android browsers and websites now use AVIF by default, which
          can make sharing or uploading those images elsewhere difficult.
          ConvertImageNow works directly in your phone&apos;s browser.
        </p>

        <ol className="list-decimal space-y-2 pl-5">
          <li>
            Open ConvertImageNow in Chrome or another mobile browser on your
            Android device.
          </li>
          <li>
            Select or drag your AVIF image into the converter.
          </li>
          <li>Choose JPG as the output format.</li>
          <li>
            Start the conversion and download the JPG file to your device.
          </li>
        </ol>

        <h2 className="text-2xl font-bold">
          Convert AVIF to JPG Free Online
        </h2>

        <p>
          ConvertImageNow is a free AVIF to JPG converter designed to keep the
          conversion process simple. You do not need to create an account, and
          converted images do not contain a watermark.
        </p>

        <p>
          You can convert individual AVIF images or process multiple files at
          once. This is useful when you have several AVIF images downloaded
          from a website that need to be converted before you can use them
          elsewhere.
        </p>

        <h2 className="text-2xl font-bold">
          Convert AVIF to JPG Without Uploading Images
        </h2>

        <p>
          Privacy can be important when converting personal or work-related
          images. With ConvertImageNow, image conversion is performed directly
          in your browser rather than requiring your files to be uploaded to a
          remote conversion server.
        </p>

        <p>
          Once the page has loaded, your device can perform the conversion
          locally. This approach can be useful when working with images you do
          not want to send to an online service.
        </p>

        <h2 className="text-2xl font-bold">
          AVIF vs JPG: What&apos;s the Difference?
        </h2>

        <p>
          AVIF is designed to produce smaller file sizes than JPG while
          maintaining strong image quality, which is why it is increasingly
          used across the web. JPG, on the other hand, is an older and
          extremely common format supported by nearly every device, app, and
          website.
        </p>

        <p>
          The main reason to convert AVIF to JPG is usually compatibility. If
          an app, editor, printing tool, or website does not accept AVIF
          files, JPG is a practical, widely supported alternative.
        </p>

        <h2 className="text-2xl font-bold">
          Frequently Asked Questions
        </h2>

        <div className="space-y-5">
          {FAQS.map(({ q, a }) => (
            <div key={q}>
              <h3 className="font-semibold">{q}</h3>

              <p className="mt-1 text-sm">{a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
