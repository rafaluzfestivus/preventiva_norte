"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { SiteDict } from "@/dictionaries/types";

interface GalleryProps {
    dict: SiteDict["gallery"];
    photos: string[];
}

export function Gallery({ dict, photos }: GalleryProps) {
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

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {photos.map((src, index) => (
                        <motion.div
                            key={src}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: (index % 12) * 0.03 }}
                            viewport={{ once: true, margin: "150px" }}
                            className="relative aspect-square overflow-hidden rounded-xl bg-slate-200 group"
                        >
                            <Image
                                src={`/galeria/${src}`}
                                alt=""
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                            />
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a href="https://www.instagram.com/preventivanorte" target="_blank" rel="noopener noreferrer" className="text-yellow-600 font-semibold hover:underline">
                        {dict.viewMore}
                    </a>
                </div>
            </div>
        </section>
    );
}
