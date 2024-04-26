import Hero from "../components/Hero";
import Partners from "../components/Partners";
import ProjectCarousel from "../components/ProjectList/ProjectCarousel";
import ReadyToTakeAction from "../components/ReadyToTakeAction";
import WWDSections from "../components/WWDSections";
import DynamicListSection from "../components/DynamicListSection";
import useContentful from "../providers/ContentfulProvider/ContentfulProvider.hook";
import NewsPost from "../components/NewsPost";

const HomePage = () => {
  //data from context to newsSection
  const { newsPosts } = useContentful();
  const threeLatestNewsPosts = newsPosts.slice(0, 5);

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
