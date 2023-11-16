import { ReactNode } from 'react';
import { SharedLink } from './types';
import { SharedLinkContext } from './shared-link-provider.context';

export const SharedLinkProvider = ({
  children,
  DerivLink,
}: {
  DerivLink: SharedLink;
  children: ReactNode;
}) => {
  return (
    <SharedLinkContext.Provider value={{ DerivLink }}>
      {children}
    </SharedLinkContext.Provider>
  );
};
