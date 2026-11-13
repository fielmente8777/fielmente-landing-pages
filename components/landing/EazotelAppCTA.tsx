import type { LandingPage } from "@/content/types";
import { SiGoogleplay } from "react-icons/si";
import {
  FiArrowUpRight,
  FiCheck,
  FiCheckCircle,
  FiMessageSquare,
  FiSmartphone,
} from "react-icons/fi";

const PLAY_STORE_LINK = "https://play.google.com/store/search?q=eazotel&c=apps&hl=en_IN";

type ContextCopy = {
  eyebrow: string;
  headline: string;
  accent: string;
  description: string;
  benefits: [string, string, string];
  screenTitle: string;
  screenSubtitle: string;
  examples: [
    { label: string; detail: string; stage: string },
    { label: string; detail: string; stage: string }
  ];
};

/**
 * Match the app-promotion message and the illustrative phone content to the exact
 * advertising topic on the page. This is NOT a screenshot of the real Eazotel app.
 * The real Google Play target is deliberately the user-provided search link.
 *
 * Do not insert generic "hotel" messaging on resort/restaurant/wellness pages.
 * The page's actual conversion CTA remains in the hero and after this section.
 */
const CONTEXT: Record<string, ContextCopy> = {
  resort: {
    eyebrow: "For resort teams",
    headline: "Your resort enquiries.",
    accent: "Always within reach.",
    description: "From weekend getaways and group stays to guest questions, keep resort enquiries and follow-ups close—even when you're away from the property.",
    benefits: ["Stay enquiries", "Group & event leads", "Timely follow-ups"],
    screenTitle: "Resort enquiry workspace",
    screenSubtitle: "Sample resort conversations",
    examples: [
      { label: "Weekend stay enquiry", detail: "Room and package request", stage: "New enquiry" },
      { label: "Group getaway", detail: "Follow-up on a group stay", stage: "Follow-up" },
    ],
  },
  hotel: {
    eyebrow: "For hotel teams",
    headline: "Your hotel guest enquiries.",
    accent: "One connected view.",
    description: "Stay close to room enquiries, direct-booking conversations and your next follow-up with Eazotel on Android.",
    benefits: ["Room enquiries", "Direct-booking leads", "CRM follow-ups"],
    screenTitle: "Hotel enquiry workspace",
    screenSubtitle: "Sample guest conversations",
    examples: [
      { label: "Room booking enquiry", detail: "Upcoming stay request", stage: "New enquiry" },
      { label: "Guest follow-up", detail: "Continue the conversation", stage: "Follow-up" },
    ],
  },
  hospitality: {
    eyebrow: "For hospitality businesses",
    headline: "Stay connected to every enquiry.",
    accent: "Even on the move.",
    description: "Whether you run a hotel, resort, villa or restaurant, Eazotel helps your team keep enquiries and customer follow-ups in view.",
    benefits: ["Customer enquiries", "Team visibility", "CRM follow-ups"],
    screenTitle: "Hospitality CRM workspace",
    screenSubtitle: "Illustrative customer requests",
    examples: [
      { label: "New guest enquiry", detail: "Customer conversation", stage: "New enquiry" },
      { label: "Sales follow-up", detail: "Next action to review", stage: "Follow-up" },
    ],
  },
  "google-ads": {
    eyebrow: "For advertising-led bookings",
    headline: "The enquiry matters.",
    accent: "Not just the ad click.",
    description: "After a guest reaches out, keep the conversation moving. Use Eazotel to stay connected with hospitality sales enquiries and follow-ups.",
    benefits: ["Campaign enquiries", "Lead conversations", "Sales follow-ups"],
    screenTitle: "Lead follow-up workspace",
    screenSubtitle: "From interest to conversation",
    examples: [
      { label: "Booking enquiry", detail: "New advertising lead", stage: "New enquiry" },
      { label: "Guest conversation", detail: "Sales follow-up required", stage: "Follow-up" },
    ],
  },
  seo: {
    eyebrow: "From search to conversation",
    headline: "Be found on Google.",
    accent: "Stay close to the enquiry.",
    description: "Visibility is the first step. When potential guests contact your property, use Eazotel to keep their questions and follow-ups organised.",
    benefits: ["Search enquiries", "Guest questions", "Follow-up visibility"],
    screenTitle: "Guest enquiry workspace",
    screenSubtitle: "After customers find you",
    examples: [
      { label: "Availability question", detail: "New guest request", stage: "New enquiry" },
      { label: "Booking follow-up", detail: "Continue the conversation", stage: "Follow-up" },
    ],
  },
  "social-media": {
    eyebrow: "For social-first hospitality brands",
    headline: "Turn interest into conversations.",
    accent: "Keep the conversation going.",
    description: "Great content gets people interested in your property. Keep incoming booking questions and sales follow-ups within reach in Eazotel.",
    benefits: ["Guest interest", "Booking conversations", "CRM follow-ups"],
    screenTitle: "Guest conversation workspace",
    screenSubtitle: "Sample hospitality enquiries",
    examples: [
      { label: "Stay enquiry", detail: "Interested traveller", stage: "New enquiry" },
      { label: "Package follow-up", detail: "Continue the conversation", stage: "Follow-up" },
    ],
  },
  "website-development": {
    eyebrow: "Beyond the website",
    headline: "Your website starts the journey.",
    accent: "Your team keeps it going.",
    description: "A good booking experience brings guests closer. Eazotel helps your team stay on top of website enquiries and the conversations that follow.",
    benefits: ["Website enquiries", "Guest conversations", "Follow-up visibility"],
    screenTitle: "Booking enquiry workspace",
    screenSubtitle: "Sample website requests",
    examples: [
      { label: "Direct-booking question", detail: "New website enquiry", stage: "New enquiry" },
      { label: "Room enquiry follow-up", detail: "Guest awaiting a reply", stage: "Follow-up" },
    ],
  },
  "ota-management": {
    eyebrow: "For accommodation sales teams",
    headline: "Rates and listings bring attention.",
    accent: "Conversations bring guests.",
    description: "Alongside your OTA strategy, stay connected to property enquiries and guest follow-ups with the Eazotel mobile experience.",
    benefits: ["Guest enquiries", "Booking questions", "Sales follow-ups"],
    screenTitle: "Property enquiry workspace",
    screenSubtitle: "Sample guest requests",
    examples: [
      { label: "Room-type question", detail: "Upcoming guest enquiry", stage: "New enquiry" },
      { label: "Booking conversation", detail: "Follow-up to complete", stage: "Follow-up" },
    ],
  },
  restaurant: {
    eyebrow: "For restaurant and café teams",
    headline: "Every dining enquiry counts.",
    accent: "Keep yours within reach.",
    description: "From private dining to group events and customer questions, use Eazotel to stay close to enquiries and timely follow-ups.",
    benefits: ["Dining enquiries", "Private-event leads", "Customer follow-ups"],
    screenTitle: "Restaurant enquiry workspace",
    screenSubtitle: "Sample dining conversations",
    examples: [
      { label: "Private dining enquiry", detail: "Dining experience request", stage: "New enquiry" },
      { label: "Group event follow-up", detail: "Continue the conversation", stage: "Follow-up" },
    ],
  },
  wellness: {
    eyebrow: "For wellness retreats",
    headline: "Your retreat enquiries.",
    accent: "A more personal follow-up.",
    description: "Stay connected with guests enquiring about Ayurveda, wellness packages and retreat stays, wherever your team is working.",
    benefits: ["Retreat enquiries", "Wellness package leads", "Guest follow-ups"],
    screenTitle: "Wellness enquiry workspace",
    screenSubtitle: "Sample retreat conversations",
    examples: [
      { label: "Ayurveda retreat enquiry", detail: "Programme and stay question", stage: "New enquiry" },
      { label: "Wellness package follow-up", detail: "Guest awaiting details", stage: "Follow-up" },
    ],
  },
  branding: {
    eyebrow: "For growing hospitality brands",
    headline: "A brand makes the impression.",
    accent: "The follow-up builds trust.",
    description: "After guests discover your hotel, resort or restaurant brand, stay connected to their enquiries with Eazotel.",
    benefits: ["Brand enquiries", "Customer conversations", "CRM follow-ups"],
    screenTitle: "Brand enquiry workspace",
    screenSubtitle: "Sample customer conversations",
    examples: [
      { label: "New customer enquiry", detail: "Interested guest", stage: "New enquiry" },
      { label: "Brand experience enquiry", detail: "Next action to review", stage: "Follow-up" },
    ],
  },
  "revenue-management": {
    eyebrow: "For hotel revenue teams",
    headline: "The right room rate matters.",
    accent: "So does every enquiry.",
    description: "Complement your revenue strategy by keeping room enquiries, guest questions and sales follow-ups visible to your team.",
    benefits: ["Room enquiries", "Booking conversations", "Sales follow-ups"],
    screenTitle: "Room enquiry workspace",
    screenSubtitle: "Sample booking conversations",
    examples: [
      { label: "Room category enquiry", detail: "Booking question", stage: "New enquiry" },
      { label: "Rate request follow-up", detail: "Guest awaiting details", stage: "Follow-up" },
    ],
  },
  "hotel-crm": {
    eyebrow: "Eazotel mobile CRM",
    headline: "Never leave a guest enquiry behind.",
    accent: "Stay close to your pipeline.",
    description: "Bring your hotel sales conversations and next steps into view on your phone. Eazotel gives your team an on-the-go companion for follow-ups.",
    benefits: ["Lead conversations", "Enquiry stages", "Next actions"],
    screenTitle: "Hotel CRM workspace",
    screenSubtitle: "Sample lead activity",
    examples: [
      { label: "New WhatsApp enquiry", detail: "Stay request to review", stage: "New enquiry" },
      { label: "Booking lead follow-up", detail: "Next action pending", stage: "Follow-up" },
    ],
  },
};

