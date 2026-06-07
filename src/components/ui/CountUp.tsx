"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  to: number;
  suffix?: string;
  className?: string;
  /** Duration in ms (matches the reference's 1400ms ease-out). */
  duration?: number;
};

/**
 * Animated number that counts up from 0 → `to` the first time it scrolls into
 * view. SSR/first paint renders the final value (static-safe, no layout shift,
 * correct for no-JS); the animation only runs client-side when motion is
 * allowed, mirroring gwz.js (cubic ease-out, count once).
 */
export function CountUp({ to, suffix = "", className, duration = 1400 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(to);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return; // keep final value

    const run = () => {
      if (started.current) return;
      started.current = true;
      const t0 = performance.now();
      const step = (now: number) => {
        const p = Math.min(1, (now - t0) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        setValue(Math.round(to * eased));
        if (p < 1) requestAnimationFrame(step);
        else setValue(to);
      };
      setValue(0);
      requestAnimationFrame(step);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            run();
            io.disconnect();
          }
        });
      },
      { rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);

  return (
    <span ref={ref} className={className}>
      {value}
      {suffix}
    </span>
  );
}
