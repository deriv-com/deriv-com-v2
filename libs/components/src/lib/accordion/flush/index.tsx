import styles from './standard.module.css';

import { AccordionProps } from '../types';

import Base from '../base';

export const Flush = ({ ...otherProps }: AccordionProps) => {
  return <Base divider="bottom" {...otherProps} />;
};

export default Flush;
