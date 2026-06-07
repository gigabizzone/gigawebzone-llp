import Link from "next/link";
import type { ReactNode } from "react";
import { TiltCard } from "@/components/ui/TiltCard";
import { ArrowRight } from "@/components/icons";

export type PortalType = {
  num: string;
  icon: ReactNode;
  title: string;
  body: string;
  chips: string[];
  who: string;
  linkLabel: string;
  exampleName: string;
  exampleEx: string;
  ph: string;
};

/** `.ptypes` — alternating content/visual rows, one per portal type. */
export function PortalTypes({ types }: { types: PortalType[] }) {
  return (
    <div className="ptypes">
      {types.map((t) => (
        <article className="ptype reveal" key={t.num}>
          <div className="pt-content">
            <span className="pt-num">{t.num}</span>
            <div className="pt-icon">{t.icon}</div>
            <h3>{t.title}</h3>
            <p>{t.body}</p>
            <div className="pt-chips">
              {t.chips.map((c) => (
                <span key={c}>{c}</span>
              ))}
            </div>
            <p className="pt-who">
              <strong>Who it&apos;s for:</strong> {t.who}
            </p>
            <Link className="arrow-link" href="/portfolio">
              {t.linkLabel}
              <ArrowRight />
            </Link>
          </div>
          <TiltCard className="pt-visual reveal tilt" data-d="1">
            <div className="pt-card">
              <div className="shot ph" data-ph={t.ph} />
              <div className="pc-meta">
                <span className="nm">{t.exampleName}</span>
                <span className="ex">{t.exampleEx}</span>
              </div>
            </div>
          </TiltCard>
        </article>
      ))}
    </div>
  );
}
