/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bekno-black': '#000000',
        'bekno-white': '#FFFFFF',
        'bekno-gray': '#666666',
        'bekno-gray-light': '#999999',
        'bekno-gray-dark': '#333333',
        'bekno-bg-light': '#f5f5f5',
        'bekno-primary': '#00D4FF',
      },
      fontFamily: {
        sans: ['Inter', 'DM Sans', 'Roboto', 'sans-serif'],
        heading: ['Roboto', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 