import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { PHONE, whatsappUrl } from "@/content/site";

/** Sticky call / WhatsApp / CTA bar on phones (PageEffects shows it once the form scrolls away). */
export function MobileBar({ cta, waTopic }: { cta: string; waTopic: string }) {
  const tile = "grid h-[52px] w-[52px] flex-none place-items-center rounded-[14px]";
  return (
    <nav
      data-mobile-bar
      aria-label="Quick contact"
      className="fixed inset-x-0 bottom-0 z-70 flex gap-2 bg-white/97 px-3 pt-2.5 pb-[calc(10px+env(safe-area-inset-bottom))] shadow-[0_-1px_0_var(--color-line),0_-10px_30px_rgba(17,13,60,.1)] [-webkit-backdrop-filter:blur(14px)] [backdrop-filter:blur(14px)] [transform:translateY(120%)] [transition:transform_.4s_var(--ease-soft)] dt:hidden [&.on]:[transform:none]"
    >
      <a className={`${tile} bg-mist text-ink`} href={`tel:${PHONE}`} aria-label="Call us">
        <Icon name="ph" className="h-[22px] w-[22px]" />
      </a>
      <a className={`${tile} bg-wa text-white`} href={whatsappUrl(waTopic)} aria-label="WhatsApp us">
        <Icon name="wa" className="h-[22px] w-[22px]" />
      </a>
      <ButtonLink size="bar" href="#form">
        {cta}
      </ButtonLink>
    </nav>
  );
}

/** Floating WhatsApp button on larger screens. */
export function WhatsAppFloat({ waTopic }: { waTopic: string }) {
  return (
    <a
      href={whatsappUrl(waTopic)}
      aria-label="Chat on WhatsApp"
      className="fixed right-6 bottom-6 z-70 hidden h-[60px] w-[60px] place-items-center rounded-full bg-wa text-white shadow-[0_12px_30px_rgba(14,124,102,.45)] [transition:transform_.3s_var(--ease-soft)] after:absolute after:inset-0 after:rounded-full after:border-2 after:border-wa after:animate-ripple hover:[transform:scale(1.08)] dt:grid"
    >
      <Icon name="wa" className="h-7 w-7" />
    </a>
  );
}
