/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Fraunces', 'serif'],
        mono: ['IBM Plex Mono', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        base: {
          bg: '#f9f7f4',
          card: '#fdfcfa',
          border: '#e5dfd8',
          hover: '#f0ebe5',
        },
        text: {
          primary: '#1a1a1a',
          secondary: '#6b6b6b',
          muted: '#999999',
        },
        accent: {
          DEFAULT: '#2d4a3a',
          hover: '#1f3a2f',
          light: '#e8ede9',
        },
      },
      spacing: {
        section: '48px',
        subsection: '24px',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'underline-in': 'underlineIn 0.3s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        underlineIn: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
      },
    },
  },
  plugins: [],
}
