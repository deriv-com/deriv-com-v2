import { AppProps } from 'next/app';
import '../styles.css';
import { BreakpointProvider, ThemeProvider } from '@deriv/quill-design';
import { BuildVariantProvider } from '@deriv-com/providers';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <BuildVariantProvider buildVariant="hk">
      <BreakpointProvider>
        <ThemeProvider theme="light">
          <Component {...pageProps} />
        </ThemeProvider>
      </BreakpointProvider>
    </BuildVariantProvider>
  );
}
export default CustomApp;
