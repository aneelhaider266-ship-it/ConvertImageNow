/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'convertimagenow.com',
          },
        ],
        destination: 'https://www.convertimagenow.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
