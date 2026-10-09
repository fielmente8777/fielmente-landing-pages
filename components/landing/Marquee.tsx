import type { CSSProperties, ReactNode } from "react";

/**
 * Endless horizontal scroller. Items are rendered twice so the strip can loop;
 * the copy is hidden from screen readers. Pauses on hover.
 */
export function Marquee<T>({
  items,
  render,
  reverse = false,
}: {
  items: T[];
  /** Render one item; `copy` is true for the duplicated set (use empty alt text). */
  render: (item: T, copy: boolean) => ReactNode;
  reverse?: boolean;
}) {
  const duration = `${Math.max(items.length * 3.2, 20)}s`;
  return (
    <div className="group/mq fade-edges overflow-hidden">
      <div
        className={`flex w-max animate-marquee items-center group-hover/mq:[animation-play-state:paused] ${reverse ? "[animation-direction:reverse]" : ""}`}
        style={{ "--dur": duration } as CSSProperties}
      >
        {items.map((item) => render(item, false))}
        {items.map((item) => render(item, true))}
      </div>
    </div>
  );
}
