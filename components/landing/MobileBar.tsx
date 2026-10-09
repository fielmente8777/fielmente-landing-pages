import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { PHONE, whatsappUrl } from "@/content/site";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

/** Sticky call / WhatsApp / CTA bar on phones (PageEffects shows it once the form scrolls away). */
export function MobileBar({ cta, waTopic }: { cta: string; waTopic: string }) {
  const tile =
    "grid h-[52px] w-[52px] flex-none place-items-center rounded-[14px]";
  return (
    <nav
      data-mobile-bar
      aria-label="Quick contact"
      className="fixed inset-x-0 bottom-0 z-70 flex gap-2 bg-white/97 px-3 pt-2.5 pb-[calc(10px+env(safe-area-inset-bottom))] shadow-[0_-1px_0_var(--color-line),0_-10px_30px_rgba(17,13,60,.1)] [-webkit-backdrop-filter:blur(14px)] [backdrop-filter:blur(14px)] [transform:translateY(120%)] [transition:transform_.4s_var(--ease-soft)] dt:hidden [&.on]:[transform:none]"
    >
      <a
        className={`${tile} bg-mist text-ink`}
        href={`tel:${PHONE}`}
        aria-label="Call us"
      >
        <Icon name="ph" className="h-[22px] w-[22px]" />
      </a>
      <a
        className={`${tile} bg-wa text-white`}
        href={whatsappUrl(waTopic)}
        aria-label="WhatsApp us"
      >
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
    <Link
      href={whatsappUrl(waTopic)}
      id="whatsapp-button"
      className="fixed bottom-25 lg:left-3 max-md:hidden left-4 z-20 cursor-pointer"
      aria-label="Chat on WhatsApp"
    >
      <div className="w-12 h-12 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center shadow-2xl transition-all pointer-events-none">
        <FaWhatsapp size={29} color="white" />
      </div>

      <span className="sr-only pointer-events-none">Chat on WhatsApp</span>
    </Link>
  );
}
