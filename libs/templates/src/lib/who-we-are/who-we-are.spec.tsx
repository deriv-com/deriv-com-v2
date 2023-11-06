import { render } from '@testing-library/react';

import { PageLayout } from '@deriv-com/components';
import WhoWeAreHero from './sections/hero';
import MissionContent from './sections/mission-content';
import { WhoWeAreValues } from './sections/our-values';
import WhoWeArePrinciples from './sections/our-principles';
import WhoWeAreNumbers from './sections/deriv-in-numbers';
import WhoWeAreLocations from './sections/our-locations';

describe('WhoWeAre', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <PageLayout>
        <WhoWeAreHero />
        <MissionContent />
        <WhoWeAreValues />
        <WhoWeArePrinciples />
        <WhoWeAreNumbers />
        <WhoWeAreLocations />
      </PageLayout>,
    );
    expect(baseElement).toBeTruthy();
  });
});
