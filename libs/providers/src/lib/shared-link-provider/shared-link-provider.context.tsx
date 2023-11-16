import React from 'react';
import { SharedLinkContextValue } from './types';

export const SharedLinkContext = React.createContext<SharedLinkContextValue>({
  DerivLink: (props) => <a {...props} />,
});
