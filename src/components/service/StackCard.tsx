import type { ReactNode } from "react";
import { TiltCard } from "@/components/ui/TiltCard";

export type StackLayer = {
  icon: ReactNode;
  title: string;
  sub: string;
  tools: string[];
};

/** The hero visual card on service pages (`.stack-card`), with tilt-on-hover. */
export function StackCard({ label, layers }: { label: string; layers: StackLayer[] }) {
  return (
    <TiltCard className="stack-card reveal tilt" aria-hidden="true">
      <span className="sc-label">{label}</span>
      {layers.map((l) => (
        <div className="stack-layer" key={l.title}>
          <span className="lic">{l.icon}</span>
          <span>
            <span className="lt">{l.title}</span>
            <span className="ls">{l.sub}</span>
          </span>
          <span className="tools">
            {l.tools.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </span>
        </div>
      ))}
    </TiltCard>
  );
}
