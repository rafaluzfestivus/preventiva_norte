"use client";

import { motion } from "framer-motion";
import { Shield, Sun, Weight, Flame, EyeOff, Anchor, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function CertificacionesContent() {
    const specs = [
        {
            icon: <Sun className="w-12 h-12 text-yellow-500" />,
            title: "Tratamento Anti-UV",
            text: "Equipadas com duplo tratamento Anti-UV e antioxidantes. Suportam a intensa radiação solar sem cristalizar nem perder a sua cor. Este componente técnico é o que nos permite oferecer uma garantia real de durabilidade."
        },
        {
            icon: <Weight className="w-12 h-12 text-yellow-500" />,
            title: "Resistência de 150kg/m²",
            text: "Segurança Mecânica: As nossas redes são testadas para suportar uma pressão de até 150 kg por metro quadrado. Um nível superior aos padrões do mercado, garantindo uma barreira intransponível perante quedas acidentais."
        },
        {
            icon: <Flame className="w-12 h-12 text-yellow-500" />,
            title: "Material Ignífugo",
            text: "Material Não Tóxico e Ignífugo: As nossas redes não são inflamáveis (não propagam o fogo) e são totalmente seguras para o contacto com crianças e animais, cumprindo com as normativas europeias."
        },
        {
            icon: <EyeOff className="w-12 h-12 text-yellow-500" />,
            title: "Impacto Visual Mínimo",
            text: "Com uma espessura otimizada de 0.8mm a 1mm, as nossas redes oferecem um impacto visual mínimo. São aceites pela maioria dos condomínios em Portugal."
        }
    ];

    return (
        <main className="pt-24 min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-[#4d2a36] py-20 text-white relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Segurança Certificada e <br />
                            <span className="text-yellow-400">Qualidade Técnica</span>
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed">
                            Na Preventiva Norte, a segurança não é uma promessa, é uma certificação técnica.
                            Utilizamos materiais de última geração desenhados para resistir às condições climáticas de Portugal.
                        </p>
                    </motion.div>
                </div>
                <div className="absolute top-0 right-0 w-1/2 h-full bg-yellow-500/5 -skew-x-12 translate-x-1/4" />
            </section>

            {/* Technical Detail */}
            <section className="py-20">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Polietileno de Alta Tenacidade (Virgem)</h2>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                As nossas redes são fabricadas com Polietileno de Alta Densidade (PEAD) 100% virgem.
                                Ao contrário do nylon convencional, o nosso material não absorve humidade, o que evita que a rede se debilite com a chuva ou a neve.
                            </p>
                            <div className="space-y-4 text-slate-800">
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="text-yellow-500 w-6 h-6" />
                                    <span className="font-medium">Não absorve água nem apodrece</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="text-yellow-500 w-6 h-6" />
                                    <span className="font-medium">Mantém a tensão mecânica por anos</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="text-yellow-500 w-6 h-6" />
                                    <span className="font-medium">Resistente a agentes químicos e ambientais</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-100 rounded-3xl aspect-video relative overflow-hidden shadow-inner">
                            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                <Shield className="w-32 h-32 opacity-20" />
                            </div>
                            <div className="absolute inset-0 bg-cover bg-center opacity-80" style={{ backgroundImage: "url('/img-1.jpg')" }} />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {specs.map((spec, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all bg-white"
                            >
                                <div className="mb-6">{spec.icon}</div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">{spec.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{spec.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Anchoring System */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
                    <Anchor className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Sistema de Fixação de Alta Performance</h2>
                    <p className="text-xl text-slate-600 leading-relaxed mb-12">
                        Não só a rede é premium; o nosso sistema de ancoragem utiliza buchas expansivas e ganchos de aço galvanizado,
                        desenhados para se fixarem firmemente em tijolo, betão ou estruturas metálicas. Em capoto ou superfícies ocas,
                        usamos buchas químicas e soluções de fixação específicas, garantindo sempre o mesmo nível de segurança sem risco de desprendimento.
                    </p>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20">
                <div className="container mx-auto px-4 md:px-8 text-center">
                    <div className="bg-[#4d2a36] rounded-3xl p-12 text-white shadow-2xl">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Protegemos a sua casa com qualidade certificada?</h2>
                        <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                            Peça uma visita técnica gratuita no Norte de Portugal e comprove a qualidade dos nossos materiais.
                        </p>
                        <Link
                            href="/#contacto"
                            className="inline-block bg-yellow-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-600 transition-all transform hover:scale-105"
                        >
                            Solicitar Orçamento Grátis
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
