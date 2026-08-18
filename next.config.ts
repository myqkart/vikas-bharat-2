import type { NextConfig } from "next";
import {
  SCHEME_CANONICAL_ALIASES,
  SCHEME_TO_SERVICE_PATHS,
} from "./lib/canonical-routes";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    const schemeAliases = Object.entries(SCHEME_CANONICAL_ALIASES).map(
      ([from, to]) => ({
        source: `/scheme/${from}`,
        destination: `/scheme/${to}`,
        permanent: true,
      }),
    );

    return [
      {
        source: "/services",
        destination: "/service",
        permanent: true,
      },
      {
        source: "/service/:slug",
        destination: "/services/:slug",
        permanent: true,
      },
      {
        source: "/schemes",
        destination: "/scheme",
        permanent: true,
      },
      {
        source: "/schemes/:slug",
        destination: "/scheme/:slug",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "/blogs",
        permanent: true,
      },
      {
        source: "/blog/:slug",
        destination: "/blogs/:slug",
        permanent: true,
      },
      {
        source: "/about-us",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/career",
        destination: "/careers",
        permanent: true,
      },
      {
        source: "/jobs",
        destination: "/careers",
        permanent: true,
      },
      {
        source: "/careers/sales",
        destination: "/careers/msme-loan-sales-executive",
        permanent: true,
      },
      {
        source: "/careers/admin",
        destination: "/careers/loan-processing-sales-operations-executive",
        permanent: true,
      },
      ...schemeAliases,
      ...Object.entries(SCHEME_TO_SERVICE_PATHS).map(([from, to]) => ({
        source: `/scheme/${from}`,
        destination: to,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
