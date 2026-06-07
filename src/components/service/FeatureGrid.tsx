import type { ReactNode } from "react";

export type Feature = {
  icon: ReactNode;
  title: string;
  body: string;
};

/** `.feat-grid` — three-up feature cards used on service pages. */
export function FeatureGrid({ items }: { items: Feature[] }) {
  return (
    <div className="feat-grid">
      {items.map((f, i) => (
        <article className="feat reveal" data-d={(i % 3) + 1} key={f.title}>
          <div className="fic">{f.icon}</div>
          <h3>{f.title}</h3>
          <p>{f.body}</p>
        </article>
      ))}
    </div>
  );
}
