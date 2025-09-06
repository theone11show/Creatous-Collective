/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        abril: ["'Abril Fatface'", "cursive"],
        merriweather: ["Merriweather", "serif"],
        glacial: ["'Glacial Indifference'", "sans-serif"], 
      },
        keyframes: {
        lineRotate: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-50%) rotate(180deg)' },
        },
      },
      animation: {
        line: 'lineRotate 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
