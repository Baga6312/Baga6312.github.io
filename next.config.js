/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // This is crucial for GitHub Pages
  basePath: '',
  assetPrefix: '',
  // Ensure proper file extensions
  experimental: {
    // Remove if using Next.js 14+
  }
}

module.exports = nextConfig