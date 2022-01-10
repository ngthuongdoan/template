// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    breakpoints: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
      xxl: number;
    };

    colors: {
      black: string;
      white: string;
      transparent: string;
      silver: string;
      dune: string;
      silverChalice: string;
      alabaster: string;
      gallery: string;
    };
    fonts: {
      Poppins: string;
      BarlowCondensed: string;
      Rajdhani: string;
    };
    mixins: {
      maxWidth: Record<"xs" | "sm" | "md" | "lg" | "xl" | "xxl", Function>;
    };
  }
}
