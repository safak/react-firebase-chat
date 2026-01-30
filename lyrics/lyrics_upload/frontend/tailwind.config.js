/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1e40af",
        secondary: "#4b5563",
        accent: "#f59e0b",
        highlight: "#00FF00",
        dark: "#1a202c",
        light: "#f7fafc",
      },
      backgroundImage: {
        "hero-pattern": "url('/path-to-music-background.jpg')",
      },
    },
  },
  plugins: [],
};
