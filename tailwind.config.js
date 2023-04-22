/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: 0
      }
    },
    extend: {
      colors: {
        'color-primary-light': '#0EA5E9',
        'color-primary-dark': '#7DD3FC',
        'color-secondary-light': '#F472B6',
        'color-secondary-dark': '#F472B6',

        'color-text-dark-primary': '#0F172A',
        'color-text-dark-secondary': '#334155',
        'color-text-light-primary': '#E2E8F0',
        'color-text-light-secondary': '#94A3B8',

        'color-success': '#03a66d',
        'color-info': '#17a2b8',
        'color-warning': '#ffc107',
        'color-danger': '#cf304a',

        'color-bg-light-primary': '#ffffff',
        'color-bg-light-secondary': '#ffffff',
        'color-bg-dark-primary': '#0f172a',
        'color-bg-dark-secondary': '#1e293b'
      },
      fontSize: {
        10: '10px',
        12: '12px',
        14: '14px',
        16: '16px',
        18: '18px',
        20: '20px',
        22: '22px',
        24: '24px',
        26: '26px',
        28: '28px',
        30: '30px',
        32: '32px',
        34: '34px',
        36: '36px',
        38: '38px',
        40: '40px'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: [require('tailwind-scrollbar'), require('flowbite/plugin')]
}
