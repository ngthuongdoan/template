import { css, DefaultTheme } from "styled-components";
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
  colors: {
    black: "#000000",
    white: "#FFFFFF",
    transparent: "transparent",
    silver: "#BCBCBC",
    dune: "#2D2926",
    silverChalice: "#AFAFAF",
    alabaster: "#FAFAFA",
    gallery: "#EFEFEF",
  },
  fonts: {
    Poppins: "'Poppins', sans-serif",
    BarlowCondensed: "'Barlow Condensed', sans-serif",
    Rajdhani: "'Rajdhani', sans-serif",
  },
  mixins: {
    maxWidth,
  },
};

export default theme;
