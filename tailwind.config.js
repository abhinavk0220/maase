/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        crimson: '#8B1A1A',
        'crimson-dark': '#5C0F0F',
        'crimson-light': '#C4302B',
        amber: '#D4820A',
        'amber-light': '#F0A830',
        'amber-pale': '#FFF5E8',
        cream: '#FDF6EC',
        'cream-d': '#F0E4CC',
        parch: '#F5E8D0',
        ink: '#1A0A05',
        'ink-mid': '#5C2E15',
        'ink-light': '#8B5E3C',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        nunito: ['Nunito', 'sans-serif'],
      },
      keyframes: {
        'pulse-soft': {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 6px 24px rgba(139,26,26,0.28)' },
          '50%': { transform: 'scale(1.02)', boxShadow: '0 10px 32px rgba(139,26,26,0.40)' },
        },
        slideUp: {
          '0%': { opacity: 0, transform: 'translateY(16px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        bob: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(7px)' },
        },
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(8px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        slideUp: 'slideUp 0.4s ease forwards',
        marquee: 'marquee 16s linear infinite',
        bob: 'bob 2s ease-in-out infinite',
        fadeIn: 'fadeIn 0.3s ease forwards',
        'pulse-soft': 'pulse-soft 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
