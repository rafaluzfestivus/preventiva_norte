import type { Metadata } from "next";
import { SegurancaSystemContent } from "@/components/sections/SegurancaSystemContent";

export const metadata: Metadata = {
    title: "Sistema Certificado Tipo U | Preventiva Norte",
    description:
        "Cierre de perímetro vertical certificado EN 1263-1 / EN 13374, para bordes de forjado, escaleras y zonas de excavación.",
    alternates: {
        canonical: "https://preventivanorte.pt/es/construcao-civil/sistema-tipo-u",
    },
};

export default function EsSistemaTipoUPage() {
    return (
        <SegurancaSystemContent
            locale="es"
            tag="Sistema Certificado Tipo U"
            title="Cierre de Perímetro Vertical"
            description="Red conectada a una estructura de soporte para uso vertical, cerrando completamente el perímetro del hueco para impedir caídas. Ideal para proteger zonas de trabajo y circulación, bordes de forjado, escaleras y perímetros de edificios en obras industriales y de excavación."
            applications={[
                "Protección de zonas de trabajo y circulación",
                "Bordes de forjado, escaleras y perímetros de edificios",
                "Obras industriales",
                "Zonas de excavación",
            ]}
            components={[
                {
                    title: "Red de seguridad EN 1263-1 tipo U M100",
                    description: "Poliamida o polipropileno de alta tenacidad.",
                },
                {
                    title: "Soportes de fijación ajustables",
                    description: "Para instalación en distintos tipos de superficie.",
                },
            ]}
            standard="EN 1263-1 / EN 13374 Clase C"
        />
    );
}
