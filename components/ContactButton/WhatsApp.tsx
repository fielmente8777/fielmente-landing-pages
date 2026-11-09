"use client";

import { usePathname } from "next/navigation";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { PHONE, whatsappUrl } from "@/content/site";

/**
 * Floating contact buttons on every landing page: call at bottom left, WhatsApp at bottom right.
 * The ids and classes (call-button, whatsapp-button) are used by tracking, so keep them.
 * Landing pages have no SalesIQ chat; it runs only on the main website (fielmente.com).
 */
export default function Whatsapp({ topics }: { topics: Record<string, string> }) {
  const pathname = usePathname();
  const slug = pathname.split("/").filter(Boolean)[0] || "";
  const whatsappHref = whatsappUrl(topics[slug] || "");
  const bottom = { bottom: "max(1rem, env(safe-area-inset-bottom))" };

  return (
    <>
      <a
        id="call-button"
        href={`tel:${PHONE}`}
        aria-label="Call Fielmente"
        title="Call Fielmente"
        style={bottom}
        className="call-button fixed left-4 lg:left-10 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-[#110D3C] text-white shadow-2xl transition-colors hover:bg-[#1B2231] focus-visible:ring-2 focus-visible:ring-[#F26633] focus-visible:ring-offset-2"
      >
        <FaPhoneAlt size={23} aria-hidden="true" />
      </a>
      <a
        id="whatsapp-button"
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
        style={bottom}
        className="whatsapp-button fixed right-4 lg:right-10 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition-colors hover:bg-green-600 focus-visible:ring-2 focus-visible:ring-[#F26633] focus-visible:ring-offset-2"
      >
        <FaWhatsapp size={29} aria-hidden="true" />
      </a>
    </>
  );
}
