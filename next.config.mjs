/** @type {import('next').NextConfig} */
const nextConfig = {
  //Output directory
  output: "export",
  //Trailing slash
  trailingSlash: true,
  //React strict mode
  reactStrictMode: true,
  //Target Directory for build
  distDir: "build",
  //Image Optimization (As of now, it is disabled)
  images: {
    unoptimized: true,
  },
  //Environment variables
  env: {
    AUTH_BASE_URL: "https://api.envision.colan.in/envision-lxpj/auth",
    ADMIN_BASE_URL: "https://api.envision.colan.in/envision-lxpj/admin",
    USER_BASE_URL: "https://api.envision.colan.in/envision-lxpj/user",
    PROD_BASE_URL: "https://api.envision.colan.in/envision-lxpj",
  },
};

export default nextConfig;
