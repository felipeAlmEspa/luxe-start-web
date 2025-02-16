/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Exporta como HTML estático
  basePath: "/luxe-prod", // Reemplaza con el nombre de tu repo en GitHub
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
