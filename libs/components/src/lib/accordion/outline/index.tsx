import { AccordionProps } from '../types';

import Base from '../base';

export const Outline = ({ ...otherProps }: AccordionProps) => {
  return (
    <Base
      {...otherProps}
      className="rounded-1200 border-xs border-opacity-black-100"
    />
  );
};

export default Outline;
