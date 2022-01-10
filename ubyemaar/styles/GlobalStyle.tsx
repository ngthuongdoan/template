import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import themeConfig from "../config/themes";

const GlobalStyle = createGlobalStyle`
  ${reset}

  *, *::after, *::before {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background-color: ${themeConfig.colors.white};
    font-family: 'Poppins', sans-serif;
  }
`;

export default GlobalStyle;
