import type { AppProps } from "next/app";
import theme from "../config/themes";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
