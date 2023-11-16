import { SharedLinkContext } from '@deriv-com/providers';
import { useContext } from 'react';

export const useSharedLink = () => {
  return useContext(SharedLinkContext);
};
