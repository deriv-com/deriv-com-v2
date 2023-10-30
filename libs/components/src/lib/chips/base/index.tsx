/* eslint-disable tailwindcss/no-custom-classname */
import React, { useState } from 'react';
import { qtMerge, Text } from '@deriv/quill-design';
import { ChipsSizeVariant, ChipsTextVariant, ChipsProps } from '../types';

const sizeVariants: { [key in ChipsSizeVariant]: string } = {
  sm: 'px-600 gap-300',
  md: 'px-general-md gap-general-sm',
  lg: 'gap-600 px-general-lg',
};

const textVariant: { [key in ChipsTextVariant]: string } = {
  sm: 'sm',
  md: 'sm',
  lg: 'md',
};

const BaseChip = ({
  label,
  icon,
  children,
  className,
  size = 'sm',
  disabled,
}: ChipsProps) => {
  const [chip_state, setChipState] = useState(false);
  const chipHandler = () => {
    return setChipState(true);
  };

  return (
    <div
      onClick={chipHandler}
      className={qtMerge(
        'border-xs border-opacity-black-100 flex w-fit items-center rounded-2xl',
        className,
        chip_state ? 'bg-opacity-black-800' : 'bg-none',
        sizeVariants[size],
        !chip_state && 'hover:bg-opacity-black-100',
        disabled && 'opacity-300',
      )}
    >
      {icon && icon}
      {label && (
        <Text
          size={textVariant[size]}
          className={qtMerge(
            chip_state ? 'text-solid-slate-50' : 'text-typography-default',
          )}
        >
          {label}
        </Text>
      )}
      {children}
    </div>
  );
};

export default BaseChip;
