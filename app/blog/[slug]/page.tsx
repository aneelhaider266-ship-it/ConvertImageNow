import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BLOG_POSTS } from "@/lib/blog";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: "ConvertImageNow" },
  };

  return (
    <article className="container-page max-w-2xl py-14 sm:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Link
        href="/blog"
        className="inline-flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-brand-primary dark:text-slate-400"
      >
        <ArrowLeft size={14} /> Back to blog
      </Link>

      <p className="mt-6 text-xs text-slate-500 dark:text-slate-400">
        {new Date(post.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
        {post.title}
      </h1>

      <div className="mt-8 space-y-5 text-slate-700 dark:text-slate-300">
        {post.content.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-12 rounded-2xl bg-slate-50 p-6 text-center dark:bg-slate-900">
        <p className="font-semibold">Ready to convert your images?</p>
        <Link
          href="/converter"
          className="mt-3 inline-block rounded-full bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white"
        >
          Open the Image Converter
        </Link>
      </div>
    </article>
  );
}
