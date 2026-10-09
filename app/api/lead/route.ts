import { COUNTRY_CODES, EMAIL_PATTERN, normalisePhone } from "@/lib/lead";

// Same Eazotel CRM endpoint and domain the fielmente.com forms post to.
const CRM_URL = process.env.CRM_ENDPOINT ?? "https://nexon.eazotel.com/eazotel/addcontacts";
const CRM_DOMAIN = process.env.CRM_DOMAIN ?? "fielmente";

function text(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function reply(ok: boolean, status = 200) {
  return Response.json({ ok }, { status });
}

/**
 * Saves a landing-page lead in the Eazotel CRM. Responds { ok: true } only after
 * the CRM confirms (Status: true), so the page never thanks a visitor (or fires a
 * conversion) for a lead that was not saved.
 */
export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return reply(false, 400);
  }

  // Honeypot field is invisible to people; pretend success so bots move on.
  if (text(body.company, 200)) return reply(true);

  const name = text(body.name, 100);
  const email = text(body.email, 200);
  const countryCode = text(body.countryCode, 5);
  const phone = (COUNTRY_CODES as readonly string[]).includes(countryCode)
    ? normalisePhone(countryCode, text(body.phone, 40))
    : null;
  if (!name || !EMAIL_PATTERN.test(email) || !phone) return reply(false, 400);

  const pageName = text(body.pageName, 150);
  const pagePath = text(body.pagePath, 100);

  try {
    const res = await fetch(CRM_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        Domain: CRM_DOMAIN,
        Name: name,
        email,
        Contact: countryCode + phone,
        Description: `Landing page: ${pageName} (lp.fielmente.com${pagePath})`,
        created_from: "webform",
        source_url: text(body.sourceUrl, 2000),
      }),
      signal: AbortSignal.timeout(10_000),
    });
    const data = (await res.json().catch(() => null)) as { Status?: unknown; message?: unknown } | null;
    if (res.ok && data?.Status) return reply(true);
    console.error("CRM did not save lead", res.status, data?.message);
  } catch (error) {
    console.error("CRM request failed", error);
  }
  return reply(false, 502);
}
