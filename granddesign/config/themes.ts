import { DefaultTheme } from 'styled-components';

const fontSizes = [12, 14, 16, 18, 20, 24, 36, 48, 80, 96];
const fontWeights = [100, 200, 300, 400, 500, 600, 700, 800, 900];
const lineHeights = [1, 1.25, 1.5];
const radii = [0, 2, 4, 6, 8, 10];
const space = [0, 4, 8, 16, 24, 32, 48, 64, 128, 256, 512];

const theme: DefaultTheme = {
  breakpoints: [32, 48, 64],
  space,
  fontSizes,
  fontWeights,
  lineHeights,

  colors: {
    black: '#333333',
    white: '#F4F4F4',
    transparent: 'transparent',
  },
  radii,
};

export default theme;