export default function EazotelAppCTA({ page }: { page: Pick<LandingPage, "slug" | "waTopic"> }) {
  const copy = CONTEXT[page.slug] ?? CONTEXT.hospitality;
  const sectionId = "eazotel-download-" + page.slug;

  return (
    <section aria-labelledby={sectionId} className="relative isolate overflow-hidden bg-[#110D3C] py-12 text-white md:py-18">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_86%_30%,rgba(42,88,192,0.28),transparent_52%),radial-gradient(ellipse_at_0%_110%,rgba(242,102,51,0.13),transparent_50%)]" />
      <div className="mx-auto grid w-full max-w-[1240px] items-center gap-10 px-5 md:grid-cols-[minmax(0,1fr)_minmax(280px,0.82fr)] md:gap-12 md:px-8">
        <div>
          <div className="mb-6 flex flex-wrap items-center gap-2 text-xs font-bold tracking-wide">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-2 text-white/90">
              <FiSmartphone aria-hidden="true" size={15} />
              Eazotel mobile app
            </span>
            <span className="text-[#FFAF8C]">Fielmente · Part of Eazotel</span>
          </div>
          <p className="text-sm font-semibold tracking-[0.06em] text-[#FFB28D]">{copy.eyebrow}</p>
          <h2 id={sectionId} className="mt-3 max-w-[650px] text-[clamp(28px,5vw,46px)] font-extrabold leading-[1.15] tracking-tight text-white">
            {copy.headline} <span className="text-[#FF9967]">{copy.accent}</span>
          </h2>
          <p className="mt-5 max-w-[610px] text-base leading-7 text-white/80">
            {copy.description}
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {copy.benefits.map((benefit) => (
              <li key={benefit} className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3.5 py-2 text-xs font-medium text-white/90 sm:text-sm">
                <FiCheck className="text-[#FFAF8C]" aria-hidden="true" />
                {benefit}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={PLAY_STORE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Find the Eazotel Android app on Google Play, opens a new tab"
              className="group inline-flex min-h-[62px] items-center gap-3 rounded-xl border border-white/35 bg-[#080A1B] px-5 py-3 text-white no-underline shadow-xl transition hover:-translate-y-0.5 hover:border-[#FF9967] hover:bg-[#202446] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <SiGoogleplay size={28} aria-hidden="true" />
              <span className="text-left leading-tight">
                <span className="block text-[10px] font-semibold uppercase tracking-wider text-white/75">Get it on</span>
                <span className="block text-xl font-bold text-white">Google Play</span>
              </span>
              <FiArrowUpRight size={18} aria-hidden="true" className="ml-2 text-white/70 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <span className="text-xs text-white/60">Android · Search for Eazotel</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[470px]" aria-label={"Illustrative Eazotel workspace for " + page.waTopic}>
          <div aria-hidden="true" className="pointer-events-none absolute inset-8 rounded-full bg-[#2C60DA]/25 blur-[60px]" />
          <div className="relative overflow-hidden rounded-[24px] border border-white/20 bg-white p-1.5 shadow-[0_25px_65px_-20px_rgba(0,0,0,0.6)]">
            <div className="overflow-hidden rounded-[18px] bg-[#F7F9FE] text-[#1B2452]">
              <div className="bg-[linear-gradient(115deg,#202B62,#141838)] px-5 pb-7 pt-5 text-white sm:px-6">
                <div className="mb-5 flex items-center justify-between">
                  <p className="text-xs font-extrabold tracking-[0.18em] text-[#FFB28D]">EAZOTEL</p>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/25 px-2.5 py-1 text-[11px] text-white/80">
                    <FiSmartphone aria-hidden="true" size={12} /> Mobile
                  </span>
                </div>
                <p className="text-lg font-bold sm:text-xl">{copy.screenTitle}</p>
                <p className="mt-1 text-xs text-white/70">{copy.screenSubtitle}</p>
              </div>
              <div className="-mt-3.5 space-y-3 px-3.5 pb-5 sm:px-5">
                {copy.examples.map((item, index) => (
                  <div key={item.label} className="rounded-2xl border border-[#E8EAF3] bg-white p-3.5 shadow-[0_8px_24px_-16px_rgba(17,13,60,0.34)] sm:p-4">
                    <div className="flex items-start gap-3">
                      <div className={index === 0 ? "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EAF0FF] text-[#315DD6]" : "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFF1E9] text-[#D76A3C]"}>
                        {index === 0 ? <FiMessageSquare size={19} aria-hidden="true" /> : <FiCheckCircle size={19} aria-hidden="true" />}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-bold leading-snug">{item.label}</p>
                        <p className="mt-1 text-xs leading-5 text-[#68718B]">{item.detail}</p>
                        <p className={index === 0 ? "mt-2 w-fit rounded-full bg-[#EDF2FF] px-2.5 py-1 text-[11px] font-semibold text-[#315DD6]" : "mt-2 w-fit rounded-full bg-[#FFF0E8] px-2.5 py-1 text-[11px] font-semibold text-[#C35A2B]"}>
                          {item.stage}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="flex items-center justify-between px-1 text-[11px] text-[#727B95]">
                  <span>Illustrative interface · Not an app screenshot</span>
                  <span className="font-bold text-[#3F56A0]">Eazotel</span>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-3 -right-2 rounded-full border border-white/20 bg-[#273464] px-4 py-2 text-xs font-semibold text-white/95 shadow-lg sm:right-0">
            {copy.benefits[0]} · On the go
          </div>
        </div>
      </div>
    </section>
  );
}
