export type IconName = "ph" | "wa" | "ar";

/** One inline sprite per page; icons reference it with <use>. */
export function IconSprite() {
  return (
    <svg className="absolute h-0 w-0 overflow-hidden" aria-hidden="true">
      <symbol id="i-ph" viewBox="0 0 24 24">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
      </symbol>
      <symbol id="i-wa" viewBox="0 0 24 24">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </symbol>
      <symbol id="i-ar" viewBox="0 0 24 24">
        <path d="M5 12h14M13 6l6 6-6 6" />
      </symbol>
    </svg>
  );
}

/**
 * Stroke icon from the sprite. `className` sets the size (default 20px) and any
 * extra behaviour such as hover motion.
 */
export function Icon({ name, className = "h-5 w-5" }: { name: IconName; className?: string }) {
  return (
    <svg
      className={`flex-none fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round] ${className}`}
      aria-hidden="true"
    >
      <use href={`#i-${name}`} />
    </svg>
  );
}
