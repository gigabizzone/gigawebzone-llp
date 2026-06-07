"use client";

import { useState, type ReactNode } from "react";

export type FaqItem = { q: string; a: ReactNode };

/** `.faq` accordion (single-open). Open state toggles the `.open` class that
 *  gwz-pages.css uses to reveal the answer and flip the +/− icon. */
export function FAQ({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="faq">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div className={`faq-item reveal${isOpen ? " open" : ""}`} key={it.q}>
            <button
              className="faq-q"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span>{it.q}</span>
              <span className="ico" />
            </button>
            <div className="faq-a">{it.a}</div>
          </div>
        );
      })}
    </div>
  );
}
