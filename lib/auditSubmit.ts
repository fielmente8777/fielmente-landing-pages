import { auditDescription, type AuditSubmission } from "./auditOffer";
export async function submitAudit(data: AuditSubmission): Promise<{ ok: boolean; message?: string }> {
  const response = await fetch("/api/lead", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name: data.name, email: data.email, phone: data.phone, countryCode: data.countryCode, pageName: data.topic + " — audit offer v2", pagePath: window.location.pathname, sourceUrl: window.location.href, formPurpose: "audit", description: auditDescription(data), company: new FormData(data.form).get("company_website") }), signal: AbortSignal.timeout(20000) });
  const result = await response.json().catch(() => ({}));
  return { ok: response.ok && result.ok === true };
}
