import { ButtonLink } from "@/components/ui/Button";

/** Keep the form CTA between the shared contact controls and SalesIQ on phones. */
export function MobileBar({ cta }: { cta: string }) {
  return (
    <nav
      data-mobile-bar
      aria-label="Request a consultation"
      className="fixed left-20 right-20 z-20 mx-auto flex max-w-64 dt:hidden [transform:translateY(calc(100%_+_2rem))] [transition:transform_.4s_var(--ease-soft)] [&.on]:[transform:none]"
      style={{ bottom: "max(1rem, env(safe-area-inset-bottom))" }}
    >
      <ButtonLink size="bar" href="#form" className="min-w-0 px-2! text-[13px]! whitespace-normal! text-center">
        {cta}
      </ButtonLink>
    </nav>
  );
}
