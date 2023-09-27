import { NavigationContext } from '@deriv-com/providers';
import { useContext } from 'react';

export const useNavigation = () => {
  return useContext(NavigationContext);
};

export default useNavigation;
