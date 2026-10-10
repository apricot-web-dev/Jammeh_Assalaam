import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const recipient = "bubacarr@jamoving.co";
const asText = (value: unknown, maximum: number) => typeof value === "string" ? value.trim().slice(0, maximum) : "";

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null) as Record<string, unknown> | null;
  const name = asText(body?.name, 100);
  const email = asText(body?.email, 320);
  const from = asText(body?.from, 100);
  const to = asText(body?.to, 100);
  const moveType = asText(body?.moveType, 40);
  const date = asText(body?.date, 32) || "Flexible";
  const size = asText(body?.size, 80);
  const packing = asText(body?.packing, 80);
  const notes = asText(body?.notes, 1500) || "None provided";

  if (!name || !email || !from || !to || !moveType || !size || !packing || !/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json({ message: "Please complete your contact details and move information." }, { status: 400 });
  }
  if (!process.env.RESEND_API_KEY || !process.env.RESEND_FROM_EMAIL) {
    return NextResponse.json({ message: "Email delivery is not configured yet. Please call us directly." }, { status: 503 });
  }

  let response: Response;
  try {
    response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM_EMAIL.trim(),
        to: [recipient],
        reply_to: email,
        subject: `New move request from ${name}`,
        text: `New move request\n\nName: ${name}\nEmail: ${email}\nMove type: ${moveType}\nFrom: ${from}\nTo: ${to}\nPreferred date: ${date}\nHome size: ${size}\nPacking support: ${packing}\nAccess and household preferences: ${notes}`,
      }),
      cache: "no-store",
    });
  } catch (error) {
    console.error("Move request email network failure", {
      message: error instanceof Error ? error.message : "Unknown error",
    });
    return NextResponse.json(
      { message: "Email delivery is temporarily unavailable. Please try again or call us directly." },
      { status: 502 },
    );
  }

  if (!response.ok) {
    const providerResponse = await response.text().catch(() => "Unreadable response");
    console.error("Move request email failed", {
      status: response.status,
      providerResponse,
    });
    return NextResponse.json(
      { message: "We could not send your request. Please try again or call us directly." },
      { status: 502 },
    );
  }
  return NextResponse.json({ ok: true });
}
