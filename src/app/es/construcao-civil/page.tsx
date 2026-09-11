import type { Metadata } from "next";
import { SegurancaOverviewContent } from "@/components/sections/SegurancaOverviewContent";

export const metadata: Metadata = {
    title: "Redes de Seguridad para Construcción Civil | Preventiva Norte",
    description:
        "Redes de seguridad certificadas EN 1263-1 para trabajo en altura: sistemas Tipo S, T, V y U para cubiertas, estructuras, fachadas y perímetros de obra.",
    alternates: {
        canonical: "https://preventivanorte.pt/es/construcao-civil",
        languages: {
            pt: "https://preventivanorte.pt/construcao-civil",
            es: "https://preventivanorte.pt/es/construcao-civil",
        },
    },
    openGraph: {
        type: "website",
        locale: "es_ES",
        siteName: "Preventiva Norte",
        url: "https://preventivanorte.pt/es/construcao-civil",
        title: "Redes de Seguridad para Construcción Civil | Preventiva Norte",
        description:
            "Redes de seguridad certificadas EN 1263-1 para trabajo en altura: sistemas Tipo S, T, V y U.",
        images: [{ url: "https://preventivanorte.pt/logo-preventiva-norte.png", alt: "Preventiva Norte" }],
    },
};

export default function EsConstrucaoCivilPage() {
    return <SegurancaOverviewContent locale="es" />;
}
