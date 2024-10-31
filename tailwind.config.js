/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'mobile':'400px',
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
    },

    extend: {
      backgroundImage:{
        'gradiente': 'linear-gradient(309deg, rgba(24,30,65,1) 70%, rgba(152,77,56,1) 100%)',
      },

      colors: {
        'principal': '#f4f4f4',
        'secundario': '#f4f4f480',
      },

      fontSize: {
        'titulo': '70px',
        'subtitulo': '50px',
        'paragrafo': '20px',
      }

    },
  },
  plugins: [],
}