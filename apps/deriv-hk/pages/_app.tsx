import { AppProps } from 'next/app';
import './styles.css';
import '@deriv/quill-design/quill-tailwind/styles.css';
import '@deriv/quill-design/quill-tailwind/fonts.css';
import { ThemeProvider } from '@deriv/quill-design';
import { BuildVariantProvider } from '@deriv-com/providers';
import { Navigation } from '@deriv-com/features';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <BuildVariantProvider buildVariant="hk">
      <ThemeProvider>
        <Navigation />
        <Component {...pageProps} />
      </ThemeProvider>
    </BuildVariantProvider>
  );
}

export default CustomApp;
