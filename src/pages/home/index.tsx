import { ProductCard } from '@/components';
import { Box, Container, SvgIcon } from '@mui/material';
import 'swiper/css/bundle';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import '@/styles/swiper.css';

import CheckMarkSuccessIcon from '@/icons/check-mark-success.svg?react';
import PhoneErrorIcon from '@/icons/error-phone.svg?react';
import NextSlideIcon from '@/icons/next-slide-icon.svg?react';
import PrevSlideIcon from '@/icons/prev-slider-icon.svg?react';

const Home = () => {
  return (
    <Container maxWidth="lg">
      <Swiper
        breakpoints={{
          1440: {
            slidesPerView: 5,
          },
          1920: {
            slidesPerView: 6,
          },
        }}
        spaceBetween={0}
        slidesPerView={5}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Navigation]}
        navigation={{
          enabled: true,
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
      >
        <Box
          className="swiper-button-prev"
          width={50}
          height={86}
          color="transparent"
          sx={{
            '--swiper-navigation-size': '6rem',
            '&:after': {
              display: 'none',
            },
          }}
        >
          <SvgIcon component={PrevSlideIcon} inheritViewBox>
            {/* <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" /> */}
          </SvgIcon>
        </Box>
        <Box
          className="swiper-button-next"
          width={50}
          height={86}
          color="transparent"
          sx={{
            '--swiper-navigation-size': '6rem',
            '&:after': {
              display: 'none',
            },
          }}
        >
          <SvgIcon
            component={NextSlideIcon}
            inheritViewBox
            color="inherit"
            // sx={{ width: '100px', minWidth: '100px' }}
          >
            {/* <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L12.17 12z" /> */}
          </SvgIcon>
        </Box>

        <SwiperSlide>
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
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            image="https://content2.rozetka.com.ua/goods/images/big/395153942.jpg"
            title="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On..."
            oldPrice="$1299.99"
            price="$400.00"
            reviews={4}
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
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            image="https://content2.rozetka.com.ua/goods/images/big/395153942.jpg"
            title="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On..."
            oldPrice="$1299.99"
            price="$400.00"
            reviews={4}
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
        </SwiperSlide>
        <SwiperSlide>
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
        </SwiperSlide>
        <SwiperSlide>
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
        </SwiperSlide>
        <SwiperSlide>
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
        </SwiperSlide>
      </Swiper>
      {/* <Stack flexDirection="row" columnGap={3}> */}
      {/* <ProductCard
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
      </Stack> */}
      {/* <Stack flexDirection="row" columnGap={3}>
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
      </Stack> */}
    </Container>
  );
};

export { Home };
