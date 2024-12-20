import { MUITheme } from '@/theme/MUI.Theme';
import { Components } from '@mui/material';

const MuiListItemText: Components<MUITheme>['MuiListItemText'] = {
  styleOverrides: {
    primary({ theme }) {
      return {
        fontSize: theme.typography.button.fontSize,
      };
    },
  },
};

export { MuiListItemText };
