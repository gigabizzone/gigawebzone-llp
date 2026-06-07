"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "@/components/icons";
import { CONSULT_HREF } from "@/lib/site";
import { Breadcrumb } from "./Breadcrumb";
import { MiniProof, type ProofItem } from "./MiniProof";

type PageHeroProps = {
  current: string;
  eyebrow: string;
  title: ReactNode;
  lead: ReactNode;
  secondaryHref: string;
  secondaryLabel: string;
  proof?: ProofItem[];
  visual: ReactNode;
  primaryLabel?: string;
};

/**
 * Shared inner-page hero (`.page-hero`): breadcrumb + eyebrow + headline +
 * lead + CTAs + mini-proof on the left, a visual card on the right. The aurora
 * layer drifts with the pointer (ported from gwz-page.js, scoped + reduced-
 * motion-safe).
 */
export function PageHero({
  current,
  eyebrow,
  title,
  lead,
  secondaryHref,
  secondaryLabel,
  proof,
  visual,
  primaryLabel = "Get a Free Consultation",
}: PageHeroProps) {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const parallaxEls = Array.from(
      root.querySelectorAll<HTMLElement>("[data-parallax]")
    );
    let raf = 0;
    let pending = false;
    const pointer = { x: 0, y: 0 };

    const update = () => {
      pending = false;
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (pointer.x - cx) / cx;
      const dy = (pointer.y - cy) / cy;
      parallaxEls.forEach((el) => {
        const f = parseFloat(el.dataset.parallax || "0") * 100;
        el.style.transform = `translate3d(${(dx * f).toFixed(1)}px,${(
          dy * f
        ).toFixed(1)}px,0)`;
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
  }, []);

  return (
    <section className="page-hero" ref={rootRef}>
      <div className="hero-bg">
        <div className="hero-grid-lines" />
        <div className="hero-aurora" data-parallax="0.02">
          <div className="hero-glow g1" />
          <div className="hero-glow g2" />
          <div className="hero-glow g3" />
        </div>
      </div>
      <div className="wrap inner">
        <div>
          <Breadcrumb current={current} />
          <span className="eyebrow reveal" data-d="1" style={{ marginTop: 18 }}>
            {eyebrow}
          </span>
          <h1 className="reveal" data-d="1">
            {title}
          </h1>
          <p className="lead reveal" data-d="2">
            {lead}
          </p>
          <div className="hero-ctas reveal" data-d="3">
            <Button href={CONSULT_HREF} variant="primary" size="lg">
              {primaryLabel}
              <ArrowRight />
            </Button>
            <Button href={secondaryHref} variant="ghost" size="lg">
              {secondaryLabel}
            </Button>
          </div>
          {proof && proof.length > 0 ? <MiniProof items={proof} /> : null}
        </div>
        {visual}
      </div>
    </section>
  );
}
