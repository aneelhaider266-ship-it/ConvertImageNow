/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Trailing slashes consistently remove karo duplicate URLs rokne ke liye
  trailingSlash: false,
  async redirects() {
    return [
      // 1. WWW se non-WWW 301 permanent redirect
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.convertimagenow.com' }],
        destination: 'https://convertimagenow.com/:path*',
        permanent: true,
      },
      // 2. Broken page `/online-image-converter` ko live converter par redirect
      {
        source: '/online-image-converter',
        destination: '/converter',
        permanent: true,
      },
      // 3. Agar batch conversion page ka URL change hua tha to use sahi page par bhejo
      {
        source: '/batch-image-conversion',
        destination: '/tools',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
