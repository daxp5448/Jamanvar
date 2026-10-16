/** @type {import('tailwindcss').Config} */

// Jamanvar design tokens: Orange + Ivory.
//
// Semantic names (ivory, surface, ink, line, brand, night) are what new code
// uses. The older scale names (jamanvar.navy / saffron / cream) are kept as
// aliases of the same warm palette so nothing drifts back to cool slate:
//   navy    → warm ink scale
//   saffron → brand orange scale
//   cream   → ivory scale
// Mirror any change here in the CSS variables at the top of globals.css.

const ink = {
  50: "#FAF6F2",
  100: "#F3ECE5",
  200: "#E6DCD2",
  300: "#D2C4B7",
  400: "#AB9D90",
  500: "#8A7D72",
  600: "#6F645B",
  700: "#564C44",
  800: "#3B332E",
  900: "#29231F",
  950: "#1E1916",
};

const orange = {
  50: "#FFF3EA",
  100: "#FFE4D0",
  200: "#FCCBA6",
  300: "#F9A872",
  400: "#F78F4C",
  500: "#F47B35",
  600: "#D95F1B",
  700: "#B44C14",
  800: "#8E3D13",
  900: "#713213",
};

const ivory = {
  50: "#FFFCF8",
  100: "#FFF8F0",
  200: "#F7EDE2",
  300: "#EDE2D8",
  400: "#DCCDBF",
  500: "#BFAE9F",
  600: "#8A7D72",
  700: "#6F645B",
  800: "#564C44",
  900: "#3B332E",
};

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: { DEFAULT: ivory[100], soft: ivory[50], deep: ivory[200] },
        surface: { DEFAULT: ivory[50], white: "#FFFFFF" },
        ink: {
          DEFAULT: ink[900],
          strong: ink[950],
          soft: ink[700],
          muted: ink[600],
          faint: ink[400],
          ...ink,
        },
        line: { DEFAULT: ivory[300], strong: ivory[400] },
        brand: {
          DEFAULT: orange[500],
          deep: orange[600],
          // Orange that passes 4.5:1 as text on ivory.
          text: orange[700],
          ...orange,
        },
        night: { DEFAULT: "#28221F", soft: "#342D29", deep: "#1E1916" },
        // Background of the Jamanvar product UI shown inside device frames.
        screen: "#0B1526",
        success: { DEFAULT: "#2F7D4F", soft: "#E7F3EA" },
        danger: { DEFAULT: "#B42318", soft: "#FDECEA" },
        jamanvar: {
          navy: ink,
          saffron: orange,
          cream: ivory,
          green: {
            50: "#EEF7F0",
            100: "#E7F3EA",
            200: "#C7E3CF",
            300: "#9DCBA9",
            400: "#5FA877",
            500: "#3E8E5C",
            600: "#2F7D4F",
            700: "#25653F",
            800: "#1D4F31",
            900: "#163D26",
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Manrope", "system-ui", "sans-serif"],
        gujarati: ["var(--font-gujarati)", "'Noto Sans Gujarati'", "sans-serif"],
      },
      maxWidth: {
        content: "78rem",
        prose: "42rem",
      },
      borderRadius: {
        btn: "0.625rem",
        card: "1rem",
        panel: "1.5rem",
      },
      boxShadow: {
        subtle: "0 1px 2px rgba(41, 35, 31, 0.05)",
        card: "0 1px 2px rgba(41, 35, 31, 0.04), 0 10px 28px -16px rgba(41, 35, 31, 0.18)",
        lift: "0 2px 6px rgba(41, 35, 31, 0.05), 0 28px 56px -28px rgba(41, 35, 31, 0.32)",
        device: "0 12px 24px -12px rgba(41, 35, 31, 0.25), 0 48px 90px -40px rgba(41, 35, 31, 0.45)",
        brand: "0 1px 2px rgba(180, 76, 20, 0.2), 0 8px 18px -10px rgba(244, 123, 53, 0.7)",
        // Legacy aliases
        elevated: "0 2px 6px rgba(41, 35, 31, 0.05), 0 28px 56px -28px rgba(41, 35, 31, 0.32)",
        saffron: "0 1px 2px rgba(180, 76, 20, 0.2), 0 8px 18px -10px rgba(244, 123, 53, 0.7)",
        "saffron-sm": "0 4px 12px -6px rgba(244, 123, 53, 0.55)",
      },
      keyframes: {
        "fade-down": {
          from: { opacity: "0", transform: "translateY(-6px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": { from: { opacity: "0" }, to: { opacity: "1" } },
        "slide-in-right": {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0)" },
        },
      },
      animation: {
        "fade-down": "fade-down 180ms ease-out",
        "fade-in": "fade-in 180ms ease-out",
        "slide-in-right": "slide-in-right 240ms cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
