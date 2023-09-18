import { twclsx } from './index';

describe('twclsx', () => {
  test('render tailwind breakpoint classes', () => {
    const result = twclsx({
      lg: 'pt-1 pb-2 pl-3 pr-4',
      md: 'pt-5 pb-6 pl-7 pr-8',
      sm: 'pt-9 pb-10 pl-11 pr-12',
    });

    expect(result).toBe(
      'lg:pt-1 lg:pb-2 lg:pl-3 lg:pr-4 md:pt-5 md:pb-6 md:pl-7 md:pr-8 sm:pt-9 sm:pb-10 sm:pl-11 sm:pr-12 '
    );
  });

  test('render tailwind pseudo classes', () => {
    const result = twclsx({
      hover: 'bg-slate-100  bg-slate-300',
      focus: 'bg-slate-200  bg-slate-100',
      active: 'bg-slate-500  bg-slate-700',
      required: 'bg-slate-600  bg-slate-200',
      disabled: 'bg-solid-olive-200  bg-slate-200',
      enabled: 'bg-slate-200 bg-solid-coral-1300',
      checked: 'bg-slate-100  bg-slate-200',
      indeterminate: 'bg-slate-100  bg-slate-200',
      default: 'bg-slate-100  bg-slate-200',
      valid: 'bg-slate-100  bg-slate-200',
      invalid: 'bg-slate-100 bg-gradient-slate-440',
      odd: 'bg-slate-100 bg-opacity-magenta-400',
      even: 'bg-slate-100  bg-slate-1200',
      autofill: 'bg-slate-100 bg-solid-orange-1000',
      only: 'bg-slate-100  bg-slate-600',
      first: 'bg-slate-100  bg-slate-200',
      last: 'bg-slate-100 bg-emerald-600',
      target: 'bg-stone-700 bg-amber-200',
    });

    expect(result).toBe(
      'hover:bg-slate-100 hover: hover:bg-slate-300 focus:bg-slate-200 focus: focus:bg-slate-100 active:bg-slate-500 active: active:bg-slate-700 required:bg-slate-600 required: required:bg-slate-200 disabled:bg-solid-olive-200 disabled: disabled:bg-slate-200 enabled:bg-slate-200 enabled:bg-solid-coral-1300 checked:bg-slate-100 checked: checked:bg-slate-200 indeterminate:bg-slate-100 indeterminate: indeterminate:bg-slate-200 default:bg-slate-100 default: default:bg-slate-200 valid:bg-slate-100 valid: valid:bg-slate-200 invalid:bg-slate-100 invalid:bg-gradient-slate-440 odd:bg-slate-100 odd:bg-opacity-magenta-400 even:bg-slate-100 even: even:bg-slate-1200 autofill:bg-slate-100 autofill:bg-solid-orange-1000 only:bg-slate-100 only: only:bg-slate-600 first:bg-slate-100 first: first:bg-slate-200 last:bg-slate-100 last:bg-emerald-600 target:bg-stone-700 target:bg-amber-200 '
    );
  });

  test('render tailwind pseudo element classes', () => {
    const result = twclsx({
      'in-range': 'pb-1 mt-2 px-10 gap-12',
      'out-of-range': 'pb-1 mt-2 px-12 gap-12',
      'placeholder-shown': 'pb-1 mt-3 px-10 gap-12',
      'read-only': 'pb-1 mt-2 px-10 gap-12',
      'only-child': 'pt-1 mt-2 px-10 gap-12',
      'first-child': 'mb-1 mt-2 px-10 gap-12',
      'last-child': 'pb-2 mt-2 px-10 gap-12',
      'first-of-type': 'pb-1 mt-2 px-10 gap-12',
      'last-of-type': 'pb-5 mt-2 px-10 gap-12',
      'focus-within': 'pb-1 mt-20 px-15 gap-12',
      'focus-visible': 'pb-10 mt-2 px-10 gap-12',
    });

    expect(result).toBe(
      'in-range:pb-1 in-range:mt-2 in-range:px-10 in-range:gap-12 out-of-range:pb-1 out-of-range:mt-2 out-of-range:px-12 out-of-range:gap-12 placeholder-shown:pb-1 placeholder-shown:mt-3 placeholder-shown:px-10 placeholder-shown:gap-12 read-only:pb-1 read-only:mt-2 read-only:px-10 read-only:gap-12 only-child:pt-1 only-child:mt-2 only-child:px-10 only-child:gap-12 first-child:mb-1 first-child:mt-2 first-child:px-10 first-child:gap-12 last-child:pb-2 last-child:mt-2 last-child:px-10 last-child:gap-12 first-of-type:pb-1 first-of-type:mt-2 first-of-type:px-10 first-of-type:gap-12 last-of-type:pb-5 last-of-type:mt-2 last-of-type:px-10 last-of-type:gap-12 focus-within:pb-1 focus-within:mt-20 focus-within:px-15 focus-within:gap-12 focus-visible:pb-10 focus-visible:mt-2 focus-visible:px-10 focus-visible:gap-12 '
    );
  });
});
