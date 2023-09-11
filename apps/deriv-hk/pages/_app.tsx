import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import '@deriv-com/quill-design/quill-tailwind/styles.css';
import '@deriv-com/quill-design/quill-tailwind/fonts.css';
import { ThemeProvider } from '@deriv-com/quill-design';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to deriv-hk!</title>
      </Head>
      <main className="app">
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </main>
    </>
  );
}

export default CustomApp;
