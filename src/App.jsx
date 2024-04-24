import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootPage from "./pages/RootPage";
import HomePage from "./pages/HomePage";
import ContentfulProvider from "./providers/ContentfulProvider/ContentfulProvider";
import NewsPage from "./pages/NewsPage";
import ProjectPage from "./pages/ProjectPage";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootPage />}>
            <Route
              index
              element={
                <ContentfulProvider>
                  <HomePage />
                </ContentfulProvider>
              }
            />
            <Route
              path="/projects/:projectName/:id"
              element={
                <ContentfulProvider>
                  <ProjectPage />
                </ContentfulProvider>
              }
            />
            <Route
              path="/newspage/:NewsTitle/:id"
              element={
                <ContentfulProvider>
                  <NewsPage />
                </ContentfulProvider>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
