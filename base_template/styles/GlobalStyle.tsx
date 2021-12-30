import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import themeConfig from "../config/themes";

const GlobalStyle = createGlobalStyle`
  ${reset}
  @font-face {
    font-family: 'Helvetica Neue';
    src: url('fonts/HelveticaNeue.otf') format('opentype');
    font-weight: 400;
  }
  @font-face {
    font-family: 'Helvetica Neue';
    src: url('fonts/HelveticaNeue-Medium.otf') format('opentype');
    font-weight: 500;
  }
  @font-face {
    font-family: 'Helvetica Neue';
    src: url('fonts/HelveticaNeue-Bold.otf') format('opentype');
    font-weight: 600;
  }

  *, *::after, *::before {
    box-sizing: border-box;
    color: ${themeConfig.colors.black};
  }

  html {
    font-size: 62.5%;
  }

  body {
    background-color: ${themeConfig.colors.white};
    font-family: 'Helvetica Neue', sans-serif;
  }
`;

export default GlobalStyle;
