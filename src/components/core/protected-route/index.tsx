import { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: ReactNode;
  isAuthenticated: boolean;
  redirectTo?: string;
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({
  isAuthenticated,
  redirectTo = '/login',
  children,
}) => {
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
};

export { ProtectedRoute };
