/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
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
