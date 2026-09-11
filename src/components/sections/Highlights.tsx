"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { PlayCircle, Download } from "lucide-react";
import type { SiteDict, HighlightItem } from "@/dictionaries/types";

interface HighlightsProps {
    dict: SiteDict["highlights"];
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

function DownloadLink({ href, label }: { href: string; label: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center gap-3 p-4 rounded-xl border border-gray-200 hover:border-yellow-400 hover:bg-yellow-50 transition-colors group"
        >
            <div className="w-10 h-10 rounded-lg bg-yellow-50 flex items-center justify-center shrink-0 group-hover:bg-yellow-100 transition-colors">
                <Download className="w-5 h-5 text-yellow-600" />
            </div>
            <span className="font-semibold text-slate-900">{label}</span>
        </a>
    );
}

export function Highlights({ dict }: HighlightsProps) {
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

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-10"
                >
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{dict.legalTitle}</h3>
                    <div className="space-y-4 text-slate-600 leading-relaxed">
                        {dict.legalParagraphs.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                    <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-4">
                        <DownloadLink href="/documentos/carta-condominio.pdf" label={dict.legalCartaLabel} />
                        <DownloadLink href="/documentos/sentenca-favoravel.pdf" label={dict.legalSentencaLabel} />
                    </div>
                </motion.div>
            </div>

            <div className="mt-16">
                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6 text-center">
                    {dict.videosGroupTitle}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    {dict.items.map((item) => (
                        <VideoHighlightCard key={item.title} item={item} comingSoonLabel={dict.comingSoonLabel} hoverHint={dict.watchLabel} />
                    ))}
                </div>
            </div>
        </section>
    );
}
