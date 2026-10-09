export const SITE_URL = "https://lp.fielmente.com";
export const GTM_ID = "GTM-WQ5LPRNM";

export const PHONE = "+919501868775";
export const PHONE_DISPLAY = "+91 95018 68775";
export const EMAIL = "sachin@fielmente.com";
export const ADDRESS = "Suncity Success Tower, Golf Course Ext Rd, Sector 65, Gurugram";

/** Services linked in the footer. A page never links to itself. */
export const FOOTER_LINKS = [
  { href: "/google-ads", label: "Google & Meta Ads" },
  { href: "/seo", label: "SEO" },
  { href: "/social-media", label: "Social Media" },
  { href: "/website-development", label: "Websites" },
  { href: "/ota-management", label: "OTA Management" },
  { href: "/revenue-management", label: "Revenue Management" },
  { href: "/branding", label: "Branding" },
  { href: "/hotel-crm", label: "Hotel CRM" },
];

/** Same encoding as the live pages (apostrophes as %27). */
function encode(text: string) {
  return encodeURIComponent(text).replace(/'/g, "%27");
}

export function whatsappUrl(topic: string) {
  return `https://wa.me/${PHONE.slice(1)}?text=${encode(`Hi Fielmente, I'm interested in ${topic}. Can we talk?`)}`;
}

/** WhatsApp hand-off shown after a lead is saved. */
export function whatsappFollowUpUrl(pageName: string, name: string, phone: string, email: string) {
  return `https://wa.me/${PHONE.slice(1)}?text=${encode(
    `Hi Fielmente, I just requested a free consultation on ${pageName}.\nName: ${name}\nPhone: ${phone}\nEmail: ${email}`,
  )}`;
}
