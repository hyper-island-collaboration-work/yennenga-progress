import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootPage from "./pages/RootPage";
import HomePage from "./pages/HomePage";
import ContentfulProvider from "./providers/ContentfulProvider/ContentfulProvider";
import NewsPage from "./pages/NewsPage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectPage from "./pages/ProjectPage";
import UnderConstructionPage from "./pages/UnderConstructionPage";
import AllNewsPage from "./pages/AllNewsPage";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/not-found" element={<UnderConstructionPage />}></Route>
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
              path="/project/:projectName/:id"
              element={
                <ContentfulProvider>
                  <ProjectPage />
                </ContentfulProvider>
              }
            />
            <Route
              path="/all-projects"
              element={
                <ContentfulProvider>
                  <ProjectsPage />
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
            <Route
              path="/newspage/all"
              element={
                <ContentfulProvider>
                  <AllNewsPage />
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
