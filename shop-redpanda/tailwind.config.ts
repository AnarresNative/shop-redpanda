import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scrolling: {
          '0%': { backgroundPosition: '% 0%' },
          '100%': { backgroundPosition: '100% 0%' },
        },
      },
      animation: {
        scrolling: 'scrolling 100s linear infinite',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          beige: {
            50: '#f6f5f4',
            100: '#edeceb',
            200: '#e4e3e0',
            300: '#dad6cf', // Original extracted color
            400: '#b3aea8',
            500: '#8d8780',
            600: '#6f6a66',
            700: '#595351',
            800: '#403c3a',
            900: '#292423',
          },
          pink: {
            50: '#fdeef0',
            100: '#fbd7da',
            200: '#f7bfc5',
            300: '#efc8cd', // Original extracted color
            400: '#e38a92',
            500: '#d35a67',
            600: '#b84855',
            700: '#953741',
            800: '#70262f',
            900: '#51191f',
          },
          brown: {
            50: '#ebe8e7',
            100: '#d4cecd',
            200: '#bfb5b4',
            300: '#7d7170', // Original extracted color
            400: '#655d5c',
            500: '#514b4a',
            600: '#413c3b',
            700: '#33302f',
            800: '#252423',
            900: '#181818',
          },
          lightPink: {
            300: '#f0dee4', // Original extracted color
            400: '#e6c4d0',
            500: '#d9a4b5',
            600: '#c88397',
            700: '#b3627a',
            800: '#9c425e',
          },

          blueGray: {
            50: '#f5f6f7',
            100: '#e6eaec',
            200: '#ccd1d5',
            300: '#36414d', // Original extracted color
            400: '#4d5b6a',
            500: '#344554',
            600: '#2a3744',
            700: '#222c37',
            800: '#192227',
            900: '#10191e',
          },
          orange:{
            50: '#fff5f0',
            100: '#feece3',
            200: '#fdd8c1',
            300: '#b4836c',
            400: '#a35f3f',
            500: '#8d4b2b',
            600: '#7c3e24',
            700: '#6a331d',
          },
          lightOrange: {
            50:  '#fefcf8',
            100: '#fcf8f1',
            200: '#fbf4e6',
            300: '#f9f3ea', // given
            400: '#f3e0c5', // given
            500: '#e9c69a', // given
            600: '#d9a46f', // given
            700: '#c88244', // given
            800: '#b9611a', // given
            900: '#a84a00', // given
          },
          slate: {
            50:  '#f7f6f3',
            100: '#eeece7',
            200: '#ddd9d2',
            300: '#c4c1ba', // given
            400: '#aba9a0',
            500: '#949189',
            600: '#7c7972',
            700: '#64625c',
            800: '#4b4943',
            900: '#322f2c',
          },
  
          // 2) yellow: 300 originally #f9f3ea
          yellow: {
            50:  '#fefcf9',
            100: '#fdf9f3',
            200: '#fbf5ee',
            300: '#f9f3ea', // given
            400: '#f3e6d9',
            500: '#edd8c4',
            600: '#e1c3a3',
            700: '#cba67c',
            800: '#ab8556',
            900: '#876738',
          },
          slateDark: {
            50:  '#f6f5f4',
            100: '#eceae9',
            200: '#dcd7d5',
            300: '#b8b3b1', // given
            400: '#a09c9a',
            500: '#888483',
            600: '#716e6d',
            700: '#5a5757',
            800: '#3f3d3c',
            900: '#272524',
          },
          }
        },
      },
    },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.cmn-line_motion--white': {
          'background-image': 'linear-gradient(to right, #fff 100%, transparent 0)',
          'background-position': 'center left',
          'background-repeat': 'no-repeat',
          // e.g. 2px high line 
          'background-size': '0 2px',
          'transition': 'background-size 0.25s cubic-bezier(0.165, 0.84, 0.44, 1)',
          'font-size': 'calc(2vw + 3em)',
        },
        '.cmn-line_motion--white:hover': {
        'background-size': '100% 2px',
        },
         '.singleLineContainer': {
          'width': '200',        /* Set a width to constrain the text */
          'white-space': 'nowrap', /* Prevent the text from wrapping to the next line */
          'overflow': 'hidden',    /* Hide any text that overflows the width */
          'text-overflow': 'ellipsis',/* Show ellipses (...) when text overflows */
        }
      });
    },
    function({ addBase, theme }) {
      function extractColorVars(colorObj, colorGroup = '') {
        return Object.keys(colorObj).reduce((vars, colorKey) => {
          const value = colorObj[colorKey];

          const newVars =
            typeof value === 'string'
              ? { [`--color${colorGroup}-${colorKey}`]: value }
              : extractColorVars(value, `-${colorKey}`);

          return { ...vars, ...newVars };
        }, {});
      }

      addBase({
        ':root': extractColorVars(theme('colors')),
      });
    },
  ],
} satisfies Config;
