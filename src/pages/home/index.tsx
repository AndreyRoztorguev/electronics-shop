import { ProductCard } from '@/components';
import {
  Box,
  Container,
  Divider,
  Link,
  Paper,
  Stack,
  SvgIcon,
  Typography,
} from '@mui/material';
import 'swiper/css/bundle';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import '@/styles/swiper.css';

import CheckMarkSuccessIcon from '@/icons/check-mark-success.svg?react';
import PhoneErrorIcon from '@/icons/error-phone.svg?react';
import NextSlideIcon from '@/icons/next-slide-icon.svg?react';
import PrevSlideIcon from '@/icons/prev-slider-icon.svg?react';
import ZipIcon from '@/icons/zip.svg?react';

import BannerImage from '@/images/banner-1.png';

const Home = () => {
  return (
    <Container maxWidth="lg">
      <Swiper
        height={328}
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Navigation]}
        navigation={true}
      >
        <SwiperSlide>
          <Box src={BannerImage} alt="banner MSI" component="img" />
        </SwiperSlide>
        <SwiperSlide>
          <Box
            component="img"
            src="https://kimberlydubrul.com/wp-content/uploads/2018/01/pond-1400x320.jpg"
            alt="banner Nature"
            sx={{
              objectFit: 'cover',
              maxHeight: '328px',
              height: '100%',
              width: '100%',
            }}
          />
        </SwiperSlide>
      </Swiper>
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
          <SvgIcon component={PrevSlideIcon} inheritViewBox />
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
          <SvgIcon component={NextSlideIcon} inheritViewBox />
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
                  component={PhoneErrorIcon}
                  inheritViewBox
                  color="success"
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
      <Paper
        variant="elevation"
        elevation={0}
        square={true}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '4.3rem',
        }}
      >
        <Stack
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          columnGap={1}
        >
          <SvgIcon
            component={ZipIcon}
            inheritViewBox
            sx={{
              minWidth: '3rem',
            }}
          />
          <Divider
            variant="fullWidth"
            orientation="vertical"
            flexItem
            sx={{ borderWidth: 1, borderColor: '#00AEB8' }}
          />
          <Typography variant="body1">
            <strong>own</strong> it now, up to 6 months interest free{' '}
            <Link
              underline="always"
              variant="inherit"
              color="textPrimary"
              component="a"
              href="/#"
              target="_blank"
            >
              learn more
            </Link>
          </Typography>
        </Stack>
      </Paper>
    </Container>
  );
};

export { Home };
