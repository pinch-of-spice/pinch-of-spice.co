import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const url = "https://pinch-of-spice.co/";
  const ogp = `${url}ogp.png`;
  const description = `Pinch of Spice LLC. | ピンチオブスパイス`;

  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Trykker&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="description" content={description} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="pinch-of-spice.co" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta key="og:url" property="og:url" content={url} />
        <meta
          key="og:title"
          property="og:title"
          content="Pinch of Spice LLC."
        />
        <meta key="og:image" property="og:image" content={ogp} />
        <meta key="twitter:image" name="twitter:image" content={ogp} />
        <meta key="twitter:url" name="twitter:url" content={url} />
        <meta
          key="twitter:title"
          name="twitter:title"
          content="Pinch of Spice LLC."
        />
        <meta
          key="twitter:description"
          name="twitter:description"
          content={description}
        />
        <meta key="twitter:card" name="twitter:card" content="summary" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
