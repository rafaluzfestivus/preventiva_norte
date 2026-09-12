import type { Metadata } from "next";
import Image from "next/image";
import { KitOrderForm } from "@/components/sections/KitOrderForm";

export const metadata: Metadata = {
    title: "Kit de Automontaje de Redes de Protección | Preventiva Norte",
    description:
        "Kit de automontaje (hazlo tú mismo) con red, cuerda, ganchos y tacos para instalarlo usted mismo en ventanas y balcones sencillos.",
    alternates: {
        canonical: "https://preventivanorte.pt/es/kit-instalacao",
        languages: {
            pt: "https://preventivanorte.pt/kit-instalacao",
            es: "https://preventivanorte.pt/es/kit-instalacao",
        },
    },
    openGraph: {
        type: "website",
        locale: "es_ES",
        siteName: "Preventiva Norte",
        url: "https://preventivanorte.pt/es/kit-instalacao",
        title: "Kit de Automontaje de Redes de Protección | Preventiva Norte",
        description:
            "Kit de automontaje (hazlo tú mismo) con red, cuerda, ganchos y tacos para instalarlo usted mismo en ventanas y balcones sencillos.",
        images: [{ url: "https://preventivanorte.pt/logo-preventiva-norte.png", alt: "Preventiva Norte" }],
    },
};

export default function EsKitInstalacaoPage() {
    return (
        <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-8 text-slate-900">
                Kit de Automontaje de Redes de Protección a Medida
            </h1>

            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg mb-10">
                <Image
                    src="/foto-kit.jpg"
                    alt="Kit de instalación de red de protección"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            <div className="prose prose-lg max-w-none text-slate-700">
                <p>
                    Si desea realizar la instalación de las redes de protección sin la ayuda de
                    un profesional, le sugerimos nuestro Kit de Automontaje (hazlo tú mismo), compuesto por:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Red de protección</li>
                    <li>Cuerda de fijación</li>
                    <li>Ganchos</li>
                    <li>Tacos</li>
                </ul>
                <p>Ideal para espacios pequeños, como ventanas y balcones sencillos.</p>
                <p className="mt-8">
                    <a href="https://wa.me/351910407485?text=Hola%2C%20quisiera%20saber%20m%C3%A1s%20sobre%20el%20Kit%20de%20Instalaci%C3%B3n">
                        Solicite su kit por WhatsApp
                    </a>
                </p>
            </div>

            <KitOrderForm locale="es" />
        </div>
    );
}
