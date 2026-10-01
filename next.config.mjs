/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // 1. Broken tools ko live converter par redirect karo (Semrush 404 Fix)
      {
        source: '/png-to-webp',
        destination: '/converter',
        permanent: false,
      },
      {
        source: '/webp-to-jpg',
        destination: '/converter',
        permanent: false,
      },
      {
        source: '/webp-to-png',
        destination: '/converter',
        permanent: false,
      },
      // 2. Purane moved URLs ke redirects
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
