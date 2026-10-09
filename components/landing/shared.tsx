import type { CSSProperties, ReactNode } from "react";
import type { Feature, Tone } from "@/content/types";

/** Page-width wrapper (max 1240px, 20px gutters; 32px from 768px). */
export const WRAP = "mx-auto max-w-[1240px] px-5 md:px-8";

export function sectionClass(tone?: Tone) {
  return `py-14 dt:py-22 ${tone === "alt" ? "bg-mist" : tone === "dark" ? "bg-ink text-white" : ""}`;
}

/** Delay index for items inside a `.stagger` group (cycles every 8 items). */
export function staggerIndex(i: number) {
  return { "--i": i % 8 } as CSSProperties;
}

/** Centered row of call-to-action buttons; full width on phones. */
export function Ctas({ children, startOnDesktop = false }: { children: ReactNode; startOnDesktop?: boolean }) {
  return (
    <div
      className={`reveal mt-8 flex flex-wrap justify-center gap-3 max-xs:*:w-full ${startOnDesktop ? "dt:justify-start" : ""}`}
    >
      {children}
    </div>
  );
}

export function Features({
  items,
  wide = false,
  onWhite = false,
  className = "",
}: {
  items: Feature[];
  /** Four columns from 768px. */
  wide?: boolean;
  /** White cards (used on grey sections). */
  onWhite?: boolean;
  className?: string;
}) {
  return (
    <div className={`stagger grid grid-cols-2 gap-3 ${wide ? "md:grid-cols-4" : ""} ${className}`}>
      {items.map((item, i) => (
        <div key={item.title} style={staggerIndex(i)} className={`rounded-2xl p-4 ${onWhite ? "bg-white" : "bg-mist"}`}>
          <b className="block text-[16px]/[1.25]">{item.title}</b>
          <span className="mt-1 block text-[14px] text-muted">{item.text}</span>
        </div>
      ))}
    </div>
  );
}
