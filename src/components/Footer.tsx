import Image from "next/image";
import Link from "next/link";
import { CONTACT, SOCIALS } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="f-brand">
            <Image
              className="logo-light"
              src="/assets/logo-horizontal.png"
              alt="GigaWebZone"
              width={217}
              height={51}
            />
            <Image
              className="logo-dark"
              src="/assets/logo-horizontal-white.png"
              alt="GigaWebZone"
              width={217}
              height={51}
            />
            <p>
              A full-stack digital build studio in Pune, India. We design, develop and
              dominate — for businesses that value proof over flash.
            </p>
            <div className="socials">
              <a href={SOCIALS.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0zM0 8h5v15H0zM8 8h4.8v2.05h.07c.67-1.2 2.3-2.46 4.73-2.46C22.4 7.59 24 10 24 14.3V23h-5v-7.7c0-1.84-.03-4.2-2.56-4.2-2.56 0-2.95 2-2.95 4.06V23H8z" />
                </svg>
              </a>
              <a href={SOCIALS.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <rect x="2" y="2" width="20" height="20" rx="5.5" />
                  <circle cx="12" cy="12" r="4.2" />
                  <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a href={SOCIALS.facebook} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href={SOCIALS.youtube} aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 12s0-3.2-.4-4.7a3 3 0 0 0-2.1-2.1C18.9 4.8 12 4.8 12 4.8s-6.9 0-8.5.4a3 3 0 0 0-2.1 2.1C1 8.8 1 12 1 12s0 3.2.4 4.7a3 3 0 0 0 2.1 2.1c1.6.4 8.5.4 8.5.4s6.9 0 8.5-.4a3 3 0 0 0 2.1-2.1C23 15.2 23 12 23 12zM9.8 15.3V8.7l5.7 3.3z" />
                </svg>
              </a>
              <a href={SOCIALS.pinterest} aria-label="Pinterest" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.64 7.86 6.36 9.32-.09-.79-.17-2 .03-2.86.18-.78 1.18-4.99 1.18-4.99s-.3-.6-.3-1.49c0-1.4.81-2.44 1.82-2.44.86 0 1.27.64 1.27 1.41 0 .86-.55 2.15-.83 3.34-.24 1 .5 1.81 1.48 1.81 1.78 0 3.14-1.88 3.14-4.58 0-2.39-1.72-4.07-4.18-4.07-2.85 0-4.52 2.13-4.52 4.34 0 .86.33 1.78.74 2.28.08.1.09.19.07.29-.08.31-.25.99-.28 1.13-.04.18-.15.22-.34.13-1.25-.58-2.03-2.4-2.03-3.87 0-3.15 2.29-6.04 6.6-6.04 3.46 0 6.16 2.47 6.16 5.77 0 3.44-2.17 6.21-5.18 6.21-1.01 0-1.96-.53-2.29-1.15l-.62 2.37c-.22.86-.83 1.94-1.24 2.6.94.29 1.93.44 2.97.44 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h5>Services</h5>
            <ul>
              <li><Link href="/web-development">Web Development</Link></li>
              <li><Link href="/app-development">App Development</Link></li>
              <li><Link href="/portals-platforms">Portals &amp; Platforms</Link></li>
              <li><Link href="/wordpress">WordPress Expertise</Link></li>
            </ul>
          </div>

          <div>
            <h5>Explore</h5>
            <ul>
              <li><Link href="/industries">Industries</Link></li>
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h5>Contact</h5>
            <div className="contact-row">
              <strong>Head Office</strong>
              {CONTACT.address}
            </div>
            <div className="contact-row">
              <strong>Email</strong>
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </div>
            <div className="contact-row">
              <strong>Phone</strong>
              <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a>
            </div>
            <div className="contact-row">
              <strong>Hours</strong>
              {CONTACT.hours}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-legal">
            <span className="cprt">© 2026 GigaWebZone LLP. Design, Develop, Dominate.</span>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
          <div className="footer-badges">
            <span className="b">DPIIT Recognised</span>
            <span className="b">Udyam Registered</span>
            <span className="b">LLP · AAV-4776</span>
            <span className="b">Pune · India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
