import { Checkbox, ThemeProvider } from "@mui/material";
import { theme } from "@/theme/MUI.Theme";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "./App.css";
import "@fontsource/poppins/600.css";
import { Catalog, Home } from "@/pages";

import { BrowserRouter, Routes, Route } from "react-router-dom";
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
