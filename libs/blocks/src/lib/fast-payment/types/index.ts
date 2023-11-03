import { ReactNode } from 'react';
import { CardsContainerProps } from '@deriv-com/components';

//todo: removed [LinkProps] from utils/generics and added here. we need to update this because we are using this on multiple places
interface LinkProps {
  content: ReactNode;
  href: string;
}
export interface FastPaymentProps {
  title: string;
  description?: string;
  link?: LinkProps;
  disclaimer?: string;
  content: Omit<CardsContainerProps<'ContentBottom'>, 'variant'>;
}
