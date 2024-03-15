import { ReactNode } from 'react';
import { CTALeft } from './cta-left';
import { CTARight } from './cta-right';
import { CTAV5 } from './cta-v5';

type CTAVariants = {
  Left: typeof CTALeft;
  Right: typeof CTARight;
  V5: typeof CTAV5;
};

export const CTA: CTAVariants = ({ children }: { children: ReactNode }) => {
  return children;
};
CTA.Left = CTALeft;
CTA.Right = CTARight;
CTA.V5 = CTAV5;

export default CTA;
