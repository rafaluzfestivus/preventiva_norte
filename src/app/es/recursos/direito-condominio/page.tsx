import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "¿La Comunidad Puede Prohibir las Redes de Protección? | Preventiva Norte",
    description:
        "Descubra qué dice el Código Civil portugués (artículo 1422) y DECO Proteste sobre la instalación de redes de protección en apartamentos y comunidades de vecinos.",
    alternates: {
        canonical: "https://preventivanorte.pt/es/recursos/direito-condominio",
        languages: {
            pt: "https://preventivanorte.pt/recursos/direito-condominio",
            es: "https://preventivanorte.pt/es/recursos/direito-condominio",
        },
    },
    openGraph: {
        type: "website",
        locale: "es_ES",
        siteName: "Preventiva Norte",
        url: "https://preventivanorte.pt/es/recursos/direito-condominio",
        title: "¿La Comunidad Puede Prohibir las Redes de Protección? | Preventiva Norte",
        description:
            "Descubra qué dice el Código Civil portugués (artículo 1422) y DECO Proteste sobre la instalación de redes de protección en apartamentos y comunidades de vecinos.",
        images: [{ url: "https://preventivanorte.pt/logo-preventiva-norte.png", alt: "Preventiva Norte" }],
    },
};

export default function EsDireitoCondominioPage() {
    return (
        <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-8 text-slate-900">
                ¿La comunidad de vecinos puede prohibir la instalación de redes de protección?
            </h1>

            <div className="prose prose-lg max-w-none text-slate-700">
                <p>
                    Según el artículo 1422 del Código Civil portugués, los propietarios no
                    pueden perjudicar la seguridad, la línea arquitectónica ni el aspecto
                    estético del edificio con obras nuevas. Sin embargo, una red de protección
                    no se considera &laquo;obra nueva&raquo;: es una estructura amovible, sin
                    elementos metálicos visibles, fabricada con filamentos de polietileno
                    entrelazados prácticamente imperceptibles desde el exterior — y puede
                    retirarse fácilmente, ya que se fija con pequeños ganchos junto a la
                    ventana.
                </p>
                <p>
                    En respuesta a una consulta sobre este tema, el departamento jurídico de{" "}
                    <strong>DECO Proteste</strong> (la organización portuguesa de defensa del
                    consumidor) confirmó por escrito que una estructura amovible de este tipo
                    puede instalarse sin necesidad de aprobación previa de la junta de
                    propietarios.
                </p>
                <p>
                    Además, ya existe jurisprudencia favorable: un tribunal consideró que una
                    estructura amovible para acristalar un balcón no afecta a la línea
                    arquitectónica del edificio — el mismo principio aplicable a las redes de
                    protección.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900">Documentos para descargar</h2>
                <ul className="list-disc pl-6 space-y-2">
                    <li>
                        <a href="/documentos/carta-condominio.pdf" target="_blank" rel="noopener noreferrer">
                            Descargue la carta-modelo para presentar a su comunidad de vecinos (PDF)
                        </a>
                    </li>
                    <li>
                        <a href="/documentos/sentenca-favoravel.pdf" target="_blank" rel="noopener noreferrer">
                            Consulte la sentencia del Juzgado de Paz favorable a la instalación de redes (PDF)
                        </a>
                    </li>
                </ul>

                <p className="mt-4">
                    Referencia externa:{" "}
                    <a
                        href="https://www.deco.proteste.pt/casa-energia/condominio/noticias/condominio-nao-decide-rede-na-varanda"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        artículo de DECO Proteste sobre este tema
                    </a>{" "}
                    (en portugués).
                </p>

                <p className="mt-8">
                    ¿Tiene dudas sobre su caso concreto o necesita ayuda para instalar redes de
                    protección en su comunidad de vecinos? Escríbanos por WhatsApp y nuestro
                    equipo le asesora sin compromiso.
                </p>
                <p>
                    <a href="https://wa.me/351910407785?text=Hola%2C%20tengo%20una%20duda%20sobre%20redes%20de%20protecci%C3%B3n%20y%20la%20comunidad%20de%20vecinos">
                        Escríbanos por WhatsApp
                    </a>
                </p>
            </div>
        </div>
    );
}
