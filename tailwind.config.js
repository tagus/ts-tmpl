module.exports = {
  content: [
    './src/views/**/*.{html,hbs}',
    './ui/**/*.{ts,tsx,svg}',
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
