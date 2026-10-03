import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://convertimagenow.com';

  return {
    rules: [
      // 1. General Web Crawlers
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      // 2. Anthropic (Claude AI)
      {
        userAgent: ['ClaudeBot', 'Claude-Web', 'anthropic-ai'],
        allow: '/',
        disallow: ['/api/'],
      },
      // 3. OpenAI (ChatGPT Search, GPTBot)
      {
        userAgent: ['GPTBot', 'OAI-SearchBot', 'ChatGPT-User'],
        allow: '/',
        disallow: ['/api/'],
      },
      // 4. Perplexity AI
      {
        userAgent: 'PerplexityBot',
        allow: '/',
        disallow: ['/api/'],
      },
      // 5. Google & Gemini
      {
        userAgent: ['Googlebot', 'Google-Extended'],
        allow: '/',
        disallow: ['/api/'],
      },
      // 6. Microsoft Bing & Copilot
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/'],
      },
      // 7. Apple Intelligence
      {
        userAgent: ['Applebot', 'Applebot-Extended'],
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
