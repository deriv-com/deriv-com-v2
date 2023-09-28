import { AppProps } from 'next/app';
import '../styles.css';
import '@deriv/quill-design/quill-tailwind/styles.css';
import '@deriv/quill-design/dist/quill-design.css';
import '@deriv/quill-design/quill-tailwind/fonts.css';
import { ThemeProvider } from '@deriv/quill-design';
import { BuildVariantProvider } from '@deriv-com/providers';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <BuildVariantProvider buildVariant="hk">
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </BuildVariantProvider>
  );
}
export default CustomApp;
