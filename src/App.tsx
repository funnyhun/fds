import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { GlobalStyle } from "./styles/global";
import GalleryPage from "./pages/GalleryPage";
import PreviewPage from "./pages/PreviewPage";
import NotFoundPage from "./pages/NotFoundPage";

const AppFrame = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const TopBar = styled.header`
  padding: 28px clamp(20px, 5vw, 64px) 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;

const Brand = styled(Link)`
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 700;
`;

const Tagline = styled.span`
  color: var(--ink-60);
  font-size: 0.95rem;
`;

const Main = styled.main`
  flex: 1;
  padding: 0 clamp(20px, 5vw, 64px) 64px;
`;

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AppFrame>
        <TopBar>
          <Brand to="/">Funnyhun's Design Storage</Brand>
          <Tagline>Reusable React + styled-components UI components</Tagline>
        </TopBar>
        <Main>
          <Routes>
            <Route path="/" element={<GalleryPage />} />
            <Route path="/preview/:id" element={<PreviewPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Main>
      </AppFrame>
    </BrowserRouter>
  );
}
