import { AppProps } from 'next/app';
import '../styles.css';
import {
  BuildVariantProvider,
  SharedLinkProvider,
  SharedLink,
} from '@deriv-com/providers';
import Link from 'next/link';
import { BreakpointProvider, ThemeProvider } from '@deriv/quill-design';
import Head from 'next/head';

const NextSharedLink: SharedLink = ({ href, ...rest }) => {
  return <Link href={href ?? '/'} {...rest} />;
};
function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <BuildVariantProvider buildVariant="row">
      <SharedLinkProvider DerivLink={NextSharedLink}>
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
      </SharedLinkProvider>
    </BuildVariantProvider>
  );
}
export default CustomApp;
