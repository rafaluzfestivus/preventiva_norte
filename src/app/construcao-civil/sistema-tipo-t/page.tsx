import type { Metadata } from "next";
import { SegurancaSystemContent } from "@/components/sections/SegurancaSystemContent";

export const metadata: Metadata = {
    title: "Sistema Certificado Tipo T | Preventiva Norte",
    description:
        "Rede inclinada de bandeja certificada EN 1263-1, para amortecer impactos e recolher pessoas ou objetos em queda durante a construção.",
    alternates: {
        canonical: "https://preventivanorte.pt/construcao-civil/sistema-tipo-t",
    },
};

export default function SistemaTipoTPage() {
    return (
        <SegurancaSystemContent
            locale="pt"
            tag="Sistema Certificado Tipo T"
            title="Rede Inclinada de Bandeja"
            description="Rede de segurança inclinada com corda perimetral fixa a suportes tipo consola horizontal, concebida para amortecer o impacto e recolher pessoas ou objetos em queda. Fixa-se diretamente à estrutura durante a construção, protegendo superfícies inferiores e acessos contra a queda de destroços."
            applications={[
                "Proteção de perímetro em obras de construção",
                "Proteção de acessos e zonas de circulação inferiores",
                "Estruturas em fase de construção com viseiras metálicas",
                "Configurações personalizadas para diferentes necessidades de captura",
            ]}
            components={[
                {
                    title: "Viseira T-Evo",
                    description: "Estrutura metálica padrão de 3m x 6m com fixação à laje.",
                },
                {
                    title: "Rede de segurança certificada (EN 1263-1)",
                    description:
                        "Fabricada em Portugal, com múltiplas opções de camadas conforme o tipo de proteção necessária.",
                },
            ]}
            standard="EN 1263-1:2014"
        />
    );
}
