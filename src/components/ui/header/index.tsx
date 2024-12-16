import { InputSearch } from '@/components/core';
import { Nav } from '@/components/ui/nav';
import { WorkingTime } from '@/components/ui/working-time';
import FBIcon from '@/icons/fb.svg?react';
import InstIcon from '@/icons/inst.svg?react';
import LogoIcon from '@/icons/logo.svg?react';
import SearchIcon from '@/icons/search.svg?react';
import TrolleyIcon from '@/icons/trolley.svg?react';
import {
  Avatar,
  Badge,
  Container,
  IconButton,
  Link,
  Stack,
  SvgIcon,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { Link as ReactLink } from 'react-router-dom';

const Header = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const handleSearchClick = () => {
    setIsSearchActive(true);
  };
  return (
    <Container maxWidth="xl" disableGutters>
      <Stack sx={{ backgroundColor: 'black' }} height={44}>
        <Container
          maxWidth="lg"
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <WorkingTime />
          <Typography variant="caption" sx={{ color: 'secondary.dark' }}>
            Visit our showroom in 1234 Street Adress City Address, 1234
            <Link to="#" component={ReactLink} sx={{ color: 'white' }} ml={1}>
              Contact Us
            </Link>
          </Typography>
          <Stack flexDirection="row" columnGap={1} alignItems="center">
            <Typography
              variant="overline"
              lineHeight={1.5}
              sx={{ color: 'white' }}
            >
              Call Us: (00) 1234 5678
            </Typography>
            <Link
              to="/fb"
              component={ReactLink}
              display="flex"
              alignItems="center"
            >
              <SvgIcon
                component={FBIcon}
                inheritViewBox
                sx={{ height: '20px' }}
              />
            </Link>
            <Link
              to="/inst"
              component={ReactLink}
              display="flex"
              alignItems="center"
            >
              <SvgIcon component={InstIcon} inheritViewBox />
            </Link>
          </Stack>
        </Container>
      </Stack>
      <Container maxWidth="lg">
        <Stack flexDirection="row" alignItems="center">
          <Link to="/" component={ReactLink}>
            <IconButton edge="start">
              <SvgIcon component={LogoIcon} inheritViewBox />
            </IconButton>
          </Link>
          <Nav />
          <Stack flexDirection="row" alignItems="center" columnGap={1}>
            <IconButton onClick={handleSearchClick}>
              <SvgIcon component={SearchIcon} inheritViewBox />
            </IconButton>
            <IconButton>
              <Badge
                badgeContent={3}
                color="primary"
                max={99}
                sx={{
                  '& .MuiBadge-badge': {
                    width: '17px',
                    height: '17px',
                    minWidth: '17px',
                    minHeight: '17px',
                  },
                }}
              >
                <SvgIcon component={TrolleyIcon} inheritViewBox />
              </Badge>
            </IconButton>
            <IconButton edge="end">
              <Avatar src="" sx={{ width: '2rem', height: '2rem' }} />
            </IconButton>
          </Stack>
        </Stack>
        <InputSearch />
      </Container>
    </Container>
  );
};

export { Header };
