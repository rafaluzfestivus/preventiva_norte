import type { Metadata } from "next";
import { LocaleUpdater } from "@/components/layout/LocaleUpdater";

export const metadata: Metadata = {
  title: "Instalación de Redes de Protección en Porto y Norte | Preventiva Norte",
  description:
    "Especialistas en la instalación de redes de protección para balcones, ventanas y terrazas en Porto y en todo el Norte de Portugal. Resistencia de 150kg/m² y 2 años de garantía.",
  keywords: [
    "redes de protección porto",
    "redes de seguridad porto",
    "redes para balcones porto",
    "redes para gatos porto",
    "seguridad infantil ventanas porto",
    "instalación redes porto",
    "redes anti-caídas",
    "protección terrazas porto",
    "Preventiva Norte",
    "precio redes protección",
    "presupuesto redes seguridad",
    "instaladores redes porto",
  ],
  authors: [{ name: "Preventiva Norte", url: "https://preventivanorte.pt" }],
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://preventivanorte.pt/es",
    title: "Preventiva Norte | Redes de Protección en Porto y Norte de Portugal",
    description:
      "Instalación profesional de redes de protección y redes de seguridad en Porto y Norte de Portugal. Protege a quienes más quieres sin comprometer la estética de tu casa.",
    siteName: "Preventiva Norte",
    images: [
      {
        url: "https://preventivanorte.pt/logo-preventiva-norte.png",
        width: 800,
        height: 600,
        alt: "Logo Preventiva Norte",
      },
    ],
  },
  alternates: {
    canonical: "https://preventivanorte.pt/es",
    languages: {
      pt: "https://preventivanorte.pt",
      es: "https://preventivanorte.pt/es",
    },
  },
};

export default function EsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <LocaleUpdater locale="es" />
      {children}
    </>
  );
}
