import type { StepsSection } from "@/content/types";
import { ButtonLink } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { whatsappUrl } from "@/content/site";
import { Ctas, WRAP, sectionClass, staggerIndex } from "../shared";

const STEPS = [
  { title: "Free 15-min audit", text: "We review your website, ads and listings." },
  { title: "Your growth plan", text: "Clear actions, budget and targets." },
  { title: "Launch & report", text: "We execute and share regular reports." },
];

export function Steps({ section, waTopic }: { section: StepsSection; waTopic: string }) {
  return (
    <section className={sectionClass()}>
      <div className={WRAP}>
        <Heading className="reveal" eyebrow="How it works" title="Three steps to more bookings" />
        {/* Step numbers come from a CSS counter, as on the original page. */}
        <div className="stagger grid gap-3 [counter-reset:s] tb:grid-cols-3 tb:gap-5">
          {STEPS.map((step, i) => (
            <div
              key={step.title}
              style={staggerIndex(i)}
              className="flex items-start gap-3.5 rounded-[18px] bg-mist p-5 before:grid before:h-[42px] before:w-[42px] before:flex-none before:place-items-center before:rounded-full before:bg-ink before:font-heading before:text-[17px]/[normal] before:font-bold before:text-white before:[counter-increment:s] before:content-[counter(s)]"
            >
              <div>
                <b className="block text-[17px]">{step.title}</b>
                <span className="text-[15px] text-muted">{step.text}</span>
              </div>
            </div>
          ))}
        </div>
        <Ctas>
          <ButtonLink href="#form" iconAfter="ar">
            {section.cta ?? "Start with a free audit"}
          </ButtonLink>
          <ButtonLink variant="whatsapp" icon="wa" href={whatsappUrl(waTopic)}>
            WhatsApp us
          </ButtonLink>
        </Ctas>
      </div>
    </section>
  );
}
