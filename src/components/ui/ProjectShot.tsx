import Image from "next/image";
import type { CSSProperties } from "react";
import { portfolioImage } from "@/lib/data/projects";

type ProjectShotProps = {
  domain: string;
  alt: string;
  sizes?: string;
  /** Extra class(es) on the `.shot` wrapper (e.g. for feature cards). */
  className?: string;
  style?: CSSProperties;
};

/**
 * A project screenshot slot. Renders the optimized image (AVIF/WebP, lazy) to
 * fill the `.shot` box and cover-crop to the slot's aspect ratio. Replaces the
 * `.shot.ph` placeholder used during the build phases.
 */
export function ProjectShot({ domain, alt, sizes, className, style }: ProjectShotProps) {
  return (
    <div className={className ? `shot ${className}` : "shot"} style={style}>
      <Image
        src={portfolioImage(domain)}
        alt={alt}
        fill
        sizes={sizes ?? "(max-width: 620px) 100vw, (max-width: 920px) 50vw, 360px"}
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
