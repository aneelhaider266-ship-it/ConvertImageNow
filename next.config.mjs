/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,

  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "convertimagenow.com",
          },
        ],
        destination: "https://www.convertimagenow.com/:path*",
        permanent: true,
      },
      {
        source: "/blog/how-to-reduce-image-size",
        destination: "/blog/how-to-make-image-file-smaller",
        permanent: true,
      },
      {
        source: "/blog/avif-vs-webp",
        destination: "/blog/best-image-formats-compared",
        permanent: true,
      },
      {
        source: "/blog/batch-image-conversion",
        destination: "/blog/batch-convert-images",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
