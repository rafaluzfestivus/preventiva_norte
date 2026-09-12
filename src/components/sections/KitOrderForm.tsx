"use client";

import { useState } from "react";
import { Loader2, Send, CheckCircle, XCircle, Plus, Minus } from "lucide-react";

interface KitOrderFormProps {
    locale: "pt" | "es";
}

// Minimal local augmentation for the optional gtag global — mirrors the
// same pattern in ContactSection.tsx (avoids a bare `any` cast without
// introducing a project-wide Window type).
type WindowWithGtag = Window & {
    gtag?: (...args: unknown[]) => void;
};

interface KitSpec {
    height: string;
    width: string;
    color: "Branca" | "Preta";
}

const TEXT = {
    pt: {
        formTitle: "Peça o seu Kit",
        name: "Nome",
        email: "Email",
        phone: "Telemóvel",
        quantity: "Quantidade de kits",
        kitLabel: (n: number) => `Kit ${n}`,
        height: "Altura (m)",
        width: "Largura (m)",
        color: "Cor",
        colorWhite: "Branca",
        colorBlack: "Preta",
        submit: "Solicitar Orçamento",
        sending: "A enviar...",
        success: "Pedido enviado! Entraremos em contacto para confirmar os detalhes.",
        error: "Ocorreu um erro ao enviar o pedido. Tente novamente ou contacte-nos por WhatsApp.",
        subject: "Novo pedido de Kit de Instalação - Preventiva Norte",
    },
    es: {
        formTitle: "Solicite su Kit",
        name: "Nombre",
        email: "Email",
        phone: "Teléfono",
        quantity: "Cantidad de kits",
        kitLabel: (n: number) => `Kit ${n}`,
        height: "Altura (m)",
        width: "Anchura (m)",
        color: "Color",
        colorWhite: "Blanca",
        colorBlack: "Negra",
        submit: "Solicitar Presupuesto",
        sending: "Enviando...",
        success: "¡Pedido enviado! Nos pondremos en contacto para confirmar los detalles.",
        error: "Ocurrió un error al enviar el pedido. Inténtelo de nuevo o contáctenos por WhatsApp.",
        subject: "Nuevo pedido de Kit de Instalación - Preventiva Norte",
    },
};

function makeDefaultKit(): KitSpec {
    return { height: "", width: "", color: "Branca" };
}

