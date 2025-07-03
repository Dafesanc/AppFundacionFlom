module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'flom-blue': '#0066cc',
        'flom-dark-blue': '#004499',
        'flom-light-blue': '#e6f3ff',
        'flom-green': '#00aa44',
        'flom-orange': '#ff6600',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
