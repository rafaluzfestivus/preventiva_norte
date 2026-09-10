"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { SiteDict } from "@/dictionaries/types";
import { ServiceCarousel } from "./ServiceCarousel";

interface ServicesProps {
    dict: SiteDict["services"];
    basePath?: string;
}

export function Services({ dict, basePath = "" }: ServicesProps) {
    return (
        <section id="servicios" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
                        {dict.title}
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        {dict.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {dict.items.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 group flex flex-col h-full"
                        >
                            <ServiceCarousel photos={service.photos ?? []} alt={service.title} />
                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-yellow-600 transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                                {service.description}
                            </p>
                            {service.href && (
                                <Link href={`${basePath}${service.href}`} className="text-yellow-600 font-bold flex items-center gap-2 hover:gap-3 transition-all mt-auto">
                                    {dict.readMore}
                                </Link>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
