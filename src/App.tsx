import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./pages/DefaultLayout";
import ListMainPage from "./pages/ListMainPage";
import GlobalStyle from "./styles/globalStyle";
import { ThemeProvider } from "@emotion/react";
import theme from "./styles/theme";
import "./styles/font.css";
import ApplyForm from "./pages/ApplyFormPage";

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

          {/* Apply */}
          <Route path={"/"} element={<DefaultLayout hideFooter />}>
            <Route path="contest/:id/apply" element={<ApplyForm />} />
            <Route
              path="contest/:id/apply/pending"
              element={<div>Pending</div>}
            />
            <Route
              path="contest/:id/apply/success"
              element={<div>Success</div>}
            />
            <Route path="contest/:id/apply/fail" element={<div>Fail</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
