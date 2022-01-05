/* eslint-disable react-svg/no-metadata-in-svg */
import { DocumentContext, Html, Main, NextScript, Head } from "next/document";
import Document from "next/document";
import { ServerStyleSheet } from "styled-components";
class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      // eslint-disable-next-line no-param-reassign
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          {/* Favicons */}
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="images/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="images/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="images/favicon-16x16.png"
          />
          <link rel="manifest" href="images/site.webmanifest" />
          <link
            rel="mask-icon"
            href="images/safari-pinned-tab.svg"
            color="#ffffff"
          />
          <link rel="shortcut icon" href="images/favicon.ico" />
          <meta name="apple-mobile-web-app-title" content="U by Emaar" />
          <meta name="application-name" content="U by Emaar" />
          <meta name="msapplication-TileColor" content="#00aba9" />
          <meta
            name="msapplication-config"
            content="images/browserconfig.xml"
          />
          <meta name="theme-color" content="#ffffff" />
          {/* <!-- Primary Meta Tags --> */}
          <title>U by Emaar</title>
          <meta name="title" content="U by Emaar" />
          <meta
            name="description"
            content="THE MOST REWARDING LOYALTY PROGRAM IN THE REGION."
          />
          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://ubyemaar.netlify.app/" />
          <meta property="og:title" content="U by Emaar" />
          <meta
            property="og:description"
            content="THE MOST REWARDING LOYALTY PROGRAM IN THE REGION."
          />
          <meta property="og:image" content="/base-image.png" />
          {/* <!-- Twitter --> */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://ubyemaar.netlify.app/"
          />
          <meta property="twitter:title" content="U by Emaar" />
          <meta
            property="twitter:description"
            content="THE MOST REWARDING LOYALTY PROGRAM IN THE REGION."
          />
          <meta property="twitter:image" content="/base-image.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Barlow:wght@100;200;300;400;500;600;700&family=Poppins:wght@100;200;300;400;500;600;700&display=swap"
            rel="stylesheet"
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
