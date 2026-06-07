import type { ReactNode } from "react";

export type UseCase = {
  icon: ReactNode;
  label: string;
  /** Accent-highlighted tile (e.g. the WordPress "AMC" card). */
  highlight?: boolean;
};

/** `.uc-grid` of icon + label tiles (App use-cases, WordPress care plans). */
export function UseCaseGrid({ items }: { items: UseCase[] }) {
  return (
    <div className="uc-grid">
      {items.map((u, i) => (
        <div
          className="uc reveal"
          data-d={(i % 3) + 1}
          key={u.label}
          style={
            u.highlight
              ? { borderColor: "var(--accent)", background: "var(--accent-tint)" }
              : undefined
          }
        >
          <span
            className="uci"
            style={u.highlight ? { background: "var(--accent)", color: "#fff" } : undefined}
          >
            {u.icon}
          </span>
          {u.label}
        </div>
      ))}
    </div>
  );
}
