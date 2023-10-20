import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" className="bg-background-primary-container">
      <Head>
        <meta name="color-scheme" content="light dark" />
        <link rel="icon" href="images/favicon.png" type="image/x-icon" />
        <link
          rel="shortcut icon"
          href="images/favicon.png"
          type="image/x-icon"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
