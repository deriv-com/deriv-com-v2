import { CardVariantProps } from '@deriv-com/components';
import { IllustrativeProtectedAndSecureIcon } from '@deriv/quill-icons';

export const cards: CardVariantProps<'ContentBottom'>[] = Array.from({
  length: 6,
}).map((_, i) => ({
  id: i,
  header: `Card ${i + 1}`,
  description: `Description here ${i + 1}`,
  icon: <IllustrativeProtectedAndSecureIcon />,
  color: 'gray',
  align: 'start',
  size: 'sm',
}));
