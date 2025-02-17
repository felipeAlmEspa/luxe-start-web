/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Exporta como HTML estático
  basePath: "/luxe-start-web/docs", // Reemplaza con el nombre de tu repo en GitHub
  assetPrefix: "/luxe-start-web/docs", // Asegura que los archivos estáticos se carguen desde la subcarpeta
  images: {
    unoptimized: true, // Desactiva la optimización de imágenes en GitHub Pages
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "/felipeAlmEspa/luxeApi/main/assets/**", // Asegúrate de que la ruta esté correcta
      },
    ],
  },
};

module.exports = nextConfig;
