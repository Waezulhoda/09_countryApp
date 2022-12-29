/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    colors:{
      primary_light:"#fafafa",
      secondary_light:"#ffffff",
      primary_dark:"#202d36",
      secondary_dark:"#2b3743",
      "dark-subtle": "rgba(255, 255, 255, 0.5)",
    },
    fontFamily:{
      body:["Nunito"]
    },
    extend: {},
  },
  plugins: [],
}