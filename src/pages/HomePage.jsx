import Hero from '../components/Hero';
import Partners from "../components/Partners";
import ProjectCarouselSection from "../components/Projects/ProjectCarouselSection";
import ReadyToTakeAction from "../components/ReadyToTakeAction";
import NewsSection from "../components/NewsSection";

const HomePage = () => {
  return (
    <>
      <Hero />
      <ProjectCarouselSection />
      <Partners />
      <NewsSection />
      <ReadyToTakeAction />
    </>
  );
};

export default HomePage;
