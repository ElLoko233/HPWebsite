module.exports = {
  content: ["./Public/*.html", "./Public/*.js"],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['Ubuntu', 'Roboto', 'sans-serif'],
        'body': ['Oxygen', 'Fira Sans', 'sans-serif']
       },

       colors: {
         primary: {
           light: '#2B313A',
           DEFAULT: '#000814',
           dark: '#000000'
         },

         secondary: {
           light: '#FFFFFF',
           DEFAULT: '#F8F8F8',
           dark: '#C4C4C4'
         }
       }       
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: 'class',
    }),
   ],
}
