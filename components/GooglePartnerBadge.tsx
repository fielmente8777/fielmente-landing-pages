/* eslint-disable @next/next/no-img-element */

/**
 * Use only after lp.fielmente.com is entered in the Eazotel
 * Google Partners Company details > Badged websites list.
 */
export default function GooglePartnerBadge() {
  if (process.env.NEXT_PUBLIC_GOOGLE_PARTNER_FIELMENTE_APPROVED !== "true") {
    return null;
  }

  return (
    <section aria-label="Google Partner recognition" className="bg-[#110D3C] px-8 py-8 text-center text-white">
      <a
        href="https://www.google.com/partners/agency?id=7707754365"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View Eazotel's Google Partner profile"
        className="inline-flex items-center justify-center p-7"
      >
        <img
          src="https://www.gstatic.com/partners/badge/images/2026/PartnerBadgeClickable.svg"
          alt="Google Partner"
          width="160"
          loading="lazy"
          style={{ height: "auto", maxWidth: "100%" }}
        />
      </a>
      <p className="mx-auto max-w-2xl text-sm leading-relaxed">
        Fielmente is part of Eazotel. Fielmente&apos;s SEO services are not verified or endorsed by Google.
      </p>
    </section>
  );
}
