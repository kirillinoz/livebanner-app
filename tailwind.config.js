module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '575px',
      dsm: '640px',
      md: '660px',
      dmd: '768px',
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      franklin: ['Libre Franklin', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#262261',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  mode: 'jit',
}
