import type { GallerySection } from "@/content/types";
import { ButtonLink } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { Icon } from "@/components/ui/Icon";
import { SiteImage } from "@/components/ui/SiteImage";
import { Ctas, Features, WRAP, sectionClass, staggerIndex } from "../shared";

// Phones: swipeable row. From 768px: a grid.
const layouts = {
  default: {
    cols: "auto-cols-[minmax(230px,76%)] md:grid-cols-[repeat(auto-fit,minmax(220px,1fr))]",
    sizes: "(max-width:768px) 78vw, 25vw",
  },
  duo: { cols: "auto-cols-[minmax(260px,86%)] md:grid-cols-2", sizes: "(max-width:768px) 84vw, 50vw" },
  three: { cols: "auto-cols-[minmax(260px,86%)] md:grid-cols-3", sizes: "(max-width:768px) 84vw, 33vw" },
};

export function Gallery({ section }: { section: GallerySection }) {
  const layout = layouts[section.layout];
  return (
    <section className={sectionClass(section.tone)}>
      <div className={WRAP}>
        <Heading className="reveal" eyebrow={section.eyebrow} title={section.title} tone={section.tone} />
        <div
          className={`stagger no-scrollbar -mx-5 grid snap-x snap-mandatory grid-flow-col gap-3.5 overflow-x-auto overscroll-x-contain scroll-px-5 px-5 pt-1 pb-3 *:snap-start md:m-0 md:auto-cols-auto md:grid-flow-row md:gap-5 md:overflow-visible md:p-0 ${layout.cols}`}
        >
          {section.items.map((item, i) =>
            item.kind === "site" ? (
              <figure
                key={item.src}
                style={staggerIndex(i)}
                className="m-0 overflow-hidden rounded-2xl bg-white shadow-[0_14px_40px_rgba(17,13,60,.12)]"
              >
                <div className="flex gap-1.5 bg-bar px-3 py-2.5">
                  <i className="h-[9px] w-[9px] rounded-full bg-edge" />
                  <i className="h-[9px] w-[9px] rounded-full bg-edge" />
                  <i className="h-[9px] w-[9px] rounded-full bg-edge" />
                </div>
                <SiteImage
                  src={item.src}
                  alt={item.alt}
                  sizes={layout.sizes}
                  className="aspect-video h-auto w-full object-cover object-top"
                />
                <figcaption className="px-4 py-3 font-bold">{item.caption}</figcaption>
              </figure>
            ) : (
              <figure
                key={item.src}
                style={staggerIndex(i)}
                className={`group/pc relative m-0 overflow-hidden rounded-[20px] bg-haze ${item.wide ? "aspect-[4/3]" : "aspect-[4/5]"}`}
              >
                <SiteImage
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes={layout.sizes}
                  className="object-cover [transition:transform_1.2s_var(--ease-soft)] group-hover/pc:[transform:scale(1.07)]"
                />
                {item.caption && (
                  <figcaption className="absolute bottom-3 left-3 rounded-full bg-white px-3.5 py-2 text-[15px] font-bold shadow-[0_6px_18px_rgba(0,0,0,.15)]">
                    {item.caption}
                  </figcaption>
                )}
              </figure>
            ),
          )}
        </div>
        <p className="mt-2 flex items-center justify-center gap-1.5 text-[13px] text-muted md:hidden">
          Swipe to see more
          <Icon name="ar" className="h-4 w-4 animate-nudge" />
        </p>
        {section.features && (
          <Features items={section.features} wide onWhite={section.tone === "alt"} className="mt-6" />
        )}
        <Ctas>
          <ButtonLink href="#form" iconAfter="ar">
            {section.cta}
          </ButtonLink>
        </Ctas>
      </div>
    </section>
  );
}
