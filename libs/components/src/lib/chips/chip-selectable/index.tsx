import React from 'react';
import { ChipsProps } from '../types';
import BaseChip from '../base';

const SelectableChip = ({ children, ...rest }: ChipsProps) => {
  return <BaseChip {...rest}>{children}</BaseChip>;
};

export default SelectableChip;
