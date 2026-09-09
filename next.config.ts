import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    experimental: {
        turbopackUseSystemTlsCerts: true,
    },
    async redirects() {
        return [
            // Retired standalone /servicios/* pages consolidated into /proteccion's anchors.
            { source: "/servicios/aves", destination: "/proteccion#aves", permanent: true },
            { source: "/servicios/gatos", destination: "/proteccion#gatos", permanent: true },
            { source: "/servicios/ninos", destination: "/proteccion#ninos", permanent: true },
            // Old WordPress URL slugs (Task 10 will verify/add these against
            // Google Search Console for preventivanorte.pt before cutover).
        ];
    },
};

export default nextConfig;
