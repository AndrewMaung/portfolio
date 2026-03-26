/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
        sans: ['"IBM Plex Sans"', 'sans-serif'],
      },
      colors: {
        base: {
          bg:      '#0a0e17',
          surface: '#0f1724',
          card:    '#131d2e',
          border:  '#1e2d45',
          hover:   '#1a2840',
        },
        cyan:   { DEFAULT: '#00d4ff', dim: '#0097b8', glow: 'rgba(0,212,255,0.12)' },
        green:  { DEFAULT: '#00ff88', dim: '#00b860' },
        purple: { DEFAULT: '#a78bfa', dim: '#7c5cbf' },
        text: {
          primary:   '#e2eaf7',
          secondary: '#7a90b0',
          muted:     '#3d5068',
        },
      },
      animation: {
        'fade-up':    'fadeUp 0.6s ease forwards',
        'blink':      'blink 1s step-end infinite',
        'scan':       'scan 3s linear infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
        scan: {
          '0%':   { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
    },
  },
  plugins: [],
}
