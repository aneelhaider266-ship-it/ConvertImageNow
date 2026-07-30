export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  content: string[];
}; image?: string;

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "best-image-formats-explained",
    title: "Best Image Formats Explained",
    excerpt:
      "A quick guide to the most common image formats on the web, and when to reach for each one.",
    date: "2026-01-12",
    content: [
      "Every image format makes a different trade-off between file size, quality, and compatibility. Understanding those trade-offs makes it much easier to pick the right one for a given job, instead of defaulting to whatever your camera or design tool happened to save.",
      "JPG remains the default choice for photographs because it compresses smoothly and is supported everywhere. PNG is the better pick when you need transparency or crisp edges, such as logos and screenshots. WebP tends to beat both for web use, often producing smaller files at similar visual quality. AVIF pushes compression even further, though browser and tool support is still catching up.",
      "In practice, the fastest way to decide is to try a couple of formats on your actual image and compare the resulting file size and quality side by side — which is exactly what the ConvertImageNow converter is built for.",
    ],
  },
  {
    slug: "png-vs-jpg",
    title: "PNG vs JPG: Which One Should You Use?",
    excerpt:
      "PNG and JPG solve different problems. Here's how to tell which one your image actually needs.",
    date: "2026-01-19",
    content: [
      "PNG and JPG are the two most recognizable image formats, but they aren't interchangeable. JPG uses lossy compression tuned for photographic detail, which keeps file sizes small at the cost of some fine detail. PNG uses lossless compression, which preserves every pixel exactly but usually produces a larger file.",
      "A simple rule of thumb: if your image is a photo with lots of color gradients, JPG will usually give you a much smaller file with barely noticeable quality loss. If your image has flat colors, text, or needs a transparent background — like a logo or an icon — PNG will look sharper and cleaner.",
      "If you're not sure, convert the same image to both and compare the file size and appearance directly. That side-by-side comparison usually makes the right choice obvious.",
    ],
  },
  {
    slug: "what-is-webp",
    title: "What Is WebP, and Why Does It Matter?",
    excerpt:
      "WebP is quickly becoming the go-to format for fast-loading websites. Here's what makes it different.",
    date: "2026-01-26",
    content: [
      "WebP is an image format developed to improve on JPG and PNG for web use specifically. It supports both lossy and lossless compression, along with transparency, in a single format — something JPG and PNG can't do on their own.",
      "The main advantage is file size: WebP images are often 25-35% smaller than an equivalent JPG at a similar visual quality, which directly improves page load times. Faster pages tend to rank better in search results and keep visitors from bouncing while they wait.",
      "Browser support for WebP is now very strong across modern browsers, which is why it has become a common target format when optimizing a website's images for performance.",
    ],
  },
  {
    slug: "what-is-avif",
    title: "What Is AVIF? The Next Step in Image Compression",
    excerpt:
      "AVIF promises even better compression than WebP. Here's what it is and where it currently stands.",
    date: "2026-02-02",
    content: [
      "AVIF is a newer image format based on the AV1 video codec, designed to compress images even further than WebP while maintaining strong visual quality. In many comparisons, AVIF files come in noticeably smaller than equivalent WebP or JPG files.",
      "The trade-off today is support and tooling: encoding AVIF can be slower, and while most modern browsers can display AVIF images, broader support for creating and editing them is still catching up compared to older formats.",
      "For most sites, a practical approach is to use AVIF where support allows and fall back to WebP or JPG otherwise — which is why ConvertImageNow accepts AVIF as an input format today, with output support planned as browser tooling matures.",
    ],
  },
  {
    slug: "how-to-reduce-image-size",
    title: "How to Reduce Image File Size Without Losing Quality",
    excerpt:
      "Practical tips for shrinking image file sizes while keeping them looking sharp.",
    date: "2026-02-09",
    content: [
      "Large images are one of the most common reasons a website feels slow. The good news is that you can usually shrink an image significantly before most people would notice any difference in quality.",
      "Start by choosing the right format for the content — photos usually compress better as JPG or WebP, while flat graphics compress better as PNG. From there, use a quality slider rather than the maximum setting; quality around 70-85% is often visually indistinguishable from 100% but noticeably smaller in file size.",
      "It also helps to resize images to the dimensions they'll actually be displayed at, rather than uploading a much larger original. Between choosing the right format, a sensible quality setting, and appropriate dimensions, most images can be reduced by 50% or more with no visible loss in quality.",
    ],
  }, {
    slug: "heic-to-jpg-guide",
    title: "How to Convert HEIC to JPG (and Why Your iPhone Photos Won't Open)",
    excerpt:
      "HEIC is Apple's default photo format since iOS 11, but it won't open on many devices and websites. Here's how to convert it to JPG.",
    date: "2026-02-16",
    content: [
      "HEIC (High Efficiency Image Container) is the format iPhones have used by default since iOS 11. It stores photos at roughly half the file size of an equivalent JPG, which is great for saving space on your phone and in iCloud — but the trade-off is compatibility. Many Windows PCs, older browsers, some Android phones, and plenty of websites still can't open HEIC files directly.",
      "JPG, on the other hand, is supported everywhere. That's why converting HEIC to JPG is usually the fastest fix when a photo won't open, won't upload, or shows up as a broken thumbnail after you've sent it to someone.",
      "The simplest way to convert is directly in your browser: drop your HEIC file into a converter, choose JPG as the output, and download the result. Because the conversion runs locally using the Canvas API, your photos never get uploaded to a server — which matters if the photos are personal, and also means there's no waiting on an upload or download round-trip.",
      "If you only need to share a photo once, iPhones will often convert HEIC to JPG automatically when you send it via Mail or Messages, depending on your Camera settings under Settings → Camera → Formats. For a permanent converted copy, or for converting many photos at once, a batch converter is faster than converting one at a time.",
    ],
  },  {
    slug: "convert-images-without-losing-quality",
    title: "How to Convert Images Without Losing Quality",
    excerpt:
      "Losing quality during conversion almost always comes down to three fixable mistakes. Here's how to avoid them.",
    date: "2026-07-30",
    image: "/convert-quality.jpg",
    content: [
      "Losing quality during conversion almost always comes down to three things: starting from a low-resolution or already-compressed file, picking the wrong format for the image type, and compressing too aggressively. Fix those three and most quality problems disappear before you even open a converter.",
      "Match the format to the image. Photos with lots of color and gradients compress well as JPG or WebP without visible loss at a high quality setting. Screenshots, logos, and anything with sharp edges or text should stay in PNG or lossless WebP — JPG's compression blurs fine edges and creates visible artifacts around text.",
      "Always convert from the original file, not from a copy that's already been compressed. Every time you re-save a JPG, it loses a little more detail, so repeated conversions compound the damage even if each individual step looked fine. Keep an untouched original and create new versions from it whenever you need a different format.",
      "Avoid resizing up. Making a small image bigger doesn't recover detail that isn't there — it just stretches existing pixels and makes the loss more visible. When quality genuinely matters, check the converted result at 100% zoom before you use it; small artifacts are easy to miss at a glance but show up clearly once the image is actually in use.",
    ],
  },
];
