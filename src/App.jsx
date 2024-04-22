
import Header from "./components/Header";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import ProjectCarouselSection from "./components/Projects/ProjectCarouselSection";
import ReadyToTakeAction from "./components/ReadyToTakeAction";
import Footer from "./components/Footer";
import ProjectsProvider from "./providers/ProjectsProvider/ProjectsProvider";

function App() {
  return (
    <div className="">
      <Header />
      <Hero />
      <ProjectsProvider>
        <ProjectCarouselSection />
        <Partners />
        <ReadyToTakeAction />
        <Footer />
      </ProjectsProvider>
    </div>
  );
}

export default App;
