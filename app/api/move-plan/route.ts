import { NextRequest, NextResponse } from "next/server";

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

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.RESEND_FROM_EMAIL,
      to: [recipient],
      reply_to: email,
      subject: `New move plan from ${name}`,
      text: `New move plan inquiry\n\nName: ${name}\nEmail: ${email}\nMove type: ${moveType}\nFrom: ${from}\nTo: ${to}\nPreferred date: ${date}\nHome size: ${size}\nPacking support: ${packing}\nAccess and household preferences: ${notes}`,
    }),
  });

  if (!response.ok) {
    console.error("Move plan email failed", { status: response.status });
    return NextResponse.json({ message: "We could not send your move plan. Please call us directly." }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
