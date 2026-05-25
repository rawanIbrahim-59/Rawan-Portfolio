/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#6c63ff',
        'primary-dark': '#5a52e0',
        secondary: '#ff6b9d',
        accent: '#00d4ff',
        surface: {
          dark: 'rgba(26, 26, 62, 0.6)',
          light: 'rgba(255, 255, 255, 0.7)',
        },
        'nav-bg': {
          dark: 'rgba(10, 10, 26, 0.85)',
          light: 'rgba(240, 240, 248, 0.85)',
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        'float-delayed': 'float 4s ease-in-out 2s infinite',
        shimmer: 'shimmer 4s linear infinite',
        'glow-pulse': 'glowPulse 2.5s ease-in-out infinite',
        'icon-bounce': 'iconBounce 0.4s ease',
        'fade-in-up': 'fadeInUp 0.6s ease both',
        blink: 'blink 0.8s step-end infinite',
        'bounce-in': 'bounceIn 0.5s ease',
        sparkle: 'sparkle 0.7s ease-out forwards',
        shake: 'shake 0.5s ease',
        'scale-in': 'scaleIn 0.6s ease both',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 4px 20px rgba(108, 99, 255, 0.3)' },
          '50%': { boxShadow: '0 4px 40px rgba(108, 99, 255, 0.5), 0 0 60px rgba(108, 99, 255, 0.15)' },
        },
        iconBounce: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.25)' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        bounceIn: {
          '0%': { opacity: '0', transform: 'scale(0.3)' },
          '50%': { transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        sparkle: {
          '0%': { transform: 'translate(0, 0) scale(0)', opacity: '1' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translate(var(--tx), var(--ty)) scale(1)', opacity: '0' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-6px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(6px)' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.85)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
