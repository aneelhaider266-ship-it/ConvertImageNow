import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BLOG_POSTS } from '@/lib/posts'; // Apne actual path ke mutabiq import check karna

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.title.length > 60 ? post.title.slice(0, 57) + '...' : post.title,
    description: post.excerpt.slice(0, 155),
    alternates: {
      canonical: `https://convertimagenow.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://convertimagenow.com/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author || 'ConvertImageNow'],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  // Article Schema for Google Rich Snippets
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.updatedDate || post.date,
    author: {
      '@type': 'Organization',
      name: 'ConvertImageNow',
      url: 'https://convertimagenow.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'ConvertImageNow',
      logo: {
        '@type': 'ImageObject',
        url: 'https://convertimagenow.com/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://convertimagenow.com/blog/${post.slug}`,
    },
  };

  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
        {post.title}
      </h1>
      <p className="text-slate-500 text-sm mb-8">Published on {post.date}</p>
      
      <div className="prose prose-slate max-w-none">
        {post.content.map((paragraph, index) => (
          <p key={index} className="mb-4 text-slate-700 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
}
