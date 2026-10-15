/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#07060b',
          900: '#0c0a12',
          850: '#12101a',
          800: '#1a1724',
          700: '#262233',
        },
        blush: {
          300: '#ffd4e8',
          400: '#ffb3d4',
          500: '#f48fb8',
          600: '#e86aa0',
        },
        lilac: {
          300: '#ddd0ff',
          400: '#c4b5fd',
          500: '#a78bfa',
        },
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(244, 143, 184, 0.25)',
        'glow-lg': '0 0 80px rgba(167, 139, 250, 0.22)',
      },
      backgroundImage: {
        'hero-fade':
          'radial-gradient(1200px 600px at 80% 20%, rgba(244,143,184,0.16), transparent 55%), radial-gradient(900px 500px at 10% 80%, rgba(167,139,250,0.12), transparent 50%)',
      },
    },
  },
  plugins: [],
}
