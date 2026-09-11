import type { Metadata } from "next";
import { SegurancaSystemContent } from "@/components/sections/SegurancaSystemContent";

export const metadata: Metadata = {
    title: "Sistema Certificado Tipo U | Preventiva Norte",
    description:
        "Fecho de perímetro vertical certificado EN 1263-1 / EN 13374, para bordas de piso, escadas e zonas de escavação.",
    alternates: {
        canonical: "https://preventivanorte.pt/construcao-civil/sistema-tipo-u",
    },
};

export default function SistemaTipoUPage() {
    return (
        <SegurancaSystemContent
            locale="pt"
            tag="Sistema Certificado Tipo U"
            title="Fecho de Perímetro Vertical"
            description="Rede ligada a uma estrutura de suporte para uso vertical, fechando completamente o perímetro do vão para impedir quedas. Ideal para proteger zonas de trabalho e de circulação, bordas de piso, escadas e perímetros de edifícios em obras industriais e de escavação."
            images={["/seguranca-tipo-u-1.jpg", "/seguranca-tipo-u-2.jpg"]}
            applications={[
                "Proteção de zonas de trabalho e circulação",
                "Bordas de piso, escadas e perímetros de edifícios",
                "Obras industriais",
                "Zonas de escavação",
            ]}
            components={[
                {
                    title: "Rede de segurança EN 1263-1 tipo U M100",
                    description: "Poliamida ou polipropileno de alta tenacidade.",
                },
                {
                    title: "Suportes de fixação ajustáveis",
                    description: "Para instalação em diferentes tipos de superfície.",
                },
            ]}
            standard="EN 1263-1 / EN 13374 Classe C"
        />
    );
}
