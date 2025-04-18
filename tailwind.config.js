/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        comfortaa: ["Comfortaa", "regular"],
        montserrat: ["Montserrat", "regular"],
        prompt: ["Prompt", "regular"],
        exo: ["Exo", "regular"],
      },
      colors: {
        primary: "#1a1a1a",
        secondary: "#4a4a4a",
      },
      animation: {
        'moving-text': 'movingText 10s linear',
      },
      keyframes: {
        movingText: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [],
}