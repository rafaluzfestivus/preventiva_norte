import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = "comercial@preventivanorte.com";

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
        const subject = formData.get("subject")?.toString() || "Nova mensagem do site";
        const fromName = formData.get("from_name")?.toString() || "Preventiva Norte";
        const replyEmail = formData.get("email")?.toString();

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
            from: `${fromName} <no-reply@preventivanorte.com>`,
            to: TO_EMAIL,
            replyTo: replyEmail || undefined,
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
