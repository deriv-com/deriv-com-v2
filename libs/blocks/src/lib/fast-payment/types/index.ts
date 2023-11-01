import { CardsContainerProps } from '@deriv-com/components';
import { LinkProps } from '@deriv-com/utils';

export interface FastPaymentProps {
  title: string;
  description?: string;
  link?: LinkProps;
  disclaimer?: string;
  content: Omit<CardsContainerProps<'ContentBottom'>, 'variant'>;
}
