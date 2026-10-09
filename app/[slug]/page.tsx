import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { LandingPage } from "@/components/landing/LandingPage";
import { getPage, pages } from "@/content/pages";

// Every landing page is fully static, built once at deploy time.
export const ensureStatic = "navigation";

export function generateStaticParams() {
  return pages.map((page) => ({ slug: page.slug }));
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#110D3C",
};

export async function generateMetadata({ params }: PageProps<"/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const page = getPage(slug);
  if (!page) return {};
  return {
    title: { absolute: page.title },
    description: page.description,
    alternates: { canonical: `/${page.slug}` },
    openGraph: {
      title: page.title,
      description: page.description,
      images: ["/images/brand/fielmente-og.png"],
    },
  };
}

export default async function Page({ params }: PageProps<"/[slug]">) {
  const { slug } = await params;
  const page = getPage(slug);
  if (!page) notFound();
  return <LandingPage page={page} />;
}
