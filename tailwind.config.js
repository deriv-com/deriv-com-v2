/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  theme: {
    extend: {
      transitionProperty: {
        'max-height': 'max-height',
        'backdrop-filter': 'backdrop-filter',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        slide: '20s slide infinite linear',
      },
    },
  },
  presets: [require('@deriv/quill-design/quill-tailwind/tailwind.config.cjs')],
};
