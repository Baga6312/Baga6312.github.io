/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static export
  basePath: process.env.NODE_ENV === 'production' ? '/baga6312.github.io' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/baga6312.github.io/' : '',
}

module.exports = nextConfig