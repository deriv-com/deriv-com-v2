import { ReactNode } from 'react';
import {
  CardSlider,
  CardSliderProps,
  CardVariantType,
} from '@deriv-com/components';
import Base from '../base';
import { qtJoin } from '@deriv/quill-design';

export interface ContentSliderProps<T extends CardVariantType> {
  title?: ReactNode;
  description?: ReactNode;
  cta?: ReactNode;
  className?: string;
  cardSliderProps?: CardSliderProps<T>;
}

const ContentSlider = <T extends CardVariantType>({
  title,
  description,
  cta,
  className,
  cardSliderProps,
}: ContentSliderProps<T>) => {
  return (
    <Base
      title={title}
      description={description}
      className={className}
      cta={cta}
    >
      {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        <CardSlider
          {...cardSliderProps}
          className={qtJoin(
            cta ? 'py-general-2xl' : 'pt-general-2xl',
            cardSliderProps && cardSliderProps.className,
          )}
        />
      }
    </Base>
  );
};

export default ContentSlider;
