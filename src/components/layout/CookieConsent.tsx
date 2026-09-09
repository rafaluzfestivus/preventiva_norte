"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";

export function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);
    const pathname = usePathname();
    const isES = pathname.startsWith("/es");

    const dict = isES
        ? {
              text: "Utilizamos cookies propias y de terceros para mejorar su experiencia y nuestros servicios, analizando la navegación en nuestro sitio web. Si continúa navegando, consideramos que acepta su uso. Puede obtener más información en nuestra",
              linkText: "Política de Privacidad",
              linkHref: "/es/politica-privacitat",
              accept: "Aceptar",
              close: "Cerrar",
          }
        : {
              text: "Utilizamos cookies próprios e de terceiros para melhorar a sua experiência e os nossos serviços, analisando a navegação no nosso website. Se continuar a navegar, consideramos que aceita a sua utilização. Pode obter mais informação na nossa",
              linkText: "Política de Privacidade",
              linkHref: "/politica-privacidade",
              accept: "Aceitar",
              close: "Fechar",
          };

    useEffect(() => {
        const consent = localStorage.getItem("cookieConsent");
        if (!consent) setIsVisible(true);
    }, []);

    const acceptCookies = () => {
        localStorage.setItem("cookieConsent", "true");
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-[#4d2a36] text-white p-4 z-50 shadow-lg border-t border-[#4d2a36]/50">
            <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-sm text-slate-300">
                    <p>
                        {dict.text}{" "}
                        <Link href={dict.linkHref} className="text-yellow-400 hover:text-yellow-300 underline">
                            {dict.linkText}
                        </Link>.
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    <button
                        onClick={acceptCookies}
                        className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-white text-sm font-bold rounded-full transition-colors whitespace-nowrap"
                    >
                        {dict.accept}
                    </button>
                    <button
                        onClick={() => setIsVisible(false)}
                        className="p-1 hover:bg-white/10 rounded-full transition-colors"
                        aria-label={dict.close}
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
}
