import Link from "next/link";
import { KitOrderForm } from "./KitOrderForm";

interface KitInstalacaoSectionProps {
    locale: "pt" | "es";
}

const TEXT = {
    pt: {
        title: "Kit de Instalação de Redes de Proteção",
        intro:
            "Se desejar realizar a instalação das redes de proteção sem a ajuda de um profissional, sugerimos o nosso Kit de instalação, composto por:",
        items: ["Rede de proteção", "Corda de fixação", "Ganchos", "Buchas"],
        outro: "Ideal para pequenas áreas, como janelas e varandas simples.",
        whatsappHref:
            "https://wa.me/351910407785?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20Kit%20de%20Instala%C3%A7%C3%A3o",
        whatsappLabel: "Peça o seu kit por WhatsApp",
    },
    es: {
        title: "Kit de Instalación de Redes de Protección",
        intro:
            "Si desea realizar la instalación de las redes de protección sin la ayuda de un profesional, le sugerimos nuestro Kit de instalación, compuesto por:",
        items: ["Red de protección", "Cuerda de fijación", "Ganchos", "Tacos"],
        outro: "Ideal para espacios pequeños, como ventanas y balcones sencillos.",
        whatsappHref:
            "https://wa.me/351910407785?text=Hola%2C%20quisiera%20saber%20m%C3%A1s%20sobre%20el%20Kit%20de%20Instalaci%C3%B3n",
        whatsappLabel: "Solicite su kit por WhatsApp",
    },
};

export function KitInstalacaoSection({ locale }: KitInstalacaoSectionProps) {
    const t = TEXT[locale];

    return (
        <section id="kit-instalacao" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-8 max-w-4xl">
                <h2 className="text-3xl md:text-5xl font-bold mb-8 text-slate-900 text-center">
                    {t.title}
                </h2>

                <div className="prose prose-lg max-w-none text-slate-700 mx-auto">
                    <p>{t.intro}</p>
                    <ul className="list-disc pl-6 space-y-2">
                        {t.items.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                    <p>{t.outro}</p>
                    <p className="mt-8">
                        <Link
                            href={t.whatsappHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-yellow-600 font-bold hover:underline"
                        >
                            {t.whatsappLabel}
                        </Link>
                    </p>
                </div>

                <KitOrderForm locale={locale} />
            </div>
        </section>
    );
}
