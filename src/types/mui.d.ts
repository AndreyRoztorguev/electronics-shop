// import { PaletteColorOptions } from '@mui/material';

// declare module '@mui/material/styles' {
//   interface Palette {
//     tertiary: Palette['primary'];
//   }
//   interface PaletteOptions {
//     tertiary: PaletteColorOptions;
//   }
// }

declare module '@mui/material/Typography' {
  interface TypographyPropsColorOverrides {
    black: true;
    white: true;
  }
}
