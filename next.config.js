/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/oussemabenayech.github.io',
  assetPrefix: '/oussemabenayech.github.io',
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
/* force rebuild */