import {
  CardSlider,
  CardSliderProps,
  CardVariantType,
  CustomLink,
} from '@deriv-com/components';
import {
  FluidContainer,
  Heading,
  Section,
  Text,
  qtMerge,
} from '@deriv/quill-design';
import { StandaloneChevronRightRegularIcon } from '@deriv/quill-icons';
import clsx from 'clsx';
import { ReactNode } from 'react';

export interface LiveMarketProps<T extends CardVariantType> {
  header?: string;
  description?: string;
  className?: string;
  tabHeader?: () => ReactNode;
  disclaimer?: string;
  link: {
    href: string;
    content: string;
  };
  cardSliderProps?: CardSliderProps<T>;
}

export const LiveMarket = <T extends CardVariantType>({
  header,
  description,
  className,
  disclaimer,
  link,
  tabHeader: TabHeader,
  cardSliderProps,
}: LiveMarketProps<T>) => {
  return (
    <Section
      className={qtMerge(
        'py-general-4xl',
        'bg-background-primary-container',
        className,
      )}
    >
      <FluidContainer className="flex flex-col items-center justify-center gap-gap-3xl">
        {(header || description || TabHeader) && (
          <div className="flex w-full flex-col items-center gap-gap-2xl">
            {header && <Heading.H2>{header}</Heading.H2>}
            {(description || TabHeader) && (
              <div className="flex w-full flex-col items-center gap-gap-xl">
                {TabHeader && <TabHeader />}
                {description && (
                  <Text className="text-center" size="md">
                    {description}
                  </Text>
                )}
              </div>
            )}
          </div>
        )}
        <div className="flex w-full flex-col items-center gap-gap-xl">
          {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            <CardSlider {...cardSliderProps} />
          }
          {disclaimer && (
            <div className="max-sm:px-general-md">
              <Text className="text-center text-caption text-typography-subtle">
                {disclaimer}
              </Text>
            </div>
          )}
        </div>
        {link && (
          <CustomLink
            href={link.href}
            className={clsx('flex items-center justify-center text-body-md')}
          >
            {link.content}
            <StandaloneChevronRightRegularIcon className="text-solid-slate-1400" />
          </CustomLink>
        )}
      </FluidContainer>
    </Section>
  );
};

export default LiveMarket;
