"use client";

import Link from "next/link";
import { Building2 } from "lucide-react";

interface SegurancaOverviewContentProps {
    locale: "pt" | "es";
}

const TEXT = {
    pt: {
        tag: "Construção Civil",
        title: "Redes de Segurança para Trabalho em Altura",
        description:
            "Sistema de proteção coletiva para prevenção de riscos de acidentes de trabalho em altura. As nossas redes evitam a queda de trabalhadores e objetos durante a construção, sem restringir a mobilidade nem a atividade dos trabalhadores. Fabricadas e certificadas segundo a norma EN 1263-1, que estabelece os requisitos de segurança, os métodos de ensaio e as características técnicas de fabrico e instalação.",
        compositionTitle: "Composição das Redes",
        composition:
            "As redes são constituídas por uma malha de cordas de fibras sintéticas ligadas por nós, formando quadrados ou losangos, com uma corda perimetral que absorve a energia cinética das quedas.",
        systemsTitle: "Sistemas Certificados",
        systems: [
            {
                slug: "sistema-tipo-s",
                title: "Sistema Tipo S",
                description: "Proteção horizontal para coberturas industriais, estruturas metálicas e pontes.",
            },
            {
                slug: "sistema-tipo-t",
                title: "Sistema Tipo T",
                description: "Rede inclinada de bandeja, para amortecer impactos e recolher quedas.",
            },
            {
                slug: "sistema-tipo-v",
                title: "Sistema Tipo V",
                description: "Rede vertical suspensa, fechando o perímetro da obra em altura.",
            },
            {
                slug: "sistema-tipo-u",
                title: "Sistema Tipo U",
                description: "Fecho de perímetro vertical, para bordas de piso, escadas e zonas de escavação.",
            },
        ],
        ctaTitle: "Peça o seu orçamento",
        ctaDesc: "Fale connosco para uma avaliação técnica gratuita do seu projeto.",
        ctaButton: "Pedir Orçamento",
        contactHref: "/#contacto",
        basePath: "/construcao-civil",
    },
    es: {
        tag: "Construcción Civil",
        title: "Redes de Seguridad para Trabajo en Altura",
        description:
            "Sistema de protección colectiva para la prevención de riesgos de accidentes de trabajo en altura. Nuestras redes evitan la caída de trabajadores y objetos durante la construcción, sin restringir la movilidad ni la actividad de los trabajadores. Fabricadas y certificadas según la norma EN 1263-1, que establece los requisitos de seguridad, los métodos de ensayo y las características técnicas de fabricación e instalación.",
        compositionTitle: "Composición de las Redes",
        composition:
            "Las redes están formadas por una malla de cuerdas de fibras sintéticas unidas por nudos, formando cuadrados o rombos, con una cuerda perimetral que absorbe la energía cinética de las caídas.",
        systemsTitle: "Sistemas Certificados",
        systems: [
            {
                slug: "sistema-tipo-s",
                title: "Sistema Tipo S",
                description: "Protección horizontal para cubiertas industriales, estructuras metálicas y puentes.",
            },
            {
                slug: "sistema-tipo-t",
                title: "Sistema Tipo T",
                description: "Red inclinada de bandeja, para amortiguar impactos y recoger caídas.",
            },
            {
                slug: "sistema-tipo-v",
                title: "Sistema Tipo V",
                description: "Red vertical suspendida, cerrando el perímetro de la obra en altura.",
            },
            {
                slug: "sistema-tipo-u",
                title: "Sistema Tipo U",
                description: "Cierre de perímetro vertical, para bordes de forjado, escaleras y zonas de excavación.",
            },
        ],
        ctaTitle: "Solicite su presupuesto",
        ctaDesc: "Hable con nosotros para una evaluación técnica gratuita de su proyecto.",
        ctaButton: "Solicitar Presupuesto",
        contactHref: "/es#contacto",
        basePath: "/es/construcao-civil",
    },
};

export function SegurancaOverviewContent({ locale }: SegurancaOverviewContentProps) {
    const t = TEXT[locale];

    return (
        <main className="pt-32 pb-24 bg-white min-h-screen">
            <div className="container mx-auto px-4 md:px-8 max-w-4xl">
                <span className="text-yellow-500 font-bold tracking-wider text-sm uppercase mb-3 block">
                    {t.tag}
                </span>
                <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">{t.title}</h1>
                <p className="text-lg text-slate-600 leading-relaxed mb-10">{t.description}</p>

                <h2 className="text-2xl font-bold text-slate-900 mb-4">{t.compositionTitle}</h2>
                <p className="text-slate-600 leading-relaxed mb-10">{t.composition}</p>

                <h2 className="text-2xl font-bold text-slate-900 mb-6">{t.systemsTitle}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                    {t.systems.map((system) => (
                        <Link
                            key={system.slug}
                            href={`${t.basePath}/${system.slug}`}
                            className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-yellow-400 hover:shadow-md transition-all group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-yellow-50 flex items-center justify-center mb-4 group-hover:bg-yellow-100 transition-colors">
                                <Building2 className="w-6 h-6 text-yellow-600" />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">{system.title}</h3>
                            <p className="text-sm text-slate-600">{system.description}</p>
                        </Link>
                    ))}
                </div>

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
