import { PropsWithChildren } from 'react';
import { BuildVariant, BuildVariantContext } from './buildVariant.context';

export interface BuildVariantProviderProps {
  buildVariant: BuildVariant;
}

export const BuildVariantProvider = ({
  buildVariant,
  children,
}: PropsWithChildren<BuildVariantProviderProps>) => {
  return (
    <BuildVariantContext.Provider value={{ buildVariant }}>
      {children}
    </BuildVariantContext.Provider>
  );
};

export default BuildVariantProvider;
