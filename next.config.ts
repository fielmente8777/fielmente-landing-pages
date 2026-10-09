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
