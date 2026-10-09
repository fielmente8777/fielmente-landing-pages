"use client";

import { useEffect, useRef, useState } from "react";

const NUMBER = /^(\D*?)(\d[\d,]*\.?\d*)(.*)$/;

/**
 * Shows `value` (e.g. "500+", "+38%", "4.8★") and counts up from zero when its
 * stats group scrolls into view. Server HTML always contains the final value.
 */
export function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLElement>(null);
  const [text, setText] = useState(value);

  useEffect(() => {
    const el = ref.current;
    const match = value.match(NUMBER);
    if (!el || !match || !("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const [, before, number, after] = match;
    const target = parseFloat(number.replace(/,/g, ""));
    const decimals = (number.split(".")[1] || "").length;
    const grouped = number.includes(",");
    let frame = 0;

    const run = () => {
      let start = 0;
      setText(before + (0).toFixed(decimals) + after);
      const tick = (time: number) => {
        if (!start) start = time;
        const k = Math.min((time - start) / 1600, 1);
        const v = target * (1 - Math.pow(1 - k, 3));
        setText(before + (grouped ? Math.round(v).toLocaleString("en-IN") : v.toFixed(decimals)) + after);
        if (k < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };

    // Start together with the group's reveal, like the original page.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          run();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    observer.observe(el.closest(".stagger") ?? el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return (
    <b ref={ref} className={className}>
      {text}
    </b>
  );
}
