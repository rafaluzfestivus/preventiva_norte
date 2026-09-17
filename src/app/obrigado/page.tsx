import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Mensagem Enviada | Preventiva Norte",
    description: "Obrigado por contactar a Preventiva Norte. A nossa equipa irá responder o mais breve possível.",
    robots: { index: false, follow: true },
    alternates: {
        canonical: "https://preventivanorte.pt/obrigado",
    },
};

export default function ObrigadoPage() {
    return (
        <div className="container mx-auto px-4 py-24 md:py-32 max-w-xl text-center">
            <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 className="w-11 h-11 text-green-500" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900">
                Mensagem Enviada!
            </h1>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                Obrigado por contactar a Preventiva Norte. A nossa equipa irá analisar o seu pedido
                e entrará em contacto o mais breve possível para combinar os próximos passos.
            </p>
            <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-yellow-500 text-white rounded-full font-bold hover:bg-yellow-600 transition-all shadow-lg hover:shadow-yellow-500/30 group"
            >
                Voltar ao Início
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
        </div>
    );
}
