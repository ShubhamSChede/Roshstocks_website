/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    rules: {
      'react/no-unescaped-entities': 'off',
      '@next/next/no-img-element': 'off',
      'react/display-name': 'off',
      'react-hooks/exhaustive-deps': 'off'
    }
  },
  env: {
    MONGODB_URI: process.env.MONGODB_URI,
  },
  images: {
    domains: ['res.cloudinary.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/drwljhedb/image/upload/**',
      },
    ],
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

