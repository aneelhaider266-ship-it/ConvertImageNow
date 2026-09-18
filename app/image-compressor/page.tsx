import type { Metadata } from "next";
import ImageConverter from "@/components/ImageConverter";
import { ShieldCheck, WifiOff, Infinity as InfinityIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Image Compressor - Compress JPG, PNG, WebP Online Free",
  description: "Compress JPG, PNG, WebP and AVIF images online for free. Reduce image size without losing quality. Private, browser-based, no upload - works offline.",
  keywords: ["image compressor", "compress image", "reduce image size", "compress jpg", "compress png", "photo compressor", "image size reducer"],
  alternates: { canonical: "/image-compressor" },
  openGraph: {
    title: "Image Compressor - Compress Images Online Free",
    description: "Free browser-based tool to compress images. Reduce file size without losing quality. No upload needed.",
    url: "/image-compressor",
    type: "website",
  }
};

const POINTS = [
  {
    icon: ShieldCheck,
    title: "Truly private",
    desc: "Your images never touch a server. Compression happens directly in your browser using Canvas API.",
  },
  {
    icon: WifiOff,
    title: "Works offline",
    desc: "Once the page has loaded, you can compress images entirely on your device - no internet needed.",
  },
  {
    icon: InfinityIcon,
    title: "No artificial limits",
    desc: "No daily quota, no watermark, no file size limit. Compress as many images as you want.",
  },
];

