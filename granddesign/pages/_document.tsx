/* eslint-disable react-svg/no-metadata-in-svg */
import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html>
      <Head>
        {/* Favicons */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#f4f4f4" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#f4f4f4" />
        {/* <!-- Primary Meta Tags --> */}
        <title>Grand Design Interior</title>
        <meta name="title" content="Grand Design Interior" />
        <meta
          name="description"
          content="Bring your dream office interiors to Life with our design expertise."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://grand-design.netlify.app/" />
        <meta property="og:title" content="Grand Design Interior" />
        <meta
          property="og:description"
          content="Bring your dream office interiors to Life with our design expertise."
        />
        <meta
          property="og:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://grand-design.netlify.app/"
        />
        <meta property="twitter:title" content="Grand Design Interior" />
        <meta
          property="twitter:description"
          content="Bring your dream office interiors to Life with our design expertise."
        />
        <meta
          property="twitter:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
