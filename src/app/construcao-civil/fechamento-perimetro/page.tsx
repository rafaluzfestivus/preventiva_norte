import type { Metadata } from "next";
import { SegurancaSystemContent } from "@/components/sections/SegurancaSystemContent";

export const metadata: Metadata = {
    title: "Fechamento de Perímetro | Preventiva Norte",
    description:
        "Rede de fecho de perímetro certificada EN 1263-1, para pisos desimpedidos durante a instalação de janelas, escadas e caixas de elevador.",
    alternates: {
        canonical: "https://preventivanorte.pt/construcao-civil/fechamento-perimetro",
    },
};

export default function FechamentoPerimetroPage() {
    return (
        <SegurancaSystemContent
            locale="pt"
            tag="Sistema Certificado Fechamento de Perímetro"
            title="Fechamento de Perímetro"
            description="Sistema de rede de segurança concebido para evitar quedas, utilizado no fecho do perímetro de edifícios em pisos já desimpedidos. Restringe o acesso a zonas de risco, protegendo aberturas durante fases de instalação de janelas, escadas e caixas de elevador."
            images={["/seguranca-perimetral-1.jpg", "/seguranca-perimetral-2.jpg"]}
            applications={[
                "Proteção durante a instalação de janelas",
                "Proteção de vãos de escadas",
                "Proteção de caixas de elevador",
                "Combinação com o Sistema Tipo V na demolição de pisos inferiores, evitando a queda de destroços e elementos estruturais",
            ]}
            components={[
                {
                    title: "Rede de fecho de perímetro",
                    description: "Impede o acesso e a queda de pessoas em zonas de risco.",
                },
                {
                    title: "Rede anti-detritos (opcional)",
                    description: "Impede a projeção de partículas e pequenos destroços durante os trabalhos.",
                },
            ]}
            standard="EN 1263-1"
        />
    );
}
