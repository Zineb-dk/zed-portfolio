/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
        secondary: {
          50: '#eefcf9',
          100: '#d4f5ee',
          200: '#ade8dd',
          300: '#84d3c8',
          400: '#5ab9ad',
          500: '#3fa195',
          600: '#2f817a',
          700: '#286763',
          800: '#235251',
          900: '#204545',
        },
        accent: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
        },
        nature: {
          leaf: '#a5d6a7',
          flower: '#f8bbd0',
          sky: '#b3e5fc',
          sand: '#ffecb3',
          grass: '#c5e1a5',
          earth: '#d7ccc8',
        },
        custom: {
          pink: '#FFEDFA',
          violet: '#8E7DBE',
          mint: '#A6F1E0',
          lavender: '#CDC1FF',
          cream: '#FFF6E3',
          bluesky: '#80B3FF',
          indigo: '#B1AFFF',
          lightPurple: '#D0BFFF',
          deepIndigo: '#22177A'
        }
      },
      fontFamily: {
        sans: ['Lagu Sans', 'sans-serif'],
        display: ['Lagu Sans', 'sans-serif'],
        heading: ['Cofigra', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'sway': 'sway 5s ease-in-out infinite',
        'fade-in': 'fadeIn 1s ease-in-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        sway: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        cloud: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        cloud: 'cloud 30s linear infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'nature-pattern': "url('https://images.pexels.com/photos/1111316/pexels-photo-1111316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      }
    },
  },
  plugins: [],
};