import type { ReactNode } from "react";

export type Integration = {
  icon: ReactNode;
  title: string;
  sub: string;
};

/** `.integ-grid` — integration tiles (Portals & Platforms page). */
export function IntegrationsGrid({ items }: { items: Integration[] }) {
  return (
    <div className="integ-grid">
      {items.map((it, i) => (
        <div className="integ reveal" data-d={(i % 3) + 1} key={it.title}>
          <span className="ii">{it.icon}</span>
          <span>
            <span className="t">{it.title}</span>
            <span className="s">{it.sub}</span>
          </span>
        </div>
      ))}
    </div>
  );
}
