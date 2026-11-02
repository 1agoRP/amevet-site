/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1.25rem', lg: '2rem' },
      screens: { '2xl': '1216px' },
    },
    extend: {
      colors: {
        vermelho: {
          DEFAULT: '#ED2445',
          escuro: '#C8182F',
          claro: '#FDECEF',
        },
        turquesa: {
          DEFAULT: '#08AAA5',
          escuro: '#06837F',
          claro: '#E4F6F5',
        },
        carvao: {
          DEFAULT: '#292D32',
          suave: '#5A6069',
          tenue: '#8A9099',
        },
        nevoa: '#F7F8FA',
      },
      fontFamily: {
        titulo: ['Outfit', 'system-ui', 'sans-serif'],
        corpo: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.75rem',
      },
      boxShadow: {
        suave: '0 1px 2px rgba(41,45,50,.04), 0 8px 24px -12px rgba(41,45,50,.12)',
        cartao: '0 2px 4px rgba(41,45,50,.03), 0 18px 40px -20px rgba(41,45,50,.18)',
        flutuante: '0 10px 30px -8px rgba(8,170,165,.45)',
      },
      maxWidth: {
        leitura: '58ch',
      },
      keyframes: {
        'sobe-suave': {
          from: { opacity: '0', transform: 'translateY(22px)' },
          to: { opacity: '1', transform: 'none' },
        },
        pulsar: {
          '0%, 100%': { transform: 'scale(1)', opacity: '.55' },
          '50%': { transform: 'scale(1.35)', opacity: '0' },
        },
      },
      animation: {
        'sobe-suave': 'sobe-suave .7s cubic-bezier(.22,1,.36,1) both',
        pulsar: 'pulsar 2.4s ease-out infinite',
      },
    },
  },
  plugins: [],
};
