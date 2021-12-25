import { css, DefaultTheme } from "styled-components";

const fontSizes = [12, 14, 16, 18, 20, 24, 36, 48, 80, 96];
const fontWeights = [100, 200, 300, 400, 500, 600, 700, 800, 900];
const lineHeights = [1, 1.25, 1.5];
const radii = [0, 2, 4, 6, 8, 10];
const space = [0, 4, 8, 16, 24, 32, 48, 64, 128, 256, 512];
const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
};

type CssParams = Parameters<typeof css>;
const keys = Object.keys(breakpoints) as Array<keyof typeof breakpoints>;

export const maxWidth = keys.reduce((accumulator, label) => {
  // eslint-disable-next-line no-param-reassign
  accumulator[label] = (...args: CssParams) => {
    return css`
      @media (max-width: ${breakpoints[label]}px) {
        ${css(...args)};
      }
    `;
  };
  return accumulator;
}, {} as Record<keyof typeof breakpoints, Function>);

const theme: DefaultTheme = {
  breakpoints,
  space,
  fontSizes,
  fontWeights,
  lineHeights,

  colors: {
    black: "#333333",
    white: "#F4F4F4",
    transparent: "transparent",
  },
  radii,
  mixins: {
    maxWidth,
  },
};

export default theme;
