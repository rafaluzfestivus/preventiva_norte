import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            { protocol: "https", hostname: "img.youtube.com" },
        ],
    },
    // `experimental.turbopackUseSystemTlsCerts` (a local-TLS workaround) was
    // removed from Next.js's ExperimentalConfig type as of the 16.3.4 bump
    // (see PREVENTIVA_NORTE_IDENTITY.md) — it no longer exists in this
    // version and broke `tsc --noEmit`/`next build`. este's fork history
    // independently removed the same flag for the same class of reason
    // ("workaround for local TLS interfering with Vercel build").
    async redirects() {
        return [
            // Retired standalone /servicios/* pages consolidated into /proteccion's anchors.
            { source: "/servicios/aves", destination: "/proteccion#aves", permanent: true },
            { source: "/servicios/gatos", destination: "/proteccion#gatos", permanent: true },
            { source: "/servicios/ninos", destination: "/proteccion#ninos", permanent: true },
            // Real indexed URLs from preventivanorte.pt's live page-sitemap.xml
            // (verified 2026-09-09; the site's other 4 sitemaps are spam-injected
            // and excluded — see task-10-brief.md Step 2).
            { source: "/home/es", destination: "/es", permanent: true },
            { source: "/nones", destination: "/es", permanent: true },
        ];
    },
};

export default nextConfig;
