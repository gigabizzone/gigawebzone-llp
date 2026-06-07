import type { CSSProperties, ReactNode } from "react";

type SectionHeadProps = {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
  center?: boolean;
  titleStyle?: CSSProperties;
};

/** Standard `.section-head` (eyebrow + h2 + optional lead), centered or left. */
export function SectionHead({
  eyebrow,
  title,
  children,
  center,
  titleStyle,
}: SectionHeadProps) {
  return (
    <div className={`section-head reveal${center ? " center" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 style={titleStyle}>{title}</h2>
      {children ? <p>{children}</p> : null}
    </div>
  );
}
