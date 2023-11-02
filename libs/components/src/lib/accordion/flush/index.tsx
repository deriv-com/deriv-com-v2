import { AccordionProps } from '../types';

import Base from '../base';

export const Flush = ({ ...otherProps }: AccordionProps) => {
  return (
    <Base
      divider="bottom"
      className="border-x-none"
      contentClass="rounded-50"
      {...otherProps}
    />
  );
};

export default Flush;
