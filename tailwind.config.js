/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pixel-bg': '#E8E0D5',
        'pixel-dark': '#000000',
        'pixel-coral': '#FF9B8A',
        'pixel-teal': '#4A7C7E',
        'pixel-salmon': '#FFB5A5',
        'pixel-dark-teal': '#3A6C6E',
      },
      fontFamily: {
        'pixel': ['"Press Start 2P"', 'cursive'],
        'body': ['Inter', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
        'pixel-pulse': 'pixel-pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        glow: {
          '0%': { 
            boxShadow: '0 0 5px #FF9B8A, 0 0 10px #FF9B8A, 0 0 15px #FF9B8A',
          },
          '100%': { 
            boxShadow: '0 0 10px #FF9B8A, 0 0 20px #FF9B8A, 0 0 30px #FF9B8A',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pixel-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
    },
  },
  plugins: [],
}
