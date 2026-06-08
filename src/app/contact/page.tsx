import type { Metadata } from "next";
import { CenteredHero } from "@/components/service/CenteredHero";
import { SectionHead } from "@/components/service/SectionHead";
import { Steps } from "@/components/service/Steps";
import { ContactForm } from "@/components/contact/ContactForm";
import { ArrowUpRight } from "@/components/icons";
import { CONTACT } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, ORG_ID, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact GigaWebZone — Free Consultation",
  description:
    "Contact GigaWebZone LLP for a free, no-obligation consultation. Call +91 8108 4005 99, email, or WhatsApp us. Full-stack web & app studio. We reply within one business day.",
  alternates: { canonical: "/contact" },
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: `${SITE_URL}/contact`,
  mainEntity: { "@id": ORG_ID },
};

const ci = { fill: "none" as const, strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
          contactJsonLd,
        ]}
      />
      <CenteredHero
        current="Contact"
        eyebrow="Let's talk"
        title={<>Tell us what you&apos;re building. <span className="grad-text">We&apos;ll show you how.</span></>}
        lead="A free, no-obligation consultation — call, email, WhatsApp, or send the form below. We read every enquiry and reply within one business day."
      />

      <section className="section" id="form" style={{ paddingTop: "clamp(20px,3vw,40px)" }}>
        <div className="wrap">
          <div className="contact-layout">
            <ContactForm />

            <div className="contact-side">
              <div className="contact-item reveal" data-d="1">
                <span className="ci">
                  <svg viewBox="0 0 24 24" stroke="currentColor" {...ci}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z" /></svg>
                </span>
                <div>
                  <div className="cl">Let&apos;s talk</div>
                  <div className="cv"><a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a></div>
                  <div className="cs">Call us anytime — no time restriction</div>
                </div>
              </div>
              <div className="contact-item wa reveal" data-d="2">
                <span className="ci">
                  <svg viewBox="0 0 24 24" stroke="currentColor" {...ci}><path d="M21 11.5a8.4 8.4 0 0 1-12 7.6L3 21l1.9-5.6A8.5 8.5 0 1 1 21 11.5z" /></svg>
                </span>
                <div>
                  <div className="cl">WhatsApp</div>
                  <div className="cv"><a href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer">Chat with us</a></div>
                  <div className="cs">Quickest way to reach us</div>
                </div>
              </div>
              <div className="contact-item reveal" data-d="3">
                <span className="ci">
                  <svg viewBox="0 0 24 24" stroke="currentColor" {...ci}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M2 6l10 7 10-7" /></svg>
                </span>
                <div>
                  <div className="cl">Email support</div>
                  <div className="cv"><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></div>
                  <div className="cs">We reply within one business day</div>
                </div>
              </div>
              <div className="contact-item reveal" data-d="1">
                <span className="ci">
                  <svg viewBox="0 0 24 24" stroke="currentColor" {...ci}><path d="M12 22s8-4.6 8-11a8 8 0 0 0-16 0c0 6.4 8 11 8 11z" /><circle cx="12" cy="11" r="3" /></svg>
                </span>
                <div>
                  <div className="cl">Head office</div>
                  <div className="cv">GigaWebZone LLP</div>
                  <div className="cs">Datta Krupa, Devachi Jali, Manjarwadi Road, Narayangaon, Junnar, Maharashtra 410504 · Pune presence</div>
                </div>
              </div>
              <div className="contact-item reveal" data-d="2">
                <span className="ci">
                  <svg viewBox="0 0 24 24" stroke="currentColor" {...ci}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
                </span>
                <div>
                  <div className="cl">Working hours</div>
                  <div className="cv">Mon – Sat · 8am – 8pm IST</div>
                  <div className="cs">Sunday closed · call anytime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="map-card reveal">
            <div className="map-embed">
              <div className="pin">
                <span className="dot">
                  <svg viewBox="0 0 24 24" stroke="currentColor" {...ci}><path d="M12 22s8-4.6 8-11a8 8 0 0 0-16 0c0 6.4 8 11 8 11z" /><circle cx="12" cy="11" r="3" /></svg>
                </span>
                <span className="lbl">GigaWebZone LLP · Narayangaon, Junnar</span>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 14,
                justifyContent: "space-between",
                alignItems: "center",
                padding: "18px 22px",
                background: "var(--surface)",
                borderTop: "1px solid var(--border)",
              }}
            >
              <span style={{ fontSize: 14, color: "var(--text-2)" }}>
                Datta Krupa, Devachi Jali, Manjarwadi Road, Narayangaon, Junnar, Maharashtra 410504
              </span>
              <a
                className="arrow-link"
                href="https://www.google.com/maps/search/?api=1&query=GigaWebZone+LLP+Narayangaon+Junnar"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open in Google Maps
                <ArrowUpRight />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section tint">
        <div className="wrap">
          <SectionHead center eyebrow="What happens next" title="No black boxes — here's the first 48 hours." />
          <Steps
            threeUp
            steps={[
              { num: "01", title: "We read & reply", body: "A real person reviews your enquiry and responds within one business day — not an auto-reply.", when: "≤ 1 business day" },
              { num: "02", title: "A short discovery call", body: "15–30 minutes to understand your goals, scope and timeline. No pressure, no jargon.", when: "When it suits you" },
              { num: "03", title: "A clear, honest proposal", body: "A fixed scope, timeline and quote — and an honest view of whether we're the right fit.", when: "Within a few days" },
            ]}
          />
        </div>
      </section>
    </>
  );
}
