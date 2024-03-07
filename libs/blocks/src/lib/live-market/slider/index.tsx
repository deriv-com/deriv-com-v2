import { CardSlider, CardVariantType } from '@deriv-com/components';
import { LiveMarket } from '@deriv-com/components';
import { LiveMarketProps } from '../types';

export const LiveMarketSlider = <T extends CardVariantType>({
  header,
  description,
  className,
  disclaimer,
  link,
  cardSliderProps,
  ...rest
}: LiveMarketProps<T>) => {
  return (
    <LiveMarket.Container
      header={header}
      description={description}
      disclaimer={disclaimer}
      link={link}
      className={className}
      {...rest}
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
