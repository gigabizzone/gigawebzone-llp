import { NextResponse } from "next/server";

/**
 * Contact / enquiry endpoint.
 *
 * Phase 4: a simple, validated handler that accepts the enquiry and returns
 * success. It is intentionally CRM-ready — the payload already carries source/
 * UTM attribution and a project-type segment, so the GoHighLevel branded-CRM
 * forward (PRD §18) drops in at the TODO below without touching the form.
 */
const isEmail = (v: string) => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v);

export async function POST(req: Request) {
  let data: Record<string, string>;
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

  // TODO (CRM): forward to the GigaWebZone-branded CRM (GoHighLevel) with
  // source/UTM attribution and project-type routing; route growth/automation
  // enquiries into the GigaBizZone workflow. Honor DPDP consent at capture.
  // eslint-disable-next-line no-console
  console.log("[contact] enquiry received", {
    name,
    email,
    phone: data.phone,
    company: data.company,
    projectType: data.projectType,
    budget: data.budget,
    source: data.source,
    utm: data.utm,
  });

  return NextResponse.json({ ok: true });
}
