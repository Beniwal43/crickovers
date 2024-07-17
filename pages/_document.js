/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-title-in-document-head */
import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="assets/img/logo/Crickovers-logo.svg"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        
      </body>
    </Html>
  );
}
