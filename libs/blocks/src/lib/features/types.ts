import {
  CardContent,
  CardSliderProps,
  CardVariantType,
} from '@deriv-com/components';
import { Section } from '@deriv/quill-design';
import { ComponentProps, ReactNode } from 'react';
import { BlockWrapperProps } from '../block-wrapper';

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
  contentTop?: boolean;
  contentPadding?: boolean;
}

export interface FeaturesV4Props extends BlockWrapperProps {
  content: ReactNode;
  variant?: 'content-left' | 'content-right';
  contentBottom?: boolean;
}

export interface ContentSliderProps<T extends CardVariantType> {
  title?: ReactNode;
  description?: ReactNode;
  bottomContent?: ReactNode;
  cta?: () => ReactNode;
  className?: string;
  cardSliderProps?: CardSliderProps<T>;
}
