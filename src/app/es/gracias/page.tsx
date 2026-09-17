import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Mensaje Enviado | Preventiva Norte",
    description: "Gracias por contactar con Preventiva Norte. Nuestro equipo te responderá lo antes posible.",
    robots: { index: false, follow: true },
    alternates: {
        canonical: "https://preventivanorte.pt/es/gracias",
    },
};

export default function GraciasPage() {
    return (
        <div className="container mx-auto px-4 py-24 md:py-32 max-w-xl text-center">
            <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 className="w-11 h-11 text-green-500" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900">
                ¡Mensaje Enviado!
            </h1>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                Gracias por contactar con Preventiva Norte. Nuestro equipo revisará tu solicitud
                y se pondrá en contacto lo antes posible para acordar los próximos pasos.
            </p>
            <Link
                href="/es"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-yellow-500 text-white rounded-full font-bold hover:bg-yellow-600 transition-all shadow-lg hover:shadow-yellow-500/30 group"
            >
                Volver al Inicio
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
        </div>
    );
}
