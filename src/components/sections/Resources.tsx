"use client";

import { motion } from "framer-motion";
import { Scale, Package } from "lucide-react";
import Link from "next/link";
import type { SiteDict } from "@/dictionaries/types";

interface ResourcesProps {
    dict: SiteDict["resources"];
}

export function Resources({ dict }: ResourcesProps) {
    const items = [
        {
            icon: <Scale key="scale" className="w-10 h-10 text-yellow-500" />,
            title: dict.condoLawTitle,
            description: dict.condoLawDescription,
            href: dict.condoLawHref,
        },
        {
            icon: <Package key="package" className="w-10 h-10 text-yellow-500" />,
            title: dict.kitTitle,
            description: dict.kitDescription,
            href: dict.kitHref,
        },
    ];

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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {items.map((item, index) => (
                        <motion.div
                            key={item.href}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 group flex flex-col h-full"
                        >
                            <div className="bg-yellow-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-yellow-100 transition-colors">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-yellow-600 transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                                {item.description}
                            </p>
                            <Link href={item.href} className="text-yellow-600 font-bold flex items-center gap-2 hover:gap-3 transition-all mt-auto">
                                {dict.readMore}
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
