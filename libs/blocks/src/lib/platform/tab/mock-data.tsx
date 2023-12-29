import { CardsContainer } from '@deriv-com/components';
import { BrandDerivLogoCoralIcon } from '@deriv/quill-icons';

const tabs = 3;
const tabItems = 3;

export const tabsItem = {
  title: 'Header here',
  description: 'description here description here',
  className: 'bg-background-primary-base',
  tabs: Array.from({ length: tabs }).map((_, i) => ({
    content: `Tab ${i + 1}`,
  })),
  children: Array.from({ length: tabs }).map((_, ti) => (
    <CardsContainer
      cols="three"
      variant="ContentBottom"
      cards={Array.from({ length: tabItems }).map((_, i) => ({
        id: i + 1,
        header: `Product ${i + 1} (Tab ${ti + 1})`,
        description: `Product description ${i + 1} (Tab ${ti + 1})`,
        icon: <BrandDerivLogoCoralIcon width={48} height={48} />,
        size: 'md',
        align: 'start',
        color: 'gray',
        link: {
          content: 'Learn More',
          href: '/',
        },
      }))}
    />
  )),
};
