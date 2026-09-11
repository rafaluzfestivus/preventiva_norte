import type { Metadata } from "next";
import { SegurancaSystemContent } from "@/components/sections/SegurancaSystemContent";

export const metadata: Metadata = {
    title: "Sistema Certificado Tipo S | Preventiva Norte",
    description:
        "Sistema de protección horizontal certificado EN 1263-1 para cubiertas industriales, estructuras metálicas, puentes y viaductos.",
    alternates: {
        canonical: "https://preventivanorte.pt/es/construcao-civil/sistema-tipo-s",
    },
};

export default function EsSistemaTipoSPage() {
    return (
        <SegurancaSystemContent
            locale="es"
            tag="Sistema Certificado Tipo S"
            title="Protección Horizontal para Trabajo en Altura"
            description="Sistema de protección colectiva destinado a la protección horizontal en trabajos en altura. La instalación se realiza en horizontal o con ligera inclinación, utilizando diversos componentes de fijación para mantener una tensión uniforme y estabilidad estructural."
            images={["/seguranca-tipo-s-1.jpg", "/seguranca-tipo-s-2.jpg"]}
            applications={[
                "Cubiertas industriales",
                "Estructuras metálicas o de madera",
                "Construcción de puentes y viaductos",
                "Grandes zonas de protección horizontal",
                "Trabajos en altura con riesgo de caída de personas u objetos",
            ]}
            components={[
                {
                    title: "Red de seguridad certificada (EN 1263-1)",
                    description:
                        "Lado inferior a 5 metros y área mínima superior a 35 m², fabricada en polipropileno o poliamida de alta tenacidad.",
                },
                {
                    title: "Cuerda de amarre perimetral (Tipo K)",
                    description: "Certificada con resistencia mínima de 30 kN, fija la red a la estructura de trabajo.",
                },
                {
                    title: "Cuerda de unión (Tipo O)",
                    description: "Une los paneles de red entre sí, con resistencia mínima superior a 7,5 kN.",
                },
            ]}
            standard="EN 1263-1"
        />
    );
}
