import Hero from "../components/Hero";
import Partners from "../components/Partners";
import ProjectCarouselSection from "../components/Projects/ProjectCarouselSection";
import ReadyToTakeAction from "../components/ReadyToTakeAction";
import NewsSection from "../components/NewsSection";
import WWDSections from "../components/WWDSections";

const HomePage = () => {
  return (
    <>
      <Hero />
      <WWDSections />
      <ProjectCarouselSection />
      <Partners />
      <NewsSection />
      <ReadyToTakeAction />
    </>
  );
};

export default HomePage;
