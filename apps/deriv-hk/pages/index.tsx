import { Navigation } from '@deriv-com/features';
import { HomeTemplate, HomeTemplateProps } from '@deriv-com/templates';

export function Index(props: HomeTemplateProps) {
  return (
    <>
      {/* <Navigation.Main /> */}
      <Navigation.MainRow />
      <HomeTemplate title={'yo yo '} />;
    </>
  );
}

export default Index;
