import {
  Card,
  CardContent,
  CardHeader,
  Grid2,
  IconButton,
  Stack,
  SvgIcon,
  Typography,
} from '@mui/material';
import { ReactNode } from 'react';

import AccountIcon from '@/icons/account.svg?react';
import SavingIcon from '@/icons/saving.svg?react';
import SupportIcon from '@/icons/support.svg?react';

const Item = ({
  icon,
  title,
  description,
}: {
  title: string;
  description: string;
  icon: React.ElementType<any, keyof React.JSX.IntrinsicElements>;
}) => (
  <Stack rowGap={1} justifyContent="center">
    <IconButton
      sx={{ height: 'auto', width: 'max-content', marginInline: 'auto' }}
    >
      <SvgIcon
        sx={{ width: '100%', height: '60px' }}
        component={icon}
        inheritViewBox
      />
    </IconButton>
    <Typography variant="h6" color="black" textAlign="center">
      {title}
    </Typography>
    <Typography fontSize="0.875rem" textAlign="center" color="black">
      {description}
    </Typography>
  </Stack>
);

const SupportCards = () => {
  return (
    <Grid2
      container
      columns={3}
      justifyContent="space-evenly"
      gap={3}
      mb={5}
      mt={3}
    >
      <Grid2 width={260}>
        <Item
          icon={SupportIcon}
          title="Product Support"
          description="Up to 3 years on-site warranty available for your peace of mind."
        />
      </Grid2>
      <Grid2 width={260}>
        <Item
          icon={AccountIcon}
          title="Personal Account"
          description="With big discounts, free delivery and a dedicated support specialist."
        />
      </Grid2>
      <Grid2 width={260}>
        <Item
          icon={SavingIcon}
          title="Amazing Savings"
          description="Up to 70% off new Products, you can be sure of the best price."
        />
      </Grid2>
    </Grid2>
  );
};

export { SupportCards };
