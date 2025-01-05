import { SupportCards } from '@/components';
import { Box, Button, Container, Stack, Typography } from '@mui/material';

import { Summary } from '@/pages/shopping-cart/components/Summary';
import { ShoppingCartTable } from '@/pages/shopping-cart/components/Table';

const ShoppingCart = () => {
  return (
    <Container sx={{ mb: '4rem' }}>
      <Typography variant="h1" fontSize="2rem" lineHeight={1.5} m={3.5}>
        Shopping Cart
      </Typography>
      <Stack flexDirection="row" gap={4}>
        <Stack>
          <ShoppingCartTable />
          <Stack flexDirection="row" columnGap={1} mt={2} height="2.4rem">
            <Button variant="outlined" color="secondary" sx={{ px: '2rem' }}>
              Continue Shopping
            </Button>
            <Button
              variant="contained"
              sx={{ backgroundColor: 'common.black', px: '2rem' }}
            >
              Clear Shopping Cart
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: 'common.black',
                ml: 'auto',
                px: '2rem',
              }}
            >
              Update Shopping Cart
            </Button>
          </Stack>
        </Stack>
        <Summary />
      </Stack>
    </Container>
  );
};

export { ShoppingCart };
