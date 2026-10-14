// Product data read by utils/productCards.ts.

export type Product = {
  slug: string;
  name: string;
  summary: string;
  screenshot: { src: string };
};

export const products: Product[] = [];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function productPath(slug: string) {
  return `/products/${slug}`;
}
