import { CategoryCard } from '@/components/ui/category-card';
import { ProductCard } from '@/components/ui/product-card';
import { Grid2, SvgIcon } from '@mui/material';

import CheckMarkSuccessIcon from '@/icons/check-mark-success.svg?react';

const CustomBuildProductsList = () => {
  return (
    <Grid2 container gridColumn={4} gridRow={1} columnGap={0}>
      <Grid2 size={2} flexBasis={230}>
        <CategoryCard />
      </Grid2>
      <Grid2 size={2} flexBasis={230}>
        <ProductCard
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
          image="https://content.rozetka.com.ua/goods/images/big/12268598.jpg"
          title="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On..."
          oldPrice="$399.99"
          price="$299.00"
          reviews={3}
        />
      </Grid2>
      <Grid2 size={2} flexBasis={230}>
        <ProductCard
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
          image="https://content.rozetka.com.ua/goods/images/big/12268598.jpg"
          title="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On..."
          oldPrice="$399.99"
          price="$299.00"
          reviews={3}
        />
      </Grid2>
      <Grid2 size={2} flexBasis={230}>
        <ProductCard
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
          image="https://content.rozetka.com.ua/goods/images/big/12268598.jpg"
          title="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On..."
          oldPrice="$399.99"
          price="$299.00"
          reviews={3}
        />
      </Grid2>
      <Grid2 size={2} flexBasis={230}>
        <ProductCard
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
          image="https://content.rozetka.com.ua/goods/images/big/12268598.jpg"
          title="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On..."
          oldPrice="$399.99"
          price="$299.00"
          reviews={3}
        />
      </Grid2>
      <Grid2 size={2} flexBasis={230}>
        <ProductCard
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
          image="https://content.rozetka.com.ua/goods/images/big/12268598.jpg"
          title="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On..."
          oldPrice="$399.99"
          price="$299.00"
          reviews={3}
        />
      </Grid2>
    </Grid2>
  );
};

export { CustomBuildProductsList };
