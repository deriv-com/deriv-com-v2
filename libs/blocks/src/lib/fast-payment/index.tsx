import Base from './base';

import { FastPaymentProps } from './types';

export const FastPayment: React.FC<FastPaymentProps> = ({
  ...allProps
}: FastPaymentProps) => {
  return <Base {...allProps} />;
};

export default FastPayment;

export * from './types';
