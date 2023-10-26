import styles from './elevate.module.css';
import { AccordionProps } from '../types';

import Fill from '../fill';

export const Elevate = ({ ...otherProps }: AccordionProps) => {
  return (
    <Fill {...otherProps} className={styles['elevate-style']} divider="none" />
  );
};

export default Elevate;
