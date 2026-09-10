"use client";

import { Loader2, Send, CheckCircle, XCircle, Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import type { SiteDict } from "@/dictionaries/types";

interface ContactSectionProps {
  dict: SiteDict["contact"];
}

// Minimal local augmentation for the optional gtag global — avoids a bare
// `any` cast without introducing a project-wide Window type (no such
// augmentation exists elsewhere in this codebase).
type WindowWithGtag = Window & {
  gtag?: (...args: unknown[]) => void;
};

export function ContactSection({ dict }: ContactSectionProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const pathname = usePathname();
  const isES = pathname.startsWith("/es");
  // Same locale-aware privacy link logic as Footer.tsx.
  const privacyHref = isES ? "/es/politica-privacitat" : "/politica-privacidade";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "");
    formData.append("subject", dict.subject);
    formData.append("from_name", "Preventiva Norte");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await res.json();
      if (result.success) {
        setStatus("sent");
        if (typeof window !== "undefined") {
          (window as WindowWithGtag).gtag?.("event", "form_submit", { form_name: "contact" });
        }
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contacto" className="py-16 bg-[#4d2a36] text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-yellow-400 font-bold tracking-wider text-sm uppercase mb-3 block">
            {dict.tag}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{dict.title}</h2>
          <p className="text-slate-300">{dict.description}</p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-yellow-400 shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-white mb-1">{dict.callTitle}</h3>
                <p className="text-sm text-slate-400 mb-1">{dict.callLabel}</p>
                <a href="tel:+351910407785" className="text-slate-200 hover:text-yellow-400 transition-colors">
                  910 407 785
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-yellow-400 shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-white mb-1">{dict.writeTitle}</h3>
                <a
                  href="mailto:comercial@preventivanorte.pt"
                  className="text-slate-200 hover:text-yellow-400 transition-colors"
                >
                  comercial@preventivanorte.pt
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-yellow-400 shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-white mb-1">{dict.serviceAreaTitle}</h3>
                <p className="text-slate-200">{dict.serviceAreaText}</p>
                <p className="text-slate-400 text-sm">{dict.serviceAreaSub}</p>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-white rounded-2xl p-8 shadow-2xl text-slate-900 space-y-4"
          >
            <h3 className="text-xl font-bold mb-2">{dict.formTitle}</h3>

            {/* Web3Forms honeypot — bots tend to fill hidden fields, humans never see this */}
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">{dict.formName}</label>
              <input
                type="text"
                name="name"
                required
                placeholder={dict.formNamePlaceholder}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">{dict.formPhone}</label>
              <input
                type="tel"
                name="phone"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">{dict.formEmail}</label>
              <input
                type="email"
                name="email"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">{dict.formPostal}</label>
              <input
                type="text"
                name="postal_code"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">{dict.formMessage}</label>
              <textarea
                name="message"
                rows={4}
                placeholder={dict.formMessagePlaceholder}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition-all resize-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">{dict.formAttachments}</label>
              <input
                type="file"
                name="attachments"
                multiple
                accept="image/*,.pdf,.doc,.docx"
                className="w-full text-sm text-slate-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-yellow-50 file:text-yellow-700 file:font-medium hover:file:bg-yellow-100"
              />
            </div>

            <p className="text-xs text-slate-500">
              <Link href={privacyHref} className="underline hover:text-yellow-700">
                {dict.formPrivacy}
              </Link>
            </p>

            {status === "error" && (
              <div className="bg-red-50 text-red-600 p-3 rounded-lg flex items-center gap-2 text-sm">
                <XCircle className="w-4 h-4 flex-shrink-0" />
                {dict.formError}
              </div>
            )}

            {status === "sent" && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-2 text-sm text-green-800">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                {dict.formSuccessDesc}
              </div>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === "sending" ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" /> {dict.formSending}
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" /> {dict.formSubmit}
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
