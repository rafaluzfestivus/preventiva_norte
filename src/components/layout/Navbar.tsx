"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

function getLocaleFromPath(pathname: string): "pt" | "es" {
    return pathname.startsWith("/es") ? "es" : "pt";
}

// The privacy-policy page is the one exception to the "same slug after the
// /es prefix" assumption below: PT and ES use different slugs
// (politica-privacidade vs politica-privacitat), so it needs an explicit
// mapping rather than the generic prefix logic.
const PRIVACY_PATH_OVERRIDES: Record<string, string> = {
    "/politica-privacidade": "/es/politica-privacitat",
    "/es/politica-privacitat": "/politica-privacidade",
};

function getAlternatePath(pathname: string, targetLocale: "pt" | "es"): string {
    const currentLocale = getLocaleFromPath(pathname);
    if (currentLocale === targetLocale) return pathname;

    if (pathname in PRIVACY_PATH_OVERRIDES) {
        return PRIVACY_PATH_OVERRIDES[pathname];
    }

    if (targetLocale === "es") {
        return "/es" + pathname;
    } else {
        return pathname.replace(/^\/es/, "") || "/";
    }
}

const navConfig = {
    pt: {
        links: [
            { name: "Início", href: "/" },
            { name: "Sobre Nós", href: "/#sobre-nosotros" },
            { name: "Certificações", href: "/testes-certificaciones" },
            { name: "Proteção", href: "/proteccion" },
            { name: "Serviços", href: "/#servicios" },
            { name: "Kit de Instalação", href: "/kit-instalacao" },
            { name: "Contacto", href: "/#contacto" },
        ],
        cta: "Ligar Agora",
        ctaMobile: "Pedir Orçamento",
        ctaHref: "/#contacto",
        openMenu: "Abrir menu",
    },
    es: {
        links: [
            { name: "Inicio", href: "/es" },
            { name: "Nosotros", href: "/es#sobre-nosotros" },
            { name: "Certificaciones", href: "/es/testes-certificaciones" },
            { name: "Protección", href: "/es/proteccion" },
            { name: "Servicios", href: "/es#servicios" },
            { name: "Kit de Automontaje", href: "/es/kit-instalacao" },
            { name: "Contacto", href: "/es#contacto" },
        ],
        cta: "Llamar Ahora",
        ctaMobile: "Solicitar Presupuesto",
        ctaHref: "/es#contacto",
        openMenu: "Abrir menú",
    },
};

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const locale = getLocaleFromPath(pathname);
    const config = navConfig[locale];

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 0);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const ptPath = getAlternatePath(pathname, "pt");
    const esPath = getAlternatePath(pathname, "es");

    // Only the home and Proteção pages open on a full-bleed dark hero.
    // Every other page (kit, legal, certifications, condo-law resource)
    // starts on a light background, so the transparent/white navbar
    // variant would render invisible there — force the opaque variant
    // on those pages regardless of scroll position.
    const hasDarkHero = pathname === "/" || pathname === "/es" || pathname === "/proteccion" || pathname === "/es/proteccion";
    const overDarkHero = hasDarkHero && !scrolled;

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${
            overDarkHero ? "bg-transparent py-6" : "bg-white shadow-lg border-b border-gray-100 py-4"
        }`}>
            <div className="container mx-auto px-4 md:px-8 flex items-center justify-center relative">
                <div className="hidden md:flex items-center gap-8">
                    {config.links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`font-bold text-base tracking-wide transition-colors hover:text-yellow-400 ${
                                overDarkHero ? "text-white drop-shadow-md hover:text-yellow-300" : "text-[#4d2a36]"
                            }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href={config.ctaHref}
                        className="bg-yellow-500 text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-yellow-600 transition-all flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
                    >
                        <Phone className="w-4 h-4" />
                        {config.cta}
                    </Link>

                    {/* Language Switcher */}
                    <div className={`flex items-center gap-1 text-sm font-bold border rounded-full px-3 py-1.5 transition-colors ${
                        overDarkHero
                            ? "border-white/30 text-white"
                            : "border-[#4d2a36]/30 text-[#4d2a36]"
                    }`}>
                        <Globe className="w-3.5 h-3.5 mr-1 opacity-70" />
                        <Link
                            href={ptPath}
                            className={`transition-opacity ${locale === "pt" ? "opacity-100 underline underline-offset-2" : "opacity-50 hover:opacity-80"}`}
                            aria-label="Versão em Português"
                        >
                            PT
                        </Link>
                        <span className="opacity-30 mx-0.5">|</span>
                        <Link
                            href={esPath}
                            className={`transition-opacity ${locale === "es" ? "opacity-100 underline underline-offset-2" : "opacity-50 hover:opacity-80"}`}
                            aria-label="Versión en Español"
                        >
                            ES
                        </Link>
                    </div>
                </div>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`md:hidden p-2 rounded-lg absolute left-4 ${
                        overDarkHero ? "text-white" : "text-[#4d2a36]"
                    }`}
                    aria-label={config.openMenu}
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>

                {/* Mobile language switcher */}
                <div className={`md:hidden absolute right-4 flex items-center gap-1 text-xs font-bold border rounded-full px-2 py-1 ${
                    overDarkHero ? "border-white/30 text-white" : "border-[#4d2a36]/30 text-[#4d2a36]"
                }`}>
                    <Link
                        href={ptPath}
                        className={`transition-opacity ${locale === "pt" ? "opacity-100" : "opacity-40"}`}
                        aria-label="Português"
                    >
                        PT
                    </Link>
                    <span className="opacity-30">|</span>
                    <Link
                        href={esPath}
                        className={`transition-opacity ${locale === "es" ? "opacity-100" : "opacity-40"}`}
                        aria-label="Español"
                    >
                        ES
                    </Link>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl"
                    >
                        <div className="flex flex-col p-4 space-y-4">
                            {config.links.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-gray-700 font-medium hover:text-yellow-500 px-4 py-2 rounded-lg hover:bg-yellow-50"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4 border-t border-gray-100">
                                <Link
                                    href={config.ctaHref}
                                    onClick={() => setIsOpen(false)}
                                    className="bg-yellow-500 text-white w-full py-3 rounded-lg font-bold flex justify-center items-center gap-2 hover:bg-yellow-600 transition-colors"
                                >
                                    <Phone className="w-5 h-5" />
                                    {config.ctaMobile}
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
