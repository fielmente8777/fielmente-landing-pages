"use client";

import { useState, type FormEvent } from "react";
import { Button, ButtonLink } from "@/components/ui/Button";
import { pushEvent } from "@/lib/analytics";
import { COUNTRY_CODES, normalisePhone, type LeadRequest } from "@/lib/lead";
import { whatsappFollowUpUrl, whatsappUrl } from "@/content/site";

const field = "flex flex-col gap-1.5 text-[14px] font-bold";
const control =
  "min-h-[52px] appearance-none rounded-xl border-[1.5px] border-edge font-body text-[16px]/[normal] font-normal text-ink [transition:border-color_.2s,box-shadow_.2s] placeholder:text-hint focus:border-brand focus:shadow-[0_0_0_4px_rgba(242,102,51,.18)] focus:outline-0";

type Sent = { firstName: string; whatsapp: string };

export function LeadForm({
  title,
  button,
  waTopic,
  pageName,
}: {
  title: string;
  button: string;
  waTopic: string;
  pageName: string;
}) {
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [sent, setSent] = useState<Sent | null>(null);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const get = (key: string) => String(data.get(key) ?? "").trim();
    const countryCode = get("cc");
    const phoneInput = form.elements.namedItem("phone") as HTMLInputElement;
    const phone = normalisePhone(countryCode, get("phone"));
    if (!phone) {
      phoneInput.setCustomValidity(
        countryCode === "+91" ? "Enter a 10-digit mobile number." : "Enter a valid phone number.",
      );
      phoneInput.reportValidity();
      return;
    }

    const lead: LeadRequest = {
      name: get("name"),
      countryCode,
      phone,
      email: get("email"),
      pageName,
      pagePath: window.location.pathname,
      sourceUrl: window.location.href,
      company: get("company"),
    };

    setStatus("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
        signal: AbortSignal.timeout(20_000),
      });
      const result = (await res.json().catch(() => null)) as { ok?: boolean } | null;
      if (!res.ok || !result?.ok) throw new Error("Lead not saved");

      // Conversion event fires only once the CRM has the lead.
      pushEvent({ event: "generate_lead", form_page: window.location.pathname, form_name: pageName });
      setSent({
        firstName: lead.name.split(" ")[0],
        whatsapp: whatsappFollowUpUrl(pageName, lead.name, `${countryCode} ${get("phone")}`, lead.email),
      });
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      id="form"
      aria-label="Free consultation"
      onSubmit={submit}
      className="flex min-w-0 animate-[rise_.9s_var(--ease-soft)_.3s_both] scroll-mt-[calc(var(--hh)+16px)] flex-col gap-3.5 rounded-[22px] bg-white px-5 py-6 text-ink shadow-[0_30px_70px_rgba(0,0,0,.35)] hx:p-[30px] [&.hl]:animate-highlight"
    >
      {sent ? (
        <div role="status" className="flex flex-col items-center gap-3 py-3 text-center">
          <svg
            viewBox="0 0 52 52"
            aria-hidden="true"
            className="h-16 w-16 fill-none stroke-wa stroke-3 [stroke-linecap:round] [stroke-linejoin:round]"
          >
            <circle cx="26" cy="26" r="24" className="animate-draw [stroke-dasharray:151] [stroke-dashoffset:151]" />
            <path d="M15 27l7 7 15-15" className="animate-draw-late [stroke-dasharray:36] [stroke-dashoffset:36]" />
          </svg>
          <h2 className="text-[22px]">Thank you{sent.firstName ? `, ${sent.firstName}` : ""}!</h2>
          <p className="text-muted">Our team will call you shortly. For a faster reply, continue on WhatsApp.</p>
          <ButtonLink variant="whatsapp" href={sent.whatsapp} className="w-full">
            Continue on WhatsApp
          </ButtonLink>
        </div>
      ) : (
        <>
          <h2 className="text-[22px]">{title}</h2>
          <p className="-mt-2 text-[14px] text-muted">Free 15-minute call. No sales pitch.</p>
          <label className={field}>
            Your name
            <input
              className={`${control} w-full bg-white px-3.5`}
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Full name"
              required
            />
          </label>
          <div className={field}>
            <label htmlFor="ph">Phone</label>
            <div className="flex gap-2">
              <select className={`${control} select-chevron w-[88px] flex-none pr-[26px] pl-3`} name="cc" aria-label="Country code">
                {COUNTRY_CODES.map((code) => (
                  <option key={code}>{code}</option>
                ))}
              </select>
              <input
                className={`${control} w-full bg-white px-3.5`}
                id="ph"
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel-national"
                placeholder="98XXXXXXXX"
                pattern="[0-9 ]{7,15}"
                required
                onInput={(e) => e.currentTarget.setCustomValidity("")}
              />
            </div>
          </div>
          <label className={field}>
            Email
            <input
              className={`${control} w-full bg-white px-3.5`}
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              placeholder="you@yourhotel.com"
              required
            />
          </label>
          {/* Honeypot: off-screen and skipped by keyboard and screen readers. */}
          <div aria-hidden="true" className="absolute left-[-9999px] h-px w-px overflow-hidden">
            <label>
              Company
              <input name="company" type="text" tabIndex={-1} autoComplete="off" />
            </label>
          </div>
          <Button
            type="submit"
            className="mt-1 w-full"
            disabled={status === "sending"}
            iconAfter={status === "sending" ? undefined : "ar"}
          >
            {status === "sending" ? "Sending…" : button}
          </Button>
          {status === "error" && (
            <p role="alert" className="text-center text-[14px] font-bold text-rust">
              Sorry, that didn&apos;t go through. Please try again or WhatsApp us.
            </p>
          )}
          <p className="text-center text-[14px] text-muted">
            Prefer chat?{" "}
            <a className="font-bold text-wa underline" href={whatsappUrl(waTopic)}>
              WhatsApp us
            </a>
          </p>
        </>
      )}
    </form>
  );
}
