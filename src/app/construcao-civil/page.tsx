import type { Metadata } from "next";
import { SegurancaOverviewContent } from "@/components/sections/SegurancaOverviewContent";

export const metadata: Metadata = {
    title: "Redes de Segurança para Construção Civil | Preventiva Norte",
    description:
        "Redes de segurança certificadas EN 1263-1 para trabalho em altura: sistemas Tipo S, T, V e U para coberturas, estruturas, fachadas e perímetros de obra.",
    alternates: {
        canonical: "https://preventivanorte.pt/construcao-civil",
        languages: {
            pt: "https://preventivanorte.pt/construcao-civil",
            es: "https://preventivanorte.pt/es/construcao-civil",
        },
    },
    openGraph: {
        type: "website",
        locale: "pt_PT",
        siteName: "Preventiva Norte",
        url: "https://preventivanorte.pt/construcao-civil",
        title: "Redes de Segurança para Construção Civil | Preventiva Norte",
        description:
            "Redes de segurança certificadas EN 1263-1 para trabalho em altura: sistemas Tipo S, T, V e U.",
        images: [{ url: "https://preventivanorte.pt/logo-preventiva-norte.png", alt: "Preventiva Norte" }],
    },
};

export default function ConstrucaoCivilPage() {
    return <SegurancaOverviewContent locale="pt" />;
}
