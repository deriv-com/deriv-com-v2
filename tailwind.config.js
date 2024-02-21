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
        slideRtl: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        slide: '50s slide infinite linear',
        slideRtl: '50s slideRtl infinite linear',
      },
      backgroundImage: (theme) => ({
        'gradient-hero': `linear-gradient(84deg, rgba(0, 0, 0, 0.80) 6.97%, rgba(0, 0, 0, 0.00) 107.22%)`,
        'gradient-hero-mobile': `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 1.45%, rgba(0, 0, 0, 0.00) 34.13%, rgba(15, 10, 10, 0.80) 86.38%)`,
        'cta-gradient': `linear-gradient(180deg, rgba(24, 28, 37, 0.00) 1.45%, rgba(24, 28, 37, 0.40) 46.38%)`,
      }),
      
    },
  },
  presets: [require('@deriv/quill-design/quill-tailwind/tailwind.config.cjs')],
};
