import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./pages/DefaultLayout";
import ListMainPage from "./pages/ListMainPage";
import GlobalStyle from "./styles/globalStyle";
import { ThemeProvider } from "@emotion/react";
import theme from "./styles/theme";
import "./styles/font.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          {/* 메인 페이지 */}
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<div></div>} />
            <Route path="list" element={<ListMainPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
