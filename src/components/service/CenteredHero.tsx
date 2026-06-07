"use client";

import { useRef, type ReactNode } from "react";
import Link from "next/link";
import { useAuroraParallax } from "@/lib/hooks";
import { CountUp } from "@/components/ui/CountUp";
import type { ProofItem } from "./MiniProof";

type CenteredHeroProps = {
  current: string;
  eyebrow: string;
  title: ReactNode;
  lead: string;
  /** Optional mini-proof counters; omit for a lean hero (e.g. Contact). */
  proof?: ProofItem[];
  /** Optional CTA row (rendered below the lead). */
  ctas?: ReactNode;
};

/**
 * Centered variant of the inner-page hero — used by Industries and Portfolio.
 * Same aurora background as the service PageHero, but single-column/centered.
 */
export function CenteredHero({ current, eyebrow, title, lead, proof, ctas }: CenteredHeroProps) {
  const hasProof = proof && proof.length > 0;
  const rootRef = useRef<HTMLElement>(null);
  useAuroraParallax(rootRef);

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
      <div className="wrap" style={{ position: "relative", zIndex: 2, textAlign: "center", maxWidth: 880 }}>
        <nav className="breadcrumb reveal" style={{ justifyContent: "center" }} aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span className="sep">/</span>
          <span className="cur">{current}</span>
        </nav>
        <span className="eyebrow reveal" data-d="1" style={{ marginTop: 18, justifyContent: "center" }}>
          {eyebrow}
        </span>
        <h1 className="reveal" data-d="1">
          {title}
        </h1>
        <p className="lead reveal" data-d="2" style={{ marginLeft: "auto", marginRight: "auto" }}>
          {lead}
        </p>
        {ctas}
        {hasProof ? (
          <div
            className="mini-proof reveal"
            data-d="4"
            style={{ justifyContent: "center", borderTop: "none" }}
          >
            {proof!.map((it) => (
              <div className="mp" key={it.label}>
                {it.count !== undefined ? (
                  <CountUp className="mpn" to={it.count} suffix={it.suffix ?? ""} />
                ) : (
                  <span className="mpn">{it.text}</span>
                )}
                <span className="mpl">{it.label}</span>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
