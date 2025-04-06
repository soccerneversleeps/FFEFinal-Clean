/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // This will suppress hydration warnings in development
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2,
  },
  // Suppress hydration warnings
  compiler: {
    // Suppress the "Warning: Prop `...` did not match" errors
    reactRemoveProperties: process.env.NODE_ENV === 'production',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'example.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'another-domain.com',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig 