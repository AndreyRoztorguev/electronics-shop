import { ProtectedRoute, SupportCards } from '@/components';
import { MainLayout, SupportLayout } from '@/layouts';
import { theme } from '@/theme/MUI.Theme';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AboutUs, Catalog, Home, Login, ShoppingCart, SignUp } from '@/pages';

import '@/styles/index.css';

function App() {
  const isAuthenticated = false;
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route element={<SupportLayout />}>
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/shopping-cart" element={<ShoppingCart />} />
              <Route path="/about-us" element={<AboutUs />} />
            </Route>
            {/* <Route
              path="/shopping-cart"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <ShoppingCart />
                </ProtectedRoute>
              }
            /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
