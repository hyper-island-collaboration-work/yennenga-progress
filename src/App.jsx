import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootPage from "./pages/RootPage";
import HomePage from "./pages/HomePage";
import ProjectsProvider from "./providers/ProjectsProvider/ProjectsProvider";
import NewsPage from "./pages/NewsPage";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <ProjectsProvider>
          <Routes>
            <Route path="/" element={<RootPage />}>
              <Route index element={<HomePage />} />
              {/* <Route path="/search" element={<ProjectPage />} />              */}
              <Route path="/newspage" element={<NewsPage />} />
            </Route>
          </Routes>
        </ProjectsProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
