import type { MetadataRoute } from "next";
import { pages } from "@/content/pages";

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({ url: `https://lp.fielmente.com/${page.slug}` }));
}
