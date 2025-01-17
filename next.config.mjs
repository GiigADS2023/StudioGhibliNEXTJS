/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'image.tmdb.org',  // Domínio do TMDb
      'www.themoviedb.org', // Novo domínio a ser adicionado
      'ghibliapi.vercel.app' // Se necessário, adicione também outros domínios
    ],
  },
};

export default nextConfig;