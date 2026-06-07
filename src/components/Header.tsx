"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useTheme } from "next-themes";
import { useScrolled } from "@/lib/hooks";
import { NAV_LINKS, CONSULT_HREF } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Sun, Moon, Menu } from "@/components/icons";

export function Header() {
  const scrolled = useScrolled(12);
  const [menuOpen, setMenuOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => setTheme(resolvedTheme === "dark" ? "light" : "dark");

  return (
    <>
      <header className={`site-header${scrolled ? " scrolled" : ""}`} id="header">
        <div className="wrap">
          <Link className="brand" href="/" aria-label="GigaWebZone home">
            <Image
              className="logo-light"
              src="/assets/logo-horizontal.png"
              alt="GigaWebZone"
              width={170}
              height={40}
              priority
            />
            <Image
              className="logo-dark"
              src="/assets/logo-horizontal-white.png"
              alt="GigaWebZone"
              width={170}
              height={40}
              priority
            />
          </Link>

          <nav className="nav" aria-label="Primary">
            {NAV_LINKS.map((link) =>
              link.href.startsWith("/") ? (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ) : (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              )
            )}
          </nav>

          <div className="header-actions">
            <button
              className="theme-toggle"
              aria-label="Toggle dark mode"
              title="Toggle theme"
              onClick={toggleTheme}
            >
              <Sun className="icon-sun" />
              <Moon className="icon-moon" />
            </button>
            <Button href={CONSULT_HREF} variant="primary">
              <span className="cta-text">Free Consultation</span>
              <ArrowRight />
            </Button>
            <button
              className="menu-btn"
              aria-label="Menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <Menu />
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-nav${menuOpen ? " open" : ""}`}>
        <div className="wrap">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="m-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="m-cta">
            <Button href={CONSULT_HREF} variant="primary" onClick={() => setMenuOpen(false)}>
              <span>Get a Free Consultation</span>
              <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
