import { nextui } from '@nextui-org/react';
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [
    nextui({
      prefix: 'nextui',
      addCommonColors: false,
      layout: {},
      themes: {
        light: {
          layout: {},
          colors: {
            background: '#111111',
            primary: {
              DEFAULT: '#f6ad34',
            },
          },
        },
        dark: {
          layout: {},
          colors: {
            background: '#111111',
            primary: {
              DEFAULT: '#f6ad34',
            },
          },
        },
      },
    }),
  ],
};
