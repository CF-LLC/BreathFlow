/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Set the correct base path for GitHub Pages
  basePath: process.env.GITHUB_REPOSITORY ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}` : '',
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
  // Add assetPrefix for GitHub Pages
  assetPrefix: process.env.GITHUB_REPOSITORY ? `https://${process.env.GITHUB_REPOSITORY.split('/')[0]}.github.io/${process.env.GITHUB_REPOSITORY.split('/')[1]}` : '',
}

export default nextConfig
