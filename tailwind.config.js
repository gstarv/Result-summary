/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary:{
          'light-red': 'hsl(0, 100%, 67%)',
          'orangey-yellow': 'hsl(39, 100%, 56%)',
          'green-teal': 'hsl(166, 100%, 37%)',
          'cobalt-blue': 'hsl(234, 85%, 45%)',
        },

        Light:{
          'reaction-color': 'rgba(255, 87, 87, 0.065)',

          'memory-color': 'hsla(39, 100%, 56%, 0.065)',

          'verbal-color': 'hsla(166, 100%, 37%, 0.065)',

          'visual-color': 'hsla(234, 85%, 45%, 0.065)',
      
        },

        Gradients:{
          'Light-slate-blue-(background)': 'hsl(252, 100%, 67%)',

          'Light-royal-blue-(background)': 'hsl(241, 81%, 54%)',

          'Violet-blue-(circle)': 'hsla(256, 72%, 46%, 1)',

          'Persian-blue-(circle)': 'hsla(241, 72%, 46%, 0)',
        },

        // backgroundImage:{
        //   'gradient': (theme) =>
        // },

        Neutral:{
          'White': 'hsl(0, 0%, 100%)',
          'Pale-blue': 'hsl(221, 100%, 96%)',
          'Light-lavender': 'hsl(241, 100%, 89%)',
          'Dark-gray-blue': 'hsl(224, 30%, 27%)',
        },

        Fonts:{
          'hanken': '[Hanken Grotesk](https://fonts.google.com/specimen/Hanken+Grotesk)',

          '500': '500',
          '700': '700',
          '800': '800',
          'font-size': '18px'
        }
      }
    },
  },
  plugins: [],
}

