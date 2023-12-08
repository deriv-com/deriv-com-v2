import { Features } from '@deriv-com/blocks';
import { CardContent } from '@deriv-com/components';
import dynamic from 'next/dynamic';

const LocationMap = dynamic(() => import('./map'), {
  ssr: false,
});

const ourLocationCards: CardContent[] = [
  {
    id: 1,
    header: '1,200+',
    description: 'employees',
    color: 'gray',
    size: 'lg',
    align: 'center',
  },
  {
    id: 2,
    header: '70+',
    description: 'nationalities',
    color: 'gray',
    size: 'lg',
    align: 'center',
  },
  {
    id: 3,
    header: '21',
    description: 'locations',
    color: 'gray',
    size: 'lg',
    align: 'center',
  },
  {
    id: 4,
    header: '17',
    description: 'countries',
    color: 'gray',
    size: 'lg',
    align: 'center',
  },
];

export const WhoWeAreLocations = () => {
  return (
    <>
      <Features.Card
        title="Our locations"
        cards={ourLocationCards}
        cols="four"
      />
      <LocationMap />
    </>
  );
};

export default WhoWeAreLocations;
