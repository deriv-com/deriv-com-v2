import { ReactNode } from 'react';

import Standard from './standard';

type FastPaymentVariants = {
  Standard: typeof Standard;
};

export const FastPayment: FastPaymentVariants = ({
  children,
}: {
  children: ReactNode;
}) => {
  return children;
};

FastPayment.Standard = Standard;

export default FastPayment;
