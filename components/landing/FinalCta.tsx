import { ButtonLink } from "@/components/ui/Button";
import { SiteImage } from "@/components/ui/SiteImage";
import { PHONE, whatsappUrl } from "@/content/site";
import { WRAP } from "./shared";

export function FinalCta({ image, waTopic }: { image: string; waTopic: string }) {
  return (
    <section className="relative isolate overflow-hidden text-center text-white before:absolute before:inset-0 before:-z-1 before:bg-[linear-gradient(180deg,rgba(17,13,60,.6),rgba(17,13,60,.9))]">
      <SiteImage src={image} alt="" fill sizes="100vw" className="-z-2 object-cover" />
      <div className={`${WRAP} reveal flex flex-col items-center gap-6 py-18`}>
        <h2 className="max-w-[780px] text-[clamp(28px,6.4vw,46px)]">
          Free 15-minute strategy call.
          <br />
          No sales pitch.
        </h2>
        <div className="flex flex-wrap justify-center gap-3 max-xs:*:w-full">
          <ButtonLink href="#form" iconAfter="ar">
            Book my free call
          </ButtonLink>
          <ButtonLink variant="whatsapp" icon="wa" href={whatsappUrl(waTopic)}>
            WhatsApp us
          </ButtonLink>
          <ButtonLink variant="outline" icon="ph" href={`tel:${PHONE}`}>
            Call now
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
