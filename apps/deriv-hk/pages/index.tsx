import { Navigation } from '@deriv-com/features';
import { HomeTemplate } from '@deriv-com/templates';
import Head from 'next/head';

export function Index() {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          key="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <title>Deriv Hk - Home Page</title>
      </Head>
      <Navigation.Main />
      <HomeTemplate />
    </>
  );
}

export default Index;
