import { PageLayout } from '@deriv-com/components';
import WhoWeAreHero from './sections/hero';
import { WhoWeAreValues } from './sections/our-values';
import WhoWeArePrinciples from './sections/our-principles';
import WhoWeAreNumbers from './sections/deriv-in-numbers';
import WhoWeAreLocations from './sections/our-locations';

export function WhoWeAreTemplate() {
  return (
    <PageLayout>
      <WhoWeAreHero />
      <WhoWeAreValues />
      <WhoWeArePrinciples />
      <WhoWeAreNumbers />
      <WhoWeAreLocations />
    </PageLayout>
  );
}

export default WhoWeAreTemplate;
