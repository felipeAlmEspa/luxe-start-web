/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Exporta como HTML estático
  basePath: "/luxe-prod", // El nombre del repositorio en GitHub
  assetPrefix: "/luxe-prod", // Asegura que los recursos carguen desde la ruta correcta
  images: {
    unoptimized: true, // Evita la optimización de imágenes en GitHub Pages
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "/felipeAlmEspa/luxeApi/main/assets/**",
      },
    ],
  },
};

module.exports = nextConfig;
