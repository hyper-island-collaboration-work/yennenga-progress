/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{css,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        plexSerif: ['IBM Plex Serif', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        sand: '#D5CEBA',
        umber: '#BA6740',
        burkinaBlue: '#005CD7',
        darkBlue: '#1F4BA2',
      },
    },
  },
  plugins: [],
};
