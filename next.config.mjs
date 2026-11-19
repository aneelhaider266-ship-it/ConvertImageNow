/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Enforce the declared non-www canonical host for every route.
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.convertimagenow.com' }],
        destination: 'https://convertimagenow.com/:path*',
        permanent: true,
      },
      // Consolidate overlapping HEIC guidance into the more complete device-specific guide.
      {
        source: '/blog/heic-to-jpg-guide',
        destination: '/blog/how-to-convert-heic-to-jpg',
        permanent: true,
      },
      // Consolidate legacy blog URLs with their current relevant destinations.
      {
        source: '/blog/convert-avif-to-jpg',
        destination: '/avif-to-jpg',
        permanent: true,
      },
      {
        source: '/blog/how-to-reduce-image-size',
        destination: '/blog/how-to-make-image-file-smaller',
        permanent: true,
      },
      // 1. Broken tools redirects
      {
        source: '/png-to-webp',
        destination: '/converter',
        permanent: true,
      },
      {
        source: '/webp-to-jpg',
        destination: '/converter',
        permanent: true,
      },
      {
        source: '/webp-to-png',
        destination: '/converter',
        permanent: true,
      },
      // 2. Retain the indexed legacy story URL and send visitors to the relevant About page.
      {
        source: '/blog/why-i-built-convertimagenow',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/blog/avif-vs-webp',
        destination: '/blog/best-image-formats-compared',
        permanent: true,
      },
      // 3. Purane moved URLs
      {
        source: '/online-image-converter',
        destination: '/converter',
        permanent: true,
      },
      {
        source: '/batch-image-conversion',
        destination: '/tools',
        permanent: true,
      },
      {
        source: '/blog/batch-image-conversion',
        destination: '/blog/batch-convert-images',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
