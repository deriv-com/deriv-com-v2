import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" className="bg-background-primary-container">
      <Head>
        <meta name="color-scheme" content="light dark" />
      </Head>
      <body className="bg-background-primary-container">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
