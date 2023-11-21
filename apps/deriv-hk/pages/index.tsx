import { Footer, Navigation } from '@deriv-com/features';
import { HomeTemplate } from '@deriv-com/templates';
import Head from 'next/head';

export function Index() {
  return (
    <>
      <Head>
        <title>Deriv Hk - Home Page</title>
      </Head>
      <Navigation.Main />
      <HomeTemplate />
      <Footer.ROW />
    </>
  );
}

export default Index;
