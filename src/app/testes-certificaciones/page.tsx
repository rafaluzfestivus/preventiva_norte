import { Metadata } from "next";
import CertificacionesContent from "./CertificacionesContent";

export const metadata: Metadata = {
    title: "Certificações e Resistência das Redes | Preventiva Norte",
    description: "Conheça a qualidade técnica das nossas redes de proteção no Porto e Norte de Portugal. Resistência de 150kg/m², tratamento Anti-UV e instalação certificada.",
    keywords: ["certificação redes segurança", "resistência redes proteção", "polietileno alta tenacidade", "redes ignífugas porto", "Preventiva Norte"],
    alternates: {
        canonical: "https://preventivanorte.pt/testes-certificaciones",
        languages: {
            pt: "https://preventivanorte.pt/testes-certificaciones",
            es: "https://preventivanorte.pt/es/testes-certificaciones",
        },
    },
    openGraph: {
        type: "website",
        locale: "pt_PT",
        siteName: "Preventiva Norte",
        url: "https://preventivanorte.pt/testes-certificaciones",
        title: "Certificações e Resistência das Redes | Preventiva Norte",
        description: "Qualidade técnica certificada no Porto e Norte de Portugal. Resistência de 150kg/m², tratamento Anti-UV e instalação profissional.",
        images: [{ url: "https://preventivanorte.pt/logo-preventiva-norte.png", alt: "Preventiva Norte" }],
    },
};

export default function CertificacionesPage() {
    return <CertificacionesContent />;
}
