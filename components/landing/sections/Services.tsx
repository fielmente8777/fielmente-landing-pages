import type { ServicesSection } from "@/content/types";
import { ButtonLink } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { Icon } from "@/components/ui/Icon";
import { SiteImage } from "@/components/ui/SiteImage";
import { WRAP, sectionClass, staggerIndex } from "../shared";

export function Services({ section }: { section: ServicesSection }) {
  return (
    <section className={sectionClass(section.tone)}>
      <div className={WRAP}>
        <Heading
          className="reveal"
          eyebrow={section.eyebrow}
          title={section.title}
          text={section.text}
          tone={section.tone}
        />
        {/* Every card opens the form; hover motion comes from the .stagger transition. */}
        <div className="stagger grid gap-3 tb:grid-cols-2 tb:gap-4 lg:grid-cols-3 lg:gap-5">
          {section.items.map((item, i) => (
            <a
              key={item.title}
              href="#form"
              style={staggerIndex(i)}
              className="group/sc relative flex items-center gap-3.5 rounded-[18px] bg-white p-3 text-inherit no-underline hover:[transform:translateY(-4px)] hover:shadow-[0_18px_40px_rgba(17,13,60,.12)] lg:flex-col lg:items-stretch lg:gap-0 lg:overflow-hidden lg:p-0"
            >
              <SiteImage
                src={item.image}
                alt=""
                sizes="(max-width:1024px) 90px, 33vw"
                className="h-[84px] w-[84px] flex-none rounded-xl bg-haze object-cover lg:h-[190px] lg:w-full lg:rounded-none"
              />
              <div className="min-w-0 flex-1 lg:pt-[18px] lg:pr-14 lg:pb-[22px] lg:pl-5">
                <b className="block text-[17px]/[1.25]">{item.title}</b>
                <span className={`mt-1 block text-[14px] ${item.muted ? "text-muted" : "font-bold text-rust"}`}>
                  {item.note}
                </span>
              </div>
              <Icon
                name="ar"
                className="h-5 w-5 text-brand [transition:transform_.3s_var(--ease-soft)] group-hover/sc:[transform:translateX(4px)] lg:absolute lg:right-5 lg:bottom-6"
              />
            </a>
          ))}
        </div>
        {section.eazotel && (
          <div className="reveal mt-5 flex flex-col items-start gap-4 rounded-[20px] bg-ink p-6 text-white tb:flex-row tb:items-center tb:justify-between tb:px-8 tb:py-7">
            <div>
              <b className="text-[20px]">Powered by Eazotel</b>
              <p className="mt-1.5 text-lilac">
                Booking engine, payments, CRM, WhatsApp, email, AI chatbot and CMS in one dashboard.
              </p>
            </div>
            <ButtonLink href="#form">Get a demo</ButtonLink>
          </div>
        )}
      </div>
    </section>
  );
}
