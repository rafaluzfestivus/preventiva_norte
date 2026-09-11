"use client";

import { motion } from "framer-motion";
import type { SiteDict } from "@/dictionaries/types";

interface AboutUsProps {
    dict: SiteDict["aboutUs"];
}

export function AboutUs({ dict }: AboutUsProps) {
    return (
        <section id="sobre-nosotros" className="py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-8">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-yellow-500 font-bold tracking-wider text-sm uppercase mb-3 block">
                            {dict.tag}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
                            {dict.title} <span className="text-yellow-500">{dict.titleHighlight}</span>
                        </h2>
                    </motion.div>

                    <div className="prose prose-lg max-w-none text-slate-600 leading-relaxed space-y-6">
                        <p className="text-xl font-medium text-slate-800">
                            {dict.p1}
                        </p>
                        <p>{dict.p2}</p>
                        <ul className="space-y-3 not-prose">
                            {dict.categories.map((category) => (
                                <li key={category.title} className="flex flex-wrap gap-x-2">
                                    <span className="font-bold text-slate-900">{category.title}:</span>
                                    <span className="text-slate-600">{category.description}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-lg font-semibold text-slate-800">{dict.closing}</p>
                    </div>

                    <div className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-6">
                        <div className="bg-yellow-50 border border-yellow-100 p-6 rounded-2xl text-center">
                            <h3 className="text-2xl font-bold text-[#4d2a36] mb-1">Porto</h3>
                            <p className="text-slate-500 text-sm font-medium">Preventiva Norte</p>
                        </div>
                        <a
                            href="https://preventivacentro.es"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white p-6 rounded-2xl border border-gray-100 text-center hover:border-yellow-400 hover:shadow-md transition-all"
                        >
                            <h3 className="text-2xl font-bold text-[#4d2a36] mb-1">Madrid</h3>
                            <p className="text-slate-500 text-sm font-medium">Preventiva Centro</p>
                        </a>
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center">
                            <h3 className="text-2xl font-bold text-[#4d2a36] mb-1">Galiza</h3>
                            <p className="text-slate-500 text-sm font-medium">Preventiva Norte</p>
                        </div>
                        <a
                            href="https://preventivasur.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white p-6 rounded-2xl border border-gray-100 text-center hover:border-yellow-400 hover:shadow-md transition-all"
                        >
                            <h3 className="text-2xl font-bold text-[#4d2a36] mb-1">Andaluzia</h3>
                            <p className="text-slate-500 text-sm font-medium">Preventiva Sur</p>
                        </a>
                        <a
                            href="https://preventivaeste.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white p-6 rounded-2xl border border-gray-100 text-center hover:border-yellow-400 hover:shadow-md transition-all"
                        >
                            <h3 className="text-2xl font-bold text-[#4d2a36] mb-1">Barcelona</h3>
                            <p className="text-slate-500 text-sm font-medium">Preventiva Este</p>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
