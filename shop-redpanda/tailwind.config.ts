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
        scrolling: 'scrolling 50s linear infinite',
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
            50: '#fffafa',
            100: '#fef6f5',
            200: '#fdeeed',
            300: '#f9e7e6', // Original extracted color
            400: '#eecfcf',
            500: '#e0a7a7',
            600: '#c78181',
            700: '#a16161',
            800: '#7c4747',
            900: '#5b3434',
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
        },
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
  ],
} satisfies Config;
