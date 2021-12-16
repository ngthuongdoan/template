const fontSizes = [12, 14, 16, 18, 20, 24, 36, 48, 80, 96];
const fontWeights = [100, 200, 300, 400, 500, 600, 700, 800, 900];
const lineHeights = [1, 1.25, 1.5];
const radii = ['0px', '2px', '4px', '8px', '16px', '48px'];
const space = [0, 4, 8, 16, 24, 32, 48, 64, 128, 256, 512];

const theme = {
  breakpoints: [32, 48, 64],

  space,
  fontSizes,
  fontWeights,
  lineHeights,

  colors: {
    black: '#000',
    white: '#fff',
    transparent: 'transparent',
    primary: '#f7e7ce',
    secondary: '#e8dcc3',
    third: '#e2d2b7',
    textPrimary: '#8a7442',
    textSecondary: '#713c25',
    textHightlight: '#be6c42',
  },
  radii,
};

export default theme;
