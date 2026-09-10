"use client";

import { motion } from "framer-motion";
import { Scale, FileText, PlayCircle, Heart, type LucideIcon } from "lucide-react";
import Link from "next/link";
import type { SiteDict, HighlightItem } from "@/dictionaries/types";

interface HighlightsProps {
    dict: SiteDict["highlights"];
}

const iconFor = (item: HighlightItem): LucideIcon => {
    if (item.kind === "video") return PlayCircle;
    if (item.kind === "external") return Heart;
    if (item.title.toLowerCase().includes("carta")) return FileText;
    return Scale;
};

export function Highlights({ dict }: HighlightsProps) {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
                        {dict.title}
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        {dict.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {dict.items.map((item, index) => {
                        const Icon = iconFor(item);
                        const cardInner = (
                            <>
                                <div className="bg-yellow-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-yellow-100 transition-colors">
                                    <Icon className="w-8 h-8 text-yellow-500" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-yellow-600 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                    {item.description}
                                </p>
                                {item.kind === "video" && (
                                    <span className="mt-4 inline-block text-xs font-bold uppercase tracking-wide text-yellow-600 bg-yellow-50 px-3 py-1 rounded-full w-fit">
                                        Em breve
                                    </span>
                                )}
                            </>
                        );

                        const cardClass =
                            "bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 group flex flex-col h-full";

                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                {item.kind === "video" ? (
                                    <div className={cardClass}>{cardInner}</div>
                                ) : (
                                    <Link
                                        href={item.href}
                                        target={item.kind === "external" ? "_blank" : undefined}
                                        rel={item.kind === "external" ? "noopener noreferrer" : undefined}
                                        className={cardClass}
                                    >
                                        {cardInner}
                                    </Link>
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
