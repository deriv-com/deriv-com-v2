import { CardContent, CardVariantType, Tab } from '@deriv-com/components';

import { ComponentProps, ReactNode } from 'react';

export type PlatformBlockCardProps = {
  header?: ReactNode;
  description?: ReactNode;
  className?: string;
  cards?: CardContent[];
  cols?: 'two' | 'three' | 'four';
  variant?: CardVariantType;
};

export type PlatformBlockTabProps = ComponentProps<typeof Tab.Base> & {
  header?: ReactNode;
  description?: ReactNode;
  className?: string;
  children: ReactNode;
};
