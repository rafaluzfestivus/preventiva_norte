"use client";

import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

// Minimal local augmentation for the optional gtag/dataLayer globals — avoids
// bare `any` casts without introducing a project-wide Window type (mirrors
// the WindowWithGtag pattern in ContactSection.tsx).
type WindowWithGtag = Window & {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
};

function trackWhatsAppClick() {
    if (typeof window !== 'undefined' && typeof (window as WindowWithGtag).gtag === 'function') {
        (window as WindowWithGtag).gtag?.('event', 'whatsapp_click', { 'event_category': 'contact' });
    }
    if (typeof window !== 'undefined' && Array.isArray((window as WindowWithGtag).dataLayer)) {
        (window as WindowWithGtag).dataLayer?.push({ 'event': 'whatsapp_click' });
    }
}

export function WhatsAppButton() {
    const [isVisible, setIsVisible] = useState(false);
    const pathname = usePathname();
    const isES = pathname.startsWith("/es");

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 1000);
        return () => clearTimeout(timer);
    }, []);

    const phoneNumber = "351910407485";
    const message = isES
        ? "Hola, quisiera más información sobre las redes de protección."
        : "Olá, gostaria de mais informações sobre as redes de proteção.";
    const ariaLabel = isES ? "Contactar por WhatsApp" : "Contactar via WhatsApp";

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed bottom-6 right-6 z-50">
                    <motion.a
                        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={trackWhatsAppClick}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-green-500 rounded-full shadow-lg hover:shadow-green-500/30 hover:bg-green-600 transition-all relative"
                        aria-label={ariaLabel}
                    >
                        <MessageCircle className="w-8 h-8 text-white fill-white" />
                        <span className="absolute right-0 top-0 flex h-4 w-4 -mt-1 -mr-1">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
                        </span>
                    </motion.a>
                </div>
            )}
        </AnimatePresence>
    );
}
