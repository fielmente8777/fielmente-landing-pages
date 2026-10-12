// Company facts, results, testimonials and client logos used by the agency, industry and service pages.
// Everything here is already published on fielmente.com (home page, About page, client list,
// testimonials) or comes from the Google Ads case studies. Edit claims in one place here.
import type { LogoSet, TestimonialKey } from "@/@types/@agencyPageType";

/* ── Company facts (from the About page and home page) ─────────────────── */
export const COMPANY = {
  founded: "2020",
  founder: "Sachin Kapoor",
  // About page: "Masters in Hospitality from WGSHA, Manipal, and … Sales & Marketing experience from Marriott & Hyatt"
  founderLine: "Founded in 2020 by Sachin Kapoor, a hotelier with a master's in hospitality from WGSHA Manipal and sales and marketing experience at Marriott and Hyatt.",
  team: "15+ hospitality marketers", // About page
  projects: "120+ hotel marketing projects", // home page
  // Countries shown on the home page "Countries we worked" map, plus India.
  countries: ["India", "UAE", "Oman", "UK", "USA", "Canada", "Nepal", "Sri Lanka", "Australia"],
  partners: ["Google Partner", "Meta Business Partner"],
};

/* ── Portfolio results (Google Ads, 23 accounts, Sep 2023 – Sep 2026) ──── */
export const PORTFOLIO = {
  period: "Sep 2023 – Sep 2026",
  stats: [
    { value: "54,900+", label: "guest enquiries tracked from Google Ads" },
    { value: "−70%", label: "cost per enquiry, 2024 to 2026" },
    { value: "23", label: "hospitality ad accounts managed" },
    { value: "9", label: "countries we've worked in" },
  ],
  note: "Google Ads results across 23 client accounts we manage, Sep 2023 – Sep 2026. Enquiries are tracked calls, WhatsApp chats, forms and booking clicks.",
};

/** Headline Google Ads numbers, used on the industries hub and industry pages. */
export const PORTFOLIO_STATS = [
  { value: "₹1.43 Cr", label: "Google Ads spend managed" },
  { value: "54,900+", label: "tracked guest enquiries" },
  { value: "−70%", label: "cost per enquiry, 2024 → 2026" },
  { value: "23", label: "hospitality accounts" },
];

/* ── Testimonials (verbatim excerpts from fielmente.com/testimonials) ─── */
export const TESTIMONIALS: Record<TestimonialKey, { quote: string; name: string; context: string }> = {
  "donald-wingell": {
    quote:
      "Great team to work with. Adaptive as Ottawa is a very unique market and they have learnt very quickly. Great initiative taken to explore and make a big impression in the market.",
    name: "Donald Wingell, CFBE",
    context: "Hospitality client, Ottawa, Canada",
  },
  "atinder-bajwa": {
    quote:
      "We have used Fielmente for all our marketing and advertising needs since December 2021. It has been a very professional and smooth experience. They listen to our needs carefully and then plan accordingly.",
    name: "Atinder Bajwa",
    context: "Fielmente client since 2021",
  },
  "unnati-stayinn": {
    quote:
      "Through their OTA listing, optimization, and revenue management services, we have seen significant growth in our revenue.",
    name: "Unnati Stayinn",
    context: "OTA and revenue management client (Eazotel)",
  },
  "siddhi-vinayak": {
    quote: "I was able to get my property live and bookable in only three working days!",
    name: "Siddhi Vinayak Inn",
    context: "OTA listing client (Eazotel)",
  },
  "tino-frangline": {
    quote:
      "Eazotel was an excellent choice for my organisation and team. The ease of use, intuitive design and feature rich tools are absolutely top tier.",
    name: "Tino Frangline",
    context: "Eazotel platform client",
  },
};

/* ── Client logos ──────────────────────────────────────────────────────── */
// REVIEW: chain brand logos (Marriott, Hyatt, Hilton, Taj, Radisson, Novotel, Ramada, Park Plaza,
// Golden Tulip, DoubleTree) are on /our-clients/ but are left out here. Add them only if they
// were Fielmente clients, not past employers. Logos hidden on /our-clients/ are left out too.
type Logo = { name: string; file: string; bg?: string };

const INTERNATIONAL: Logo[] = [
  { name: "Sternwheeler Hotel & Conference Centre, Canada", file: "STERNWHEELER.png" },
  { name: "Miramar Beach Hotel & Spa, Côte d'Azur", file: "MIRAMAR-logo.jpg" },
  { name: "Bhairahawa Garden Resort, Nepal", file: "BG-logo.jpg" },
  { name: "Aqua Dunhinda, Sri Lanka", file: "aqua-dunhinda.jpg" },
  { name: "Al Hathaifa Group", file: "alhathaifa.png" },
  { name: "Eastern Spice", file: "eastrenspice.webp" },
  { name: "The Red Door", file: "thereddoor.png" },
  { name: "Masti", file: "masti.webp", bg: "#110D3C" },
];

