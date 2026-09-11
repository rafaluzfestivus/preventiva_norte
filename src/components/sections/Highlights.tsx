"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Scale, FileText, PlayCircle, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { SiteDict, HighlightItem } from "@/dictionaries/types";

interface HighlightsProps {
    dict: SiteDict["highlights"];
}

function HighlightIcon({ item, className }: { item: HighlightItem; className: string }) {
    if (item.title.toLowerCase().includes("carta")) return <FileText className={className} />;
    return <Scale className={className} />;
}

function DocumentLinkRow({ item }: { item: HighlightItem }) {
    const hasHref = item.href !== "#";

    const inner = (
        <>
            <div className="w-12 h-12 rounded-xl bg-yellow-50 flex items-center justify-center shrink-0 group-hover:bg-yellow-100 transition-colors">
                <HighlightIcon item={item} className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="flex-grow min-w-0">
                <h3 className="font-bold text-slate-900">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.description}</p>
            </div>
            <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-yellow-600 transition-colors shrink-0" />
        </>
    );

    const rowClass = "flex items-center gap-4 p-6 transition-colors group";

    return hasHref ? (
        <Link
            href={item.href}
            target={item.kind === "external" ? "_blank" : undefined}
            rel={item.kind === "external" ? "noopener noreferrer" : undefined}
            className={`${rowClass} hover:bg-gray-50`}
        >
            {inner}
        </Link>
    ) : (
        <div className={rowClass}>{inner}</div>
    );
}

function VideoHighlightCard({
    item,
    comingSoonLabel,
    hoverHint,
}: {
    item: HighlightItem;
    comingSoonLabel: string;
    hoverHint: string;
}) {
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
            className="relative aspect-video overflow-hidden bg-[#4d2a36] cursor-pointer group/video"
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
            <div className="absolute bottom-6 left-6 right-6">
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

                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6 text-center">
                    {dict.linksGroupTitle}
                </h3>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 divide-y divide-gray-100 overflow-hidden"
                >
                    {linkItems.map((item) => (
                        <DocumentLinkRow key={item.title} item={item} />
                    ))}
                </motion.div>
            </div>

            <div className="mt-16">
                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6 text-center">
                    {dict.videosGroupTitle}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    {videoItems.map((item) => (
                        <VideoHighlightCard key={item.title} item={item} comingSoonLabel={dict.comingSoonLabel} hoverHint={dict.watchLabel} />
                    ))}
                </div>
            </div>
        </section>
    );
}
