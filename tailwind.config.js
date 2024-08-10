/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom color names
        'light-yellow': '#D29A5A',
      },
      fontFamily: {
        // Custom font families
        Poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

