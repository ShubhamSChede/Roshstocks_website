/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    MONGODB_URI: process.env.MONGODB_URI,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      }
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
    minimumCacheTTL: 60,
  },
    // Optimize page loading
    pageExtensions: ['js', 'jsx'],

    // Enable static optimization where possible
    reactStrictMode: true,
    // Experimental features
    experimental: {
      // Enable server actions with proper configuration
      serverActions: {
        bodySizeLimit: '2mb',
        allowedOrigins: ['localhost:3000'],
      },
    },
    // Power pages with static generation when possible
    output: 'standalone'


};



export default nextConfig;

