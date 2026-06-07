"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";
import { CountUp } from "@/components/ui/CountUp";
import { ArrowRight, Check } from "@/components/icons";
import { CONSULT_HREF } from "@/lib/site";

/**
 * Homepage hero — Variant B (split editorial + animated 3D card stack), the
 * shipped default from the design reference (`data-hero="b"` on <body>).
 *
 * Pointer + scroll parallax is ported from gwz.js, scoped to this section's
 * DOM: the aurora layer drifts with the pointer ([data-parallax]) and the 3D
 * stage tilts while its layers translate on the Z axis ([data-depth]). All of
 * it is gated on reduced-motion (the continuous CSS animations are gated by the
 * `anim` class set in Providers).
 */
export function Hero() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const parallaxEls = Array.from(
      root.querySelectorAll<HTMLElement>("[data-parallax]")
    );
    const stageInner = root.querySelector<HTMLElement>("#stage3dInner");
    const depthEls = stageInner
      ? Array.from(stageInner.querySelectorAll<HTMLElement>("[data-depth]"))
      : [];

    const pointer = { x: 0, y: 0 };
    let raf = 0;
    let pending = false;

    const update = () => {
      pending = false;
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (pointer.x - cx) / cx;
      const dy = (pointer.y - cy) / cy;
      const sy = window.scrollY;

      parallaxEls.forEach((el) => {
        const f = parseFloat(el.dataset.parallax || "0") * 100;
        const sf = parseFloat(el.dataset.scroll || "0");
        el.style.transform = `translate3d(${(dx * f).toFixed(1)}px,${(
          dy * f -
          sy * sf
        ).toFixed(1)}px,0)`;
      });

      if (stageInner && stageInner.offsetParent !== null) {
        stageInner.style.transform = `rotateY(${(dx * 7).toFixed(
          2
        )}deg) rotateX(${(-dy * 6).toFixed(2)}deg)`;
        depthEls.forEach((el) => {
          const d = parseFloat(el.dataset.depth || "0");
          el.style.transform = `translateZ(${d}px) translate3d(${(
            dx *
            d *
            0.25
          ).toFixed(1)}px,${(dy * d * 0.25).toFixed(1)}px,0)`;
        });
      }
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
    window.addEventListener("scroll", queue, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("scroll", queue);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="hero" ref={rootRef}>
      <div className="hero-bg">
        <div className="hero-grid-lines" />
        <div className="hero-aurora" data-parallax="0.02">
          <div className="hero-glow g1" />
          <div className="hero-glow g2" />
          <div className="hero-glow g3" />
        </div>
      </div>

      {/* Variant B : split editorial + 3D stack */}
      <div className="hero-variant v-b">
        <div className="wrap hero-inner">
          <div className="hero-copy">
            <span className="pill reveal">
              <span className="dot" />
              Full-Stack Engineering · Pune, India
            </span>
            <h1 className="reveal" data-d="1">
              Your full-stack <span className="grad-text">digital partner</span>, not a
              template shop.
            </h1>
            <p className="hero-sub reveal" data-d="2">
              We design, develop and ship web apps, mobile apps and complex portals —
              engineered to perform and built to convert. 400+ businesses already trust
              the work.
            </p>
            <div className="hero-ctas reveal" data-d="3">
              <Button href={CONSULT_HREF} variant="primary" size="lg">
                Get a Free Consultation
                <ArrowRight />
              </Button>
              <Button href="#services" variant="ghost" size="lg">
                Explore services
              </Button>
            </div>
            <div className="hero-trust reveal" data-d="4">
              <Check />
              Free 30-min consultation · No obligation · We reply within 1 business day
            </div>
          </div>

          <div className="stage3d reveal" data-d="2" id="stage3d">
            <div className="stage3d-inner" id="stage3dInner">
              <div className="card3d window" data-depth="20">
                <div className="win-bar">
                  <i />
                  <i />
                  <i />
                </div>
                <div className="win-body">
                  <div className="skeleton line w-50" />
                  <div className="skeleton block" />
                  <div className="win-row2">
                    <div className="skeleton block" />
                    <div className="skeleton block" />
                  </div>
                  <div className="skeleton line w-90" />
                  <div className="skeleton line w-70" />
                  <div className="win-pill" />
                </div>
              </div>
              <div className="float-card fc1" data-depth="55">
                <span className="ic" style={{ background: "var(--accent)" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </span>
                <span>
                  <small>PERFORMANCE</small>98 Lighthouse
                </span>
              </div>
              <div className="float-card fc2" data-depth="70">
                <span className="ic" style={{ background: "var(--g-pink)" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 3v18h18" />
                    <path d="M7 14l4-4 3 3 5-6" />
                  </svg>
                </span>
                <span>
                  <small>CONVERSIONS</small>+38% avg lift
                </span>
              </div>
              <div className="mark-badge" data-depth="40" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 8l-4 4 4 4M17 8l4 4-4 4M14 4l-4 16" />
                </svg>
              </div>
            </div>
          </div>

          <div className="cred reveal" data-d="4">
            <div className="item">
              <CountUp className="num" to={400} suffix="+" />
              <span className="lbl">businesses served</span>
            </div>
            <div className="sep" />
            <div className="item">
              <CountUp className="num" to={15} suffix="+" />
              <span className="lbl">years experience</span>
            </div>
            <div className="sep" />
            <div className="item">
              <span className="num">DPIIT</span>
              <span className="lbl">recognised startup</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
