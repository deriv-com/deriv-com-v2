import { AppProps } from 'next/app';
import '../styles.css';
import { ScreenProvider, ThemeProvider } from '@deriv/quill-design';
import { BuildVariantProvider } from '@deriv-com/providers';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <BuildVariantProvider buildVariant="hk">
      <ScreenProvider>
        <ThemeProvider theme="light">
          <Component {...pageProps} />
        </ThemeProvider>
      </ScreenProvider>
    </BuildVariantProvider>
  );
}
export default CustomApp;
