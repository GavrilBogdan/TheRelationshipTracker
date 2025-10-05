// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], 
  theme: {
    extend: {
      colors: {
        testpink: '#ff00ff', // custom test color
      },
    },
  },
  plugins: [],
}
