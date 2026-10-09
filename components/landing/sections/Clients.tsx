import type { ClientsSection } from "@/content/types";
import { ButtonLink } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { SiteImage, fitInBox } from "@/components/ui/SiteImage";
import { Marquee } from "../Marquee";
import { Ctas, WRAP, sectionClass } from "../shared";

// Logo tiles are 150×86 with a 1px border and 12px padding, so logos fit in 124×60.
const BOX = { width: 124, height: 60 };

export function Clients({ section }: { section: ClientsSection }) {
  return (
    <section className={sectionClass()}>
      <div className={WRAP}>
        <Heading className="reveal" eyebrow={section.eyebrow} title={section.title} />
      </div>
      <div className="reveal flex flex-col gap-3.5">
        {section.rows.map((row, r) => (
          <Marquee
            key={r}
            reverse={r % 2 === 1}
            items={row}
            render={(logo, copy) => {
              const size = fitInBox(logo.src, BOX.width, BOX.height);
              return (
                <span
                  key={`${logo.src}${copy ? "-copy" : ""}`}
                  aria-hidden={copy || undefined}
                  className="mr-3.5 flex h-[86px] w-[150px] flex-none items-center justify-center rounded-[14px] border border-line bg-white p-3"
                >
                  <SiteImage
                    src={logo.src}
                    alt={copy ? "" : logo.alt}
                    width={Math.round(size.width)}
                    height={Math.round(size.height)}
                    style={{ width: size.width, height: size.height }}
                    className="max-h-full max-w-full object-contain"
                  />
                </span>
              );
            }}
          />
        ))}
      </div>
      <div className={WRAP}>
        <Ctas>
          <ButtonLink href="#form" iconAfter="ar">
            {section.cta}
          </ButtonLink>
        </Ctas>
      </div>
    </section>
  );
}
