import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { TiltCard } from "@/components/ui/TiltCard";
import { ProjectShot } from "@/components/ui/ProjectShot";
import { ArrowRight } from "@/components/icons";

export type WorkItem = {
  tags: string[];
  title: string;
  desc: string;
  domain: string;
};

type RelatedWorkProps = {
  id?: string;
  tint?: boolean;
  eyebrow: string;
  title: ReactNode;
  titleStyle?: CSSProperties;
  lead?: string;
  items: WorkItem[];
};

/** `.work-head` + `.pf-grid` strip of related portfolio cards. */
export function RelatedWork({
  id,
  tint,
  eyebrow,
  title,
  titleStyle,
  lead,
  items,
}: RelatedWorkProps) {
  return (
    <section className={`section${tint ? " tint" : ""}`} id={id}>
      <div className="wrap">
        <div className="work-head reveal">
          <div>
            <span className="eyebrow">{eyebrow}</span>
            <h2 style={titleStyle}>{title}</h2>
            {lead ? (
              <p style={{ color: "var(--text-2)", fontSize: 16, marginTop: 12, maxWidth: 620 }}>
                {lead}
              </p>
            ) : null}
          </div>
          <Link className="arrow-link" href="/portfolio">
            View full portfolio
            <ArrowRight />
          </Link>
        </div>
        <div className="pf-grid">
          {items.map((w, i) => (
            <TiltCard className="pf-card reveal tilt" data-d={i + 1} key={w.title}>
              <ProjectShot
                domain={w.domain}
                alt={`${w.title} website screenshot`}
                sizes="(max-width: 620px) 100vw, (max-width: 920px) 33vw, 360px"
              />
              <div className="meta">
                <div className="tags">
                  {w.tags.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
                <h3>{w.title}</h3>
                <p className="desc">{w.desc}</p>
                <Link className="arrow-link go" href="/portfolio">
                  View
                  <ArrowRight />
                </Link>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
