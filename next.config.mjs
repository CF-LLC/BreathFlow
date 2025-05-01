/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Configure basePath if your GitHub Pages site is not at the root
  // basePath: '/your-repo-name',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Disable trailing slashes for GitHub Pages compatibility
  trailingSlash: false,
}

export default nextConfig
