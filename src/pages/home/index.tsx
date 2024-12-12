import { PrimaryButton } from '@/components';
import { ProductCard } from '@/components/ui/product-card';
import LogoImage from '@/icons/logo.svg';
import Logo from '@/icons/logo.svg?react';
import { AuthLayout } from '@/layouts';
import { Stack } from '@mui/material';

const Home = () => {
  return (
    <div>
      Home
      <PrimaryButton />
      <AuthLayout />
      <img src={LogoImage} />
      <Logo />
      <Stack flexDirection="row" columnGap={3}>
        <ProductCard
          image="https://content2.rozetka.com.ua/goods/images/big/447661075.jpg"
          title="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On..."
          oldPrice="$900.00"
          price="$499.00"
          reviews={5}
        />
        <ProductCard
          image="https://content1.rozetka.com.ua/goods/images/big/469932970.jpg"
          title="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On..."
          oldPrice="$200.00"
          price="$199.00"
          reviews={2}
        />
        <ProductCard
          image="https://content.rozetka.com.ua/goods/images/big/445601794.jpg"
          title="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On..."
          oldPrice="$399.99"
          price="$299.00"
          reviews={3}
        />
        <ProductCard
          image="https://content1.rozetka.com.ua/goods/images/big/420776249.jpg"
          title="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On..."
          oldPrice="$1299.99"
          price="$400.00"
          reviews={4}
        />
      </Stack>
    </div>
  );
};

export { Home };
