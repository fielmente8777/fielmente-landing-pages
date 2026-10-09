import type { Metadata } from "next";
import { SiteImage } from "@/components/ui/SiteImage";
import { indexLinks } from "@/content/index-links";

export const metadata: Metadata = {
  title: "Fielmente Landing Pages",
  robots: { index: false },
};

/** Internal list of every landing page (not indexed). */
export default function Home() {
  return (
    <div className="min-h-screen bg-mist font-[Helvetica,Arial,sans-serif] leading-[normal] text-ink">
      <main className="mx-auto box-content max-w-[720px] px-4 py-12">
        <SiteImage
          src="/images/brand/fielmente-logo.png"
          alt="Fielmente"
          loading="eager"
          className="inline h-12 w-auto align-baseline"
        />
        <h1 className="my-[.67em] text-[2em] leading-[normal] tracking-normal">Landing pages</h1>
        {indexLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="my-2.5 block rounded-[14px] bg-white px-[22px] py-[18px] font-bold text-ink no-underline hover:text-rust"
          >
            {link.label}
          </a>
        ))}
      </main>
    </div>
  );
}
