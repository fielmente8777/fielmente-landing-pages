import type { Tone } from "@/content/types";

/** Eyebrow + h2 (+ optional intro line) used at the top of most sections. */
export function Heading({
  eyebrow,
  title,
  text,
  tone,
  centered = true,
  className = "",
}: {
  eyebrow: string;
  title: string;
  text?: string;
  tone?: Tone;
  centered?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`mb-7 flex flex-col gap-2.5 ${centered ? "items-center text-center" : ""} ${className}`}
    >
      <span
        className={`font-body text-[12px]/[1.2] font-bold tracking-[.16em] uppercase ${tone === "dark" ? "text-sky" : "text-rust"}`}
      >
        {eyebrow}
      </span>
      <h2 className="text-[clamp(28px,6.6vw,42px)]">{title}</h2>
      {text && <p className="max-w-[620px] text-[17px] text-muted">{text}</p>}
    </div>
  );
}
