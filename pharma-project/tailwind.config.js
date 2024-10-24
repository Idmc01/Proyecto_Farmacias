/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-1': '#C4DAD2',
        'green-2': '#6A9C89',
        'green-3': '#16423C'
      },
      gridTemplateColumns: {
        'custom-1': 'repeat(8, minmax(100px, 100px))', // 1 columna
      },
    },
  },
  plugins: [],
}

