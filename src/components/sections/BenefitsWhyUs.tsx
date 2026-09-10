// src/components/sections/BenefitsWhyUs.tsx
"use client";

import { CheckCircle2, UserCheck, Clock, FileCheck2 } from "lucide-react";
import { motion } from "framer-motion";
import type { SiteDict } from "@/dictionaries/types";

interface BenefitsWhyUsProps {
    benefits: SiteDict["benefits"];
    whyUs: SiteDict["whyUs"];
}

const reasonIcons = [
    <UserCheck key="uc" className="w-7 h-7 text-yellow-500" />,
    <Clock key="cl" className="w-7 h-7 text-yellow-500" />,
    <FileCheck2 key="fc" className="w-7 h-7 text-yellow-500" />,
];

export function BenefitsWhyUs({ benefits, whyUs }: BenefitsWhyUsProps) {
    return (
        <>
        <section id="beneficios" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <span className="text-yellow-500 font-bold tracking-wider text-sm uppercase mb-2 block">
                            {benefits.tag}
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                            {benefits.title1} <br />
                            <span className="text-yellow-500">{benefits.title2}</span>
                        </h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            {benefits.description}
                        </p>
                        <ul className="space-y-4">
                            {benefits.items.map((benefit, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                                    <span className="text-slate-700 font-medium">{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:w-1/2 relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <div className="aspect-[4/3] bg-slate-200">
                                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1510563800743-aed236490d08?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center" />
                            </div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            animate={{ y: [0, -10, 0] }}
                            transition={{
                                opacity: { duration: 0.5, delay: 0.6 },
                                x: { duration: 0.5, delay: 0.6 },
                                y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                            }}
                            className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block"
                        >
                            <p className="font-bold text-slate-900 text-lg mb-1">&ldquo;{benefits.quote}&rdquo;</p>
                            <p className="text-slate-500 text-sm">{benefits.quoteDesc}</p>
                            <div className="flex text-yellow-400 mt-2">★★★★★</div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-20 bg-[#4d2a36]">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {whyUs.reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-yellow-400/60 hover:bg-white/10 transition-all group"
                        >
                            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-yellow-500/20 transition-all duration-300">
                                {reasonIcons[index]}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                                {reason.title}
                            </h3>
                            <p className="text-slate-300 leading-relaxed">
                                {reason.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
        </>
    );
}
