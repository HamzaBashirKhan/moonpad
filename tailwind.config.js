/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend:
    { screens: {
      mb: '0px',
    },
      fontFamily: {

        lora: "'Jost', sans-serif",
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
