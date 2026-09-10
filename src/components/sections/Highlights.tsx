"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Scale, FileText, PlayCircle, Heart, ArrowUpRight, X, type LucideIcon } from "lucide-react";
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
    const [playingVideo, setPlayingVideo] = useState<HighlightItem | null>(null);

    return (
        <section className="py-20 bg-gray-50">
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
                        const isPlayableVideo = item.kind === "video" && item.href !== "#";
                        const cardInner = (
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="w-14 h-14 rounded-full bg-yellow-500/15 flex items-center justify-center mb-6 group-hover:bg-yellow-500/25 transition-colors">
                                    <Icon className="w-7 h-7 text-yellow-400" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-slate-300 leading-relaxed flex-grow">
                                    {item.description}
                                </p>
                                {item.kind === "video" && !isPlayableVideo && (
                                    <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-yellow-400 bg-yellow-500/10 px-3 py-1.5 rounded-full w-fit">
                                        <PlayCircle className="w-3.5 h-3.5" /> {dict.comingSoonLabel}
                                    </span>
                                )}
                                {isPlayableVideo && (
                                    <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-yellow-400 group-hover:gap-2 transition-all w-fit">
                                        <PlayCircle className="w-4 h-4" /> {dict.watchLabel}
                                    </span>
                                )}
                                {item.kind !== "video" && (
                                    <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-yellow-400 group-hover:gap-2 transition-all w-fit">
                                        <ArrowUpRight className="w-4 h-4" />
                                    </span>
                                )}
                            </div>
                        );

                        const cardClass =
                            "relative overflow-hidden bg-[#4d2a36] p-8 rounded-2xl border border-white/10 hover:border-yellow-400/50 hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full";

                        const watermark = (
                            <Icon className="absolute -right-4 -bottom-4 w-32 h-32 text-white/5 group-hover:text-yellow-500/10 transition-colors pointer-events-none" />
                        );

                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                {isPlayableVideo ? (
                                    <button
                                        type="button"
                                        onClick={() => setPlayingVideo(item)}
                                        className={`${cardClass} w-full text-left`}
                                    >
                                        {watermark}
                                        {cardInner}
                                    </button>
                                ) : item.kind === "video" ? (
                                    <div className={cardClass}>
                                        {watermark}
                                        {cardInner}
                                    </div>
                                ) : (
                                    <Link
                                        href={item.href}
                                        target={item.kind === "external" ? "_blank" : undefined}
                                        rel={item.kind === "external" ? "noopener noreferrer" : undefined}
                                        className={cardClass}
                                    >
                                        {watermark}
                                        {cardInner}
                                    </Link>
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {playingVideo && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                    onClick={() => setPlayingVideo(null)}
                >
                    <div className="relative w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
                        <button
                            type="button"
                            onClick={() => setPlayingVideo(null)}
                            aria-label="Fechar"
                            className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white transition-colors"
                        >
                            <X className="w-7 h-7" />
                        </button>
                        <video
                            src={playingVideo.href}
                            controls
                            autoPlay
                            className="w-full max-h-[80vh] rounded-xl bg-black"
                        />
                    </div>
                </div>
            )}
        </section>
    );
}
