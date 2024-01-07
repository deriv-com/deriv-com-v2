import { CardContent } from '@deriv-com/components';
import { BrandDerivLogoCoralIcon } from '@deriv/quill-icons';
import React from 'react';

const cards: CardContent[] = Array.from({ length: 3 }).map((_, i) => ({
  id: i + 1,
  header: `Product ${i + 1}`,
  description: `Product description ${i + 1}`,
  icon: <BrandDerivLogoCoralIcon width={48} height={48} />,
  size: 'md',
  align: 'start',
  color: 'gray',
  link: {
    content: 'Learn More',
    href: '/',
  },
}));

export const data = {
  title: '20+ years of proven excellence',
  description:
    'Description goes here description goes here description goes here description goes here',
  cols: 'three',
  cards: cards,
};
