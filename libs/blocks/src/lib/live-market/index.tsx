import {
  CardSlider,
  CardSliderProps,
  CardVariantType,
  CustomLink,
} from '@deriv-com/components';
import { FluidContainer, Section, Text, qtMerge } from '@deriv/quill-design';
import { StandaloneChevronRightRegularIcon } from '@deriv/quill-icons/Standalone';
import clsx from 'clsx';
import { ReactNode } from 'react';
import { HeaderSection } from './header-section';

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
          <HeaderSection
            header={header}
            description={description}
            TabHeader={TabHeader}
          />
        )}
        {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          <CardSlider {...cardSliderProps} />
        }
        {link && (
          <CustomLink
            href={link.href}
            className={clsx('flex items-center justify-center text-body-lg')}
          >
            {link.content}
            <StandaloneChevronRightRegularIcon className="text-solid-slate-1400" />
          </CustomLink>
        )}
        {disclaimer && (
          <div className="max-sm:px-general-md">
            <Text size="sm" className="text-center text-typography-subtle">
              {disclaimer}
            </Text>
          </div>
        )}
      </FluidContainer>
    </Section>
  );
};

export default LiveMarket;
