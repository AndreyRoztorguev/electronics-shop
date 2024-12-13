import { ProductCard } from '@/components/ui/product-card';
import CheckMarkSuccessIcon from '@/icons/check-mark-success.svg?react';
import PhoneErrorIcon from '@/icons/error-phone.svg?react';
import { Container, Stack, SvgIcon } from '@mui/material';

const Home = () => {
  return (
    <Container>
      <Stack flexDirection="row" columnGap={3}>
        <ProductCard
          image="https://content2.rozetka.com.ua/goods/images/big/447661075.jpg"
          title="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On 15.6 MULTITOUCH All-In-On EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On 15.6 MULTITOUCH All-In-On1 "
          oldPrice="$900.00"
          price="$499.00"
          reviews={5}
          allowCardAction
          header={{
            Icon: (
              <SvgIcon
                component={CheckMarkSuccessIcon}
                inheritViewBox
                color="success"
                aria-label="availability"
                sx={{ width: '16px' }}
              />
            ),
            status: 'success',
            Content: 'in stock',
          }}
        />
        <ProductCard
          image="https://content1.rozetka.com.ua/goods/images/big/469932970.jpg"
          title="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MUL TIA Agrona"
          oldPrice="$200.00"
          price="$199.00"
          reviews={2}
          allowCardAction
          header={{
            Icon: (
              <SvgIcon
                component={PhoneErrorIcon}
                inheritViewBox
                color="error"
                aria-label="availability"
                sx={{ width: '16px' }}
              />
            ),
            status: 'error',
            Content: 'out of stock',
          }}
        />
        <ProductCard
          image="https://content.rozetka.com.ua/goods/images/big/12268598.jpg"
          title="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On..."
          oldPrice="$399.99"
          price="$299.00"
          reviews={3}
          allowCardAction
          header={{
            Icon: (
              <SvgIcon
                component={PhoneErrorIcon}
                inheritViewBox
                color="error"
                aria-label="availability"
                sx={{ width: '16px' }}
              />
            ),
            status: 'error',
            Content: 'out of stock',
          }}
        />
        <ProductCard
          image="https://content2.rozetka.com.ua/goods/images/big/395153942.jpg"
          title="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On..."
          oldPrice="$1299.99"
          price="$400.00"
          reviews={4}
          allowCardAction
          header={{
            Icon: (
              <SvgIcon
                component={CheckMarkSuccessIcon}
                inheritViewBox
                color="success"
                aria-label="availability"
                sx={{ width: '16px' }}
              />
            ),
            status: 'success',
            Content: 'out of stock',
          }}
        />
      </Stack>
      <Stack flexDirection="row" columnGap={3}>
        <ProductCard
          image="https://content2.rozetka.com.ua/goods/images/big/395153942.jpg"
          title="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On..."
          oldPrice="$1299.99"
          price="$400.00"
          reviews={4}
        />
        <ProductCard
          image="https://content2.rozetka.com.ua/goods/images/big/485387347.jpg"
          title="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On..."
          oldPrice="$399.99"
          price="$299.00"
          reviews={3}
        />
        <ProductCard
          header={{
            Icon: (
              <SvgIcon
                component={CheckMarkSuccessIcon}
                inheritViewBox
                color="success"
                aria-label="availability"
                sx={{ width: '16px' }}
              />
            ),
            status: 'success',
            Content: 'in stock',
          }}
          image="https://content.rozetka.com.ua/goods/images/big/12268598.jpg"
          title="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On..."
          oldPrice="$399.99"
          price="$299.00"
          reviews={3}
        />
      </Stack>
    </Container>
  );
};

export { Home };
