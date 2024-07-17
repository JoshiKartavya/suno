/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      fontFamily:{
        'display': ['"DM Serif Display", serif'],
        'body': ['"Josefin Sans", sans-serif'],
      },
    extend: {},
  },
  plugins: [],
}