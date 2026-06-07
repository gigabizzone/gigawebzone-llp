import type { CSSProperties, ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "@/components/icons";

type CommitBandProps = {
  variant?: "default" | "product";
  icon: ReactNode;
  /** Small uppercase tag above the title (product variant). */
  tag?: string;
  title: string;
  body: ReactNode;
  /** The dashed "terms to be finalized" placeholder (On-Time Commitment). */
  tbd?: boolean;
  /** Italic clarifying note below the body. */
  note?: string;
  ctaLabel: string;
  ctaHref: string;
  /** Single-column layout (used for the WordPress white-label card). */
  singleColumn?: boolean;
  ctaStyle?: CSSProperties;
};

/**
 * The On-Time Delivery Commitment band and the visually-distinct "product"
 * variant (branded client app & CRM, white-label WordPress). The On-Time
 * Commitment ships with an explicit placeholder until terms are finalized
 * (PRD §12).
 */
export function CommitBand({
  variant = "default",
  icon,
  tag,
  title,
  body,
  tbd,
  note,
  ctaLabel,
  ctaHref,
  singleColumn,
  ctaStyle,
}: CommitBandProps) {
  return (
    <div
      className={`commit reveal${variant === "product" ? " product" : ""}`}
      style={
        singleColumn
          ? { gridTemplateColumns: "1fr", textAlign: "left" }
          : undefined
      }
    >
      <div className="shield">{icon}</div>
      <div>
        {tag ? <span className="ptag">{tag}</span> : null}
        <h3>{title}</h3>
        <p>{body}</p>
        {tbd ? (
          <span className="tbd">
            ⚠ Placeholder — exact terms (scope, definition of &quot;on time&quot;, remedy)
            to be finalized before publishing
          </span>
        ) : null}
        {note ? <span className="note">{note}</span> : null}
      </div>
      <Button
        href={ctaHref}
        variant="primary"
        size={singleColumn ? "md" : "lg"}
        className="commit-cta"
        style={ctaStyle}
      >
        {ctaLabel}
        <ArrowRight />
      </Button>
    </div>
  );
}
