/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        bars: "var(--bars)",
        background: "var(--background)",
        accent: "var(--accent)",
        text: "var(--text)",
        grey: "var(--grey)"
      }
    },
  },
  plugins: [],
}

