import { MuiCard } from '@/theme/mui/components/MuiCard';
import { createTheme } from '@mui/material';

import { MuiButton } from './mui/components';

const theme = createTheme({
  palette: {
    primary: {
      main: 'hsl(220, 100%, 50%)', // 3 blue
      light: 'hsl(201, 100%, 50%)', // 4
      dark: 'hsl(209, 100%, 33%)', // 2
    },
    secondary: {
      main: 'hsl(0, 10%, 55%)', // 5
      light: 'hsl(0, 0%, 92%)', // 7
      dark: 'hsl(0, 0%, 80%)', // 6 ,
    },
    background: {
      default: 'hsl(0, 0%, 100%)', //  white
      paper: 'hsll(228, 100%, 98%)', // 1 lightblue
    },
    error: {
      main: 'hsl(6, 56%, 52%)', // 9 orange-red
    },
    success: {
      main: 'hsl(102, 29%, 52%)', // 10 lightgreen
    },
    text: {
      primary: 'hsl(0, 0%, 0%)', // black
      secondary: 'hsl(0, 0%, 40%)', // 11
      disabled: 'hsl(220, 14%, 17%)',
    },
  },

  typography: {
    fontFamily: "'Poppins', sans-serif",
    htmlFontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
    h1: {
      fontSize: '1.375rem', // 22px
      fontWeight: 600,
      lineHeight: 1.5, // 33px
    },
    h2: {
      fontSize: '2.375rem', // 38px
      fontWeight: 500,
      lineHeight: 1.5, // ~56px
    },
    h3: {
      fontSize: '2.75rem', // 44px
      fontWeight: 500,
    },
    body1: {
      fontSize: '1.125rem', // 18px
      fontWeight: 300,
      lineHeight: 1.4,
    },
    body2: {
      fontSize: '1rem', // 16px
      fontWeight: 300,
      lineHeight: 1.5, // 24px
    },
    button: {
      fontSize: '0.875rem', // 14px
      fontWeight: 600,
      lineHeight: 1.5, // 21px
    },
    caption: {
      fontSize: '0.75rem', // 12px
      fontWeight: 400,
      lineHeight: 2.1, // 25.2px
    },
    subtitle1: {
      fontSize: '0.813rem', // 13px
      fontWeight: 400,
      lineHeight: 1.5, // 19.5px
    },
    overline: {
      fontSize: '0.75rem', // 12px
      lineHeight: 2, // 24
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 375,
      md: 768,
      lg: 1440,
      xl: 1920,
    },
  },
  components: {
    MuiButton,
    MuiCard,
  },
});

theme.shadows[1] = '0px 5px 15px 0px hsla(0, 0%, 0%, 0.14)';

type MUITheme = typeof theme;

export type { MUITheme };

export { theme };
