# Fielmente landing pages

Ad landing pages for **lp.fielmente.com**, built with Next.js 16, React 19 and Tailwind CSS 4.
Content, copy and design match the static pages that were live on 9 Oct 2026.

| Page | Path |
| --- | --- |
| Resort marketing | `/resort` |
| Hotel marketing | `/hotel` |
| Hospitality marketing | `/hospitality` |
| Google & Meta Ads | `/google-ads` |
| SEO & Local SEO | `/seo` |
| Social media | `/social-media` |
| Website development | `/website-development` |
| OTA & revenue management | `/ota-management` |
| Restaurant marketing | `/restaurant` |
| Wellness & Ayurveda | `/wellness` |
| Branding | `/branding` |
| Revenue management | `/revenue-management` |
| Hotel CRM & WhatsApp AI | `/hotel-crm` |
| Internal index (noindex) | `/` |

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

## Edit content

All copy lives in `content/pages.ts`, one entry per page. A page is a hero (with the lead form) followed by a list of sections:
`partners`, `gallery`, `services`, `steps`, `stats`, `split`, `map`, `clients`. The final "Free 15-minute strategy call" block and the footer are added automatically.

- **New page:** add an entry to `pages` and it is built at `/<slug>`. Add it to `content/index-links.ts` to list it on `/`, and to `FOOTER_LINKS` in `content/site.ts` if it should appear in the footer.
- **New image:** put it in `public/images/...` and add its pixel size to `content/images.ts`.
- **Phone, email, address, GTM ID:** `content/site.ts`.

## Lead form

The form posts to `/api/lead` (`app/api/lead/route.ts`), which saves the lead in the Eazotel CRM at
`https://nexon.eazotel.com/eazotel/addcontacts` with `Domain: "fielmente"`, the same endpoint the fielmente.com forms use.
The visitor sees "Thank you" and the `generate_lead` GTM event fires **only after the CRM confirms** the lead. On failure the form shows an error and keeps what the visitor typed.

Each lead includes the name, email, phone with country code, the landing page name and the full page URL (with any UTM/gclid parameters) as `source_url`.

Phone rules: +91 needs a 10-digit mobile (a leading 0 is dropped); other codes accept 7 to 15 digits. A hidden honeypot field drops bot submissions.

Optional environment variables (for testing against another CRM account):

| Variable | Default |
| --- | --- |
| `CRM_ENDPOINT` | `https://nexon.eazotel.com/eazotel/addcontacts` |
| `CRM_DOMAIN` | `fielmente` |

## Tracking

Google Tag Manager `GTM-WQ5LPRNM` loads at the top of every landing page. Events pushed to `dataLayer`:

| Event | When |
| --- | --- |
| `generate_lead` | Lead saved in the CRM (`form_page`, `form_name`) |
| `cta_click` | Any button that jumps to the form (`cta_text`) |
| `click_call` | Any phone link |
| `click_whatsapp` | Any WhatsApp link |

## Structure

```
app/[slug]/page.tsx        landing pages (static, one per entry in content/pages.ts)
app/page.tsx               internal index
app/api/lead/route.ts      CRM forwarder
components/landing/        page sections, lead form, scroll effects
components/ui/             Button, Icon, Heading, SiteImage
content/                   page copy, image sizes, site constants
lib/                       lead validation, GTM helper
```

Fonts: Poppins (SIL Open Font License, `app/fonts/OFL.txt`), self-hosted.
