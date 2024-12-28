import { Container, Stack, Typography } from '@mui/material';

import { Summary } from '@/pages/shopping-cart/components/Summary';
import { ShoppingCartTable } from '@/pages/shopping-cart/components/Table';

const ShoppingCart = () => {
  return (
    <Container>
      <Typography variant="h1" fontSize="2rem" lineHeight={1.5} m={3.5}>
        Shopping Cart
      </Typography>
      <Stack flexDirection="row" gap={4}>
        <ShoppingCartTable />
        <Summary />
      </Stack>
    </Container>
  );
};

export { ShoppingCart };
