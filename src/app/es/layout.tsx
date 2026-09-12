import type { Metadata } from "next";
import { LocaleUpdater } from "@/components/layout/LocaleUpdater";

export const metadata: Metadata = {
  title: "Instalación de Redes de Protección en Galicia y Norte de Portugal | Preventiva Norte",
  description:
    "Especialistas en la instalación de redes de protección para balcones, ventanas y terrazas en Galicia y en todo el Norte de Portugal. Resistencia de 150kg/m² y 2 años de garantía.",
  keywords: [
    "redes de protección galicia",
    "redes de seguridad vigo",
    "redes para balcones pontevedra",
    "redes para gatos a coruña",
    "seguridad infantil ventanas santiago de compostela",
    "instalación redes ourense",
    "redes anti-caídas",
    "protección terrazas lugo",
    "Preventiva Norte",
    "precio redes protección",
    "presupuesto redes seguridad",
    "instaladores redes galicia",
  ],
  authors: [{ name: "Preventiva Norte", url: "https://preventivanorte.pt" }],
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://preventivanorte.pt/es",
    title: "Preventiva Norte | Redes de Protección en Galicia y Norte de Portugal",
    description:
      "Instalación profesional de redes de protección y redes de seguridad en Galicia y Norte de Portugal. Protege a quienes más quieres sin comprometer la estética de tu casa.",
    siteName: "Preventiva Norte",
    images: [
      {
        url: "https://preventivanorte.pt/logo-preventiva-norte.png",
        width: 643,
        height: 482,
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
