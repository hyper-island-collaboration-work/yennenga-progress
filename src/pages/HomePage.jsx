import Hero from "../components/Hero";
import Partners from "../components/Partners";
import ProjectCarousel from "../components/ProjectList/ProjectCarousel";
import ReadyToTakeAction from "../components/ReadyToTakeAction";
import NewsSection from "../components/NewsSection";
import WWDSections from "../components/WWDSections";
import WWDVideoSection from "../components/WWDVideoSection";

const HomePage = () => {
  return (
    <>
      <Hero />
      <WWDSections />
      <WWDVideoSection/>
      <ProjectCarousel />
      <Partners />
      <NewsSection />
      <ReadyToTakeAction />
    </>
  );
};

export default HomePage;
