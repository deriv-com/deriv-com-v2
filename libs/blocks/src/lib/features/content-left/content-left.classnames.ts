import { cva } from 'class-variance-authority';

export const container = cva(
  'flex flex-col gap-gap-xl lg:gap-gap-lg justify-center',
  {
    variants: {
      content: {
        'content-left': 'lg:flex-row-reverse',
        'content-right': 'lg:flex-row',
      },
    },
    defaultVariants: {
      content: 'content-left',
    },
  },
);

export const contentContainer = cva(
  'flex flex-1 basis-1/2 flex-col lg:justify-center',
  {
    variants: {
      content: {
        'content-left': 'lg:pl-general-xl',
        'content-right': 'lg:pr-general-2xl',
      },
    },
    defaultVariants: {
      content: 'content-left',
    },
  },
);
