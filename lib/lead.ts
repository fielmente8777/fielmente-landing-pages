// Shared by the browser form and the /api/lead route so both apply the same rules.

export const COUNTRY_CODES = ["+91", "+971", "+44", "+1", "+61"] as const;

export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Digits-only phone number, or null when it is not valid for the country.
 * India: a 10-digit mobile (a leading 0 is dropped). Elsewhere: 7 to 15 digits,
 * so Gulf and other short numbers are accepted.
 */
export function normalisePhone(countryCode: string, raw: string): string | null {
  let digits = raw.replace(/\D/g, "");
  if (countryCode === "+91") {
    if (digits.length === 11 && digits.startsWith("0")) digits = digits.slice(1);
    return digits.length === 10 ? digits : null;
  }
  return digits.length >= 7 && digits.length <= 15 ? digits : null;
}

/** Body the landing-page form sends to /api/lead. */
export type LeadRequest = {
  name: string;
  countryCode: string;
  phone: string;
  email: string;
  /** Page title before " | Fielmente", e.g. "Resort Marketing Agency — Ads, SEO, OTA & Revenue". */
  pageName: string;
  pagePath: string;
  /** Full page URL including UTM / gclid parameters. */
  sourceUrl: string;
  /** Honeypot: hidden from people, so anything here means a bot. */
  company?: string;
};
