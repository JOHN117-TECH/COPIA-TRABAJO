import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{
      protocol: "https",
      hostname: "static.stage.spradling.group",
      pathname: "/**",
    },
    {
      protocol: "https",
      hostname: "img.freepik.com",
      pathname: "/**",
    }], // Agrega el dominio aquí
    domains: ['img.freepik.com', 'www.caritas.org.mx', 'encrypted-tbn0.gstatic.com', 'concepto.de', 's3-us-west-2.amazonaws.com', 'spradling.group', 'static.spradling.group', 'via.placeholder.com'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
