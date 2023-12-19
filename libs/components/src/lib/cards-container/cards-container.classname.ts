import { cva } from 'class-variance-authority';

/**
 * * Important: The gap is currently set at 16px. If additional gap variants are introduced, make sure to update this value accordingly.
 */
export const cardClass = cva('gap-gap-lg pr-general-md', {
  variants: {
    cols: {
      two: '',
      three: 'lg:basis-[calc((100%-16px*2)/3)]',
      four: 'lg:basis-[calc((100%-16px*3)/4)]',
      five: 'lg:basis-[calc((100%-16px*4)/5)]',
    },
  },
  compoundVariants: [
    {
      cols: ['two', 'three', 'four', 'five'],
      className: 'basis-full sm:basis-[calc((100%-16px)/2)]',
    },
  ],
  defaultVariants: {
    cols: 'two',
  },
});

export const colsClass = cva('flex flex-wrap gap-gap-lg', {
  variants: {
    dense: {
      true: 'lg:max-w-max',
      false: '',
    },
    justify: {
      center: '',
      start: '',
    },
    itemLessThanTwo: {
      true: 'justify-center',
    },
  },
  compoundVariants: [
    {
      dense: [true, false],
      className: 'w-full',
    },
    {
      justify: 'start',
      itemLessThanTwo: false,
      className: 'justify-start',
    },
    {
      justify: 'center',
      itemLessThanTwo: false,
      className: 'lg:justify-center',
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
