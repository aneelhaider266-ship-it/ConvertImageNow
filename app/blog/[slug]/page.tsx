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

  const url = `/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      url,
      images: post.image ? [{ url: post.image }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: post.image ? [post.image] : undefined,
    },
  };
}

// Renders inline markdown-style formatting: **bold** and [text](href) links.
// Works for paragraphs, list items, table cells, and blockquotes alike.
function renderInline(text: string) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g);

  return parts.map((part, index) => {
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      const [, linkText, href] = linkMatch;
      return (
        <Link
          key={index}
          href={href}
          className="font-medium text-brand-primary hover:underline"
        >
          {linkText}
        </Link>
      );
    }

    const boldMatch = part.match(/^\*\*([^*]+)\*\*$/);
    if (boldMatch) {
      return (
        <strong key={index} className="font-semibold">
          {boldMatch[1]}
        </strong>
      );
    }

    return <span key={index}>{part}</span>;
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: any;
}) {
  const resolvedParams = await params;

  const post = BLOG_POSTS.find(
    (p) => p.slug === resolvedParams.slug
  );

  if (!post) notFound();

  const currentIndex = BLOG_POSTS.findIndex(
    (p) => p.slug === post.slug
  );

  const relatedPosts = [1, 2, 3].map(
    (offset) =>
      BLOG_POSTS[
        (currentIndex + offset) % BLOG_POSTS.length
      ]
  );

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.updatedDate || post.date,
    author: {
      '@type': 'Organization',
      name: 'ConvertImageNow',
    },
  };

  return (
    <article className="container-page max-w-2xl py-14 sm:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      <Link
        href="/blog"
        className="inline-flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-brand-primary"
      >
        <ArrowLeft size={14} />
        Back to blog
      </Link>

      <p className="mt-6 text-xs text-slate-500 dark:text-slate-400">
  {post.updatedDate ? (
    <>
      Updated{' '}
      {new Date(post.updatedDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })}
    </>
  ) : (
    new Date(post.date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  )}
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
        {post.content.map((block, i) => {
          // H2 heading: "## Heading"
          if (block.startsWith('## ')) {
            return (
              <h2
                key={i}
                className="mt-8 text-2xl font-bold tracking-tight"
              >
                {block.replace(/^## /, '')}
              </h2>
            );
          }

          // H3 heading: "### Heading"
          if (block.startsWith('### ')) {
            return (
              <h3
                key={i}
                className="mt-6 text-xl font-semibold tracking-tight"
              >
                {block.replace(/^### /, '')}
              </h3>
            );
          }

          // Image: "![alt text](/path/to/image.webp)"
          const imageMatch = block.match(
            /^!\[([^\]]*)\]\(([^)]+)\)$/
          );
          if (imageMatch) {
            const [, alt, src] = imageMatch;
            return (
              <img
                key={i}
                src={src}
                alt={alt}
                className="w-full rounded-2xl object-cover"
              />
            );
          }

          // Blockquote / callout: "> Some quote"
          if (block.startsWith('> ')) {
            return (
              <blockquote
                key={i}
                className="border-l-4 border-brand-primary bg-slate-50 px-4 py-3 italic text-slate-600 dark:bg-slate-900 dark:text-slate-300"
              >
                {renderInline(block.replace(/^> /, ''))}
              </blockquote>
            );
          }

          // Table: a multi-line string of "| ... | ... |" rows, with a
          // "|---|---|" separator as the second line.
          if (block.trim().startsWith('|')) {
            const rows = block
              .split('\n')
              .map((row) => row.trim())
              .filter(Boolean);

            const parseRow = (row: string) =>
              row
                .split('|')
                .slice(1, -1)
                .map((cell) => cell.trim());

            const headerCells = parseRow(rows[0]);
            const bodyRows = rows
              .slice(2)
              .map((row) => parseRow(row));

            return (
              <div key={i} className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 dark:border-slate-700">
                      {headerCells.map((cell, ci) => (
                        <th
                          key={ci}
                          className="px-3 py-2 text-left font-semibold"
                        >
                          {renderInline(cell)}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {bodyRows.map((row, ri) => (
                      <tr
                        key={ri}
                        className="border-b border-slate-100 dark:border-slate-800"
                      >
                        {row.map((cell, ci) => (
                          <td key={ci} className="px-3 py-2">
                            {renderInline(cell)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          }

          // Bullet list: a multi-line string of "- item" lines
          if (block.trim().startsWith('- ')) {
            const items = block
              .split('\n')
              .map((line) => line.trim())
              .filter((line) => line.startsWith('- '))
              .map((line) => line.replace(/^- /, ''));

            return (
              <ul key={i} className="list-disc space-y-1 pl-5">
                {items.map((item, ii) => (
                  <li key={ii}>{renderInline(item)}</li>
                ))}
              </ul>
            );
          }

          // Default: plain paragraph with inline bold/link parsing
          return <p key={i}>{renderInline(block)}</p>;
        })}
      </div>

      {/* Related Articles */}
      <div className="mt-12">
        <h2 className="mb-4 text-xl font-bold">
          Related Articles
        </h2>

        <div className="grid gap-4 sm:grid-cols-3">
          {relatedPosts.map((rp) => (
            <Link
              key={rp.slug}
              href={`/blog/${rp.slug}`}
              className="block rounded-xl border border-slate-200 p-4 transition-colors hover:border-brand-primary dark:border-slate-800"
            >
              <p className="text-sm font-semibold">
                {rp.title}
              </p>

              <p className="mt-1 line-clamp-2 text-xs text-slate-500 dark:text-slate-400">
                {rp.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-12 rounded-2xl bg-slate-50 p-6 text-center dark:bg-slate-900">
        <p className="font-semibold">
          Ready to convert your images?
        </p>

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
