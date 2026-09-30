import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://convertimagenow.com';
  const currentDate = new Date().toISOString();

  // Saare active tool routes
  const tools = [
    '',
    '/converter',
    '/tools',
    '/features',
    '/png-to-jpg',
    '/jpg-to-png',
    '/jpg-to-webp',
    '/heic-to-jpg',
    '/avif-to-jpg',
    '/image-compressor',
    '/image-resizer',
  ];

  // Saare active blog post slugs
  const blogs = [
    '/blog',
    '/blog/avif-vs-webp',
    '/blog/jpg-vs-webp',
    '/blog/png-vs-jpg',
    '/blog/what-is-avif',
    '/blog/what-is-webp',
    '/blog/heic-to-jpg-guide',
    '/blog/jpg-to-webp-guide',
    '/blog/image-seo-guide',
    '/blog/batch-convert-images',
    '/blog/how-to-make-image-file-smaller',
  ];

  // Company / Legal pages
  const companyPages = [
    '/about',
    '/contact',
    '/faq',
    '/privacy-policy',
    '/terms',
    '/cookie-policy',
    '/disclaimer',
    '/dmca',
    '/accessibility',
  ];

  const allRoutes = [
    ...tools.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1.0 : 0.9,
    })),
    ...blogs.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: route === '/blog' ? 0.7 : 0.8,
    })),
    ...companyPages.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    })),
  ];

  return allRoutes;
}
