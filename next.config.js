/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static export
  basePath: process.env.NODE_ENV === 'production' ? '/baga6312.github.io' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/baga6312.github.io/' : '',
}

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export',
  basePath: isProd ? '' : '', // Empty for GitHub Pages root
  assetPrefix: isProd ? '' : '', // Empty for GitHub Pages root
  images: {
    unoptimized: true, // Required for static export
  },
}
