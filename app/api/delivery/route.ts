import { NextResponse } from "next/server";

const requiredFields = [
  "fullName",
  "vesselName",
  "phone",
  "pickupLocation",
  "deliveryLocation",
  "requestedDate",
  "deliveryNeeds",
] as const;

export async function POST(request: Request) {
  const formData = await request.formData();

  if (String(formData.get("website") ?? "").trim()) {
    return NextResponse.json({ ok: true });
  }

  const missing = requiredFields.filter(
    (field) => !String(formData.get(field) ?? "").trim(),
  );

  if (missing.length > 0) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields", fields: missing },
      { status: 400 },
    );
  }

  // Connect Resend, SendGrid, SMTP, or Formspree here using environment variables.
  return NextResponse.json({ ok: true, delivery: "not-configured" }, { status: 202 });
}

