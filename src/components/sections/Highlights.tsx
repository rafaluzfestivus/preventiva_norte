"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Scale, FileText, PlayCircle, Heart, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { SiteDict, HighlightItem } from "@/dictionaries/types";

interface HighlightsProps {
    dict: SiteDict["highlights"];
}

function HighlightIcon({ item, className }: { item: HighlightItem; className: string }) {
    if (item.group === "partners") return <Heart className={className} />;
    if (item.title.toLowerCase().includes("carta")) return <FileText className={className} />;
    return <Scale className={className} />;
}

function LinkHighlightCard({ item, index, comingSoonLabel }: { item: HighlightItem; index: number; comingSoonLabel: string }) {
    const hasHref = item.href !== "#";

    const cardClass =
        "relative overflow-hidden bg-[#4d2a36] p-8 rounded-2xl border border-white/10 hover:border-yellow-400/50 hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full";

    const inner = (
        <div className="relative z-10 flex flex-col h-full">
            <div className="w-14 h-14 rounded-full bg-yellow-500/15 flex items-center justify-center mb-6 group-hover:bg-yellow-500/25 transition-colors">
                <HighlightIcon item={item} className="w-7 h-7 text-yellow-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
            <p className="text-slate-300 leading-relaxed flex-grow">{item.description}</p>
            {hasHref ? (
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-yellow-400 group-hover:gap-2 transition-all w-fit">
                    <ArrowUpRight className="w-4 h-4" />
                </span>
            ) : (
                <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-yellow-400 bg-yellow-500/10 px-3 py-1.5 rounded-full w-fit">
                    {comingSoonLabel}
                </span>
            )}
        </div>
    );

    const watermark = (
        <HighlightIcon
            item={item}
            className="absolute -right-4 -bottom-4 w-32 h-32 text-white/5 group-hover:text-yellow-500/10 transition-colors pointer-events-none"
        />
    );

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
        >
            {hasHref ? (
                <Link
                    href={item.href}
                    target={item.kind === "external" ? "_blank" : undefined}
                    rel={item.kind === "external" ? "noopener noreferrer" : undefined}
                    className={cardClass}
                >
                    {watermark}
                    {inner}
                </Link>
            ) : (
                <div className={cardClass}>
                    {watermark}
                    {inner}
                </div>
            )}
        </motion.div>
    );
}

function VideoHighlightCard({ item, comingSoonLabel, hoverHint }: { item: HighlightItem; comingSoonLabel: string; hoverHint: string }) {
    const ready = item.href !== "#";
    const videoRef = useRef<HTMLVideoElement>(null);
    const [playing, setPlaying] = useState(false);

    const start = () => {
        if (!ready) return;
        videoRef.current?.play();
        setPlaying(true);
    };

    const stop = () => {
        if (!ready) return;
        videoRef.current?.pause();
        if (videoRef.current) videoRef.current.currentTime = 0;
        setPlaying(false);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            onMouseEnter={start}
            onMouseLeave={stop}
            onClick={() => (playing ? stop() : start())}
            className="relative aspect-video rounded-2xl overflow-hidden bg-[#4d2a36] cursor-pointer group/video"
        >
            {ready && (
                <video
                    ref={videoRef}
                    src={item.href}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 w-full h-full object-cover"
                />
            )}
            <div
                className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent transition-opacity ${
                    playing ? "opacity-60" : "opacity-100"
                }`}
            />
            {ready && !playing && (
                <PlayCircle className="absolute inset-0 m-auto w-14 h-14 text-white/90 drop-shadow-lg pointer-events-none" />
            )}
            <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                {ready ? (
                    !playing && <span className="text-xs text-white/70">{hoverHint}</span>
                ) : (
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-yellow-400 bg-yellow-500/10 px-3 py-1.5 rounded-full w-fit">
                        {comingSoonLabel}
                    </span>
                )}
            </div>
        </motion.div>
    );
}

export function Highlights({ dict }: HighlightsProps) {
    const linkItems = dict.items.filter((item) => item.group === "links");
    const videoItems = dict.items.filter((item) => item.group === "videos");
    const partnerItems = dict.items.filter((item) => item.group === "partners");

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

                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6">
                    {dict.linksGroupTitle}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {linkItems.map((item, index) => (
                        <LinkHighlightCard key={item.title} item={item} index={index} comingSoonLabel={dict.comingSoonLabel} />
                    ))}
                </div>

                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6">
                    {dict.videosGroupTitle}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
                    {videoItems.map((item) => (
                        <VideoHighlightCard key={item.title} item={item} comingSoonLabel={dict.comingSoonLabel} hoverHint={dict.watchLabel} />
                    ))}
                </div>

                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6">
                    {dict.partnersGroupTitle}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {partnerItems.map((item, index) => (
                        <LinkHighlightCard key={item.title} item={item} index={index} comingSoonLabel={dict.comingSoonLabel} />
                    ))}
                </div>
            </div>
        </section>
    );
}
