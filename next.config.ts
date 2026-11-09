import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    qualities: [75],
    // Largest variant 1920px, as on the original pages.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
  // The original static deploy also answered /resort.html etc. (cleanUrls).
  async redirects() {
    return [{ source: "/:slug.html", destination: "/:slug", permanent: true }];
  },
  // Every page here is a paid-ads landing page: keep the whole host out of Google's index
  // (same rule fielmente.com applies to its own ad pages). Matches the robots meta on each page.
  async headers() {
    return [{ source: "/:path*", headers: [{ key: "X-Robots-Tag", value: "noindex, follow" }] }];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
