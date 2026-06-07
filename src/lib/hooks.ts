"use client";

import { useEffect, useState, type RefObject } from "react";

/**
 * Pointer-driven drift for the hero aurora layer ([data-parallax]), scoped to
 * the given root element. No-op under reduced motion. Ported from gwz-page.js.
 */
export function useAuroraParallax(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const els = Array.from(root.querySelectorAll<HTMLElement>("[data-parallax]"));
    let raf = 0;
    let pending = false;
    const pointer = { x: 0, y: 0 };

    const update = () => {
      pending = false;
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (pointer.x - cx) / cx;
      const dy = (pointer.y - cy) / cy;
      els.forEach((el) => {
        const f = parseFloat(el.dataset.parallax || "0") * 100;
        el.style.transform = `translate3d(${(dx * f).toFixed(1)}px,${(dy * f).toFixed(1)}px,0)`;
      });
    };
    const queue = () => {
      if (!pending) {
        pending = true;
        raf = requestAnimationFrame(update);
      }
    };
    const onPointer = (e: PointerEvent) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      queue();
    };
    window.addEventListener("pointermove", onPointer, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onPointer);
      cancelAnimationFrame(raf);
    };
  }, [ref]);
}

/** True once the page has scrolled past `threshold` px (drives header.scrolled). */
export function useScrolled(threshold = 12): boolean {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
}

/** Tracks the user's reduced-motion preference, reactively. */
export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);
  return reduced;
}
