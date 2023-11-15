import { cva } from 'class-variance-authority';
import { LinkItemSize } from './types';

export const linkItemCva = cva('inline-flex items-center gap-500', {
  variants: {
    colorStyle: {
      black: [
        'text-solid-slate-1400',
        'hover:underline',
        'hover:cursor-pointer',
        'active:underline',
      ],
      white: [
        'text-solid-slate-50',
        'hover:underline',
        'hover:cursor-pointer',
        'active:underline',
      ],
    },
    size: {
      caption: 'p-400 text-50',
      sm: 'p-400 text-50',
      md: 'p-600 text-75',
      lg: 'p-800 text-100',
      xl: 'p-1200 text-300',
    },
    disabled: {
      true: 'opacity-300 cursor-none pointer-events-none',
    },
  },
});

export const linkItemIconCva = cva('', {
  variants: {
    colorStyle: {
      black: 'fill-solid-slate-1400',
      white: 'fill-solid-slate-50',
    },
  },
});

export const LinkItemIconStandaloneSizes: Record<
  LinkItemSize,
  { width: number; height: number }
> = {
  caption: {
    width: 11,
    height: 18,
  },
  sm: {
    width: 13,
    height: 22,
  },
  md: {
    width: 14,
    height: 24,
  },
  lg: {
    width: 18,
    height: 30,
  },
  xl: {
    width: 21,
    height: 36,
  },
};

export const LinkItemIconSizes: Record<
  LinkItemSize,
  { width: number; height: number }
> = {
  caption: {
    width: 8,
    height: 18,
  },
  sm: {
    width: 9,
    height: 22,
  },
  md: {
    width: 10,
    height: 24,
  },
  lg: {
    width: 13,
    height: 30,
  },
  xl: {
    width: 15,
    height: 36,
  },
};
