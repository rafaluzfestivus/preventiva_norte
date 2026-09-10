import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { CookieConsent } from "@/components/layout/CookieConsent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Instalação de Redes de Proteção no Porto e Norte | Preventiva Norte",
  description: "Especialistas em instalação de redes de proteção para varandas, janelas e terraços no Porto e em todo o Norte de Portugal. Resistência de 150kg/m² e 2 anos de garantia.",
  keywords: ["redes de proteção porto", "redes de segurança porto", "redes para varandas porto", "redes para gatos porto", "segurança infantil janelas porto", "instalação redes porto", "redes anti-queda", "proteção terraços porto", "Preventiva Norte", "preço redes proteção", "orçamento redes segurança", "instaladores redes porto"],
  authors: [{ name: "Preventiva Norte", url: "https://preventivanorte.pt" }],
  creator: "Preventiva Norte",
  publisher: "Preventiva Norte",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: "https://preventivanorte.pt",
    title: "Preventiva Norte | Redes de Proteção no Porto e Norte de Portugal",
    description: "Instalação profissional de redes de proteção e redes de segurança no Porto e Norte de Portugal. Proteja quem mais ama sem comprometer a estética da sua casa.",
    siteName: "Preventiva Norte",
    images: [
      {
        url: "https://preventivanorte.pt/logo-preventiva-norte.png",
        width: 794,
        height: 794,
        alt: "Logo Preventiva Norte",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Preventiva Norte | Redes de Proteção no Porto e Norte de Portugal",
    description: "Instalação profissional de redes de proteção e redes de segurança no Porto e Norte de Portugal.",
    images: ["https://preventivanorte.pt/logo-preventiva-norte.png"],
  },
  alternates: {
    canonical: "https://preventivanorte.pt",
    languages: {
      "pt": "https://preventivanorte.pt",
      "es": "https://preventivanorte.pt/es",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/logo-preventiva-norte.png",
    shortcut: "/logo-preventiva-norte.png",
    apple: "/logo-preventiva-norte.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
  const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
  const ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;

  const businessJsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Preventiva Norte",
    "image": "https://preventivanorte.pt/logo-preventiva-norte.png",
    "description": "Especialistas em instalação de redes de proteção e redes de segurança para varandas, janelas e terraços no Porto, Braga, Vila Nova de Gaia, Matosinhos, Maia, Gondomar e em todo o Norte de Portugal.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Porto",
      "addressRegion": "Norte",
      "addressCountry": "PT"
    },
    "url": "https://preventivanorte.pt",
    "telephone": "+351253047599",
    "email": "comercial@preventivanorte.pt",
    "priceRange": "$$",
    "areaServed": [
      "Porto",
      "Braga",
      "Vila Nova de Gaia",
      "Matosinhos",
      "Maia",
      "Gondomar",
      "todo o Norte de Portugal"
    ],
    "sameAs": ["https://www.instagram.com/preventivanorte", "https://www.facebook.com/preventivanorteredesdeprotecao"],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "20:00"
    }
  };

  return (
    <html lang="pt" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />

        {/* hreflang is emitted exclusively via each page's Metadata API
            `alternates.languages` export — do not add hardcoded <link
            rel="alternate" hreflang="..."> tags here, they would duplicate
            and can drift out of sync with the per-page metadata. */}

        {/* Google Ads tag — must initialize dataLayer before GTM */}
        {GA_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}');
                  ${ADS_ID ? `gtag('config', '${ADS_ID}');` : ''}
                `,
              }}
            />
          </>
        )}

        {/* Google Tag Manager */}
        {GTM_ID && (
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`,
            }}
          />
        )}

      </head>
      <body className={`${inter.className} antialiased bg-gray-50 flex flex-col min-h-screen`}>
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <WhatsAppButton />
        <CookieConsent />
        <Footer />
      </body>
    </html>
  );
}
