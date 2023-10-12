import { CardSlider, CardSliderProps, CustomLink } from '@deriv-com/components';
import { FluidContainer, Heading, Section, Text } from '@deriv/quill-design';
import { StandaloneChevronRightRegularIcon } from '@deriv/quill-icons';
import clsx from 'clsx';
import { ReactNode } from 'react';

export interface LiveMarketProps {
  isHeaderSection?: boolean;
  header?: string;
  description?: string;
  className?: string;
  tabHeader?: ReactNode;
  disclaimer?: string;
  link: {
    href: string;
    content: string;
  };
  cardSliderProps?: CardSliderProps;
}

export const LiveMarket = ({
  isHeaderSection = false,
  header,
  description,
  className,
  disclaimer,
  link,
  tabHeader,
  cardSliderProps,
}: LiveMarketProps) => {
  return (
    <Section
      className={clsx(
        'py-general-4xl',
        'bg-background-primary-container',
        className,
      )}
    >
      <FluidContainer className="flex flex-col items-center justify-center gap-gap-2xl">
        {isHeaderSection ? (
          <div className="flex flex-col gap-gap-lg">
            {header && <Heading.H2>{header}</Heading.H2>}
            {description && <Text size="md">{description}</Text>}
            {tabHeader}
          </div>
        ) : (
          <div className="flex w-full flex-col items-center">
            <CardSlider {...cardSliderProps} />
            {disclaimer && (
              <Text className="text-center text-caption text-typography-subtle">
                {disclaimer}
              </Text>
            )}
          </div>
        )}
        {link && (
          <CustomLink
            href={link.href}
            className={clsx(
              'flex items-center justify-center text-body-md text-typography-link',
            )}
          >
            {link.content}
            <StandaloneChevronRightRegularIcon fill="#FF444F" />
          </CustomLink>
        )}
      </FluidContainer>
    </Section>
  );
};

export default LiveMarket;
