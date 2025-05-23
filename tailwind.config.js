/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'
const { fontFamily } = defaultTheme

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        'loading-bar': {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'heartbeat-l': {
          '60%': { transform: 'translate(-1.75rem, -1.75rem) scale(0.4)' }
        },
        'heartbeat-r': {
          '40%': { transform: 'translate(1.75rem, -1.75rem) scale(0.4)' }
        },
        'square-pulse': {
          '50%': { borderRadius: '100%', transform: 'rotate(45deg) scale(0.5)' },
          '100%': { transform: 'rotate(45deg) scale(1)' }
        },
        'shadow-pulse': {
          '50%': { transform: 'translateX(-50%) scale(0.5)', backgroundColor: '#e4e4e4' }
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        scroll: {
                '0%': { transform: 'translateY(0)' },
                '100%': { transform: 'translateY(-50%)' },
              },
              scrollH: {
                '0%': { transform: 'translateX(0)' },
                '100%': { transform: 'translateX(-100%)' },
              },
              
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        'scroll-slow': 'scroll 40s linear infinite',
     'scroll-slow-delayed': 'scroll 40s linear infinite -20s',
        'loading-bar': 'loading-bar 2s ease-in-out infinite',
        'heartbeat-l': 'heartbeat-l 2.88s cubic-bezier(0.75, 0, 0.5, 1) infinite',
        'heartbeat-r': 'heartbeat-r 2.88s cubic-bezier(0.75, 0, 0.5, 1) infinite',
        'square-pulse': 'square-pulse 2.88s cubic-bezier(0.75, 0, 0.5, 1) infinite',
        'shadow-pulse': 'shadow-pulse 2.88s cubic-bezier(0.75, 0, 0.5, 1) infinite',
        shimmer: 'shimmer 1.5s infinite'
        ,
        'scrollH': 'scrollH 30s linear infinite',
      },
    },
  },
  plugins: [],

}


