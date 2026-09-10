"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";
import { usePathname } from "next/navigation";
import { es as esDict } from "@/dictionaries/es";

export function Footer() {
    const pathname = usePathname();
    const isES = pathname.startsWith("/es");
    const dict = isES ? esDict.footer : {
        description:
            "Especialistas em instalação de redes de proteção de alta resistência no Porto e Norte de Portugal. Segurança certificada para varandas, janelas, terraços, crianças e animais de estimação.",
        quickLinksTitle: "Links Rápidos",
        protectionForTitle: "Proteção Para",
        contactTitle: "Contacto",
        copyright: "Todos os direitos reservados.",
        legalNotice: "Aviso Legal",
        privacyPolicy: "Política de Privacidade",
        cookies: "Cookies",
        mobileLabel: "Porto",
        serviceArea: "Porto e Área Metropolitana.",
        serviceAreaSub: "Serviço em todo o Norte de Portugal.",
        quickLinks: [
            { label: "Início", href: "/" },
            { label: "Testes e Certificações", href: "/testes-certificaciones" },
            { label: "Os Nossos Serviços", href: "/#servicios" },
            { label: "Contacto", href: "/#contacto" },
        ],
        protectionLinks: [
            { label: "Segurança Infantil", href: "/proteccion#ninos" },
            { label: "Redes para Gatos", href: "/proteccion#gatos" },
            { label: "Controlo de Aves (Pombos)", href: "/proteccion#aves" },
            { label: "Terraços e Varandas", href: "/#servicios" },
            { label: "Janelas e Escadas", href: "/#servicios" },
        ],
    };
    const privacyHref = isES ? "/es/politica-privacitat" : "/politica-privacidade";
    const homeHref = isES ? "/es" : "/";
    // Locale-aware link resolver: dict.quickLinks/protectionLinks store
    // unprefixed (PT-style) paths; prepend the ES basePath so they resolve
    // under /es on the Spanish site. No-op for PT (basePath === "").
    const basePath = isES ? "/es" : "";
    const localizeHref = (href: string) => (href === "/" ? homeHref : `${basePath}${href}`);

    return (
        <footer className="bg-[#4d2a36] text-gray-300 pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="space-y-4">
                        <Link href={homeHref} className="inline-block relative">
                            <Image
                                src="/logo-preventiva-norte.png"
                                alt="Preventiva Norte Logo"
                                width={180}
                                height={50}
                                className="h-14 w-auto object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
                            />
                        </Link>
                        <p className="text-sm leading-relaxed">
                            {dict.description}
                        </p>
                        <div className="flex gap-4 pt-2">
                            <a href="https://www.facebook.com/preventivanorteredesdeprotecao" className="hover:text-yellow-400 transition-colors" target="_blank" rel="noopener noreferrer">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="https://www.instagram.com/preventivanorte" className="hover:text-rose-500 transition-colors" target="_blank" rel="noopener noreferrer">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold text-white mb-6">{dict.quickLinksTitle}</h3>
                        <ul className="space-y-3 text-sm">
                            {dict.quickLinks.map((link) => (
                                <li key={link.href + link.label}>
                                    <Link href={localizeHref(link.href)} className="hover:text-yellow-400 transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-white mb-6">{dict.protectionForTitle}</h3>
                        <ul className="space-y-3 text-sm">
                            {dict.protectionLinks.map((link) => (
                                <li key={link.href + link.label}>
                                    <Link href={localizeHref(link.href)} className="hover:text-yellow-400 transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-white mb-6">{dict.contactTitle}</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <Phone className="w-5 h-5 text-yellow-400 shrink-0 mt-1" />
                                <div>
                                    <span className="text-xs text-slate-400 font-bold uppercase block">{dict.mobileLabel}</span>
                                    {/* Unconfirmed — live site shows 910 407 485, one digit differs. Confirm with client before launch. */}
                                    <a href="tel:+351910407785" className="hover:text-white transition-colors">Móvil: 910 407 785</a>
                                </div>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-yellow-400 shrink-0" />
                                <span>comercial@preventivanorte.pt</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-yellow-400 shrink-0" />
                                <span>{dict.serviceArea}<br /><span className="text-slate-500">{dict.serviceAreaSub}</span></span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
                    <p>&copy; {new Date().getFullYear()} Preventiva Norte. {dict.copyright}</p>
                    <div className="flex gap-6">
                        <Link href={privacyHref} className="hover:text-white transition-colors">{dict.legalNotice}</Link>
                        <Link href={privacyHref} className="hover:text-white transition-colors">{dict.privacyPolicy}</Link>
                        <Link href={privacyHref} className="hover:text-white transition-colors">{dict.cookies}</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
