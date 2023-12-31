import { ReactNode } from 'react';
import { CardsContainerProps } from '@deriv-com/components';

//todo: removed [LinkProps] from utils/generics and added here. we need to update this because we are using this on multiple places
interface LinkProps {
  content: ReactNode;
  href: string;
}
export interface FastPaymentProps {
  title: ReactNode;
  description?: ReactNode;
  link?: LinkProps;
  disclaimer?: ReactNode;
  content: Omit<CardsContainerProps<'ContentBottom'>, 'variant'>;
  className?: string;
}
