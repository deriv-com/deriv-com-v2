import { createContext } from 'react';

export type BuildVariant = 'hk' | 'eu' | 'row' | 'gold' | 'all';

export interface BuildVariantContextProps {
  buildVariant: BuildVariant;
}

export const BuildVariantContext = createContext<BuildVariantContextProps>({
  buildVariant: 'all',
});
