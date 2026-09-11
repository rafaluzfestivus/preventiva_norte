import type { Metadata } from "next";
import { SegurancaSystemContent } from "@/components/sections/SegurancaSystemContent";

export const metadata: Metadata = {
    title: "Cierre de Perímetro | Preventiva Norte",
    description:
        "Red de cierre de perímetro certificada EN 1263-1, para plantas despejadas durante la instalación de ventanas, escaleras y cajas de ascensor.",
    alternates: {
        canonical: "https://preventivanorte.pt/es/construcao-civil/fechamento-perimetro",
    },
};

export default function EsFechamentoPerimetroPage() {
    return (
        <SegurancaSystemContent
            locale="es"
            tag="Sistema Certificado Cierre de Perímetro"
            title="Cierre de Perímetro"
            description="Sistema de red de seguridad diseñado para evitar caídas, utilizado en el cierre del perímetro de edificios en plantas ya despejadas. Restringe el acceso a zonas de riesgo, protegiendo huecos durante las fases de instalación de ventanas, escaleras y cajas de ascensor."
            images={["/seguranca-perimetral-1.jpg", "/seguranca-perimetral-2.jpg"]}
            applications={[
                "Protección durante la instalación de ventanas",
                "Protección de huecos de escaleras",
                "Protección de cajas de ascensor",
                "Combinación con el Sistema Tipo V en la demolición de plantas inferiores, evitando la caída de escombros y elementos estructurales",
            ]}
            components={[
                {
                    title: "Red de cierre de perímetro",
                    description: "Impide el acceso y la caída de personas en zonas de riesgo.",
                },
                {
                    title: "Red antiescombros (opcional)",
                    description: "Impide la proyección de partículas y pequeños escombros durante los trabajos.",
                },
            ]}
            standard="EN 1263-1"
        />
    );
}
