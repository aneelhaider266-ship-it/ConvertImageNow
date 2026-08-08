import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { BLOG_POSTS } from '@/lib/blog';

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: any }) {
  const resolvedParams = await params;
  const post = BLOG_POSTS.find((p) => p.slug === resolvedParams.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: { params: any }) {
  const resolvedParams = await params;
  const post = BLOG_POSTS.find((p) => p.slug === resolvedParams.slug);
  if (!post) notFound();
const currentIndex = BLOG_POSTS.findIndex((p) => p.slug === post.slug);
const relatedPosts = [1, 2, 3].map(
  (offset) => BLOG_POSTS[(currentIndex + offset) % BLOG_POSTS.length]
);
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { '@type': 'Organization', name: 'ConvertImageNow' },
  };

  return (
    <article className="container-page max-w-2xl py-14 sm:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Link
        href="/blog"
        className="inline-flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-brand-primary"
      >
        <ArrowLeft size={14} /> Back to blog
      </Link>

      <p className="mt-6 text-xs text-slate-500 dark:text-slate-400">
        {new Date(post.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
        {post.title}
      </h1>
      {post.image && (
          <img
            src={post.image}
            alt={post.title}
            className="mt-6 w-full rounded-2xl object-cover"
          />
        )}
      <div className="mt-8 space-y-5 text-slate-700 dark:text-slate-300">
  {post.content.map((paragraph, i) =>
    paragraph.startsWith('## ') ? (
      <h2 key={i} className="mt-8 text-2xl font-bold tracking-tight">
        {paragraph.replace('## ', '')}
      </h2>
    ) : (
      <p key={i}>{paragraph}</p>
    )
  )}
</div>
<div className="mt-12">
  <h2 className="text-xl font-bold mb-4">Related Articles</h2>
  <div className="grid gap-4 sm:grid-cols-3">
    {relatedPosts.map((rp) => (
      <Link
        key={rp.slug}
        href={`/blog/${rp.slug}`}
        className="block rounded-xl border border-slate-200 dark:border-slate-800 p-4 hover:border-brand-primary transition-colors"
      >
        <p className="font-semibold text-sm">{rp.title}</p>
        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
          {rp.excerpt}
        </p>
      </Link>
    ))}
  </div>
</div>
      <div className="mt-12 rounded-2xl bg-slate-50 p-6 text-center dark:bg-slate-900">
        <p className="font-semibold">Ready to convert your images?</p>
        <Link
          href="/converter"
          className="mt-3 inline-block rounded-full bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-95"
        >
          Open the Image Converter
        </Link>
      </div>
    </article>
  );
}

