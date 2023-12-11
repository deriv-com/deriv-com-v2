import { ReactNode } from 'react';
import {
  CardSlider,
  CardSliderProps,
  CardVariantType,
} from '@deriv-com/components';
import { LiveMarket } from '@deriv-com/components';

export interface LiveMarketProps<T extends CardVariantType> {
  header?: ReactNode;
  description?: ReactNode;
  className?: string;
  disclaimer?: ReactNode;
  link: {
    href: string;
    content: ReactNode;
  };
  cardSliderProps?: CardSliderProps<T>;
}

export const LiveMarketSlider = <T extends CardVariantType>({
  header,
  description,
  className,
  disclaimer,
  link,
  cardSliderProps,
}: LiveMarketProps<T>) => {
  return (
    <LiveMarket.Container
      header={header}
      description={description}
      disclaimer={disclaimer}
      link={link}
      className={className}
    >
      {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        <CardSlider {...cardSliderProps} />
      }
    </LiveMarket.Container>
  );
};

export default LiveMarketSlider;
