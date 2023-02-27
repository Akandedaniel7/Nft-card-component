/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        SoftBlue: 'hsl(215, 51%, 70%)',
        Cyan: 'hsl(178, 100%, 50%)',
        VeryDarkBlueMainBg: 'hsl(217, 54%, 11%)',
        VeryDarkBlueCardBg: 'hsl(216, 50%, 16%)',
        VeryDarkBlueLine: 'hsl(215, 32%, 27%)',
        White: 'hsl(0, 0%, 100%)'
      }
    },
  },
  plugins: [],
}
