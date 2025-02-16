/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com", // El dominio que usas
        pathname: "/felipeAlmEspa/luxeApi/main/assets/**", // La ruta del archivo en GitHub
      },
    ],
  },
};

module.exports = nextConfig;
