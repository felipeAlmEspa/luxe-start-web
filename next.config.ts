import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Enable static exports.
   *
   * @see https://nextjs.org/docs/app/building-your-application/deploying/static-exports
   */
  output: "export",

  /**
   * Set base path. This is the slug of your GitHub repository.
   *
   * @see https://nextjs.org/docs/app/api-reference/next-config-js/basePath
   */
  basePath: "/luxe-start-web",

  /**
   * Disable server-based image optimization. Next.js does not support
   * dynamic features with static exports.
   *
   * @see https://nextjs.org/docs/app/api-reference/components/image#unoptimized
   */
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

// /**
//  * @type {import('next').NextConfig}
//  */
// const nextConfig = {
//   output: "export", // Exportar como sitio estático
//   trailingSlash: true, // Agregar "/" al final de las URLs
//   images: { unoptimized: true }, // Necesario en exportación estática
//   basePath: "/luxe-start-web", // El nombre del repo en GitHub Pages
//   assetPrefix: "/luxe-start-web/", // Prefijo para los recursos estáticos
// };

// module.exports = nextConfig;
