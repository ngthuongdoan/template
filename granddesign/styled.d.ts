// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: Array<number>;

    space: Array<number>;
    fontSizes: Array<number>;
    fontWeights: Array<number>;
    lineHeights: Array<number>;
    colors: {
      black: string;
      white: string;
      transparent: string;
    };
    radii: Array<number>;
  }
}
