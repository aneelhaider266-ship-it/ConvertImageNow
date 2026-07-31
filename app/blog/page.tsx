import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Guides and explainers on image formats, compression, and getting the most out of your images on the web.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  return (
    <div className="container-page py-14 sm:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Blog
        </h1>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          Guides and explainers on image formats, compression, and web
          performance.
        </p>
      </div>

      <div className="mx-auto mt-8 max-w-3xl text-center text-sm text-slate-600 dark:text-slate-400">
        <p>
          Most of these questions come up the same way: an image looks wrong
          after converting, a file is bigger than expected, or a format
          doesn&apos;t work where you thought it would. These posts cover the
          practical side of that — what each format is actually good for, and
          how to avoid the mistakes that quietly cost you file size or
          quality.
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-6">
        {BLOG_POSTS.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group rounded-2xl border border-slate-200 p-6 transition-shadow hover:shadow-md dark:border-slate-800"
          >
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <h2 className="mt-2 text-xl font-semibold group-hover:text-brand-primary">
              {post.title}
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              {post.excerpt}
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-primary">
              Read more <ArrowRight size={14} />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
