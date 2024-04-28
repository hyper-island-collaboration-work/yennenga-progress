import Hero from "../components/Hero";
import Partners from "../components/Partners";
import ProjectCarousel from "../components/ProjectCarousel";
import ReadyToTakeAction from "../components/ReadyToTakeAction";
import WWDSections from "../components/WWDSections";
import DynamicListSection from "../components/DynamicListSection";
import NewsPost from "../components/NewsPage/NewsPost";
import { GetThreeLatestNewsPosts } from "../components/NewsPage/utils/GetThreeLatestNewsPosts";

const HomePage = () => {
  const threeLatestNewsPosts = GetThreeLatestNewsPosts();

  return (
    <>
      <Hero />
      <WWDSections />
      <ProjectCarousel />
      <Partners />
      <DynamicListSection
        title="News"
        content={threeLatestNewsPosts}
        linkText="All News"
        linkPath="/newspage"
        renderItem={(post) => (
          <NewsPost key={post.id} post={post} showFullPost={false} />
        )}
      />
      <ReadyToTakeAction />
    </>
  );
};

export default HomePage;
