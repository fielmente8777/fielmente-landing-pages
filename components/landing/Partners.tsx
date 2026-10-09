import type { PartnersSection } from "@/content/types";
import { SiteImage, ratioStyle, widthAtHeight } from "@/components/ui/SiteImage";
import { Marquee } from "./Marquee";

export function Partners({ section }: { section: PartnersSection }) {
  return (
    <section aria-label={section.label} className="border-b border-line bg-white pt-[22px] pb-[26px]">
      <p className="mb-4 text-center font-body text-[12px]/[1.2] font-bold tracking-[.16em] text-muted uppercase">
        {section.label}
      </p>
      <Marquee
        items={section.logos}
        render={(logo, copy) => (
          <SiteImage
            key={`${logo.src}${copy ? "-copy" : ""}`}
            src={logo.src}
            alt={copy ? "" : logo.alt}
            aria-hidden={copy || undefined}
            width={widthAtHeight(logo.src, logo.height ?? 32)}
            height={logo.height ?? 32}
            loading="eager"
            style={{ height: logo.height, ...ratioStyle(logo.src) }}
            className="mr-11 w-auto flex-none"
          />
        )}
      />
    </section>
  );
}
