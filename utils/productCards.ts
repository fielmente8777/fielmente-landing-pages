// Product cards for the "Tools that power this service" sections on industry and service pages.
// Reads the product pages' own data (src/lib/products.ts), so names, summaries and screenshots match /products/.
import { getProduct, productPath } from "@/lib/products";

export function productCards(slugs: string[]) {
  return slugs
    .map((slug) => getProduct(slug))
    .filter((p): p is NonNullable<ReturnType<typeof getProduct>> => Boolean(p))
    .map((p) => ({ title: p.name, body: p.summary, href: productPath(p.slug), image: p.screenshot.src }));
}
