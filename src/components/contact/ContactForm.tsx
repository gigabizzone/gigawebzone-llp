"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Shield, Check } from "@/components/icons";

const PROJECT_TYPES = [
  "Web development",
  "App development",
  "Portal / Platform",
  "WordPress",
  "Growth & automation (GigaBizZone)",
  "Not sure yet",
];

const BUDGETS = ["Under ₹50,000", "₹50,000 – ₹1 lakh", "₹1 – 3 lakh", "₹3 lakh +", "Not sure yet"];

function collectUtm() {
  if (typeof window === "undefined") return {};
  const p = new URLSearchParams(window.location.search);
  const utm: Record<string, string> = {};
  ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"].forEach((k) => {
    const v = p.get(k);
    if (v) utm[k] = v;
  });
  return utm;
}

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    // Client-side required validation with inline highlight.
    let ok = true;
    form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>("[required]").forEach((el) => {
      if (!el.value.trim()) {
        ok = false;
        el.style.borderColor = "var(--g-pink)";
      } else {
        el.style.borderColor = "";
      }
    });
    if (!ok) {
      setError("Please fill in the required fields.");
      return;
    }

    setStatus("submitting");
    setError("");
    const payload = {
      name: fd.get("name"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      company: fd.get("company"),
      projectType: fd.get("projectType"),
      budget: fd.get("budget"),
      message: fd.get("message"),
      website: fd.get("website"), // honeypot
      source: "contact-page",
      utm: collectUtm(),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (res.ok && json.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setError(json.error || "Something went wrong. Please try again or call us.");
      }
    } catch {
      setStatus("error");
      setError("Network error. Please try again, or call/WhatsApp us directly.");
    }
  }

  return (
    <form className={`contact-form reveal${status === "success" ? " sent" : ""}`} onSubmit={onSubmit} noValidate>
      <h3>Start a project</h3>
      <p className="cf-sub">
        Tell us a little about it. The more you share, the sharper our first response.
      </p>

      {/* Honeypot: visually hidden, must stay empty */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
      />

      <div className="form-grid">
        <div className="field">
          <label htmlFor="f-name">Full name <span className="req">*</span></label>
          <input id="f-name" name="name" type="text" placeholder="Your name" required />
        </div>
        <div className="field">
          <label htmlFor="f-email">Email <span className="req">*</span></label>
          <input id="f-email" name="email" type="email" placeholder="you@company.com" required />
        </div>
        <div className="field">
          <label htmlFor="f-phone">Phone / WhatsApp</label>
          <input id="f-phone" name="phone" type="tel" placeholder="+91 …" />
        </div>
        <div className="field">
          <label htmlFor="f-company">Company / organisation</label>
          <input id="f-company" name="company" type="text" placeholder="Optional" />
        </div>
        <div className="field">
          <label htmlFor="f-type">Project type</label>
          <select id="f-type" name="projectType" defaultValue="">
            <option value="">Select…</option>
            {PROJECT_TYPES.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="f-budget">Budget range</label>
          <select id="f-budget" name="budget" defaultValue="">
            <option value="">Select…</option>
            {BUDGETS.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
        </div>
        <div className="field full">
          <label htmlFor="f-message">What are you building? <span className="req">*</span></label>
          <textarea
            id="f-message"
            name="message"
            placeholder="A few lines about your goals, timeline, and anything we should know…"
            required
          />
        </div>
      </div>

      <div className="form-foot">
        <button className="btn btn-primary btn-lg" type="submit" style={{ width: "100%" }} disabled={status === "submitting"}>
          {status === "submitting" ? "Sending…" : "Send enquiry"}
          <ArrowRight />
        </button>
        {error ? (
          <p className="form-note" style={{ color: "var(--g-pink)" }}>
            <span>{error}</span>
          </p>
        ) : null}
        <p className="form-note">
          <Shield />
          <span>
            Free &amp; no-obligation. Your details are used only to respond to your enquiry,
            handled per India&apos;s DPDP Act 2023 — never sold or spammed.
          </span>
        </p>
      </div>

      <div className={`form-success${status === "success" ? " show" : ""}`}>
        <div className="ok">
          <Check />
        </div>
        <h3>Thanks — we&apos;ve got it.</h3>
        <p>
          We&apos;ll review your enquiry and reply within one business day. Need us sooner? Call
          or WhatsApp <strong>+91 8108 4005 99</strong>.
        </p>
      </div>
    </form>
  );
}
