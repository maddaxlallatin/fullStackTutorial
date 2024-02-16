/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html',"./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      colors: {
        softwhite: "#F8F8F8",
        coral: "#FF6F61",
        teal: "#00A896",
        charcoal: "#333333",
        goldenrod: "#FFD700",
        lightgray: "#CCCCCC"
      },
      fontFamily: {
        cutive: ['Cutive', 'serif'],
        lato: ['Lato', 'sans-serif'],
        bebasneue: ['Bebas Neue', 'sans-serif'],
    },
    },
  },
  plugins: [],
}

