import { Features } from '@deriv-com/blocks';
import { CardContent } from '@deriv-com/components';

const ourLocationCards: CardContent[] = [
  {
    header: '1,200+',
    description: 'employees',
    color: 'gray',
    size: 'lg',
    align: 'center',
  },
  {
    header: '70+',
    description: 'nationalities',
    color: 'gray',
    size: 'lg',
    align: 'center',
  },
  {
    header: '21',
    description: 'locations',
    color: 'gray',
    size: 'lg',
    align: 'center',
  },
  {
    header: '17',
    description: 'countries',
    color: 'gray',
    size: 'lg',
    align: 'center',
  },
];

export const WhoWeAreLocations = () => {
  return (
    <Features.CardFeature
      title="Our locations"
      cards={ourLocationCards}
      cols="four"
    />
  );
};

export default WhoWeAreLocations;
