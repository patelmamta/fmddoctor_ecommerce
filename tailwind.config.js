/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        green: {
          100: '#1b9c4b',
          600: '#004d3f',
          950: '#013d32'
        }
      },
    },
  },
  plugins: [],
}
