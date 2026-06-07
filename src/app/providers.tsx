"use client";

import { ThemeProvider } from "next-themes";
import { useEffect, type ReactNode } from "react";

/**
 * Global client providers.
 *
 * - next-themes drives `data-theme` on <html> with the SAME storage key the
 *   reference used (`gwz-theme`), defaulting to the OS preference on first
 *   visit (PRD 9.3) and persisting explicit toggles. `disableTransitionOnChange`
 *   reproduces the reference's "instant colour commit" (no half-transitioned
 *   tokens on swap).
 * - The `anim` class on <html> gates the continuous decorative animations
 *   (hero aurora drift, button sheen, gradient shift). It is only added when
 *   the user has NOT requested reduced motion — matching gwz.css, where
 *   `html:not(.anim)` collapses all transitions/animations.
 */
export function Providers({ children }: { children: ReactNode }) {
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => document.documentElement.classList.toggle("anim", !mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return (
    <ThemeProvider
      attribute="data-theme"
      defaultTheme="system"
      enableSystem
      storageKey="gwz-theme"
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
