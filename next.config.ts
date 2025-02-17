/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: "export", // Exportar como sitio estático
  trailingSlash: true, // Agregar "/" al final de las URLs
  images: { unoptimized: true }, // Necesario en exportación estática
  basePath: "/luxe-start-web", // El nombre del repo en GitHub Pages
  assetPrefix: "/luxe-start-web/", // Prefijo para los recursos estáticos
  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,

  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,

  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
};

module.exports = nextConfig;
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: "export", // Exporta como HTML estático
//   basePath: "/luxe-start-web", // Reemplaza con el nombre de tu repo en GitHub
//   assetPrefix: "/luxe-start-web", // Asegura que los archivos estáticos se carguen desde la subcarpeta
//   images: {
//     unoptimized: true, // Desactiva la optimización de imágenes en GitHub Pages
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "raw.githubusercontent.com",
//         pathname: "/felipeAlmEspa/luxeApi/main/assets/**", // Asegúrate de que la ruta esté correcta
//       },
//     ],
//   },
// };

// module.exports = nextConfig;
