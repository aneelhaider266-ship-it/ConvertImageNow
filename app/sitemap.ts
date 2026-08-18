import { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/blog";

const SITE_URL = "https://www.convertimagenow.com";
const STATIC_ROUTES = [
  "",
  "/converter",
  "/features",
  "/tools",
  "/heic-to-jpg",
  "/avif-to-jpg",
  "/faq",
  "/blog",
  "/contact",
  "/about",
  "/privacy-policy",
  "/terms",
  "/cookie-policy",
  "/disclaimer",
  "/dmca",
  "/accessibility",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = STATIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.7,
  }));

  const blogEntries = BLOG_POSTS.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries];
}
