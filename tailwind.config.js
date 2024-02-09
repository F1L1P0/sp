/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js,css}'],
  theme: {
    extend: {
      colors: {
        'primary-color': 'var(--primary-color)',
        'secondary-color': 'var(--secondary-color)',
      },
    },
  },
  plugins: [],
}
