import type { Metadata } from "next";
import { SegurancaSystemContent } from "@/components/sections/SegurancaSystemContent";

export const metadata: Metadata = {
    title: "Sistema Certificado Tipo T | Preventiva Norte",
    description:
        "Red inclinada de bandeja certificada EN 1263-1, para amortiguar impactos y recoger personas u objetos en caída durante la construcción.",
    alternates: {
        canonical: "https://preventivanorte.pt/es/construcao-civil/sistema-tipo-t",
    },
};

export default function EsSistemaTipoTPage() {
    return (
        <SegurancaSystemContent
            locale="es"
            tag="Sistema Certificado Tipo T"
            title="Red Inclinada de Bandeja"
            description="Red de seguridad inclinada con cuerda perimetral fija a soportes tipo ménsula horizontal, diseñada para amortiguar el impacto y recoger personas u objetos en caída. Se fija directamente a la estructura durante la construcción, protegiendo superficies inferiores y accesos contra la caída de escombros."
            applications={[
                "Protección de perímetro en obras de construcción",
                "Protección de accesos y zonas de circulación inferiores",
                "Estructuras en fase de construcción con viseras metálicas",
                "Configuraciones personalizadas según las necesidades de captura",
            ]}
            components={[
                {
                    title: "Visera T-Evo",
                    description: "Estructura metálica estándar de 3m x 6m con fijación a la losa.",
                },
                {
                    title: "Red de seguridad certificada (EN 1263-1)",
                    description:
                        "Fabricada en Portugal, con múltiples opciones de capas según el tipo de protección necesaria.",
                },
            ]}
            standard="EN 1263-1:2014"
        />
    );
}
