import { ReactNode } from 'react';
import SocialProofVertical from './vertical';
import SocialProofHorizontal from './horizontal';

export type SocialProofVariants = {
  Vertical: typeof SocialProofVertical;
  Horizontal: typeof SocialProofHorizontal;
};

export const SocialProof: SocialProofVariants = ({
  children,
}: {
  children: ReactNode;
}) => {
  return children;
};

SocialProof.Vertical = SocialProofVertical;
SocialProof.Horizontal = SocialProofHorizontal;

export default SocialProof;
