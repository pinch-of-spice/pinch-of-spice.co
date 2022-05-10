import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Trykker&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="description" content="Pinch of Spice LLC." />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
