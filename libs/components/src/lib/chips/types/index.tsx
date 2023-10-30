import { ReactNode } from 'react';

export type ChipsColorVariant = 'coral' | 'dark' | 'black' | 'transparent';
export type ChipsSizeVariant = 'sm' | 'md' | 'lg';
export type ChipsTextVariant = 'sm' | 'md' | 'lg';
export type ChipsTextColorVariant = 'black' | 'white' | 'transparent';
export type ChipsVariants =
  | 'default'
  | 'hover'
  | 'active'
  | 'selected'
  | 'disabled';
export interface ChipsProps {
  label?: string;
  icon?: ReactNode;
  children?: ReactNode;
  className?: string;
  color?: string;
  size?: string;
  textColor?: string;
  state?: ChipsVariants;
  disabled?: boolean;
}
