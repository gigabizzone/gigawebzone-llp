import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "ghost" | "light" | "outline-light";
type Size = "md" | "lg";

type ButtonProps = {
  href: string;
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "children" | "className">;

/**
 * Link-styled button mapping to the `.btn` atom family in gwz.css.
 * Internal routes (starting with "/") render via next/link for client nav;
 * hash, tel:, mailto: and external links render as plain anchors.
 */
export function Button({
  href,
  variant = "primary",
  size = "md",
  children,
  className,
  ...rest
}: ButtonProps) {
  const classes = [
    "btn",
    `btn-${variant}`,
    size === "lg" ? "btn-lg" : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  const isInternal = href.startsWith("/") && !href.startsWith("//");

  if (isInternal) {
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={classes} {...rest}>
      {children}
    </a>
  );
}
