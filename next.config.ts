import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "frame-src 'self' https://www.facebook.com https://web.facebook.com https://static.xx.fbcdn.net",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/erp/:path*",
        destination: "http://genieclim-france.fr/erp/:path*",
        permanent: true,
      },
      {
        source: "/clients/:path*",
        destination: "http://genieclim-france.fr/clients/:path*",
        permanent: true,
      },
      {
        source: "/apporteurs/:path*",
        destination: "http://genieclim-france.fr/apporteurs/:path*",
        permanent: true,
      },
      {
        source: "/services-generaux/:path*",
        destination: "http://genieclim-france.fr/services-generaux/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
