import type { Metadata } from "next";
import { SegurancaSystemContent } from "@/components/sections/SegurancaSystemContent";

export const metadata: Metadata = {
    title: "Sistema Certificado Tipo V | Preventiva Norte",
    description:
        "Rede vertical suspensa certificada EN 1263-1, para fechar o perímetro de obras de construção estrutural em altura.",
    alternates: {
        canonical: "https://preventivanorte.pt/construcao-civil/sistema-tipo-v",
    },
};

export default function SistemaTipoVPage() {
    return (
        <SegurancaSystemContent
            locale="pt"
            tag="Sistema Certificado Tipo V"
            title="Rede Vertical Suspensa"
            description="Sistema de rede de segurança suspensa na vertical, com corda perimetral ancorada a suportes tipo forca. Concebida para reter pessoas ou objetos em queda a partir de plataformas de trabalho, fechando totalmente o perímetro da zona de trabalho até 6 metros de altura (recomendado 3 metros). Utilizada como proteção vertical em obras de construção estrutural."
            applications={[
                "Fecho vertical de perímetros de obra",
                "Proteção de fachadas em construção",
                "Obras de construção estrutural em altura",
            ]}
            components={[
                {
                    title: "Rede de segurança EN 1263-1 tipo V M100",
                    description: "Fabricada em poliamida ou polipropileno.",
                },
                {
                    title: "Estrutura de suporte tipo forca em aço",
                    description: "Ancoragem através de \"ómegas\" de aço corrugado (12mm de diâmetro).",
                },
                {
                    title: "Ancoragem da rede",
                    description: "Através de \"U\" de aço corrugado (6mm de diâmetro).",
                },
                {
                    title: "Corda de amarração certificada (EN 1263-1 tipo G)",
                    description: "Resistência superior a 20 kN.",
                },
                {
                    title: "Cabo de ligação certificado (EN 1263-1 tipo O)",
                    description: "Resistência superior a 7,5 kN.",
                },
            ]}
            standard="EN 1263-1"
        />
    );
}