const RESORTS: Logo[] = [
  { name: "Naturoville Wellness Resort", file: "naturoville.png" },
  { name: "Naad Wellness", file: "naad-wellness.png", bg: "#110D3C" },
  { name: "The Rudraksh", file: "rudraksh.png" },
  { name: "Wabi Sabi Resorts", file: "wabi-sabi.jpg" },
  { name: "EBC Mussoorie", file: "ebc.jpg", bg: "#1A1A1A" },
  { name: "Riviera Resort Rishikesh", file: "Riviera.jpg" },
  { name: "Era Camps", file: "eracamp.png" },
  { name: "Corbett The Grand", file: "corbett-the-grand.png" },
  { name: "Arkaya Mukteshwar", file: "arkaya.png" },
  { name: "Northwind 57", file: "north-wind.png" },
  { name: "Saraaya Glamps", file: "saraaya.jpg" },
  { name: "Maira Resort", file: "maira.jpeg" },
  { name: "Colonel's Resort", file: "colonels-resort.png" },
  { name: "Nature on the Rocks", file: "nature-on-the-rocks.webp" },
  { name: "Aroha Palms", file: "arohapalms.png" },
  { name: "Dunagiri Retreat", file: "Dunagiri-Logo-Square.png" },
];

const HOTELS: Logo[] = [
  { name: "Hotel Green Castle", file: "Hotel-Green-Castle.jpg" },
  { name: "Tulip Inn Green Castle", file: "tulipInn.png" },
  { name: "Seasons Suites", file: "Season-suites.png" },
  { name: "Minimalist Hotels", file: "minimalist.png" },
  { name: "White Ridge Hotel", file: "white-ridge.png" },
  { name: "The Zion Hotel", file: "ZionHotel.png" },
  { name: "Umaid Palace", file: "umaid2.png" },
  { name: "Surya Bagh", file: "surbag.png" },
  { name: "One Off Hotels", file: "one-off.png" },
  { name: "Mahabir Palace", file: "mahabir-palace.png" },
  { name: "Hotel Awadh Vilas", file: "hotel-awadha-vilas.webp" },
  { name: "Swan Suites", file: "swansuites.png" },
  { name: "The Acacia Hotels", file: "acacia.png" },
  { name: "Allure Nainital", file: "ALLURE-NAINITAL-LOGO.png", bg: "#110D3C" },
  { name: "La Mount Ladakh", file: "la-mount.webp" },
  { name: "Grand de Europe", file: "deuropa.png" },
];

// Restaurant and café clients shown on the live restaurant pages.
const RESTAURANTS: Logo[] = [
  { name: "Chef Kenzo", file: "chefkenzo.png" },
  { name: "Desi Bar & Grill", file: "desi-bar-grill.png" },
  { name: "Spice Haven", file: "spice-haven.png" },
  { name: "D&G", file: "D&G-logo-03-1.png" },
  { name: "Burkey", file: "BURKEY-BLACK-LOGO-01.png" },
  { name: "THC", file: "thc.png" },
  { name: "Park Cafe", file: "Park Cafe.png" },
  { name: "The Chocolate Room", file: "chocolate-room.png" },
  { name: "Aquarium Island Cafe", file: "aquarium.jpg" },
  { name: "Eastern Spice", file: "eastrenspice.webp" },
];

// Travel, camping and adventure clients.
const TRAVEL: Logo[] = [
  { name: "Humrahi Travels", file: "HUMRAHI-TRAVELS-LOGO.png" },
  { name: "Tents & Trails", file: "tents&trails.png" },
  { name: "Era Camps", file: "eracamp.png" },
  { name: "Oak Climbing", file: "oak-climbing.png" },
];

const ORDER: Record<LogoSet, Logo[][]> = {
  international: [INTERNATIONAL, HOTELS, RESORTS],
  resorts: [RESORTS, INTERNATIONAL, HOTELS],
  hotels: [HOTELS, INTERNATIONAL, RESORTS],
  restaurants: [RESTAURANTS, INTERNATIONAL, HOTELS],
  travel: [TRAVEL, RESORTS, INTERNATIONAL, HOTELS],
  all: [HOTELS, RESORTS, INTERNATIONAL],
};

export function logosFor(set: LogoSet, count = 16) {
  const seen = new Set<string>();
  const out: { name: string; src: string; bg?: string }[] = [];
  for (const group of ORDER[set]) {
    for (const l of group) {
      if (out.length >= count) break;
      if (seen.has(l.file)) continue;
      seen.add(l.file);
      out.push({ name: l.name, src: encodeURI(`/clientsLogo/${l.file}`), bg: l.bg });
    }
  }
  return out;
}

/* ── How we work together (no prices) ─────────────────────────────────── */
// REVIEW: confirm these match how you sell.
export const ENGAGEMENTS = [
  {
    title: "Free growth plan",
    body: "We review your website, Google presence, ads, OTA listings and reviews, and send a written plan with priorities and a realistic target.",
  },
  {
    title: "Monthly growth retainer",
    body: "One team runs the channels in your plan — ads, SEO, social, OTA and CRM — with a monthly report and review call.",
  },
  {
    title: "Launch or recovery sprint",
    body: "An 8–12 week push for an opening, a relaunch or a slow season, focused on the fastest routes to enquiries.",
  },
];
