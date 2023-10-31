import { AccordionProps } from '../types';

import Base from '../base';

export const Flush = ({ ...otherProps }: AccordionProps) => {
  return (
    <Base
      divider="bottom"
      className="border-x-none [&>div:first-child]:rounded-50"
      {...otherProps}
    />
  );
};

export default Flush;
