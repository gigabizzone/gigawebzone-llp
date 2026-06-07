import type { ReactNode } from "react";
import Link from "next/link";

/** Shared shell for the Privacy / Terms pages: simple hero + readable prose. */
export function LegalLayout({
  title,
  updated,
  intro,
  children,
}: {
  title: string;
  updated: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <>
      <section className="page-hero">
        <div className="hero-bg">
          <div className="hero-grid-lines" />
          <div className="hero-aurora">
            <div className="hero-glow g1" />
            <div className="hero-glow g2" />
            <div className="hero-glow g3" />
          </div>
        </div>
        <div className="wrap" style={{ position: "relative", zIndex: 2, maxWidth: 880 }}>
          <nav className="breadcrumb reveal" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span className="cur">{title}</span>
          </nav>
          <span className="eyebrow reveal" data-d="1" style={{ marginTop: 18 }}>
            Legal
          </span>
          <h1 className="reveal" data-d="1">{title}</h1>
          <p className="lead reveal" data-d="2">{intro}</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="legal reveal">
            <p className="updated">Last updated: {updated}</p>
            {children}
          </div>
        </div>
      </section>
    </>
  );
}
