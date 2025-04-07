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
    unoptimized: true, // Disable Next.js image optimization
  },
  // Add this to ensure all assets in public are included
  assetPrefix: '',
}

module.exports = nextConfig 