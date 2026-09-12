import type { Metadata } from "next";
import { es } from "@/dictionaries/es";

export const metadata: Metadata = {
  title: "Política de Privacidad | Preventiva Norte",
  description: "Política de Privacidad y Protección de Datos de Preventiva Norte.",
  alternates: {
    canonical: "https://preventivanorte.pt/es/politica-privacitat",
    languages: {
      pt: "https://preventivanorte.pt/politica-privacidade",
      es: "https://preventivanorte.pt/es/politica-privacitat",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "Preventiva Norte",
    url: "https://preventivanorte.pt/es/politica-privacitat",
    title: "Política de Privacidad | Preventiva Norte",
    description: "Política de Privacidad y Protección de Datos de Preventiva Norte.",
    images: [{ url: "https://preventivanorte.pt/logo-preventiva-norte.png", alt: "Preventiva Norte" }],
  },
};

const d = es.privacyPolicy;

export default function EsPrivacidadPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
      <h1 className="text-3xl md:text-5xl font-bold mb-8 text-slate-900">{d.title}</h1>

      <div className="prose prose-lg max-w-none text-slate-700">
        <p>{d.intro}</p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900">{d.s1Title}</h2>
        <p>
          Los datos personales recabados a través de este sitio web son responsabilidad de Preventiva Norte.<br />
          <strong>Correo electrónico de contacto:</strong> comercial@preventivanorte.pt<br />
          <strong>Teléfono:</strong> +351 910 407 485<br />
          Ubicación: Portugal (Prestamos servicio en Galicia y en todo el Norte de Portugal).
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900">{d.s2Title}</h2>
        <p>{d.s2Intro}</p>
        <ul className="list-disc pl-6 space-y-2">
          {d.s2Items.map((item, i) => (
            <li key={i}><strong>{item.split(":")[0]}:</strong>{item.substring(item.indexOf(":") + 1)}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900">{d.s3Title}</h2>
        <p>
          La base legal para el tratamiento de sus datos es su <strong>consentimiento explícito</strong> al enviar un formulario de contacto o aceptar nuestras cookies, así como la <strong>ejecución de un contrato</strong> en caso de contratación de nuestros servicios.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900">{d.s4Title}</h2>
        <p>{d.s4Content}</p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900">{d.s5Title}</h2>
        <p>{d.s5Intro}</p>
        <ul className="list-disc pl-6 space-y-2">
          {d.s5Items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <p className="mt-4">
          Para ejercer estos derechos, puede enviar un correo electrónico a <strong>comercial@preventivanorte.pt</strong> indicando el derecho que desea ejercer.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900">{d.s6Title}</h2>
        <p>{d.s6Content}</p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900">{d.s7Title}</h2>
        <p>{d.s7Content}</p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900">{d.s8Title}</h2>
        <p>{d.s8Content}</p>

        <p className="text-sm text-slate-500 mt-12">
          {d.lastUpdated} {new Date().toLocaleDateString("es-ES")}
        </p>
      </div>
    </div>
  );
}
