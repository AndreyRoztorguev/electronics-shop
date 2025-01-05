import { SupportCards } from '@/components';
import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

function SupportLayout() {
  return (
    <Container maxWidth="xl" disableGutters>
      <Outlet />
      <SupportCards />
    </Container>
  );
}

export { SupportLayout };
