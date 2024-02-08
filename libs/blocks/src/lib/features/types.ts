import {
  CardContent,
  CardSliderProps,
  CardVariantType,
} from '@deriv-com/components';
import { Section } from '@deriv/quill-design';
import { ComponentProps, ReactNode } from 'react';

type SectionProps = Omit<ComponentProps<typeof Section>, 'title'>;

export type FeatureCardProps = SectionProps & {
  title?: ReactNode;
  description?: ReactNode;
  cta?: ReactNode;
  className?: string;
  cards?: CardContent[];
  cols?: 'two' | 'three' | 'four';
  variant?: CardVariantType;
  hasPadding?: boolean;
};

export interface ContentLeftProps {
  title: ReactNode;
  className?: string;
  description?: ReactNode;
  content?: React.FC;
  children?: ReactNode;
  variant?: 'content-left' | 'content-right';
}

export interface ContentSliderProps<T extends CardVariantType> {
  title?: ReactNode;
  description?: ReactNode;
  cta?: () => ReactNode;
  className?: string;
  cardSliderProps?: CardSliderProps<T>;
}
