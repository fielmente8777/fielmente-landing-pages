import type { LandingPage as Page, Section } from "@/content/types";
import { IconSprite } from "@/components/ui/Icon";
import { GTM_ID } from "@/content/site";
import { FinalCta } from "./FinalCta";
import { Hero } from "./Hero";
import { MobileBar, WhatsAppFloat } from "./MobileBar";
import { PageEffects } from "./PageEffects";
import { Partners } from "./Partners";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { Clients } from "./sections/Clients";
import { Gallery } from "./sections/Gallery";
import { Services } from "./sections/Services";
import { MapBlock, Split } from "./sections/Split";
import { Stats } from "./sections/Stats";
import { Steps } from "./sections/Steps";

// Runs before any content renders: marks JS as available (enables the scroll-reveal
// styles) and starts Google Tag Manager, as the original pages did.
const startScript = `document.documentElement.className+=' js';(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`;
const gtmNoScript = `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;

function renderSection(section: Section, i: number, page: Page) {
  switch (section.type) {
    case "partners":
      return <Partners key={i} section={section} />;
    case "gallery":
      return <Gallery key={i} section={section} />;
    case "services":
      return <Services key={i} section={section} />;
    case "steps":
      return <Steps key={i} section={section} waTopic={page.waTopic} />;
    case "stats":
      return <Stats key={i} section={section} />;
    case "split":
      return <Split key={i} section={section} />;
    case "map":
      return <MapBlock key={i} section={section} />;
    case "clients":
      return <Clients key={i} section={section} />;
  }
}

export function LandingPage({ page }: { page: Page }) {
  // Name used for the form, GTM and the CRM, e.g. "Resort Marketing Agency — Ads, SEO, OTA & Revenue".
  const pageName = page.title.split(" | ")[0];
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: startScript }} />
      <noscript dangerouslySetInnerHTML={{ __html: gtmNoScript }} />
      <IconSprite />
      <div className="bg-white pb-[calc(72px+env(safe-area-inset-bottom))] font-body text-[16px]/[1.55] text-ink dt:pb-0">
        <SiteHeader cta={page.headerCta} />
        <main>
          <Hero page={page} pageName={pageName} />
          {page.sections.map((section, i) => renderSection(section, i, page))}
          <FinalCta image={page.finalImage} waTopic={page.waTopic} />
        </main>
        <SiteFooter slug={page.slug} />
        <MobileBar cta={page.mobileCta} waTopic={page.waTopic} />
        <WhatsAppFloat waTopic={page.waTopic} />
      </div>
      <PageEffects />
    </>
  );
}
