/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      transitionProperty: {
        'max-height': 'max-height',
        'backdrop-filter': 'backdrop-filter',
      },
    },
  },
  presets: [require('@deriv/quill-design/quill-tailwind/tailwind.config.cjs')],
};
