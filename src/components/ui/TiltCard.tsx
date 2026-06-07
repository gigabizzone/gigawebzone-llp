"use client";

import { useRef, type ReactNode } from "react";

type TiltCardProps = {
  className?: string;
  children: ReactNode;
};

/**
 * Pointer-reactive card (the `.tilt` behavior from gwz.js). Always updates the
 * `--mx/--my` vars that drive the radial hover glow; adds the subtle 3D tilt
 * only when motion is allowed. Resets on leave.
 */
export function TiltCard({ className, children }: TiltCardProps) {
  const ref = useRef<HTMLElement>(null);

  const onMove = (e: React.PointerEvent<HTMLElement>) => {
    const card = ref.current;
    if (!card) return;
    const r = card.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    card.style.setProperty("--mx", `${px * 100}%`);
    card.style.setProperty("--my", `${py * 100}%`);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    card.style.transform = `perspective(900px) rotateY(${((px - 0.5) * 6).toFixed(
      2
    )}deg) rotateX(${((0.5 - py) * 6).toFixed(2)}deg) translateY(-4px)`;
  };

  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  return (
    <article ref={ref} className={className} onPointerMove={onMove} onPointerLeave={onLeave}>
      {children}
    </article>
  );
}
