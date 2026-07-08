/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['Menlo', 'Monaco', 'monospace'],
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      colors: {
        base: {
          bg:      '#ffffff',
          surface: '#f8f9fa',
          card:    '#f5f5f5',
          border:  '#e5e5e5',
          hover:   '#eeeeee',
        },
        text: {
          primary:   '#000000',
          secondary: '#666666',
          muted:     '#999999',
        },
        accent: '#0066cc',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease',
        'fade-up': 'fadeUp 0.5s ease forwards',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
