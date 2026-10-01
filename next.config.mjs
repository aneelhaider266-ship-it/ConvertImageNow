/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // permanent: true (301 Permanent Redirect - No Warning)
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
