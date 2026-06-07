"use client";

import Script from "next/script";
import Link from "next/link";
import { useEffect, useState } from "react";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

type Consent = "granted" | "denied" | null;

/**
 * Privacy-preserving GA4 + DPDP consent.
 *
 * - Nothing loads and no banner shows unless NEXT_PUBLIC_GA_ID is configured.
 * - GA4 only loads after explicit consent ("granted"), stored in localStorage.
 *   Default is no tracking (DPDP-friendly). IP anonymization is on.
 */
export function Analytics() {
  const [consent, setConsent] = useState<Consent>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const v = localStorage.getItem("gwz-consent");
    if (v === "granted" || v === "denied") setConsent(v);
  }, []);

  if (!GA_ID || !mounted) return null;

  const choose = (v: Consent) => {
    if (v) localStorage.setItem("gwz-consent", v);
    setConsent(v);
  };

  return (
    <>
      {consent === "granted" && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}',{anonymize_ip:true});`}
          </Script>
        </>
      )}

      {consent === null && (
        <div className="consent" role="dialog" aria-label="Cookie consent">
          <p className="consent-text">
            We use privacy-respecting analytics to improve this site. You can accept or
            decline — see our <Link href="/privacy">Privacy Policy</Link>.
          </p>
          <div className="consent-actions">
            <button className="btn btn-ghost" onClick={() => choose("denied")}>
              Decline
            </button>
            <button className="btn btn-primary" onClick={() => choose("granted")}>
              Accept
            </button>
          </div>
        </div>
      )}
    </>
  );
}
