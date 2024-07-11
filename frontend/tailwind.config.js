/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "dark-gradient": "#000c"
      },
      backgroundImage: {
        "login-bg": "url('./src/assets/login-page.jpg')"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}