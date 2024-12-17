import { MUITheme } from '@/theme/MUI.Theme';
import { Components } from '@mui/material';

const MuiCard: Components<MUITheme>['MuiCard'] = {
  variants: [
    {
      props: { variant: 'outlined' },
      style: ({ theme }) => ({
        maxWidth: '14.625rem',
        boxShadow: 'none',
        border: `1px solid ${theme.palette.secondary.dark}`,
      }),
    },
    {
      props: { variant: 'elevation' },
      style: ({ theme }) => ({
        boxShadow: 'none',
        maxWidth: '14.625rem',
      }),
    },
  ],
};
export { MuiCard };
