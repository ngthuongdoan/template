import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import themeConfig from "../config/themes";

const GlobalStyle = createGlobalStyle`
  ${reset}
  @font-face {
    font-family: 'Apparel It';
    src: url('fonts/Apparel/Apparel/Apparel Black It.ttf') format('truetype');
    src: url('fonts/Apparel/Apparel Bold It.ttf') format('truetype');
    src: url('fonts/Apparel/Apparel Display Black It.ttf') format('truetype');
    src: url('fonts/Apparel/Apparel Display Bold It.ttf') format('truetype');
    src: url('fonts/Apparel/Apparel Display Light It.ttf') format('truetype');
    src: url('fonts/Apparel/Apparel Display Regular It.ttf') format('truetype');
    src: url('fonts/Apparel/Apparel Display Thin It.ttf') format('truetype');
    src: url('fonts/Apparel/Apparel Light It.ttf') format('truetype');
    src: url('fonts/Apparel/Apparel Regular It.ttf') format('truetype');
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Apparel';
    src: url('fonts/Apparel/Apparel Black.ttf') format('truetype');
    src: url('fonts/Apparel/Apparel Bold.ttf') format('truetype');
    src: url('fonts/Apparel/Apparel Display Black.ttf') format('truetype');
    src: url('fonts/Apparel/Apparel Display Bold.ttf') format('truetype');
    src: url('fonts/Apparel/Apparel Display Light.ttf') format('truetype');
    src: url('fonts/Apparel/Apparel Display Regular.ttf') format('truetype');
    src: url('fonts/Apparel/Apparel Display Thin.ttf') format('truetype');
    src: url('fonts/Apparel/Apparel Light.ttf') format('truetype');
    src: url('fonts/Apparel/Apparel Regular.ttf') format('truetype');
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Gilroy';
    src: url('fonts/Gilroy/Gilroy-ExtraBold.otf') format('opentype');
    src: url('fonts/Gilroy/Gilroy-Light.otf') format('opentype');
    font-style: normal;
    font-display: swap;
  }

  body {
    font-family: ${themeConfig.fonts.Apparel};
    box-sizing: border-box;
    background-color: ${themeConfig.colors.sideCar};
  }
`;

export default GlobalStyle;
