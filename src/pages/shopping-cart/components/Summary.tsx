import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Link,
  Stack,
  SvgIcon,
  Typography,
} from '@mui/material';

import { DiscountCode } from '@/pages/shopping-cart/components/DiscountCode';
import { EstimateTax } from '@/pages/shopping-cart/components/EstimateTax';

import PayPal from '@/icons/paypal-v2.svg?react';
import ZipIcon from '@/icons/zip.svg?react';

const Summary = () => {
  return (
    <Card
      variant="elevation"
      sx={{
        maxWidth: '28rem',
        backgroundColor: 'background.paper',
        padding: '0.5rem',
      }}
    >
      <CardHeader title={<Typography variant="h2">summary</Typography>} />
      <CardContent>
        <EstimateTax />
        <DiscountCode />
        {/* <Divider
          sx={{ mt: '2rem' }}
          variant="fullWidth"
          orientation="horizontal"
        /> */}
        <Stack rowGap={2} mt={2}>
          <Stack flexDirection="row" justifyContent="space-between">
            <Typography variant="subtitle1" fontWeight={500}>
              Subtotal
            </Typography>
            <Typography variant="subtitle1" fontWeight={500}>
              $13,047.00
            </Typography>
          </Stack>

          <Stack flexDirection="row" justifyContent="space-between">
            <Typography variant="subtitle1" fontWeight={500}>
              Shipping <br />
              <Typography
                variant="subtitle2"
                component={'span'}
                fontSize={'0.7rem'}
                color="secondary"
              >
                (Standard Rate - Price may vary depending on the
                item/destination. TECS Staff will contact you.)
              </Typography>
            </Typography>
            <Typography variant="subtitle1" fontWeight={500}>
              $21.00
            </Typography>
          </Stack>

          <Stack flexDirection="row" justifyContent="space-between">
            <Typography variant="subtitle1" fontWeight={500}>
              Tax
            </Typography>
            <Typography variant="subtitle1" fontWeight={500}>
              $1.91
            </Typography>
          </Stack>

          <Stack flexDirection="row" justifyContent="space-between">
            <Typography variant="subtitle1" fontWeight={500}>
              GST (10%)
            </Typography>
            <Typography variant="subtitle1" fontWeight={500}>
              $1.91
            </Typography>
          </Stack>
          <Stack flexDirection="row" justifyContent="space-between">
            <Typography variant="subtitle1" fontWeight={500}>
              Order Total
            </Typography>
            <Typography variant="subtitle1" fontWeight={500}>
              $13,068.00
            </Typography>
          </Stack>
          <Button
            variant="contained"
            size="large"
            sx={{ height: '3rem' }}
            fullWidth
          >
            Proceed to Checkout
          </Button>
          <Button
            variant="contained"
            size="large"
            fullWidth
            color="secondary"
            sx={{ height: '3rem' }}
            endIcon={<PayPal />}
          >
            Check out with
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            size="large"
            fullWidth
            sx={{ height: '3rem' }}
          >
            Check Out with Multiple Addresses
          </Button>
          <Stack flexDirection="row" columnGap={1}>
            <SvgIcon
              component={ZipIcon}
              inheritViewBox
              sx={{ minWidth: '4rem' }}
            />
            <Divider
              variant="fullWidth"
              orientation="vertical"
              flexItem
              sx={{ borderWidth: 1, borderColor: '#00AEB8' }}
            />
            <Typography variant="caption">
              own it now, up to 6 months interest free <Link>learn more</Link>
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export { Summary };
