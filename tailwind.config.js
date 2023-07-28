/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'red-50': '#FFEBEE',
      'red-100': '#FFCDD2',
      'red-400': '#F44336',
      'red-500': '#D50000',
      'white': '#FFFFFF',
      'black': '#000000',
      'gray': '#EEEEEE',
    },
    extend: {},
  },
  plugins: [],
}

