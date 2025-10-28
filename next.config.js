/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/nandos-india-revamp',
  assetPrefix: '/nandos-india-revamp',
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizeCss: true,
  },
}

module.exports = nextConfig
