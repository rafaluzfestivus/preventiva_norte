import type { Metadata } from "next";
import EsCertificacionsContent from "./CaCertificacionsContent";

export const metadata: Metadata = {
  title: "Certificaciones y Resistencia de las Redes | Preventiva Norte",
  description:
    "Conoce la calidad técnica de nuestras redes de protección en Porto y Norte de Portugal. Resistencia de 150kg/m², tratamiento Anti-UV e instalación certificada.",
  keywords: [
    "certificación redes seguridad",
    "resistencia redes protección",
    "polietileno alta tenacidad",
    "redes ignífugas porto",
    "Preventiva Norte",
  ],
  alternates: {
    canonical: "https://preventivanorte.pt/es/testes-certificaciones",
    languages: {
      pt: "https://preventivanorte.pt/testes-certificaciones",
      es: "https://preventivanorte.pt/es/testes-certificaciones",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "Preventiva Norte",
    url: "https://preventivanorte.pt/es/testes-certificaciones",
    title: "Certificaciones y Resistencia de las Redes | Preventiva Norte",
    description:
      "Calidad técnica certificada en Porto y Norte de Portugal. Resistencia de 150kg/m², tratamiento Anti-UV e instalación profesional.",
    images: [{ url: "https://preventivanorte.pt/logo-preventiva-norte.png", alt: "Preventiva Norte" }],
  },
};

export default function EsCertificacionsPage() {
  return <EsCertificacionsContent />;
}
