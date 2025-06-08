export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx,svg}',
  ],
  theme: {
    fontFamily: {
      sans: ['Helvetica', 'Arial', 'sans-serif'],
      mono: ['Menlo', 'Monaco', 'Consolas', '"Courier New"', 'monospace'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};