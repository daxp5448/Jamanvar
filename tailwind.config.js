/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        jamanvar: {
          navy: {
            50: "#e9edf3",
            100: "#c7d2e2",
            200: "#9fb2cd",
            300: "#7691b8",
            400: "#5374a5",
            500: "#345892",
            600: "#274577",
            700: "#1b325c",
            800: "#102041",
            900: "#091528",
            950: "#050b16",
          },
          cream: {
            50: "#fdfcf9",
            100: "#faf7f0",
            200: "#f5efe1",
            300: "#ede4cf",
            400: "#ded0b6",
            500: "#caba9b",
            600: "#b09f7e",
            700: "#8f7e5f",
            800: "#6e6047",
            900: "#4f4431",
          },
          saffron: {
            50: "#fff8eb",
            100: "#fdeec8",
            200: "#fcdb8d",
            300: "#f9c152",
            400: "#f5a723",
            500: "#e88515",
            600: "#cc660d",
            700: "#a3480c",
            800: "#82370f",
            900: "#6b2f10",
          },
          green: {
            50: "#f0fdf4",
            100: "#dcfce7",
            200: "#bbf7d0",
            300: "#86efac",
            400: "#4ade80",
            500: "#22c55e",
            600: "#16a34a",
            700: "#15803d",
            800: "#166534",
            900: "#14532d",
          },
        },
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "system-ui", "sans-serif"],
        serif: ["'Cormorant Garamond'", "Georgia", "serif"],
        display: ["'Cormorant Garamond'", "Georgia", "serif"],
        gujarati: ["'Noto Sans Gujarati'", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 2px 10px rgba(9, 21, 40, 0.04), 0 1px 3px rgba(9, 21, 40, 0.02)",
        card: "0 12px 36px -12px rgba(9, 21, 40, 0.08), 0 4px 10px -2px rgba(9, 21, 40, 0.03)",
        elevated: "0 24px 48px -12px rgba(9, 21, 40, 0.14), 0 0 1px 1px rgba(9, 21, 40, 0.05)",
        saffron: "0 10px 30px -5px rgba(232, 133, 21, 0.38)",
        glow: "0 0 70px -15px rgba(232, 133, 21, 0.3)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-slow": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};
