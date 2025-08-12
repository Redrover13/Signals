/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Enable latest features
  },
  typescript: {
    // Allow build to proceed even with TypeScript errors in development
    ignoreBuildErrors: false,
  },
  eslint: {
    // Allow build to proceed even with ESLint errors
    ignoreDuringBuilds: false,
  },
}

module.exports = nextConfig