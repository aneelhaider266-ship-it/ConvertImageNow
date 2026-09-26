/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,

  serverExternalPackages: ["sharp"],

  experimental: {
    staticGenerationMinPagesPerWorker: 10,
  },

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

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://pagead2.googlesyndication.com https://www.googletagmanager.com https://googleads.g.doubleclick.net",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: blob: https:",
              "font-src 'self' data:",
              "connect-src 'self' https://www.google-analytics.com https://pagead2.googlesyndication.com",
              "frame-src 'self' https://googleads.g.doubleclick.net",
              "object-src 'none'",
              "base-uri 'self'",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
