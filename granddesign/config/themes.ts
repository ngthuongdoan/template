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
export const device = {
  xs: `(max-width: ${breakpoints.xs}px)`,
  sm: `(max-width: ${breakpoints.sm}px)`,
  md: `(max-width: ${breakpoints.md}px)`,
  lg: `(max-width: ${breakpoints.lg}px)`,
  xl: `(max-width: ${breakpoints.xl}px)`,
  xxl: `(max-width: ${breakpoints.xxl}px)`,
};

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
  device,
  radii,
};

export default theme;
