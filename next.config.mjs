/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/pimpmypixel.github.io',
  assetPrefix: '/pimpmypixel.github.io/',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
