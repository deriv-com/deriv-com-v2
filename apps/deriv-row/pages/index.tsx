import { Footer, Navigation } from '@deriv-com/features';
import { HomeRowTemplate } from '@deriv-com/templates';
import Head from 'next/head';

export function Index() {
  return (
    <>
      <Head>
        <title>Deriv - Home Page</title>
      </Head>
      <Navigation.MainRow />
      <HomeRowTemplate />
      <Footer.ROW />
    </>
  );
}

export default Index;
