module.exports = {
  content: ["./Public/*.html", "./Public/*.js"],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['Ubuntu', 'Roboto', 'sans-serif'],
        'body': ['Fira Sans', 'Oxygen', 'sans-serif']
       },

       colors: {
         primary: {
           light: '#2B313A',
           DEFAULT: '#000814',
           dark: '#000000'
         },

         secondary: {
           light: '#FFFFFF',
           DEFAULT: '#F1F1F1',
           dark: '#C4C4C4'
         },

         mathGreen: {
            DEFAULT: '#2ecc71'
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
