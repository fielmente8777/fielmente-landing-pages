"use client";

import { useEffect } from "react";
import { pushEvent } from "@/lib/analytics";

/**
 * Page-wide behaviour carried over from the original a.js:
 * scroll reveal, header shadow, the phone CTA bar, smooth scroll to the form,
 * and click tracking for Google Tag Manager.
 */
export function PageEffects() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hasIO = "IntersectionObserver" in window;
    const observers: IntersectionObserver[] = [];

    // Reveal .reveal / .stagger blocks as they scroll into view
    // (stagger children carry their delay index in --i, see staggerIndex()).
    const revealables = document.querySelectorAll(".reveal, .stagger");
    if (hasIO) {
      const reveal = new IntersectionObserver(
        (entries) =>
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in");
              reveal.unobserve(entry.target);
            }
          }),
        { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
      );
      revealables.forEach((el) => reveal.observe(el));
      observers.push(reveal);
    } else {
      revealables.forEach((el) => el.classList.add("in"));
    }

    // Header shadow after scrolling; phone CTA bar only while the form is off screen.
    const header = document.querySelector("[data-header]");
    const bar = document.querySelector("[data-mobile-bar]");
    const form = document.getElementById("form");
    let formVisible = true;
    const onScroll = () => {
      header?.classList.toggle("s", window.scrollY > 8);
      bar?.classList.toggle("on", !formVisible && window.scrollY > 120);
    };
    if (form && hasIO) {
      const watchForm = new IntersectionObserver(
        ([entry]) => {
          formVisible = entry.isIntersecting;
          onScroll();
        },
        { threshold: 0.15 },
      );
      watchForm.observe(form);
      observers.push(watchForm);
    } else {
      formVisible = false;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // CTA clicks: scroll to the form and flash it; tracking events for GTM.
    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest?.("a");
      if (!link) return;
      const href = link.getAttribute("href") || "";
      if (href === "#form") {
        event.preventDefault();
        pushEvent({ event: "cta_click", cta_text: (link.textContent || "").trim().slice(0, 40) });
        const target = document.getElementById("form");
        if (target) {
          target.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "center" });
          target.classList.remove("hl");
          void target.offsetWidth; // restart the highlight animation
          target.classList.add("hl");
        }
      } else if (href.startsWith("tel:")) {
        pushEvent({ event: "click_call" });
      } else if (href.includes("wa.me")) {
        pushEvent({ event: "click_whatsapp" });
      }
    };
    document.addEventListener("click", onClick);

    return () => {
      observers.forEach((o) => o.disconnect());
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", onClick);
    };
  }, []);

  return null;
}
