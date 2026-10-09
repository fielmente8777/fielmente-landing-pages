import type { StatsSection } from "@/content/types";
import { ButtonLink } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { CountUp } from "../CountUp";
import { Ctas, WRAP, sectionClass, staggerIndex } from "../shared";

export function Stats({ section }: { section: StatsSection }) {
  return (
    <section className={sectionClass("dark")}>
      <div className={WRAP}>
        <Heading className="reveal" eyebrow="Proven results" title="Numbers our clients see" tone="dark" />
        <div className="stagger grid grid-cols-2 gap-x-4 gap-y-7 text-center md:grid-cols-4">
          {section.stats.map((stat, i) => {
            const valueClass = `block text-[clamp(34px,9vw,52px)] leading-none tabular-nums ${i === 0 ? "text-brand" : ""}`;
            return (
              <div key={stat.label} style={staggerIndex(i)}>
                {stat.countUp ? (
                  <CountUp value={stat.value} className={valueClass} />
                ) : (
                  <b className={valueClass}>{stat.value}</b>
                )}
                <span className="mt-2 block text-[14px] text-lilac">{stat.label}</span>
              </div>
            );
          })}
        </div>
        <Ctas>
          <ButtonLink href="#form" iconAfter="ar">
            {section.cta}
          </ButtonLink>
        </Ctas>
      </div>
    </section>
  );
}
