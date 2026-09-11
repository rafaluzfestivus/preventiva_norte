import type { Metadata } from "next";
import { SegurancaSystemContent } from "@/components/sections/SegurancaSystemContent";

export const metadata: Metadata = {
    title: "Sistema Certificado Tipo V | Preventiva Norte",
    description:
        "Red vertical suspendida certificada EN 1263-1, para cerrar el perímetro de obras de construcción estructural en altura.",
    alternates: {
        canonical: "https://preventivanorte.pt/es/construcao-civil/sistema-tipo-v",
    },
};

export default function EsSistemaTipoVPage() {
    return (
        <SegurancaSystemContent
            locale="es"
            tag="Sistema Certificado Tipo V"
            title="Red Vertical Suspendida"
            description="Sistema de red de seguridad suspendida en vertical, con cuerda perimetral anclada a soportes tipo horca. Diseñada para retener personas u objetos en caída desde plataformas de trabajo, cerrando totalmente el perímetro de la zona de trabajo hasta 6 metros de altura (recomendado 3 metros). Utilizada como protección vertical en obras de construcción estructural."
            applications={[
                "Cierre vertical de perímetros de obra",
                "Protección de fachadas en construcción",
                "Obras de construcción estructural en altura",
            ]}
            components={[
                {
                    title: "Red de seguridad EN 1263-1 tipo V M100",
                    description: "Fabricada en poliamida o polipropileno.",
                },
                {
                    title: "Estructura de soporte tipo horca en acero",
                    description: "Anclaje mediante \"omegas\" de acero corrugado (12mm de diámetro).",
                },
                {
                    title: "Anclaje de la red",
                    description: "Mediante \"U\" de acero corrugado (6mm de diámetro).",
                },
                {
                    title: "Cuerda de amarre certificada (EN 1263-1 tipo G)",
                    description: "Resistencia superior a 20 kN.",
                },
                {
                    title: "Cable de unión certificado (EN 1263-1 tipo O)",
                    description: "Resistencia superior a 7,5 kN.",
                },
            ]}
            standard="EN 1263-1"
        />
    );
}
