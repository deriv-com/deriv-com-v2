import { ReactNode } from 'react';

import Default from './default';

type FastPaymentVariants = {
  Default: typeof Default;
};

export const FastPayment: FastPaymentVariants = ({
  children,
}: {
  children: ReactNode;
}) => {
  return children;
};

FastPayment.Default = Default;

export default FastPayment;
