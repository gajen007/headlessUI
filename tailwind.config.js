/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        xs: '480px',
        sm: '768px',
        md: '940px',
        lg: '1200px',
        xl: '1600px',
      },
      colors: {
        limeGreen: '#bfd748',
        darkTeal: '#0b4c5b',
        blue: '#01afd9',
        orange: '#f47f2d',
        pink: '#ed2a63',
        textGrey: '#727373',
        lightTeal: '#a8b8bf',
        lightGrey: '#f5f6f6',
        white: '#ffffff',
        ErrorRed: '#EF4444',
      }
    },
  },
  plugins: [],
}
