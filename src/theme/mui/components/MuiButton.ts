import type { MUITheme } from '@/theme/MUI.Theme';
import { Components } from '@mui/material';

const MuiButton: Components<MUITheme>['MuiButton'] = {
  variants: [
    {
      props: { variant: 'contained', color: 'primary' },
      style: ({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        borderRadius: theme.shape.borderRadius * 12.5,
        textTransform: 'capitalize',
        boxShadow: 'none',
      }),
    },
    {
      props: { variant: 'contained', color: 'secondary' },
      style: ({ theme }) => ({
        backgroundColor: 'hsla(43, 100%, 50%, 1)',
        color: theme.palette.text.primary,
        borderRadius: theme.shape.borderRadius * 12.5,
        textTransform: 'capitalize',
        boxShadow: 'none',
      }),
    },
    {
      props: { variant: 'outlined', color: 'primary' },
      style: ({ theme }) => ({
        backgroundColor: theme.palette.common.white,
        color: theme.palette.primary.main,
        borderRadius: theme.shape.borderRadius * 12.5,
        border: `2px solid ${theme.palette.primary.main}`,
        textTransform: 'capitalize',
      }),
    },
    {
      props: { variant: 'outlined', color: 'secondary' },
      style: ({ theme }) => ({
        backgroundColor: theme.palette.common.white,
        color: theme.palette.secondary.main,
        borderRadius: theme.shape.borderRadius * 12.5,
        border: `2px solid ${theme.palette.secondary.main}`,
        textTransform: 'capitalize',
      }),
    },
  ],
};

export { MuiButton };
