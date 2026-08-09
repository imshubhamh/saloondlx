/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#DC2626",
          light: "#EF4444",
        },
        secondary: {
          DEFAULT: "#450A0A",
          deep: "#1A0303",
        },
        accent: {
          DEFAULT: "#F59E0B",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "Inter", "sans-serif"],
        sans: ["Inter", "sans-serif"],
        hindi: ["'Baloo 2'", "'Space Grotesk'", "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 50px -20px rgba(15,23,42,0.35)",
        card: "0 10px 30px -14px rgba(15,23,42,0.25)",
        glow: "0 8px 24px -8px rgba(220,38,38,0.65)",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        drift: {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(10px,-14px) scale(1.05)" },
        },
      },
      animation: {
        floaty: "floaty 5s ease-in-out infinite",
        "floaty-slow": "floaty 6.5s ease-in-out infinite",
        drift: "drift 9s ease-in-out infinite",
        "drift-reverse": "drift 11s ease-in-out infinite reverse",
      },
    },
  },
  plugins: [],
};
