import type { Meta, StoryObj } from '@storybook/react';
import PlatformBlockTab from '.';
import { CardsContainer } from '@deriv-com/components';
import {
  DerivProductDerivXBrandLightLogoIcon,
  PartnersProductDerivCtraderBrandLightLogoHorizontalIcon,
  PartnersProductDerivMt5BrandDarkLogoHorizontalIcon,
} from '@deriv/quill-icons/Logo';

const meta = {
  title: 'Blocks/Platform/Tab',
  component: PlatformBlockTab,
} satisfies Meta<typeof PlatformBlockTab>;

export default meta;
type Story = StoryObj<typeof PlatformBlockTab>;

export const Default: Story = {
  render: () => {
    return (
      <PlatformBlockTab
        header="Header here"
        description="desciption here description here"
        className="bg-background-primary-base"
        tabs={[
          { children: 'All' },
          { children: 'CFDs' },
          { children: 'Options' },
        ]}
      >
        <CardsContainer
          cols="three"
          variant="ContentBottom"
          cards={[
            {
              id: 1,
              header: 'Deriv MT5',
              description:
                'Your data is safe, and your funds are in segregated bank accounts per regulatory standards.',
              icon: (
                <PartnersProductDerivMt5BrandDarkLogoHorizontalIcon
                  width={48}
                  height={48}
                />
              ),
              link: {
                href: '/',
                content: 'Learn more',
              },
              color: 'light',
              align: 'start',
              size: 'md',
            },
            {
              id: 2,
              header: '24/7 support',
              description:
                'Reach our professional, multilingual team anytime via live chat.',
              icon: (
                <PartnersProductDerivCtraderBrandLightLogoHorizontalIcon
                  width={48}
                  height={48}
                />
              ),
              link: {
                href: '/',
                content: 'Learn more',
              },
              color: 'light',
              align: 'start',
              size: 'md',
            },
            {
              id: 3,
              header: 'Regulated',
              description:
                'We are licensed and overseen by leading global financial authorities.',
              icon: (
                <DerivProductDerivXBrandLightLogoIcon width={48} height={48} />
              ),
              link: {
                href: '/',
                content: 'Learn more',
              },
              color: 'light',
              align: 'start',
              size: 'md',
            },
          ]}
        />
        <CardsContainer
          cols="three"
          variant="ContentBottom"
          cards={[
            {
              id: 1,
              header: '24/7 support',
              description:
                'Reach our professional, multilingual team anytime via live chat.',
              icon: (
                <PartnersProductDerivCtraderBrandLightLogoHorizontalIcon
                  width={48}
                  height={48}
                />
              ),
              link: {
                href: '/',
                content: 'Learn more',
              },
              color: 'light',
              align: 'start',
              size: 'md',
            },
            {
              id: 2,
              header: 'Deriv MT5',
              description:
                'Your data is safe, and your funds are in segregated bank accounts per regulatory standards.',
              icon: (
                <PartnersProductDerivMt5BrandDarkLogoHorizontalIcon
                  width={48}
                  height={48}
                />
              ),
              link: {
                href: '/',
                content: 'Learn more',
              },
              color: 'light',
              align: 'start',
              size: 'md',
            },
            {
              id: 3,
              header: 'Regulated',
              description:
                'We are licensed and overseen by leading global financial authorities.',
              icon: (
                <DerivProductDerivXBrandLightLogoIcon width={48} height={48} />
              ),
              link: {
                href: '/',
                content: 'Learn more',
              },
              color: 'light',
              align: 'start',
              size: 'md',
            },
          ]}
        />
        <CardsContainer
          cols="three"
          variant="ContentBottom"
          cards={[
            {
              id: 1,
              header: 'Regulated',
              description:
                'We are licensed and overseen by leading global financial authorities.',
              icon: (
                <DerivProductDerivXBrandLightLogoIcon width={48} height={48} />
              ),
              link: {
                href: '/',
                content: 'Learn more',
              },
              color: 'light',
              align: 'start',
              size: 'md',
            },
            {
              id: 2,
              header: 'Deriv MT5',
              description:
                'Your data is safe, and your funds are in segregated bank accounts per regulatory standards.',
              icon: (
                <PartnersProductDerivMt5BrandDarkLogoHorizontalIcon
                  width={48}
                  height={48}
                />
              ),
              link: {
                href: '/',
                content: 'Learn more',
              },
              color: 'light',
              align: 'start',
              size: 'md',
            },
            {
              id: 3,
              header: '24/7 support',
              description:
                'Reach our professional, multilingual team anytime via live chat.',
              icon: (
                <PartnersProductDerivCtraderBrandLightLogoHorizontalIcon
                  width={48}
                  height={48}
                />
              ),
              link: {
                href: '/',
                content: 'Learn more',
              },
              color: 'light',
              align: 'start',
              size: 'md',
            },
          ]}
        />
      </PlatformBlockTab>
    );
  },
  parameters: {
    docs: {
      source: {
        code: 'disabled',
      },
    },
  },
};
