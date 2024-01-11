import { ComponentProps, ReactNode } from 'react';
import { CardsContainerProps } from '@deriv-com/components';
import { Section } from '@deriv/quill-design';

//todo: removed [LinkProps] from utils/generics and added here. we need to update this because we are using this on multiple places
interface LinkProps {
  content: ReactNode;
  href: string;
}

type SectionProps = Omit<ComponentProps<typeof Section>, 'content' | 'title'>;

export type FastPaymentProps = SectionProps & {
  title: ReactNode;
  description?: ReactNode;
  link?: LinkProps;
  disclaimer?: ReactNode;
  content: Omit<CardsContainerProps<'ContentBottom'>, 'variant'>;
  className?: string;
};
