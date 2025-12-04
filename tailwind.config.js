/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
            'navbar-title':["Outfit", "sans-serif"],
        },
    },
  },
  plugins: [],
}