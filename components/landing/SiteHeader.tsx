import { ButtonLink } from "@/components/ui/Button";
import { SiteImage, ratioStyle } from "@/components/ui/SiteImage";
import { PHONE, PHONE_DISPLAY } from "@/content/site";
import { WRAP } from "./shared";

export function SiteHeader({ cta }: { cta: string }) {
  return (
    // PageEffects adds .s (shadow) once the page scrolls.
    <header
      data-header
      className="frosted sticky top-0 z-50 bg-white/94 [transition:box-shadow_.3s] [&.s]:shadow-[0_1px_0_var(--color-line),0_10px_30px_rgba(17,13,60,.08)]"
    >
      <div className={`${WRAP} flex h-(--hh) items-center justify-between gap-3`}>
        <a href="#top" aria-label="Fielmente home">
          <SiteImage
            src="/images/brand/fielmente-logo.png"
            alt="Fielmente"
            width={131}
            height={46}
            loading="eager"
            style={ratioStyle("/images/brand/fielmente-logo.png")}
            className="h-9 w-auto dt:h-11"
          />
        </a>
        <div className="flex items-center gap-2.5">
          <ButtonLink variant="light" size="sm" icon="ph" href={`tel:${PHONE}`} className="max-dt:hidden">
            {PHONE_DISPLAY}
          </ButtonLink>
          <ButtonLink size="sm" href="#form">
            {cta}
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
