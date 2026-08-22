import type { Metadata } from "next";
import ImageConverter from "@/components/ImageConverter";
import { ShieldCheck, WifiOff, Infinity as InfinityIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "HEIC to JPG Converter — Free, Online & Private",
  description:
    "Convert HEIC to JPG online for free. Learn how to convert HEIC photos to JPG on iPhone, Windows, and Mac with no signup, uploads, or watermark.",
  alternates: { canonical: "/heic-to-jpg" },
};

const POINTS = [
  {
    icon: ShieldCheck,
    title: "Truly private",
    desc: "Your photos never touch a server. Conversion happens directly in your browser.",
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
    q: "Is this HEIC to JPG converter really free?",
    a: "Yes. ConvertImageNow lets you convert HEIC images to JPG for free without a signup or watermark.",
  },
  {
    q: "How do I convert HEIC to JPG on iPhone?",
    a: "Open ConvertImageNow in Safari, select your HEIC photo, choose JPG as the output format, and download the converted image.",
  },
  {
    q: "How do I convert HEIC to JPG on Windows?",
    a: "Open ConvertImageNow in Chrome, Edge, Firefox, or another modern browser. Select your HEIC file, choose JPG, and download the converted image.",
  },
  {
    q: "How do I convert HEIC to JPG on Mac?",
    a: "Open ConvertImageNow in Safari or Chrome, select your HEIC image, choose JPG, and download the result. You can also use the Preview app on Mac.",
  },
  {
    q: "Can I batch convert multiple HEIC files?",
    a: "Yes. Select or drag multiple HEIC files into the converter, convert them together, and download the results as a ZIP file.",
  },
  {
    q: "Can I convert HEIC to PNG or WebP?",
    a: "Yes. ConvertImageNow also supports PNG and WebP output formats.",
  },
  {
    q: "Does converting HEIC to JPG reduce image quality?",
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
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};

export default function HeicToJpgPage() {
  return (
    <div className="container-page py-14 sm:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(FAQ_SCHEMA),
        }}
      />

      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          HEIC to JPG Converter
        </h1>

        <p className="mt-3 text-slate-600 dark:text-slate-300">
          Convert your HEIC photos to JPG instantly — no uploads, no signup,
          and no waiting. Drop your files below and convert them directly in
          your browser.
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-3xl">
        <ImageConverter initialFormat="jpg" />
       </div>
      <div className="mx-auto mt-12 max-w-4xl space-y-6 text-left text-slate-700 dark:text-slate-300">

        <h2 className="text-2xl font-bold">
          Why Convert HEIC to JPG?
        </h2>

        <p>
          HEIC (High Efficiency Image Container) is widely used by modern
          iPhones because it can store high-quality photos using less storage
          space than many older image formats. However, HEIC is not supported
          equally by every website, application, or device.
        </p>

        <p>
          Converting HEIC to JPG makes your photos easier to open, share,
          edit, email, and upload. JPG is widely supported across devices,
          browsers, apps, and websites, making it a convenient format when
          compatibility is important.
        </p>

        <h2 className="text-2xl font-bold">
          Why ConvertImageNow Is Different
        </h2>

        <p>
          Many online image converters require you to upload your photos to a
          remote server for processing. ConvertImageNow takes a different
          approach. Your HEIC image can be processed directly in your browser
          using your device's local resources.
        </p>

        <p>
          This means you can convert personal photos without sending them to a
          remote conversion server. There is also no account registration
          required and no watermark added to your converted images.
        </p>

        <div className="grid gap-6 sm:grid-cols-3">
          {POINTS.map(({ icon: Icon, title, desc }) => (
            <div key={title}>
              <Icon className="h-6 w-6" />

              <h3 className="mt-2 font-semibold">
                {title}
              </h3>

              <p className="mt-1 text-sm">
                {desc}
              </p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold">
          How to Convert HEIC to JPG
        </h2>

        <p>
          Converting a HEIC image to JPG only takes a few steps:
        </p>

        <ol className="list-decimal space-y-2 pl-5">
          <li>
            Select or drag your HEIC file into the converter above.
          </li>

          <li>
            Choose JPG as the output format.
          </li>

          <li>
            Adjust the quality setting if you want to control the file size.
          </li>

          <li>
            Start the conversion.
          </li>

          <li>
            Download your JPG image or download multiple converted images as a
            ZIP file.
          </li>
        </ol>

        <h2 className="text-2xl font-bold">
          How to Convert HEIC to JPG on iPhone
        </h2>

        <p>
          iPhones commonly save photos in the HEIC format because it helps
          reduce storage usage while maintaining good image quality. If you
          need a JPG version for a website, email, app, or another device,
          you can convert the photo directly in your browser.
        </p>

        <ol className="list-decimal space-y-2 pl-5">
          <li>
            Open ConvertImageNow in Safari on your iPhone.
          </li>

          <li>
            Select the HEIC photo you want to convert.
          </li>

          <li>
            Choose JPG as the output format.
          </li>

          <li>
            Start the conversion.
          </li>

          <li>
            Download the converted JPG image.
          </li>
        </ol>

        <p>
          No additional conversion app is required when using the browser
          converter.
        </p>

        <h2 className="text-2xl font-bold">
          How to Convert HEIC to JPG on Windows
        </h2>

        <p>
          HEIC files may not work with every Windows application or website.
          Converting them to JPG can make the images easier to open, edit,
          share, and upload.
        </p>

        <ol className="list-decimal space-y-2 pl-5">
          <li>
            Open ConvertImageNow in Chrome, Edge, Firefox, or another modern
            browser.
          </li>

          <li>
            Drag your HEIC image into the converter or select it from your
            computer.
          </li>

          <li>
            Select JPG as the output format.
          </li>

          <li>
            Adjust the quality setting if needed.
          </li>

          <li>
            Download your converted JPG image.
          </li>
        </ol>

        <p>
          The browser-based converter does not require you to install separate
          conversion software.
        </p>

        <h2 className="text-2xl font-bold">
          How to Convert HEIC to JPG on Mac
        </h2>

        <p>
          Mac users can convert HEIC images to JPG using built-in macOS tools
          or a browser-based converter. ConvertImageNow provides a quick
          option when you want to convert one or multiple HEIC files.
        </p>

        <ol className="list-decimal space-y-2 pl-5">
          <li>
            Open ConvertImageNow in Safari or Chrome.
          </li>

          <li>
            Select one or more HEIC images.
          </li>

          <li>
            Choose JPG as the output format.
          </li>

          <li>
            Select your preferred quality.
          </li>

          <li>
            Download the converted JPG files.
          </li>
        </ol>

        <p>
          If you prefer a built-in Mac solution, you can also use Preview to
          export a HEIC image as JPG.
        </p>

        <h2 className="text-2xl font-bold">
          Convert HEIC to JPG Free Online
        </h2>

        <p>
          ConvertImageNow is a free HEIC to JPG converter designed to keep the
          conversion process simple. You do not need to create an account, and
          converted images do not contain a watermark.
        </p>

        <p>
          You can convert individual HEIC images or process multiple files at
          once. This is useful when you have several iPhone photos that need
          to be converted before uploading or sharing them.
        </p>

        <h2 className="text-2xl font-bold">
          Convert HEIC to JPG Without Uploading Photos
        </h2>

        <p>
          Privacy can be important when converting personal photos. With
          ConvertImageNow, image conversion is performed directly in your
          browser rather than requiring your photos to be uploaded to a
          remote conversion server.
        </p>

        <p>
          Once the page has loaded, your device can perform the conversion
          locally. This approach can be useful when working with private
          photos or images that you do not want to send to an online service.
        </p>

        <h2 className="text-2xl font-bold">
          HEIC vs JPG: What's the Difference?
        </h2>

        <p>
          HEIC is designed to provide efficient storage while maintaining high
          image quality. JPG is an older and extremely common image format
          supported by a wide range of devices, applications, and websites.
        </p>

        <p>
          The main reason to convert HEIC to JPG is usually compatibility. If
          a website, application, or device does not accept HEIC files, JPG
          can be a practical alternative.
        </p>

        <h2 className="text-2xl font-bold">
          Frequently Asked Questions
        </h2>

        <div className="space-y-5">
          {FAQS.map(({ q, a }) => (
            <div key={q}>
              <h3 className="font-semibold">
                {q}
              </h3>

              <p className="mt-1 text-sm">
                {a}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
