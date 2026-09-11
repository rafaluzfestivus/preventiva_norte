"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";
import type { SiteDict } from "@/dictionaries/types";
import { GALLERY_CATEGORY_ORDER, type GalleryCategory } from "@/lib/gallery-categories";

interface GalleryProps {
    dict: SiteDict["gallery"];
    categories: Record<GalleryCategory, string[]>;
}

export function Gallery({ dict, categories }: GalleryProps) {
    const [open, setOpen] = useState<GalleryCategory | null>(null);
    const visibleCategories = GALLERY_CATEGORY_ORDER.filter((cat) => categories[cat]?.length > 0);

    return (
        <section id="galeria" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
                        {dict.title}
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        {dict.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
                    {visibleCategories.map((cat) => (
                        <motion.button
                            key={cat}
                            type="button"
                            onClick={() => setOpen(cat)}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                            viewport={{ once: true }}
                            className="relative aspect-square overflow-hidden rounded-xl bg-slate-200 group text-left"
                        >
                            <Image
                                src={`/galeria/${categories[cat][0]}`}
                                alt={dict.categories[cat]}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                            <div className="absolute bottom-3 left-3 right-3">
                                <span className="block text-white font-bold text-sm md:text-base">
                                    {dict.categories[cat]}
                                </span>
                                <span className="block text-white/70 text-xs">
                                    {categories[cat].length}
                                </span>
                            </div>
                        </motion.button>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a href="https://www.instagram.com/preventivanorte" target="_blank" rel="noopener noreferrer" className="text-yellow-600 font-semibold hover:underline">
                        {dict.viewMore}
                    </a>
                </div>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/90 overflow-y-auto"
                        onClick={() => setOpen(null)}
                    >
                        <div className="container mx-auto px-4 md:px-8 py-16" onClick={(e) => e.stopPropagation()}>
                            <div className="flex items-center justify-between mb-8 sticky top-0 pt-2">
                                <h3 className="text-2xl font-bold text-white">{dict.categories[open]}</h3>
                                <button
                                    type="button"
                                    onClick={() => setOpen(null)}
                                    aria-label={dict.closeLabel}
                                    className="text-white/80 hover:text-white transition-colors"
                                >
                                    <X className="w-8 h-8" />
                                </button>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {categories[open].map((file) => (
                                    <div key={file} className="relative aspect-square overflow-hidden rounded-xl bg-slate-800">
                                        <Image
                                            src={`/galeria/${file}`}
                                            alt=""
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 50vw, 25vw"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
