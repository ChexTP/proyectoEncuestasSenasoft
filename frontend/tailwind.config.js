/** @type {import('tailwindcss').Config} */
import flowvite from "flowbite-react/tailwind"

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
    flowvite.content()
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
    flowvite.plugin()
  ],
}