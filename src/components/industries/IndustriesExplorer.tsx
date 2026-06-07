"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "@/components/icons";
import { INDUSTRIES } from "@/lib/data/industries";

const Minus = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round">
    <path d="M5 12h14" />
  </svg>
);

export function IndustriesExplorer() {
  const [active, setActive] = useState(INDUSTRIES[0].key);

  return (
    <div className="ind-layout">
      <div className="ind-list reveal" role="tablist" aria-label="Industries">
        {INDUSTRIES.map((ind) => (
          <button
            key={ind.key}
            className={`ind-tab${active === ind.key ? " active" : ""}`}
            role="tab"
            aria-selected={active === ind.key}
            onClick={() => setActive(ind.key)}
          >
            <span className="ti">{ind.icon}</span>
            {ind.tab}
            <span className="tc">{ind.count}</span>
          </button>
        ))}
      </div>

      <div className="ind-panels">
        {INDUSTRIES.map((ind) => (
          <div
            key={ind.key}
            className={`ind-detail${active === ind.key ? " active" : ""}`}
            role="tabpanel"
          >
            <div className="id-head">
              <h3>{ind.title}</h3>
              <p>{ind.intro}</p>
            </div>

            <div className="id-section">
              <div className="id-label">Challenges we solve</div>
              <div className="id-pains">
                {ind.pains.map((pain) => (
                  <div className="id-pain" key={pain}>
                    <span className="pi">
                      <Minus />
                    </span>
                    {pain}
                  </div>
                ))}
              </div>
            </div>

            <div className="id-section">
              <div className="id-label">What we build</div>
              <div className="id-caps">
                {ind.caps.map((c) => (
                  <span key={c}>{c}</span>
                ))}
              </div>
            </div>

            <div className="id-section">
              <div className="id-label">Selected work</div>
              <div className="id-projects">
                {ind.projects.map((p) => (
                  <div className="id-proj" key={p.domain}>
                    <div className="shot ph" data-ph={p.domain} />
                    <div className="pm">
                      <span className="n">{p.name}</span>
                      <span className="t">{p.tag}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {ind.quote ? (
              <div className="id-quote">
                <blockquote>&ldquo;{ind.quote.text}&rdquo;</blockquote>
                <div className="who">
                  <span className="av">{ind.quote.initials}</span>
                  <span>
                    <span className="nm">{ind.quote.name}</span>
                    <span className="ti">{ind.quote.title}</span>
                  </span>
                </div>
              </div>
            ) : null}
            {ind.proof ? <p className="id-proof">{ind.proof}</p> : null}

            <Button href="#contact" variant="primary" className="id-cta">
              {ind.ctaLabel}
              <ArrowRight />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
