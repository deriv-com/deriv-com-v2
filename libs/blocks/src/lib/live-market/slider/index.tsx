import {
  CardSlider,
  CardSliderProps,
  CardVariantType,
} from '@deriv-com/components';
import { LiveMarket } from '@deriv-com/components';

export interface LiveMarketProps<T extends CardVariantType> {
  header?: string;
  description?: string;
  className?: string;
  disclaimer?: string;
  link: {
    href: string;
    content: string;
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
