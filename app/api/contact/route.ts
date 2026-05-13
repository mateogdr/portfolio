import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["mategdr@gmail.com"],
      replyTo: email,
      subject: `Portfolio message from ${name}`,
      html: `
        <div style="font-family: -apple-system, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #fafafa; border-radius: 12px; border: 1px solid #e5e5e5;">
          <h2 style="margin: 0 0 20px; font-size: 18px; color: #111;">New message from your portfolio</h2>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; width: 80px; color: #737373; font-size: 13px;">Name</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; color: #111; font-size: 13px; font-weight: 500;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; color: #737373; font-size: 13px;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; font-size: 13px;">
                <a href="mailto:${email}" style="color: #111; text-decoration: underline;">${email}</a>
              </td>
            </tr>
          </table>

          <div style="margin-top: 20px;">
            <p style="margin: 0 0 8px; color: #737373; font-size: 13px;">Message</p>
            <div style="background: white; border: 1px solid #e5e5e5; border-radius: 8px; padding: 14px; font-size: 14px; color: #262626; line-height: 1.6; white-space: pre-wrap;">${message}</div>
          </div>

          <p style="margin: 20px 0 0; font-size: 12px; color: #a3a3a3;">
            Sent via mateogdr.dev · Reply directly to this email to respond to ${name}
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
