import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import '@deriv/quill-design/quill-tailwind/styles.css';
import '@deriv/quill-design/quill-tailwind/fonts.css';
import { ThemeProvider } from '@deriv/quill-design';
import { BuildVariantProvider } from '@deriv-com/providers';
import { Navigation } from '@deriv-com/features';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to deriv-hk!</title>
      </Head>
      <main className="app">
        <BuildVariantProvider buildVariant="hk">
          <ThemeProvider>
            <Navigation />
            <Component {...pageProps} />
          </ThemeProvider>
        </BuildVariantProvider>
      </main>
    </>
  );
}

export default CustomApp;
