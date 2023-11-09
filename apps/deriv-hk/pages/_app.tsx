import { AppProps } from 'next/app';
import '../styles.css';
import { ThemeProvider } from '@deriv/quill-design';
import {
  BuildVariantProvider,
  SharedLinkProvider,
  SharedLink,
} from '@deriv-com/providers';
import Link from 'next/link';

const NextSharedLink: SharedLink = ({ href, ...rest }) => {
  return <Link href={href ?? '/'} {...rest} />;
};
function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <BuildVariantProvider buildVariant="hk">
      <ThemeProvider theme="light">
        <SharedLinkProvider DerivLink={NextSharedLink}>
          <Component {...pageProps} />
        </SharedLinkProvider>
      </ThemeProvider>
    </BuildVariantProvider>
  );
}
export default CustomApp;
