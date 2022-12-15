/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend:{
      fontSize: {
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
      },
      colors:{
        'trans-grey':'#6d6d6eb3', 
        'nav-color':'#141414',
        'arrow' : '#10101180',

      },
    }
  },
  plugins: [],
}
