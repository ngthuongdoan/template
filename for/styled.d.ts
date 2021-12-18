// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    breakpoints: Array<number>;
    fonts: {
      Apparel: string;
      ApparelIt: string;
      Gilroy: string;
    };
    space: Array<number>;
    fontSizes: Array<number>;
    fontWeights: Array<number>;
    lineHeights: Array<number>;
    colors: {
      black: string;
      white: string;
      transparent: string;
      sideCar: string;
      grainBrown: string;
      darkCream: string;
      yellowMetal: string;
      brownRust: string;
      pickledBean: string;
    };
    radii: Array<number>;
  }
}
