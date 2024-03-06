/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro, tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        backgroundDark: "#052131",
        textDark: "#DFF6FF",
      },
    },
  },
  plugins: [],
};
