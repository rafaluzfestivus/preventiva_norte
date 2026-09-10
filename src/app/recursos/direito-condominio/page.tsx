import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "O Condomínio Pode Proibir Redes de Proteção? | Preventiva Norte",
    description:
        "Saiba o que diz o Código Civil Português (artigo 1422.º) e a DECO Proteste sobre a instalação de redes de proteção em apartamentos e condomínios.",
    alternates: {
        canonical: "https://preventivanorte.pt/recursos/direito-condominio",
        languages: {
            pt: "https://preventivanorte.pt/recursos/direito-condominio",
            es: "https://preventivanorte.pt/es/recursos/direito-condominio",
        },
    },
    openGraph: {
        type: "website",
        locale: "pt_PT",
        siteName: "Preventiva Norte",
        url: "https://preventivanorte.pt/recursos/direito-condominio",
        title: "O Condomínio Pode Proibir Redes de Proteção? | Preventiva Norte",
        description:
            "Saiba o que diz o Código Civil Português (artigo 1422.º) e a DECO Proteste sobre a instalação de redes de proteção em apartamentos e condomínios.",
        images: [{ url: "https://preventivanorte.pt/logo-preventiva-norte.png", alt: "Preventiva Norte" }],
    },
};

export default function DireitoCondominioPage() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "O condomínio pode proibir a instalação de redes de proteção?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Não. Segundo o artigo 1422.º do Código Civil e um parecer da DECO Proteste, uma rede de proteção é uma estrutura amovível que não se enquadra como obra nova, não exigindo aprovação prévia da assembleia de condóminos.",
                },
            },
        ],
    };

    return (
        <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <h1 className="text-3xl md:text-5xl font-bold mb-8 text-slate-900">
                O condomínio pode proibir a instalação de redes de proteção?
            </h1>

            <div className="prose prose-lg max-w-none text-slate-700">
                <p>
                    Segundo o artigo 1422.º do Código Civil Português, os condóminos não podem
                    prejudicar a segurança, a linha arquitetónica ou o arranjo estético do
                    edifício com obras novas. No entanto, uma rede de proteção não se enquadra
                    como &ldquo;obra nova&rdquo;: é uma estrutura amovível, sem elementos
                    metálicos aparentes, feita de filamentos de polietileno entrelaçados que são
                    praticamente impercetíveis vistos do exterior — e pode ser retirada
                    facilmente, já que é fixada com pequenos ganchos junto à janela.
                </p>
                <p>
                    Em resposta a uma consulta sobre este tema, o setor jurídico da{" "}
                    <strong>DECO Proteste</strong> confirmou por escrito que uma estrutura
                    amovível deste tipo pode avançar sem necessidade de aprovação prévia da
                    assembleia de condóminos.
                </p>
                <p>
                    Também já existe jurisprudência favorável: um tribunal considerou que uma
                    estrutura amovível para envidraçar uma varanda não afeta a linha
                    arquitetónica do edifício — o mesmo princípio que se aplica às redes de
                    proteção.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900">Documentos para descarregar</h2>
                <ul className="list-disc pl-6 space-y-2">
                    <li id="carta-condominio">
                        <a href="/documentos/carta-condominio.pdf" target="_blank" rel="noopener noreferrer">
                            Descarregue a carta-modelo para apresentar ao seu condomínio (PDF)
                        </a>
                    </li>
                    <li id="sentenca">
                        <a href="/documentos/sentenca-favoravel.pdf" target="_blank" rel="noopener noreferrer">
                            Consulte a sentença do Juizado de Paz favorável à instalação de redes (PDF)
                        </a>
                    </li>
                </ul>

                <p className="mt-4">
                    Referência externa:{" "}
                    <a
                        href="https://www.deco.proteste.pt/casa-energia/condominio/noticias/condominio-nao-decide-rede-na-varanda"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        artigo da DECO Proteste sobre este tema
                    </a>
                </p>

                <p className="mt-8">
                    Tem dúvidas sobre o seu caso concreto ou precisa de ajuda a instalar redes de
                    proteção no seu condomínio? Fale connosco por WhatsApp e a nossa equipa
                    esclarece-o sem compromisso.
                </p>
                <p>
                    <a href="https://wa.me/351910407785?text=Ol%C3%A1%2C%20tenho%20uma%20d%C3%BAvida%20sobre%20redes%20de%20prote%C3%A7%C3%A3o%20e%20o%20condom%C3%ADnio">
                        Fale connosco por WhatsApp
                    </a>
                </p>
            </div>
        </div>
    );
}
