import { Button } from '@/components';
import LogoImage from '@/icons/logo.svg';
import Logo from '@/icons/logo.svg?react';
import { AuthLayout } from '@/layouts';

const Home = () => {
  return (
    <div>
      Home
      <Button />
      <AuthLayout />
      <img src={LogoImage} />
      <Logo />
    </div>
  );
};

export { Home };
