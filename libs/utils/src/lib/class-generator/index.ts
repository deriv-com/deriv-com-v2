import clsx from 'clsx';

export interface ClassPrefixesProps {
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
  xl2?: string;
  hover?: string;
  focus?: string;
  active?: string;
  required?: string;
  disabled?: string;
  enabled?: string;
  checked?: string;
  indeterminate?: string;
  default?: string;
  valid?: string;
  invalid?: string;
  odd?: string;
  even?: string;
  autofill?: string;
  only?: string;
  first?: string;
  last?: string;
  target?: string;
  'in-range'?: string;
  'out-of-range'?: string;
  'placeholder-shown'?: string;
  'read-only'?: string;
  'only-child'?: string;
  'first-child'?: string;
  'last-child'?: string;
  'first-of-type'?: string;
  'last-of-type'?: string;
  'focus-within'?: string;
  'focus-visible'?: string;
}

export const generateClassNamePrefixes = (classes: ClassPrefixesProps) => {
  let class_string = '';

  Object.keys(classes).forEach((prefix) => {
    class_string += classes[prefix]
      .split(' ')
      .map((e: string) => `${prefix}:${e} `)
      .join(' ')
      .replace(/\s+/g, ' ');
  });

  return class_string;
};

export const twclsx = (
  prefix_classes: ClassPrefixesProps = {},
  other_classes: string[] | string = ''
) => {
  return clsx([generateClassNamePrefixes(prefix_classes)], other_classes);
};
