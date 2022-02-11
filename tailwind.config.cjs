module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    screens: {
      touch: {'raw': '(hover: none)'},
      'can-hover': {'raw': '(hover: hover)'},
    }
  },
  plugins: [],
}
