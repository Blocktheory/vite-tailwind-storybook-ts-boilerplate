/** @type {import ('tailwindcss').Config} */

module.exports = {
  content: ['./popup.html', './home.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      fontSize: {
        xs: '.75rem',
        sm: '.875rem',
        base: '1rem',
        lg: '1.25rem',
        mlg: '1.5rem',
        font26: '1.625rem',
        xl: '2rem',
        xxl: '2.5rem',
        xxxl: '3.5rem'
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700
      },
      letterSpacing: {
        tight: '-0.01em'
      },
      screens: {
        sm: '600px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        xxl: '1536px'
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#fff',
        black: '#000',
        blue: '#4C44C6',
        primary: {
          50: '#FAF1EB',
          100: '#F5E2D8',
          200: '#FCF1EA',
          300: '#E5B89E',
          500: '#DB9B76',
          700: '#CC703C',
          900: '#B25622'
        },
        primaryDark: {
          50: '#301B0E',
          100: '#59311A',
          200: '#FCF1EA',
          300: '#8C4D2A',
          500: '#B26234',
          700: '#CC703C',
          900: '#E57E43'
        },
        secondary: {
          50: '#F0FAF4',
          100: '#B7E6CB',
          300: '#5BC68C',
          500: '#00AE60',
          700: '#008A4A',
          900: '#00592D'
        },
        secondaryDark: {
          50: '#001F11',
          100: '#00331C',
          300: '#47AD59',
          500: '#006638',
          700: '#47AD59',
          900: '#00B262'
        },
        neutral: {
          50: '#ECECEC',
          100: '#CED1D5',
          300: '#8F98A4',
          500: '#626F81',
          700: '#464E59',
          800: '#4D5054',
          900: '#282B30'
        },
        neutralDark: {
          50: '#2B2D30',
          100: '#2D2F33',
          300: '#43474D',
          500: '#656A73',
          700: '#9DA6B2',
          900: '#D5E2F2'
        },
        info: {
          50: '#DEF0FD',
          100: '#AFDAFA',
          300: '#4FACF4',
          500: '#008BF1',
          700: '#006ACB',
          900: '#003D96'
        },
        infoDark: {
          50: '#002540',
          100: '#003B66',
          300: '#005899',
          500: '#0067B2',
          700: '#0076CC',
          900: '#0093FF'
        },
        warning: {
          50: '#FCF6EA',
          100: '#F9EED6',
          300: '#F0D399',
          500: '#FAC75A',
          700: '#E3A624',
          900: '#BA8C2A'
        },
        warningDark: {
          50: '#3B2F15',
          100: '#665125',
          300: '#997A37',
          500: '#B28E40',
          700: '#D9AC4E',
          900: '#FFCB5C'
        },
        error: {
          50: '#FFF4F3',
          100: '#F9D1CC',
          300: '#F08C80',
          500: '#E11900',
          700: '#BB1500',
          900: '#700C00'
        },
        errorDark: {
          50: '#3D0700',
          100: '#660B00',
          300: '#8A0F00',
          500: '#F0503C',
          700: '#BF1500',
          900: '#F0503C'
        },
        success: {
          50: '#E4F4E6',
          100: '#BFE3C2',
          300: '#70C279',
          500: '#39A847',
          700: '#12551E',
          900: '#12551E'
        },
        successDark: {
          50: '#08260D',
          100: '#0E4217',
          300: '#146122',
          500: '#197A2B',
          700: '#47AD59',
          900: '#25AD3D'
        },
        // text: {
        //   50: "rgba(16, 21, 33, 0.1)",
        //   100: "rgba(16, 21, 33, 0.2)",
        //   300: "rgba(16, 21, 33, 0.4)",
        //   500: "rgba(16, 21, 33, 0.6)",
        //   700: "rgba(16, 21, 33, 0.8)",
        //   900: "rgba(16, 21, 33, 1)",
        // },
        text: {
          50: '#E7E8E9',
          100: '#CFD0D3',
          300: '#9FA2A6',
          500: '#6F737A',
          700: '#40444D',
          900: '#101521'
        },
        textDark: {
          50: '#262729',
          100: '#303133',
          300: '#48494D',
          500: '#6C6E73',
          700: '#C0C4CC',
          900: '#FFFFFF'
        },
        grey: {
          50: '#fff',
          100: '#FDFDFD',
          300: '#FBFBFB',
          500: '#F6F7F7'
        },
        greyDark: {
          50: '#151515',
          100: '#1F1F1F',
          300: '#292929',
          500: '#1F1F1F'
        },
        background: {
          50: '#F6F7F7',
          100: '#ececec'
        }
      },
      spacing: {
        13: '3.25rem',
        15: '3.75rem',
        21: '5.25rem',
        25: '6.25rem',
        30: '7.5rem',
        31: '7.75rem',
        35: '8.75rem',
        40: '10rem',
        50: '12.5rem',
        52.5: '13.125rem',
        70: '17.5rem',
        100: '25rem',
        105: '26.25rem',
        115: '28.75rem',
        120: '30rem',
        150: '37.5rem',
        160: '40rem',
        170: '42.5rem',
        200: '50rem'
      },
      lineHeight: {
        2.4: '1.5rem',
        3.2: '2rem',
        3.5: '0.875rem',
        4.5: '1.125rem',
        12: '3rem'
      },
      scale: {
        200: '2.00'
      },
      borderRadius: {
        large: '16px',
        medium: '14px'
      },
      keyframes: {
        shimmer: {
          '0%, 100%': { transform: 'translateX(0%)' },
          opacity: 0
        }
      },
      animation: {
        shimmer: 'shimmer 1s ease-in-out infinite'
      }
    },
    boxShadow: {
      sm: '0px 2px 8px rgba(0, 0, 0, 0.06)',
      '3xl': '0px 4.53333px 45.3333px rgba(0, 0, 0, 0.04)',
      '4xl': '0px 5px 22px rgba(0, 0, 0, 0.4)',
      '5xl': '0px -20px 10px 0px rgba(16,21,33,0.34);',
      '6xl': '0px 2px 8px rgba(24, 26, 29, 0.05)',
      '7xl': '0px 0px 6px rgba(0, 0, 0, 0.12)',
      '8xl': '0px -100px 10px 0px rgba(16,21,33,0.25);'
    }
  },
  variants: {
    extend: {
      display: ['group-hover']
    }
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/line-clamp')],
  corePlugins: {
    backdropOpacity: false,
    backgroundOpacity: false,
    borderOpacity: false,
    divideOpacity: false,
    ringOpacity: false,
    textOpacity: false
  }
}
