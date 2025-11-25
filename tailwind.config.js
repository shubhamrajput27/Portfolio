/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff6f10',
        cream: '#fff7f0',
        peach: '#ffd8c5',
        muted: '#3a3a3a'
      }
    },
  },
}
