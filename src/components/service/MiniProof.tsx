import { CountUp } from "@/components/ui/CountUp";

export type ProofItem = {
  /** Numeric value to count up to; omit for a static label like "DPIIT". */
  count?: number;
  suffix?: string;
  /** Static text shown instead of a counter. */
  text?: string;
  label: string;
};

export function MiniProof({ items }: { items: ProofItem[] }) {
  return (
    <div className="mini-proof reveal" data-d="4">
      {items.map((it) => (
        <div className="mp" key={it.label}>
          {it.count !== undefined ? (
            <CountUp className="mpn" to={it.count} suffix={it.suffix ?? ""} />
          ) : (
            <span className="mpn">{it.text}</span>
          )}
          <span className="mpl">{it.label}</span>
        </div>
      ))}
    </div>
  );
}
