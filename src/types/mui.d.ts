import '@mui/material/Typography';

declare module '@mui/material/Typography' {
  interface TypographyPropsColorOverrides {
    black: true;
    white: true;
  }
}

// import { PaletteColorOptions } from '@mui/material';

// declare module '@mui/material/styles' {
//   interface Palette {
//     tertiary: Palette['primary'];
//   }
//   interface PaletteOptions {
//     tertiary: PaletteColorOptions;
//   }
// }
