import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { BLOG_POSTS } from '@/lib/blog';
import BlogContent from '@/components/BlogContent';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// 1. Generate static routes for all published posts
export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

// 2. SEO-Optimized Dynamic Metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) return {};

  // Strict SEO: Title under 60 characters
  const rawTitle = post.title;
  const metaTitle =
    rawTitle.length > 58 ? `${rawTitle.slice(0, 55).trim()}...` : rawTitle;

  // Strict SEO: Meta Description between 150-160 characters
  let metaDescription = post.excerpt.trim();
  if (metaDescription.length > 160) {
    metaDescription = `${metaDescription.slice(0, 157).trim()}...`;
  } else if (metaDescription.length < 150 && post.content?.[0]) {
    const extension = ` ${post.content[0]}`;
    const combined = `${metaDescription}${extension}`;
    metaDescription =
      combined.length > 160 ? `${combined.slice(0, 157).trim()}...` : combined;
  }

  // Canonical without www
  const canonicalUrl = `https://convertimagenow.com/blog/${post.slug}`;

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.title,
      description: metaDescription,
      url: canonicalUrl,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.updatedDate || post.date,
      authors: [post.author || 'ConvertImageNow'],
      images: post.image ? [{ url: post.image }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: post.image ? [post.image] : undefined,
    },
  };
}

// 3. Default Page Component with Article JSON-LD Schema
export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const canonicalUrl = `https://convertimagenow.com/blog/${post.slug}`;

  // Article Schema for Google Rich Results
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.updatedDate || post.date,
    image: post.image ? `https://convertimagenow.com${post.image}` : undefined,
    author: {
      '@type': 'Organization',
      name: post.author || 'ConvertImageNow',
      url: 'https://convertimagenow.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'ConvertImageNow',
      url: 'https://convertimagenow.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://convertimagenow.com/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl,
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://convertimagenow.com/' },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://convertimagenow.com/blog' },
      { '@type': 'ListItem', position: 3, name: post.title, item: canonicalUrl },
    ],
  };

  return (
    <main className="min-h-screen bg-[#101B33] text-slate-100">
      {/* Article and breadcrumb structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-400">
          <Link href="/" className="hover:text-white">Home</Link><span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-white">Guides</Link><span className="mx-2">/</span>
          <span className="text-slate-200" aria-current="page">{post.title}</span>
        </nav>
        <header className="mb-10 border-b border-[#314969] pb-8">
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-2 text-sm text-slate-400">
            <time dateTime={post.date}>Published on {post.date}</time>
            {post.updatedDate && post.updatedDate !== post.date && (
              <>
                <span>•</span>
                <time dateTime={post.updatedDate}>Updated on {post.updatedDate}</time>
              </>
            )}
          </div>
        </header>

        <BlogContent content={post.content} />
      </article>
    </main>
  );
}
