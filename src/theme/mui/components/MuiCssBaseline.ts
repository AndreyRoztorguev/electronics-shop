import { MUITheme } from '@/theme/MUI.Theme';
import { Components } from '@mui/material';

const MuiCssBaseline: Components<MUITheme>['MuiCssBaseline'] = {
  styleOverrides: {
    '*': {
      boxSizing: 'border-box',
    },
    '*::before': {
      boxSizing: 'border-box',
    },
    '*::after': {
      boxSizing: 'border-box',
    },
  },
};

export { MuiCssBaseline };
