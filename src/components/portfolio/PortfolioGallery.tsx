"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  PROJECTS,
  PORTFOLIO_FILTERS,
  projectUrl,
  countFor,
  type PortfolioCat,
} from "@/lib/data/projects";

type Filter = PortfolioCat | "all";

export function PortfolioGallery() {
  const [filter, setFilter] = useState<Filter>("all");

  const shown = useMemo(
    () => (filter === "all" ? PROJECTS.length : countFor(filter)),
    [filter]
  );

  return (
    <>
      <div className="pf-filter reveal" role="tablist" aria-label="Filter projects">
        {PORTFOLIO_FILTERS.map((f) => (
          <button
            key={f.key}
            role="tab"
            className={filter === f.key ? "active" : ""}
            aria-selected={filter === f.key}
            onClick={() => setFilter(f.key)}
          >
            {f.label}
            <span className="c">{countFor(f.key)}</span>
          </button>
        ))}
      </div>

      <div className="gallery">
        {PROJECTS.map((p) => {
          const hidden = filter !== "all" && p.cat !== filter;
          const tags = p.slug ? ["Case study", ...p.tags] : p.tags;
          const inner = (
            <>
              <div className="shot ph" data-ph={p.domain} />
              <div className="gm">
                <div className="gtags">
                  {tags.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
                <h3>{p.name}</h3>
                <span className="gurl">{p.domain} →</span>
              </div>
            </>
          );
          return p.slug ? (
            <Link key={p.domain} className={`gcard${hidden ? " hide" : ""}`} href={`/portfolio/${p.slug}`}>
              {inner}
            </Link>
          ) : (
            <a
              key={p.domain}
              className={`gcard${hidden ? " hide" : ""}`}
              href={projectUrl(p.domain)}
              target="_blank"
              rel="noopener noreferrer"
            >
              {inner}
            </a>
          );
        })}
      </div>
      <div className="pf-count">Showing {shown} of {PROJECTS.length} projects</div>
    </>
  );
}
