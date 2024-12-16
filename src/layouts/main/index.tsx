import { Footer, Header } from '@/components';
import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <Container maxWidth="xl">
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
};

export { MainLayout };
