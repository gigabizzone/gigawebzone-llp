import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

/**
 * Contact / enquiry endpoint.
 *
 * Validates the submission, rejects bots (honeypot), then emails the enquiry
 * via SMTP (credentials from env — never hardcoded). If SMTP isn't configured
 * it degrades to logging only, so the form still works in dev.
 *
 * The GoHighLevel branded-CRM forward (PRD §18) can be added alongside the
 * email at the marked spot without touching the form.
 */
const isEmail = (v: string) => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v);

function getTransport() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const port = Number(process.env.SMTP_PORT || 465);
  if (!host || !user || !pass) return null;
  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465, // 465 = implicit TLS (SSL); 587 = STARTTLS
    auth: { user, pass },
  });
}

function esc(s: string) {
  return String(s).replace(/[<>&]/g, (c) =>
    c === "<" ? "&lt;" : c === ">" ? "&gt;" : "&amp;"
  );
}

export async function POST(req: Request) {
  let data: Record<string, string & { utm?: Record<string, string> }> & {
    utm?: Record<string, string>;
  };
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Bad request" }, { status: 400 });
  }

  // Honeypot — bots fill hidden fields. Silently accept and drop.
  if (data.website) return NextResponse.json({ ok: true });

  const name = (data.name || "").trim();
  const email = (data.email || "").trim();
  const message = (data.message || "").trim();
  const phone = (data.phone || "").trim();
  const company = (data.company || "").trim();
  const projectType = (data.projectType || "").trim();
  const budget = (data.budget || "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "Please fill in your name, email and message." },
      { status: 400 }
    );
  }
  if (!isEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const rows: [string, string][] = [
    ["Name", name],
    ["Email", email],
    ["Phone", phone || "—"],
    ["Company", company || "—"],
    ["Project type", projectType || "—"],
    ["Budget", budget || "—"],
    ["Source", (data.source as string) || "contact-page"],
  ];
  const utm = data.utm && Object.keys(data.utm).length ? JSON.stringify(data.utm) : "";

  const textBody =
    rows.map(([k, v]) => `${k}: ${v}`).join("\n") +
    (utm ? `\nUTM: ${utm}` : "") +
    `\n\nMessage:\n${message}\n`;
  const htmlBody =
    `<h2 style="font-family:sans-serif">New website enquiry</h2>` +
    `<table style="font-family:sans-serif;border-collapse:collapse">` +
    rows
      .map(
        ([k, v]) =>
          `<tr><td style="padding:4px 12px 4px 0;color:#666"><strong>${k}</strong></td><td style="padding:4px 0">${esc(v)}</td></tr>`
      )
      .join("") +
    (utm ? `<tr><td style="padding:4px 12px 4px 0;color:#666"><strong>UTM</strong></td><td>${esc(utm)}</td></tr>` : "") +
    `</table>` +
    `<p style="font-family:sans-serif;white-space:pre-wrap;margin-top:16px"><strong>Message</strong><br>${esc(message)}</p>`;

  const transport = getTransport();

  if (!transport) {
    // SMTP not configured (e.g. local dev without .env.local) — log and accept.
    // eslint-disable-next-line no-console
    console.log("[contact] enquiry (SMTP not configured)", { name, email, projectType });
    return NextResponse.json({ ok: true });
  }

  try {
    await transport.sendMail({
      from: `"GigaWebZone Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO || process.env.SMTP_USER,
      replyTo: `"${name}" <${email}>`,
      subject: `New enquiry — ${name}${projectType ? ` · ${projectType}` : ""}`,
      text: textBody,
      html: htmlBody,
    });
    // TODO (CRM): forward the same payload to the GigaWebZone-branded CRM
    // (GoHighLevel) with source/UTM attribution and project-type routing.
    return NextResponse.json({ ok: true });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("[contact] SMTP send failed:", err);
    return NextResponse.json(
      {
        ok: false,
        error: "We couldn't send your message right now. Please call or WhatsApp us.",
      },
      { status: 502 }
    );
  }
}
