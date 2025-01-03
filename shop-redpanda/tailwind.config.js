/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",    // Next.js pages
    "./components/**/*.{js,ts,jsx,tsx}", // Any custom components folder
    // If using Next.js 13 app router:
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
