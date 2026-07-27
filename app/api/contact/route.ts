import { NextRequest, NextResponse } from "next/server";

/**
 * Contact form endpoint.
 *
 * This is a placeholder that validates input and returns success.
 * To actually deliver emails to contact@convertimagenow.com, connect an
 * email provider here, for example Resend (https://resend.com):
 *
 *   import { Resend } from "resend";
 *   const resend = new Resend(process.env.RESEND_API_KEY);
 *   await resend.emails.send({
 *     from: "ConvertImageNow <no-reply@convertimagenow.com>",
 *     to: "contact@convertimagenow.com",
 *     subject: `New message from ${name}`,
 *     text: message,
 *     replyTo: email,
 *   });
 *
 * Then add RESEND_API_KEY as an Environment Variable in your Vercel
 * project settings. Resend's free tier is enough for a contact form.
 */
export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // TODO: send the email via your provider of choice here.
    console.log("Contact form submission:", { name, email, message });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
