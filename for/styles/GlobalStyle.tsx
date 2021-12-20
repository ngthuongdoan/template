import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import themeConfig from "../config/themes";

const GlobalStyle = createGlobalStyle`
  ${reset}
  @font-face {
    font-family: 'Apparel It';
    src: url('fonts/Apparel/Apparel/Apparel Black It.ttf') format('truetype');
    font-weight: 900;
  }
  @font-face {
    font-family: 'Apparel It';
    src: url('fonts/Apparel/Apparel Bold It.ttf') format('truetype');
    font-weight: 600;
  }

  @font-face {
    font-family: 'Apparel It';
    src: url('fonts/Apparel/Apparel Regular It.ttf') format('truetype');
    font-weight: 400;
  }

  @font-face {
    font-family: 'Apparel It';
    src: url('fonts/Apparel/Apparel Light It.ttf') format('truetype');
    font-weight: 300;
  }

  @font-face {
    font-family: 'Apparel';
    src: url('fonts/Apparel/Apparel Black.ttf') format('truetype');
    font-weight: 900;
  }
  @font-face {
    font-family: 'Apparel';
    src: url('fonts/Apparel/Apparel Bold.ttf') format('truetype');
    font-weight: 600;
  }

  @font-face {
    font-family: 'Apparel';
    src: url('fonts/Apparel/Apparel Regular.ttf') format('truetype');
    font-weight: 400;
  }

  @font-face {
    font-family: 'Apparel ';
    src: url('fonts/Apparel/Apparel Light.ttf') format('truetype');
    font-weight: 300;
  }

  @font-face {
    font-family: 'Apparel Display';
    src: url('fonts/Apparel/Apparel Display Black.ttf') format('truetype');
    font-weight: 900;
  }
  @font-face {
    font-family: 'Apparel Display';
    src: url('fonts/Apparel/Apparel Display Bold.ttf') format('truetype');
    font-weight: 600;
  }

  @font-face {
    font-family: 'Apparel Display';
    src: url('fonts/Apparel/Apparel Display Regular.ttf') format('truetype');
    font-weight: 400;
  }

  @font-face {
    font-family: 'Apparel Display';
    src: url('fonts/Apparel/Apparel Display Light.ttf') format('truetype');
    font-weight: 300;
  }

  @font-face {
    font-family: 'Gilroy';
    src: url('fonts/Gilroy/Gilroy-ExtraBold.otf') format('opentype');
    font-weight: 800;
  }

  @font-face {
    font-family: 'Gilroy';
    src: url('fonts/Gilroy/Gilroy-Light.otf') format('opentype');
    font-weight: 300;
  }


  body {
    font-family: ${themeConfig.fonts.Apparel};
    box-sizing: border-box;
    background-color: ${themeConfig.colors.sideCar};
    max-width: 1920px;
    margin: 0 auto;
  }
`;

export default GlobalStyle;
