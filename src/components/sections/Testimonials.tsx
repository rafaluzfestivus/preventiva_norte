"use client";

import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import type { SiteDict } from "@/dictionaries/types";

interface TestimonialsProps {
    dict: SiteDict["testimonials"];
}

export function Testimonials({ dict }: TestimonialsProps) {
    const testimonials = dict.items;
    const [selectedTestimonial, setSelectedTestimonial] = useState<typeof testimonials[0] | null>(null);
    const [slide, setSlide] = useState(0);

    const goTo = (index: number) => {
        const total = testimonials.length;
        setSlide(((index % total) + total) % total);
    };

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <h2 className="text-3xl md:text-5xl font-bold text-center text-slate-900 mb-16">
                    {dict.title}
                </h2>

                <div className="relative max-w-2xl mx-auto">
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${slide * 100}%)` }}
                        >
                            {testimonials.map((t, index) => (
                                <div key={index} className="w-full shrink-0 px-1">
                                    <div className="bg-gray-50 p-8 rounded-2xl shadow-sm relative flex flex-col min-h-[280px]">
                                        <Quote className="absolute top-6 right-6 w-8 h-8 text-[#4d2a36]/10 fill-[#4d2a36]/10" />
                                        <div className="flex text-yellow-400 mb-4 gap-1">
                                            {[1, 2, 3, 4, 5].map((s) => (
                                                <Star key={s} className="w-4 h-4 fill-yellow-400" />
                                            ))}
                                        </div>
                                        <div className="flex-grow mb-6">
                                            <p className="text-slate-600 italic line-clamp-4">&ldquo;{t.text}&rdquo;</p>
                                            {t.text.length > 150 && (
                                                <button
                                                    onClick={() => setSelectedTestimonial(t)}
                                                    className="text-yellow-600 text-sm font-semibold mt-2 hover:underline focus:outline-none"
                                                >
                                                    {dict.verMas}
                                                </button>
                                            )}
                                        </div>
                                        <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-100">
                                            <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold shrink-0">
                                                {t.name[0]}
                                            </div>
                                            <div className="overflow-hidden">
                                                <h4 className="font-bold text-slate-900 truncate">{t.name}</h4>
                                                <span className="text-sm text-slate-500 truncate block">{t.location}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {testimonials.length > 1 && (
                        <>
                            <button
                                type="button"
                                onClick={() => goTo(slide - 1)}
                                aria-label="Anterior"
                                className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 bg-white shadow-md rounded-full p-2 hover:bg-gray-50 transition-colors"
                            >
                                <ChevronLeft className="w-5 h-5 text-slate-700" />
                            </button>
                            <button
                                type="button"
                                onClick={() => goTo(slide + 1)}
                                aria-label="Próximo"
                                className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 bg-white shadow-md rounded-full p-2 hover:bg-gray-50 transition-colors"
                            >
                                <ChevronRight className="w-5 h-5 text-slate-700" />
                            </button>

                            <div className="flex justify-center gap-2 mt-8">
                                {testimonials.map((_, index) => (
                                    <button
                                        type="button"
                                        key={index}
                                        onClick={() => goTo(index)}
                                        aria-label={`Depoimento ${index + 1}`}
                                        className={`h-2.5 rounded-full transition-all ${index === slide ? "w-6 bg-yellow-500" : "w-2.5 bg-gray-300"}`}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>

            {selectedTestimonial && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                    <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl">
                        <button
                            onClick={() => setSelectedTestimonial(null)}
                            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-slate-500"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                        </button>
                        <div className="flex text-yellow-400 mb-6 gap-1">
                            {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-5 h-5 fill-yellow-400" />)}
                        </div>
                        <p className="text-slate-700 text-lg leading-relaxed mb-8">&ldquo;{selectedTestimonial.text}&rdquo;</p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold text-xl">
                                {selectedTestimonial.name[0]}
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 text-lg">{selectedTestimonial.name}</h4>
                                <span className="text-slate-500">{selectedTestimonial.location}</span>
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-0 -z-10" onClick={() => setSelectedTestimonial(null)} />
                </div>
            )}
        </section>
    );
}
