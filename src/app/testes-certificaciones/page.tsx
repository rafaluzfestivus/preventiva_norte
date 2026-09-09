import { Metadata } from "next";
import CertificacionesContent from "./CertificacionesContent";

export const metadata: Metadata = {
    title: "Certificaciones y Resistencia de Redes | Preventiva Este",
    description: "Conoce la calidad técnica de nuestras redes de protección en Barcelona. Resistencia de 150kg/m², tratamiento Anti-UV e instalación certificada.",
    keywords: ["certificación redes seguridad", "resistencia mallas protección", "polietileno alta tenacidad", "redes ignífugas barcelona", "Preventiva Este"],
    alternates: {
        canonical: "https://preventivaeste.com/testes-certificaciones",
    },
    openGraph: {
        url: "https://preventivaeste.com/testes-certificaciones",
        title: "Certificaciones y Resistencia de Redes | Preventiva Este",
        description: "Calidad técnica certificada en Barcelona. Resistencia de 150kg/m², tratamiento Anti-UV e instalación profesional.",
        images: [{ url: "https://preventivanorte.pt/logo-preventiva-norte.png", alt: "Preventiva Norte" }],
    },
};

export default function CertificacionesPage() {
    return <CertificacionesContent />;
}
