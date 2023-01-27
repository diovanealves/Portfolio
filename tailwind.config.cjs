/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    fontFamily: { sans: ["Roboto", "sans-serif"] },
    extend: {
      colors: {
        background: "#041A27",
        text: "#DFF6FF",
        highlight: "#8CD1FF",
        highlightBackground: "#052131",
      },
    },
  },
  plugins: [],
};
