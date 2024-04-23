import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootPage from "./pages/RootPage";
import HomePage from "./pages/HomePage";
import ProjectsProvider from "./providers/ProjectsProvider/ProjectsProvider";
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
                  <ProjectsProvider>
                    <HomePage />
                  </ProjectsProvider>
                }
              />
              <Route
                path="/projects/:projectName/:id"
                element={
                  <ProjectsProvider>
                    <ProjectPage />
                  </ProjectsProvider>
                }
              />
              <Route path="/newspage" element={<NewsPage />} />
            </Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
