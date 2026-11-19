import { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://convertimagenow.com";

  // 1. Core Pages
  const corePages: MetadataRoute.Sitemap = [
    { url: baseUrl, changeFrequency: "daily", priority: 1.0 },
    { url: `${baseUrl}/tools`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/features`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/blog`, changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/faq`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/about`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/contact`, changeFrequency: "monthly", priority: 0.6 },
  ];

  // 2. Conversion Tools (Sab Se Zaroori)
  const toolPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/converter`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/png-to-jpg`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/avif-to-jpg`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/jpg-to-png`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/jpg-to-webp`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/image-compressor`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/image-resizer`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/knitting-gauge-calculator`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/fmla-calculator`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/svg-to-stl`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/stl-to-svg`, changeFrequency: "monthly", priority: 0.85 },
  ];

  // 3. Blog Articles — use each post's real publication/update date.
  const blogPosts: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedDate || post.date),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // 4. Legal & Compliance Pages
  const legalPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/privacy-policy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/cookie-policy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/disclaimer`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/accessibility`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/dmca`, changeFrequency: "yearly", priority: 0.3 },
  ];

  return [...corePages, ...toolPages, ...blogPosts, ...legalPages];
}
