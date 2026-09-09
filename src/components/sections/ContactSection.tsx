"use client";

import { Loader2, Send, CheckCircle, XCircle } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await res.json();
      if (result.success) {
        setStatus("sent");
        if (typeof window !== "undefined" && (window as any).gtag) {
          (window as any).gtag("event", "form_submit", { form_name: "contact" });
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
      <div className="container mx-auto px-4 md:px-8 max-w-xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Pedir orçamento
        </h2>
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-2xl text-slate-900 space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Nome</label>
            <input
              type="text"
              name="nome"
              required
              placeholder="O seu nome"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Telefone</label>
            <input
              type="tel"
              name="telefone"
              required
              placeholder="O seu telefone"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="O seu email"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Mensagem</label>
            <textarea
              name="mensagem"
              rows={4}
              placeholder="Como podemos ajudar?"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition-all resize-none"
            />
          </div>

          {status === "error" && (
            <div className="bg-red-50 text-red-600 p-3 rounded-lg flex items-center gap-2 text-sm">
              <XCircle className="w-4 h-4 flex-shrink-0" />
              Ocorreu um erro. Tente novamente ou contacte-nos por WhatsApp.
            </div>
          )}

          {status === "sent" && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-2 text-sm text-green-800">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              Obrigado! Entraremos em contacto brevemente.
            </div>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {status === "sending" ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" /> A enviar...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" /> Pedir orçamento
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