export function KitOrderForm({ locale }: KitOrderFormProps) {
    const t = TEXT[locale];
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
    const [kits, setKits] = useState<KitSpec[]>([makeDefaultKit()]);
    // Raw text of the quantity input, tracked separately from `kits.length`
    // so that clearing the field to retype a new value (e.g. "3" -> "" ->
    // "15") doesn't momentarily resize `kits` down to 1 and discard
    // in-progress kit data. The +/- buttons still resize immediately by
    // calling setQuantity directly; free typing only resizes on blur (or
    // when it parses to a valid quantity).
    const [quantityInput, setQuantityInput] = useState(String(kits.length));

    function setQuantity(nextQuantity: number) {
        const quantity = Math.max(1, Math.min(20, nextQuantity));
        setKits((current) => {
            if (quantity === current.length) return current;
            if (quantity < current.length) return current.slice(0, quantity);
            return [...current, ...Array.from({ length: quantity - current.length }, makeDefaultKit)];
        });
        setQuantityInput(String(quantity));
    }

    function commitQuantityInput() {
        const parsed = Number(quantityInput);
        if (quantityInput.trim() === "" || !Number.isInteger(parsed) || parsed < 1) {
            // Invalid/empty on blur: snap back to the last valid quantity.
            setQuantityInput(String(kits.length));
            return;
        }
        setQuantity(parsed);
    }

    function updateKit(index: number, patch: Partial<KitSpec>) {
        setKits((current) => current.map((kit, i) => (i === index ? { ...kit, ...patch } : kit)));
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("sending");
        const formData = new FormData(e.currentTarget);
        formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "");
        formData.append("subject", t.subject);
        formData.append("from_name", "Preventiva Norte - Kit de Instalação");
        // Override the raw "quantity" field with the true kit count — the
        // input may still hold an uncommitted string (e.g. submitted via
        // Enter before onBlur ran) that hasn't resized `kits` yet.
        formData.set("quantity", String(kits.length));
        kits.forEach((kit, i) => {
            formData.append(`kit_${i + 1}_altura`, kit.height);
            formData.append(`kit_${i + 1}_largura`, kit.width);
            formData.append(`kit_${i + 1}_cor`, kit.color);
        });

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });
            const result = await res.json();
            if (result.success) {
                setStatus("sent");
                if (typeof window !== "undefined") {
                    (window as WindowWithGtag).gtag?.("event", "form_submit", { form_name: "kit_order" });
                }
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-gray-50 rounded-2xl p-8 border border-gray-100 space-y-6 mt-12"
        >
            <h2 className="text-2xl font-bold text-slate-900">{t.formTitle}</h2>

            {status === "sent" && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-2 text-sm text-green-800">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    {t.success}
                </div>
            )}

            {status !== "sent" && (
              <>
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                    type="text"
                    name="name"
                    required
                    placeholder={t.name}
                    className="px-4 py-3 rounded-lg border border-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition-all"
                />
                <input
                    type="email"
                    name="email"
                    required
                    placeholder={t.email}
                    className="px-4 py-3 rounded-lg border border-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition-all"
                />
                <input
                    type="tel"
                    name="phone"
                    required
                    placeholder={t.phone}
                    className="px-4 py-3 rounded-lg border border-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition-all"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">{t.quantity}</label>
                <div className="flex items-center gap-3">
                    <button
                        type="button"
                        onClick={() => setQuantity(kits.length - 1)}
                        className="p-2 rounded-lg border border-gray-200 hover:bg-gray-100"
                        aria-label="-"
                    >
                        <Minus className="w-4 h-4" />
                    </button>
                    <input
                        type="number"
                        name="quantity"
                        min={1}
                        max={20}
                        value={quantityInput}
                        onChange={(e) => setQuantityInput(e.target.value)}
                        onBlur={commitQuantityInput}
                        className="w-20 text-center px-3 py-2 rounded-lg border border-gray-200"
                    />
                    <button
                        type="button"
                        onClick={() => setQuantity(kits.length + 1)}
                        className="p-2 rounded-lg border border-gray-200 hover:bg-gray-100"
                        aria-label="+"
                    >
                        <Plus className="w-4 h-4" />
                    </button>
                </div>
            </div>

            <div className="space-y-4">
                {kits.map((kit, index) => (
                    <div key={index} className="bg-white rounded-xl p-4 border border-gray-200 grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                        <p className="font-bold text-slate-800 md:col-span-4">{t.kitLabel(index + 1)}</p>
                        <div>
                            <label className="block text-xs font-medium text-slate-600 mb-1">{t.height}</label>
                            <input
                                type="text"
                                inputMode="decimal"
                                required
                                value={kit.height}
                                onChange={(e) => updateKit(index, { height: e.target.value })}
                                className="w-full px-3 py-2 rounded-lg border border-gray-200"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-slate-600 mb-1">{t.width}</label>
                            <input
                                type="text"
                                inputMode="decimal"
                                required
                                value={kit.width}
                                onChange={(e) => updateKit(index, { width: e.target.value })}
                                className="w-full px-3 py-2 rounded-lg border border-gray-200"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-xs font-medium text-slate-600 mb-1">{t.color}</label>
                            <div className="flex gap-4">
                                <label className="flex items-center gap-2 text-sm">
                                    <input
                                        type="radio"
                                        name={`kit-${index}-color`}
                                        value="Branca"
                                        checked={kit.color === "Branca"}
                                        onChange={() => updateKit(index, { color: "Branca" })}
                                    />
                                    {t.colorWhite}
                                </label>
                                <label className="flex items-center gap-2 text-sm">
                                    <input
                                        type="radio"
                                        name={`kit-${index}-color`}
                                        value="Preta"
                                        checked={kit.color === "Preta"}
                                        onChange={() => updateKit(index, { color: "Preta" })}
                                    />
                                    {t.colorBlack}
                                </label>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {status === "error" && (
                <div className="bg-red-50 text-red-600 p-3 rounded-lg flex items-center gap-2 text-sm">
                    <XCircle className="w-4 h-4 flex-shrink-0" />
                    {t.error}
                </div>
            )}

            <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
            >
                {status === "sending" ? (
                    <>
                        <Loader2 className="w-5 h-5 animate-spin" /> {t.sending}
                    </>
                ) : (
                    <>
                        <Send className="w-5 h-5" /> {t.submit}
                    </>
                )}
              </button>
              </>
            )}
        </form>
    );
}