const FAQS = [
  {
    q: "Is this image compressor really free?",
    a: "Yes. ConvertImageNow provides a 100% free browser-based image compressor without requiring registration, watermark, or any hidden fees. You can compress unlimited images.",
  },
  {
    q: "Will compressing an image reduce its quality?",
    a: "It depends on the format and settings. For JPG and WebP, you can control the quality slider (e.g., 80%). Up to 70-80% quality, the visual difference is almost invisible but the file size drops by 50-70%. For PNG, compression is lossless, so quality remains 100%.",
  },
  {
    q: "What is the difference between lossy and lossless compression?",
    a: "Lossy compression (JPG, WebP) reduces file size by permanently removing some image data. It gives much smaller files. Lossless compression (PNG) reduces size without losing any data, but the reduction is smaller. Our tool supports both.",
  },
  {
    q: "Are my images uploaded to a server?",
    a: "No. All compression is done locally in your browser using HTML5 Canvas API. Your files never leave your device, which makes it secure for private photos and documents.",
  },
  {
    q: "Can I compress multiple images at once?",
    a: "Yes. You can select multiple JPG, PNG, WebP, or AVIF images, compress them together with the same quality setting, and download the results individually or as a ZIP archive.",
  },
  {
    q: "How much can an image be compressed?",
    a: "Typically 30% to 80% depending on the original format and quality. A 5MB JPG photo can easily be reduced to 800KB - 1.5MB at 80% quality with almost no visible loss. PNG screenshots can be reduced by 40-60% when converted to WebP.",
  },
  {
    q: "Which format gives the smallest file size?",
    a: "WebP and AVIF offer the best compression for the web. WebP is on average 25-35% smaller than JPG and 26% smaller than PNG at the same quality. AVIF is even smaller but has less browser support.",
  },
  {
    q: "Can I use this image compressor on mobile?",
    a: "Yes. The tool is fully responsive and works on Android, iPhone, and any modern browser. Since it works offline, it\'s very fast on mobile devices as well.",
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

export default function ImageCompressorPage() {
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
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Free Online Image Compressor</h1>
        <p className="mt-4 text-gray-600">
          Compress JPG, PNG, WebP, and AVIF images online for free. Reduce file size without losing visible quality. Choose quality, compress, and download directly from your browser.
        </p>
      </div>

      {/* Tool Component */}
      <div className="mx-auto mt-10 max-w-4xl">
        <ImageConverter />
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
        
        <h2>What is Image Compression and Why Do You Need It?</h2>
        <p>
          Image compression is the process of reducing the file size of an image without significantly degrading its visual quality. Every digital image, whether it is a JPG photo from your camera or a PNG screenshot, contains a large amount of data. When you upload these images to a website, send them via email, or store them on your phone, their large size creates problems like slow loading times, high data usage, and storage issues. An <strong>image compressor</strong> solves this problem by making the file smaller and more efficient.
        </p>
        <p>
          For website owners, bloggers, and e-commerce stores, image compression is critical for SEO. Google considers page speed as a ranking factor, and large uncompressed images are the number one reason for slow websites. A page that loads in 3 seconds can load in 1 second after proper compression, which directly improves your Core Web Vitals and search rankings. Similarly, for social media and job applications, you often need to reduce image size to meet a 100KB, 200KB, or 2MB upload limit. Instead of complex software like Photoshop, our free online tool lets you <strong>compress image</strong> files in seconds directly in your browser.
        </p>

        <h2>Lossy vs Lossless Compression: What is the Difference?</h2>
        <p>
          To choose the best setting, you need to understand the two main types of compression. The right choice depends on your image type.
        </p>
        <h3>1. Lossy Compression</h3>
        <p>
          Lossy compression permanently removes some image data to achieve a much smaller file size. JPG and WebP formats use lossy compression. When you move the quality slider to 80% or 70%, the tool intelligently discards data that the human eye is least likely to notice. This is perfect for photographs. You can often reduce a 4MB photo to under 900KB with almost no visible difference. The trade-off is that if you compress the same JPG multiple times at very low quality, the quality will degrade.
        </p>
        <h3>2. Lossless Compression</h3>
        <p>
          Lossless compression reduces file size without deleting any image data, so quality remains 100%. PNG format uses lossless compression. It works by finding more efficient ways to store the data, similar to zipping a file. This is ideal for images that require perfect sharpness, such as logos, icons, text graphics, and images with transparency. While the file size reduction is smaller compared to lossy, it guarantees no quality loss.
        </p>
        <p>
          Our compressor automatically applies the best method. For JPG/WebP, you get a quality slider for lossy control. For PNG, we apply advanced lossless optimization to <strong>reduce image size</strong> without any quality loss.
        </p>

        <h2>How to Compress an Image Online in 4 Steps?</h2>
        <p>Compressing images with ConvertImageNow is extremely simple and requires no technical knowledge:</p>
        <ol>
          <li><strong>Upload Images:</strong> Drag & drop your JPG, PNG, WebP, or AVIF files, or click to browse. Batch upload is supported.</li>
          <li><strong>Choose Quality & Format:</strong> For JPG/WebP, set the quality slider. 80% is recommended for the best balance of quality and size. You can also convert PNG to WebP at the same time for massive savings.</li>
          <li><strong>Compress Automatically:</strong> The compression starts instantly in your browser. No waiting for server upload.</li>
          <li><strong>Download:</strong> Download compressed images individually or get all of them together as a ZIP file.</li>
        </ol>

        <h2>JPG vs PNG vs WebP: Which Format Compresses Best?</h2>
        <p>
          Not all image formats are equal when it comes to compression. Choosing the right format can save you more than just adjusting quality.
        </p>
        <div className="overflow-x-auto not-prose">
          <table className="w-full border text-sm">
            <thead className="bg-gray-100"><tr><th className="border p-2">Format</th><th className="border p-2">Best For</th><th className="border p-2">Compression Type</th><th className="border p-2">Transparency</th></tr></thead>
            <tbody>
              <tr><td className="border p-2 font-semibold">JPG / JPEG</td><td className="border p-2">Photographs, Real-world images</td><td className="border p-2">Lossy - Very High</td><td className="border p-2">No</td></tr>
              <tr><td className="border p-2 font-semibold">PNG</td><td className="border p-2">Logos, Graphics, Screenshots</td><td className="border p-2">Lossless - Medium</td><td className="border p-2">Yes</td></tr>
              <tr><td className="border p-2 font-semibold">WebP</td><td className="border p-2">Websites, Both Photos & Graphics</td><td className="border p-2">Both - Excellent</td><td className="border p-2">Yes</td></tr>
              <tr><td className="border p-2 font-semibold">AVIF</td><td className="border p-2">Next-gen web, High efficiency</td><td className="border p-2">Both - Best</td><td className="border p-2">Yes</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          <strong>Pro Tip:</strong> If you want the smallest possible file for your website, convert your JPG and PNG images to <strong>WebP</strong> while compressing. A PNG screenshot that is 800KB can become a 90KB WebP file at 80% quality with no visible difference. Our tool allows you to compress and convert at the same time. Learn more in our <a href="/guide-to-image-formats">guide to image formats</a> and <a href="/png-vs-jpg">PNG vs JPG comparison</a>.
        </p>

        <h2>How to Reduce Image Size Without Losing Quality?</h2>
        <p>Follow these practical tips to get the best compression results:</p>
        <ul>
          <li><strong>Use 80% Quality for Photos:</strong> Studies show that 80% quality for JPG/WebP is visually identical to 100% but half the file size. Only go below 70% if you need extreme compression.</li>
          <li><strong>Resize Before Compressing:</strong> If your image is 4000px wide but you only need it for a 800px blog post, resize it first. Our upcoming <a href="/image-resizer">Image Resizer</a> will help with this.</li>
          <li><strong>Convert PNG to WebP:</strong> For photos saved as PNG, converting to JPG or WebP will reduce the size by 60-80% instantly.</li>
          <li><strong>Avoid Re-compressing Many Times:</strong> Compress from the original image once. Don\'t take an already compressed 70% JPG and compress it again.</li>
        </ul>

        <h2>Why Choose Our Browser-Based Image Compressor?</h2>
        <p>
          Unlike other online compressors like TinyPNG or iLoveIMG that upload your files to a remote server, ConvertImageNow is 100% browser-based. This means your images are processed locally on your device. Nothing is ever uploaded, which guarantees privacy for your personal and business images. It also means there are no server limits - you can compress 100 images of any size without getting a "file too large" error. It works offline and is incredibly fast because there is no upload or download time from a server. It is also completely free with no watermark.
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
