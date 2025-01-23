import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
