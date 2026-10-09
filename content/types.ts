export type Tone = "alt" | "dark";

export type ImageRef = { src: string; alt: string };
export type Logo = ImageRef & { height?: number };
export type Feature = { title: string; text: string };

export type PartnersSection = {
  type: "partners";
  label: string;
  logos: Logo[];
};

export type GalleryItem = ImageRef & {
  caption?: string;
  /** Browser-frame card for website screenshots. */
  kind?: "site";
  /** 4:3 photo instead of the default 4:5. */
  wide?: boolean;
};

export type GallerySection = {
  type: "gallery";
  tone?: Tone;
  eyebrow: string;
  title: string;
  layout: "default" | "duo" | "three";
  items: GalleryItem[];
  features?: Feature[];
  cta: string;
};

export type Service = {
  image: string;
  title: string;
  note: string;
  /** Grey note instead of the red highlight. */
  muted: boolean;
};

export type ServicesSection = {
  type: "services";
  tone?: Tone;
  eyebrow: string;
  title: string;
  text?: string;
  items: Service[];
  /** Show the "Powered by Eazotel" banner. */
  eazotel: boolean;
};

export type StepsSection = {
  type: "steps";
  /** Primary button label; defaults to "Start with a free audit". */
  cta?: string;
};

export type Stat = { value: string; label: string; countUp: boolean };

export type StatsSection = {
  type: "stats";
  stats: Stat[];
  cta: string;
};

export type SplitSection = {
  type: "split";
  tone?: Tone;
  image: ImageRef;
  eyebrow: string;
  title: string;
  features: Feature[];
  cta: string;
};

export type MapSection = {
  type: "map";
  tone?: Tone;
  eyebrow: string;
  title: string;
  text?: string;
  cta: string;
  image: ImageRef;
};

export type ClientsSection = {
  type: "clients";
  eyebrow: string;
  title: string;
  rows: Logo[][];
  cta: string;
};

export type Section =
  | PartnersSection
  | GallerySection
  | ServicesSection
  | StepsSection
  | StatsSection
  | SplitSection
  | MapSection
  | ClientsSection;

export type LandingPage = {
  slug: string;
  /** Full <title>; the part before " | " is also the form name sent to GTM and the CRM. */
  title: string;
  description: string;
  /** Used in every WhatsApp link: "Hi Fielmente, I'm interested in {waTopic}. Can we talk?" */
  waTopic: string;
  headerCta: string;
  mobileCta: string;
  hero: {
    image: string;
    tag: string;
    title: string;
    /** Highlighted (orange) end of the headline. */
    titleAccent: string;
    subtitle: string;
    chips: string[];
    badges?: ImageRef[];
    form: { title: string; button: string };
  };
  sections: Section[];
  finalImage: string;
};
