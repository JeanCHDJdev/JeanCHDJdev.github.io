/** @type {import('tailwindcss').Config} */
module.exports = {
  version: "0.1",
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
        space4: "var(--space4)",
        space5: "var(--space5)",
        white: "var(--white)",
        gray: "var(--gray)",
        lightblue: "var(--lightblue)",
      },
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      serif: ["Merriweather", "serif"],
      mono: ["Menlo", "monospace"],
      montserrat: ['Montserrat', 'sans-serif'],
    },
  },
  plugins: [],
};
