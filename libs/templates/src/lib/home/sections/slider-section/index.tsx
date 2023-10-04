import { Features } from '@deriv-com/blocks';
import { Card } from '@deriv-com/components';
import { SliderCardData } from './data';

const CardSliderSection = () => {
  return (
    <Features.ContentSlider
      title="Card Slider Title"
      cards={SliderCardData}
      renderCard={Card.ContentBottom}
      slideClasses="max-w-xs"
    />
  );
};

export default CardSliderSection;
