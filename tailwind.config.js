module.exports = {
  content: [
    './src/views/**/*.{html,hbs}',
    './ui/**/*.{js,jsx,svg}',
  ],
  theme: {
    fontFamily: {
      sans: ['"Inter"', 'Helvetica', 'Arial', 'sans-serif'],
      mono: ['Menlo', 'Monaco', 'Consolas', '"Courier New"', 'monospace'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
