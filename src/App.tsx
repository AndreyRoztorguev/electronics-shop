import '@/styles/index.css';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';

import { theme } from '@/theme/MUI.Theme';
import { Checkbox, ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Catalog, Home } from '@/pages';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Checkbox defaultChecked />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
