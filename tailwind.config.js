/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563EB',
        accent: '#F97316',
        darkbg: '#0B1220',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      // Integrated the 'border-rotate' animation and keyframes
      animation: {
        'spin-slow': 'border-rotate 4s linear infinite', // Renamed for clarity, using your keyframe name
        'border-rotate': 'border-rotate 4s linear infinite', // Your original definition
      },
      keyframes: {
        'border-rotate': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}
