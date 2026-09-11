import type { Metadata } from "next";
import { SegurancaSystemContent } from "@/components/sections/SegurancaSystemContent";

export const metadata: Metadata = {
    title: "Sistema Certificado Tipo S | Preventiva Norte",
    description:
        "Sistema de proteção horizontal certificado EN 1263-1 para coberturas industriais, estruturas metálicas, pontes e viadutos.",
    alternates: {
        canonical: "https://preventivanorte.pt/construcao-civil/sistema-tipo-s",
    },
};

export default function SistemaTipoSPage() {
    return (
        <SegurancaSystemContent
            locale="pt"
            tag="Sistema Certificado Tipo S"
            title="Proteção Horizontal para Trabalho em Altura"
            description="Sistema de proteção coletiva destinado à proteção horizontal em trabalhos em altura. A instalação é feita na horizontal ou com ligeira inclinação, utilizando diversos componentes de fixação para manter uma tensão uniforme e estabilidade estrutural."
            images={["/seguranca-tipo-s-1.jpg", "/seguranca-tipo-s-2.jpg"]}
            applications={[
                "Coberturas industriais",
                "Estruturas metálicas ou de madeira",
                "Construção de pontes e viadutos",
                "Grandes zonas de proteção horizontal",
                "Trabalhos em altura com risco de queda de pessoas ou objetos",
            ]}
            components={[
                {
                    title: "Rede de segurança certificada (EN 1263-1)",
                    description:
                        "Lado inferior a 5 metros e área mínima superior a 35 m², fabricada em polipropileno ou poliamida de alta tenacidade.",
                },
                {
                    title: "Corda de amarração perimetral (Tipo K)",
                    description: "Certificada com resistência mínima de 30 kN, fixa a rede à estrutura de trabalho.",
                },
                {
                    title: "Corda de ligação (Tipo O)",
                    description: "Une os painéis de rede entre si, com resistência mínima superior a 7,5 kN.",
                },
            ]}
            standard="EN 1263-1"
        />
    );
}
