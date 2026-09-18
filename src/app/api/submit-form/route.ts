import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = "comercial@preventivanorte.com";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// This endpoint is public, so any value read from formData is attacker-
// controlled input, not just what the site's own forms send. Strip CR/LF
// before it reaches an email-header-equivalent field (subject, replyTo) —
// otherwise a POST with embedded newlines could inject extra headers into
// the outgoing message.
function sanitizeHeaderValue(value: string, maxLength: number): string {
    return value.replace(/[\r\n\0]/g, "").trim().slice(0, maxLength);
}

// Generic handler for both the contact form and the kit order form: both
// submit a FormData body with a "subject" field, a "botcheck" honeypot, an
// optional "email" field (used as replyTo), and any number of plain fields
// or File entries (photo/document attachments).
export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();

        if (formData.get("botcheck")) {
            return NextResponse.json({ success: true });
        }

        const resend = new Resend(process.env.RESEND_API_KEY);
        const rawSubject = formData.get("subject")?.toString();
        const subject = rawSubject ? sanitizeHeaderValue(rawSubject, 200) : "Nova mensagem do site";
        const rawReplyEmail = formData.get("email")?.toString();
        const replyEmail = rawReplyEmail ? sanitizeHeaderValue(rawReplyEmail, 254) : "";

        const lines: string[] = [];
        const attachments: { filename: string; content: string }[] = [];

        for (const [key, value] of formData.entries()) {
            if (key === "botcheck" || key === "subject" || key === "from_name") continue;
            if (value instanceof File) {
                if (value.size > 0) {
                    attachments.push({
                        filename: value.name,
                        // Resend's SDK sends the request body via JSON.stringify(), which
                        // turns a raw Buffer into {type:"Buffer",data:[...]} instead of the
                        // base64 string the API expects — so it must be encoded here.
                        content: Buffer.from(await value.arrayBuffer()).toString("base64"),
                    });
                }
                continue;
            }
            if (value) lines.push(`${key}: ${value}`);
        }

        const { error } = await resend.emails.send({
            from: "Preventiva Norte <no-reply@preventivanorte.com>",
            to: TO_EMAIL,
            replyTo: EMAIL_PATTERN.test(replyEmail) ? replyEmail : undefined,
            subject,
            text: lines.join("\n"),
            attachments: attachments.length ? attachments : undefined,
        });

        if (error) {
            console.error("Resend error:", error);
            return NextResponse.json({ success: false }, { status: 502 });
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Form submission error:", error);
        return NextResponse.json({ success: false }, { status: 500 });
    }
}
