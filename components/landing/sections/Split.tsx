import type { MapSection, SplitSection } from "@/content/types";
import { ButtonLink } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { SiteImage } from "@/components/ui/SiteImage";
import { Ctas, Features, WRAP, sectionClass } from "../shared";

const grid = "grid items-center gap-7 dt:grid-cols-[1fr_1fr] dt:gap-14";
const halfSizes = "(max-width:900px) 100vw, 50vw";

/** Photo on the left, heading + feature cards on the right. */
export function Split({ section }: { section: SplitSection }) {
  return (
    <section className={sectionClass(section.tone)}>
      <div className={WRAP}>
        <div className={grid}>
          <div className="reveal relative aspect-[4/3] overflow-hidden rounded-[22px] bg-haze">
            <SiteImage src={section.image.src} alt={section.image.alt} fill sizes={halfSizes} className="object-cover" />
          </div>
          <div>
            <Heading
              className="reveal"
              centered={false}
              eyebrow={section.eyebrow}
              title={section.title}
              tone={section.tone}
            />
            <Features items={section.features} onWhite={section.tone === "alt"} />
            <Ctas startOnDesktop>
              <ButtonLink href="#form" iconAfter="ar">
                {section.cta}
              </ButtonLink>
            </Ctas>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Heading + button on the left, map on the right. */
export function MapBlock({ section }: { section: MapSection }) {
  return (
    <section className={sectionClass(section.tone)}>
      <div className={WRAP}>
        <div className={grid}>
          <div className="reveal">
            <Heading
              className="reveal"
              centered={false}
              eyebrow={section.eyebrow}
              title={section.title}
              text={section.text}
              tone={section.tone}
            />
            <Ctas startOnDesktop>
              <ButtonLink href="#form" iconAfter="ar">
                {section.cta}
              </ButtonLink>
            </Ctas>
          </div>
          <div className="reveal">
            <SiteImage src={section.image.src} alt={section.image.alt} sizes={halfSizes} className="h-auto w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
