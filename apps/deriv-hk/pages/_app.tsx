import { AppProps } from 'next/app';
import '../styles.css';
import {
  BuildVariantProvider,
  SharedLinkProvider,
  SharedLink,
} from '@deriv-com/providers';
import Link from 'next/link';
import { BreakpointProvider, ThemeProvider } from '@deriv/quill-design';

const NextSharedLink: SharedLink = ({ href, ...rest }) => {
  return <Link href={href ?? '/'} {...rest} />;
};
function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <BuildVariantProvider buildVariant="hk">
      <ThemeProvider theme="light">
        <BreakpointProvider>
          <SharedLinkProvider DerivLink={NextSharedLink}>
            <Component {...pageProps} />
          </SharedLinkProvider>
        </BreakpointProvider>
      </ThemeProvider>
    </BuildVariantProvider>
  );
}
export default CustomApp;
