import { Features } from '@deriv-com/blocks';
import { Card } from '@deriv-com/components';
import { SliderCardData } from './data';

const CardSliderSection = () => {
  return (
    <Features.CardSlider
      title="Card Slider Title"
      cards={SliderCardData}
      renderCard={Card.ContentBottom}
    />
  );
};

export default CardSliderSection;
