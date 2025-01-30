module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#5B82FF',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
