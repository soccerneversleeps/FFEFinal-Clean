import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#001A2C",
          dark: "#00111D",
          light: "#002A42",
        },
        orange: "#FF5C00",
        blue: "#00A3FF",
        green: "#7ED321",
      },
      boxShadow: {
        "glow-orange": "0 0 15px rgba(255, 92, 0, 0.5)",
        "glow-blue": "0 0 15px rgba(0, 163, 255, 0.5)",
        "glow-green": "0 0 15px rgba(126, 211, 33, 0.5)",
      },
    },
  },
  plugins: [],
}

export default config 