import type { Metadata } from "next";
import ImageConverter from "@/components/ImageConverter";
import { ShieldCheck, WifiOff, Infinity as InfinityIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Image Resizer - Resize JPG, PNG, WebP Online Free",
  description: "Resize JPG, PNG, WebP images online for free. Change image dimensions by pixels or percentage. Keep aspect ratio, no quality loss. Private & browser-based.",
  keywords: ["image resizer", "resize image", "resize photo", "image resizer online", "resize jpg", "resize png", "change image size"],
  alternates: { canonical: "/image-resizer" },
  openGraph: {
    title: "Image Resizer - Resize Images Online Free",
    description: "Free browser-based tool to resize images. Set width & height in pixels or %. No upload needed.",
    url: "/image-resizer",
    type: "website",
  }
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
    a: "Yes. ConvertImageNow provides a 100% free browser-based image resizer without registration or watermark. You can resize unlimited images on any device.",
  },
  {
    q: "How to resize an image without losing quality?",
    a: "Reducing image dimensions will always keep quality sharp. If you are enlarging a small image to a very large size, it may become blurry. For best results, resize from a high-resolution original and use our quality slider at 80-90% when downloading as JPG or WebP.",
  },
  {
    q: "What is the difference between resize, compress, and crop?",
    a: "Resize changes the dimensions (width x height) of the whole image. Compress reduces the file size (KB/MB) without changing dimensions much. Crop cuts off a part of the image. Use resize when you need a specific width/height like 800x600.",
  },
  {
    q: "Can I resize an image by percentage?",
    a: "Yes. You can resize by pixels (e.g., 1920x1080) or by percentage (e.g., 50% to make it half size). Percentage is useful when you want to scale many images proportionally.",
  },
  {
    q: "Will resizing keep the aspect ratio?",
    a: "Yes, by default our tool locks the aspect ratio to prevent stretching. If you change width, height adjusts automatically. You can unlock it if you need to stretch the image intentionally.",
  },
  {
    q: "Are my images uploaded to a server?",
    a: "No. All resizing is done locally in your browser using HTML5 Canvas API. Your files never leave your device, so it\'s safe for private photos.",
  },
  {
    q: "Can I resize multiple images at once?",
    a: "Yes. You can select multiple JPG, PNG, WebP images and resize them together to the same dimensions, then download them individually or as a ZIP archive.",
  },
  {
    q: "What image formats are supported?",
    a: "You can upload JPG, PNG, WebP, and AVIF. You can resize and then download in your chosen output format - JPG, PNG, or WebP. PNG is best for transparency, WebP is best for smallest file size.",
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
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Free Online Image Resizer</h1>
        <p className="mt-4 text-gray-600">
          Resize JPG, PNG, WebP, and AVIF images online for free. Set custom width and height in pixels or percentage, lock aspect ratio, and download directly from your browser.
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

      {/* 1200+ WORDS SEO ARTICLE */}
      <article className="prose prose-gray mx-auto mt-16 max-w-3xl prose-h2:text-2xl prose-h2:font-bold prose-a:text-blue-600">
        
        <h2>What is an Image Resizer and Why Do You Need It?</h2>
        <p>
          An <strong>image resizer</strong> is a tool that allows you to change the dimensions of an image, measured in pixels. Every digital image has a width and height, for example 4000x3000 pixels from a modern phone camera. While this high resolution is great for printing, it is far too large for most online uses. If you try to upload a 4000px wide photo directly to a website, social media, or an online form, it will be rejected for being too large, it will load very slowly, or it will break your website layout.
        </p>
        <p>
          This is where you need to <strong>resize image</strong> files to the exact size you need. For example, a blog post image only needs to be 800px wide, an Instagram post requires 1080x1080 pixels, and a passport photo needs to be 600x600 pixels. Manually resizing in Photoshop is complicated. Our free online resizer lets you change image size to any dimension in seconds, without installing any software. It is essential for bloggers, students, e-commerce sellers, and anyone who needs to meet a specific size requirement for an application or website.
        </p>

        <h2>How to Resize an Image Online in 4 Steps?</h2>
        <p>
          Resizing images with ConvertImageNow is simple and does not require any technical skills. All processing is done locally in your browser.
        </p>
        <ol>
          <li><strong>Upload Images:</strong> Drag & drop your JPG, PNG, WebP, or AVIF files, or click to browse. You can select multiple images for batch resizing.</li>
          <li><strong>Set New Dimensions:</strong> Enter your desired width and height in pixels (e.g., 800 x 600). Alternatively, use percentage mode (e.g., 50%) to scale the image down proportionally.</li>
          <li><strong>Lock Aspect Ratio:</strong> Keep the lock icon enabled to prevent the image from stretching. The tool will automatically calculate the height when you change the width.</li>
          <li><strong>Resize & Download:</strong> Click resize and download your images individually or as a ZIP file. You can also choose an output format like WebP for a smaller file.</li>
        </ol>

        <h2>Resize vs Compress vs Crop: What is the Difference?</h2>
        <p>
          Many people get confused between these three terms. Understanding the difference will help you choose the right tool for your needs.
        </p>
        <ul>
          <li><strong>Resize:</strong> Changes the actual dimensions of the image. A 4000x3000 image becomes 800x600. The whole image is still visible, but smaller. Use this when you need a specific width/height.</li>
          <li><strong>Compress:</strong> Reduces the file size in KB/MB without changing dimensions much. A 5MB image becomes 800KB. Use this with our <a href="/image-compressor">Image Compressor</a> when the image dimensions are correct but the file is too heavy.</li>
          <li><strong>Crop:</strong> Cuts away part of the image. If you have a group photo and only want one person, you crop it. The dimensions change because you removed a section.</li>
        </ul>
        <p>
          Often, you need to do both. The best workflow is to first <strong>resize photo</strong> to the correct dimensions, and then compress it to reduce the file size. Our tool allows you to do both at once by resizing and then selecting a quality level for JPG/WebP output.
        </p>

        <h2>Common Image Sizes for Social Media and Web</h2>
        <p>
          Using the correct dimensions is crucial for a professional look. Here are the most commonly required sizes. You can directly enter these values into our resizer:
        </p>
        <div className="overflow-x-auto not-prose">
          <table className="w-full border text-sm">
            <thead className="bg-gray-100"><tr><th className="border p-2">Platform / Use</th><th className="border p-2">Recommended Size (pixels)</th><th className="border p-2">Aspect Ratio</th></tr></thead>
            <tbody>
              <tr><td className="border p-2 font-semibold">Instagram Post (Square)</td><td className="border p-2">1080 x 1080</td><td className="border p-2">1:1</td></tr>
              <tr><td className="border p-2 font-semibold">Instagram Story / Reels</td><td className="border p-2">1080 x 1920</td><td className="border p-2">9:16</td></tr>
              <tr><td className="border p-2 font-semibold">Facebook Cover</td><td className="border p-2">1640 x 924</td><td className="border p-2">16:9</td></tr>
              <tr><td className="border p-2 font-semibold">YouTube Thumbnail</td><td className="border p-2">1280 x 720</td><td className="border p-2">16:9</td></tr>
              <tr><td className="border p-2 font-semibold">Website Blog Image</td><td className="border p-2">800 x 600</td><td className="border p-2">4:3</td></tr>
              <tr><td className="border p-2 font-semibold">Passport Photo</td><td className="border p-2">600 x 600</td><td className="border p-2">1:1</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          <strong>Pro Tip:</strong> For websites, never upload an image wider than your content area. If your blog content is 800px wide, resizing your image to 800px wide before uploading will dramatically improve your page speed and SEO. Learn more in our <a href="/how-to-make-image-smaller">guide on how to make an image file smaller</a>.
        </p>

        <h2>How to Resize an Image Without Losing Quality?</h2>
        <p>
          The golden rule is: you can always make an image smaller without losing visible quality, but making it larger will reduce quality. When you downscale a 4000px photo to 800px, the tool intelligently combines pixels, resulting in a perfectly sharp smaller image. However, if you try to upscale a small 300px icon to 2000px, it will become blurry and pixelated because the tool has to invent new pixels.
        </p>
        <p>
          For the best results, always start with the highest resolution original you have and scale down. When you <strong>resize image</strong> for the web, choose WebP as the output format. WebP provides superior sharpness at a smaller file size compared to JPG. Also, keep the quality slider at 85-90% for resized photos to maintain excellent clarity.
        </p>

        <h2>Why Choose Our Browser-Based Image Resizer?</h2>
        <p>
          Unlike other websites that upload your private photos to a cloud server, ConvertImageNow processes everything locally on your device. This means your images never leave your browser, ensuring 100% privacy and security. There are no server limits, so you can resize extremely large images or hundreds of images at once without errors. The tool works offline after the page loads and is incredibly fast because there is no waiting for upload and download. It is completely free, has no watermark, and works perfectly on mobile, desktop, and tablet.
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
