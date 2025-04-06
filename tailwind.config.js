/** @type {import('next').NextConfig} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A1929',
          dark: '#061220',
          light: '#0F2942',
        },
        blue: {
          DEFAULT: '#0095FF',
        },
        orange: {
          DEFAULT: '#FF5C00',
        },
        green: {
          DEFAULT: '#22C55E',
        },
        teal: {
          DEFAULT: '#00B5AD',
        },
        amber: {
          DEFAULT: '#FFA500',
        },
        purple: {
          DEFAULT: '#8A2BE2',
        },
        yellow: {
          DEFAULT: '#FFD700',
        },
        // Add shadow glow for teal
        boxShadow: {
          'glow-blue': '0 0 15px rgba(0, 150, 255, 0.5)',
          'glow-orange': '0 0 15px rgba(255, 85, 0, 0.5)',
          'glow-teal': '0 0 15px rgba(0, 181, 173, 0.5)',
          'glow-amber': '0 0 15px rgba(255, 165, 0, 0.5)',
          'glow-purple': '0 0 15px rgba(138, 43, 226, 0.5)',
          'glow-yellow': '0 0 15px rgba(255, 215, 0, 0.5)',
        },
      },
    },
  },
  plugins: [],
} 