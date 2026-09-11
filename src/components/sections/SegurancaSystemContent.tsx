"use client";

import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

interface SegurancaSystemContentProps {
    locale: "pt" | "es";
    tag: string;
    title: string;
    description: string;
    applications: string[];
    components: { title: string; description: string }[];
    standard: string;
}

const TEXT = {
    pt: {
        appsTitle: "Aplicações Recomendadas",
        componentsTitle: "Componentes do Sistema",
        standardLabel: "Norma aplicável",
        backLink: "← Voltar a Redes de Segurança",
        backHref: "/construcao-civil",
        ctaTitle: "Peça o seu orçamento",
        ctaDesc: "Fale connosco para uma avaliação técnica gratuita do seu projeto.",
        ctaButton: "Pedir Orçamento",
        contactHref: "/#contacto",
    },
    es: {
        appsTitle: "Aplicaciones Recomendadas",
        componentsTitle: "Componentes del Sistema",
        standardLabel: "Norma aplicable",
        backLink: "← Volver a Redes de Seguridad",
        backHref: "/es/construcao-civil",
        ctaTitle: "Solicite su presupuesto",
        ctaDesc: "Hable con nosotros para una evaluación técnica gratuita de su proyecto.",
        ctaButton: "Solicitar Presupuesto",
        contactHref: "/es#contacto",
    },
};

export function SegurancaSystemContent({
    locale,
    tag,
    title,
    description,
    applications,
    components,
    standard,
}: SegurancaSystemContentProps) {
    const t = TEXT[locale];

    return (
        <main className="pt-32 pb-24 bg-white min-h-screen">
            <div className="container mx-auto px-4 md:px-8 max-w-4xl">
                <Link href={t.backHref} className="text-yellow-600 font-semibold text-sm hover:underline mb-8 inline-block">
                    {t.backLink}
                </Link>

                <span className="text-yellow-500 font-bold tracking-wider text-sm uppercase mb-3 block">
                    {tag}
                </span>
                <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">{title}</h1>
                <p className="text-lg text-slate-600 leading-relaxed mb-10">{description}</p>

                <h2 className="text-2xl font-bold text-slate-900 mb-4">{t.appsTitle}</h2>
                <ul className="space-y-3 mb-10">
                    {applications.map((app) => (
                        <li key={app} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                            <span className="text-slate-700">{app}</span>
                        </li>
                    ))}
                </ul>

                <h2 className="text-2xl font-bold text-slate-900 mb-4">{t.componentsTitle}</h2>
                <div className="space-y-4 mb-10">
                    {components.map((c) => (
                        <div key={c.title} className="p-5 bg-gray-50 rounded-xl border border-gray-100">
                            <h3 className="font-bold text-slate-900 mb-1">{c.title}</h3>
                            <p className="text-sm text-slate-600">{c.description}</p>
                        </div>
                    ))}
                </div>

                <p className="text-sm text-slate-500 mb-10">
                    {t.standardLabel}: {standard}
                </p>

                <div className="bg-[#4d2a36] rounded-2xl p-8 text-center">
                    <h3 className="text-xl font-bold text-white mb-2">{t.ctaTitle}</h3>
                    <p className="text-slate-300 mb-6">{t.ctaDesc}</p>
                    <Link
                        href={t.contactHref}
                        className="inline-block bg-yellow-500 text-white px-8 py-3 rounded-full font-bold hover:bg-yellow-600 transition-all"
                    >
                        {t.ctaButton}
                    </Link>
                </div>
            </div>
        </main>
    );
}
