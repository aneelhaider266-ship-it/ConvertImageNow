import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BLOG_POSTS } from '@/lib/blog';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// 1. Generate static routes for all 16 posts
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

  return (
    <main className="min-h-screen bg-white">
      {/* Article Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            {post.title}
          </h1>
          <div className="flex items-center text-sm text-slate-500 space-x-2">
            <span>Published on {post.date}</span>
            {post.updatedDate && post.updatedDate !== post.date && (
              <>
                <span>•</span>
                <span>Updated on {post.updatedDate}</span>
              </>
            )}
          </div>
        </header>

        <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4">
          {post.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </article>
    </main>
  );
}
