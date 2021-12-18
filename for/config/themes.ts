import { DefaultTheme } from "styled-components";

const fontSizes = [12, 14, 16, 18, 20, 24, 36, 48, 80, 96];
const fontWeights = [100, 200, 300, 400, 500, 600, 700, 800, 900];
const lineHeights = [1, 1.25, 1.5];
const radii = [0, 2, 4, 6, 8, 10];
const space = [0, 4, 8, 16, 24, 32, 48, 64, 128, 256, 512];
const fonts = {
  Apparel: `Apparel, serif`,
  ApparelIt: `Apparel It, serif`,
  Gilroy: `Gilroy, san-serif`,
};

const theme: DefaultTheme = {
  breakpoints: [32, 48, 64],
  fonts,
  space,
  fontSizes,
  fontWeights,
  lineHeights,

  colors: {
    black: "#000",
    white: "#fff",
    transparent: "transparent",
    sideCar: "#f7e7ce",
    grainBrown: "#e8dcc3",
    darkCream: "#e2d2b7",
    yellowMetal: "#8a7442",
    brownRust: "#713c25",
    pickledBean: "#be6c42",
  },
  radii,
};

export default theme;
