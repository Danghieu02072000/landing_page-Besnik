/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      '3xs': '330px',
      'xs': '390px',
      xs: '500px',
      sm: '640px',
      md: '768px',
      'md-max': {max:'767px'},
      lg: '1024px',
      'lg-max': {max:'1023px'},
      xl: '1200px',
      'xl-max': {max:'1199px'},
      '2xl': '1440px',
      '3xl': '1536px'
    },
    fontSize : {
      xs:   ['12px', { lineHeight: '22px'}],
      sm:   ['14px', { lineHeight: '24px'}],
      base: ['16px', { lineHeight: '24px'}],
      lg:   ['18px', { lineHeight: '28px'}],
      xl:   ['20px', { lineHeight: '28px'}],
      '2xl':['24px', { lineHeight: '32px'}],
      '3xl':['30px', { lineHeight: '36px'}],
      '4xl':['36px', { lineHeight: '40px'}],
      '5xl':['48px', { lineHeight: '54px'}],
      '6xl':['52px', { lineHeight: '58px'}],
      '7xl':['62px', { lineHeight: '68px'}]
    },
    container : {
      center: true,
      padding : {
        DEFAULT: '16px',
        md: '24px',
        xl: '32px'
      },
    },
    fontFamily : {
      default : ['Inter','sans-serif'],
      highlights: ['Seaweed Script','cursive']

    },
    extend: {
      colors: {
        primary: '#101010',
        black: '#000000',
        'black-17': '#171717',
        'black-23': '#232323',
        'back-25':'#252525',
        gray: '#646464',
        'gray-78': '#787878',
        'gray-96': '#969696',
        'gray-83': '#838383',
        'gray-93': '#939393',
        'gray-66': '#666666',
        'gray-76': '#767676',
        'gray-f6': '#F6F6F6',
        'gray-pahorder': '#B1B1B1',
        'smoke-c0':  '#C0C0C0',
        'smoke-c7' : '#C7C7C7',
        'green' : '#00BE4C',
        'orange': '#FF6139',
        'yellow': '#FFBB27',
        'orange-f4' : '#FF4D20',
        'star' : '#FEB618'

      },
      maxWidth : {
        md: '704px',
        lg: '925px',
        xl: '1176px'

      }
    },
  },
  plugins: [],
}

