import { SiteImage, ratioStyle, widthAtHeight } from "@/components/ui/SiteImage";
import { ADDRESS, EMAIL, FOOTER_LINKS, PHONE, PHONE_DISPLAY } from "@/content/site";
import { WRAP } from "./shared";

const LOGO = "/images/brand/fielmente-logo-white.png";

export function SiteFooter({ slug }: { slug: string }) {
  return (
    <footer className="bg-ink text-[14px] text-lilac">
      <div
        className={`${WRAP} flex flex-col items-center gap-[18px] py-10 text-center dt:flex-row dt:flex-wrap dt:justify-between dt:text-left`}
      >
        <div className="flex flex-col items-center gap-2 dt:items-start">
          <SiteImage src={LOGO} alt="Fielmente" width={widthAtHeight(LOGO, 40)} height={40} style={ratioStyle(LOGO)} className="mb-1 h-10 w-auto" />
          <p>{ADDRESS}</p>
          <p>
            <a className="text-white no-underline" href={`tel:${PHONE}`}>
              {PHONE_DISPLAY}
            </a>{" "}
            ·{" "}
            <a className="text-white no-underline" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
          </p>
        </div>
        {/* Plain links: each landing page is a full page load, so GTM records every view. */}
        <nav aria-label="Services" className="flex flex-wrap justify-center gap-x-[18px] gap-y-2">
          {FOOTER_LINKS.filter((link) => link.href !== `/${slug}`).map((link) => (
            <a key={link.href} href={link.href} className="text-lilac no-underline hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>
        <p className="opacity-70">© Fielmente Hospitality Marketing Agency</p>
      </div>
    </footer>
  );
}
