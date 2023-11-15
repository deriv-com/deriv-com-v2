import { AppProps } from 'next/app';
import '../styles.css';
import { BreakpointProvider, ThemeProvider } from '@deriv/quill-design';
import { BuildVariantProvider } from '@deriv-com/providers';
import Head from 'next/head';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <BuildVariantProvider buildVariant="hk">
      <BreakpointProvider>
        <ThemeProvider theme="light">
          <>
            <Head>
              <meta name="color-scheme" content="light dark" />
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
              />
            </Head>
            <Component {...pageProps} />
          </>
        </ThemeProvider>
      </BreakpointProvider>
    </BuildVariantProvider>
  );
}
export default CustomApp;
