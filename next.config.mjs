/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  // Add trailing slashes for better compatibility with GitHub Pages
  trailingSlash: true,
  // Disable image optimization since it requires server components
  images: {
    unoptimized: true,
  },
  // Disable ESLint during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Disable TypeScript type checking during build
  typescript: {
    ignoreBuildErrors: true,
  },
  basePath: isProd ? '/BreathFlow' : '',
  assetPrefix: isProd ? '/BreathFlow' : '',
}

export default nextConfig
