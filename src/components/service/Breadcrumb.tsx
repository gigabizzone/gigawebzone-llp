import Link from "next/link";

export function Breadcrumb({ current }: { current: string }) {
  return (
    <nav className="breadcrumb reveal" aria-label="Breadcrumb">
      <Link href="/">Home</Link>
      <span className="sep">/</span>
      <span className="cur">{current}</span>
    </nav>
  );
}
