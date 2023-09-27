import { Navigation } from '@deriv-com/features';
import { HomeTemplate } from '@deriv-com/templates';

export function Index() {
  return (
    <>
      <Navigation.Main />
      <HomeTemplate />;
    </>
  );
}

export default Index;
