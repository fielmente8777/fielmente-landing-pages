import type { LandingPage } from "@/content/types";
import { SiteImage, widthAtHeight } from "@/components/ui/SiteImage";
import { IMAGE_SIZES } from "@/content/images";
import { LeadForm } from "./LeadForm";
import { WRAP } from "./shared";

const rise = "animate-rise";

export function Hero({ page, pageName }: { page: LandingPage; pageName: string }) {
  const { hero } = page;
  const delay = (i: number) => ({ animationDelay: `${i * 0.08}s` });
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-ink text-white before:absolute before:inset-0 before:-z-1 before:bg-[linear-gradient(180deg,rgba(17,13,60,.6),rgba(17,13,60,.9))]"
    >
      <SiteImage
        src={hero.image}
        alt=""
        fill
        sizes="100vw"
        loading="eager"
        fetchPriority="high"
        className="-z-2 animate-ken-burns object-cover"
      />
      <div
        className={`${WRAP} grid gap-7 pt-8 pb-10 hx:grid-cols-[minmax(0,1fr)_400px] hx:items-center hx:gap-16 hx:pt-24 hx:pb-[110px]`}
      >
        <div className="flex min-w-0 flex-col items-start gap-[18px]">
          <span
            className={`${rise} inline-flex items-center gap-2.5 rounded-full bg-white/14 py-[7px] pr-3.5 pl-3 text-[13px] font-bold`}
          >
            <i className="h-2 w-2 rounded-full bg-brand animate-pulse-dot" />
            {hero.tag}
          </span>
          <h1 className={`${rise} text-[clamp(34px,8.8vw,64px)] leading-[1.04]`} style={delay(1)}>
            {hero.title}
            <em className="text-brand not-italic">{hero.titleAccent}</em>
          </h1>
          <p className={`${rise} text-[clamp(16px,4.3vw,20px)] text-line`} style={delay(2)}>
            {hero.subtitle}
          </p>
          <div className={`${rise} flex flex-wrap gap-2`} style={delay(3)}>
            {hero.chips.map((chip) => (
              <span key={chip} className="rounded-[10px] bg-white/13 px-3 py-2 text-[14px] font-bold">
                {chip}
              </span>
            ))}
          </div>
          {hero.badges && (
            <div className={`${rise} flex flex-wrap gap-2.5`} style={delay(4)}>
              {hero.badges.map((badge) => (
                <SiteImage
                  key={badge.src}
                  src={badge.src}
                  alt={badge.alt}
                  width={widthAtHeight(badge.src, 40)}
                  height={40}
                  loading="eager"
                  // 40px logo + 6px padding each side, at the source file's exact ratio.
                  style={{ width: (40 * IMAGE_SIZES[badge.src].width) / IMAGE_SIZES[badge.src].height + 12 }}
                  className="h-[52px] rounded-[10px] bg-white p-1.5"
                />
              ))}
            </div>
          )}
        </div>
        <LeadForm title={hero.form.title} button={hero.form.button} waTopic={page.waTopic} pageName={pageName} />
      </div>
    </section>
  );
}
