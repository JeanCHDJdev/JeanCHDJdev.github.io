/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        space1: "var(--space1)",
        space2: "var(--space2)",
        space3: "var(--space3)",
        space4: "var(--space4-rgb)",
        space5: "var(--space5-rgb)",
        white: "var(--white-rgb)",
      },
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      serif: ["Merriweather", "serif"],
      mono: ["Menlo", "monospace"],
    },
  },
  plugins: [],
};
