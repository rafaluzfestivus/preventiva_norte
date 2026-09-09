import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Kit de Instalação de Redes de Proteção | Preventiva Norte",
    description:
        "Kit DIY com rede, corda, ganchos e buchas para instalar você mesmo em janelas e varandas simples.",
    alternates: {
        canonical: "https://preventivanorte.pt/kit-instalacao",
        languages: {
            pt: "https://preventivanorte.pt/kit-instalacao",
            es: "https://preventivanorte.pt/es/kit-instalacao",
        },
    },
    openGraph: {
        url: "https://preventivanorte.pt/kit-instalacao",
        title: "Kit de Instalação de Redes de Proteção | Preventiva Norte",
        description:
            "Kit DIY com rede, corda, ganchos e buchas para instalar você mesmo em janelas e varandas simples.",
        images: [{ url: "https://preventivanorte.pt/logo-preventiva-norte.png", alt: "Preventiva Norte" }],
    },
};

export default function KitInstalacaoPage() {
    return (
        <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-8 text-slate-900">
                Kit de Instalação de Redes de Proteção
            </h1>

            <div className="prose prose-lg max-w-none text-slate-700">
                <p>
                    Se desejar realizar a instalação das redes de proteção sem a ajuda de um
                    profissional, sugerimos o nosso Kit de instalação, composto por:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Rede de proteção</li>
                    <li>Corda de fixação</li>
                    <li>Ganchos</li>
                    <li>Buchas</li>
                </ul>
                <p>Ideal para pequenas áreas, como janelas e varandas simples.</p>
                <p className="mt-8">
                    <a href="https://wa.me/351910407785?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20Kit%20de%20Instala%C3%A7%C3%A3o">
                        Peça o seu kit por WhatsApp
                    </a>
                </p>
            </div>
        </div>
    );
}
