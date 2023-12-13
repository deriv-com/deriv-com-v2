import { cva } from 'class-variance-authority';

export const colsClass = cva('flex flex-wrap gap-gap-lg', {
  variants: {
    dense: {
      true: 'lg:max-w-max',
      false: '',
    },
    justify: {
      center: 'lg:justify-center',
      start: 'justify-start',
    },
  },
  compoundVariants: [
    {
      dense: [true, false],
      className: 'w-full',
    },
  ],
  defaultVariants: {
    dense: false,
    justify: 'start',
  },
});

export const cardContainer = cva('flex overflow-hidden', {
  variants: {
    cols: {
      infinite: 'w-screen',
      two: '',
      three: '',
      four: '',
      five: '',
    },
  },
  compoundVariants: [
    {
      cols: ['two', 'three', 'four', 'five'],
      className: 'w-full',
    },
  ],
  defaultVariants: {
    cols: 'two',
  },
});
