import type { Metadata } from "next";
import EsProteccioContent from "./CaProteccioContent";

export const metadata: Metadata = {
  title: "Redes de Protección en Porto | Niños, Gatos y Aves",
  description:
    "Protección integral para tu casa en Porto y Norte de Portugal. Redes certificadas para seguridad infantil, protección de gatos y control de aves. Instalación profesional en 24h.",
  keywords: [
    "redes para gatos porto",
    "seguridad infantil porto",
    "control de aves porto",
    "redes de seguridad balcones",
    "protección ventanas niños",
    "Preventiva Norte",
  ],
  alternates: {
    canonical: "https://preventivanorte.pt/es/proteccion",
    languages: {
      pt: "https://preventivanorte.pt/proteccion",
      es: "https://preventivanorte.pt/es/proteccion",
    },
  },
  openGraph: {
    url: "https://preventivanorte.pt/es/proteccion",
    title: "Redes de Protección en Porto | Niños, Gatos y Aves",
    description:
      "Protección integral para tu casa en Porto y Norte de Portugal. Redes certificadas para seguridad infantil, protección de gatos y control de aves.",
    images: [{ url: "https://preventivanorte.pt/logo-preventiva-norte.png", alt: "Preventiva Norte" }],
  },
};

export default function EsProteccionPage() {
  return <EsProteccioContent />;
}
