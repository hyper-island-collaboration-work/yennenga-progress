import Hero from "../components/Hero";
import Partners from "../components/Partners";
import ProjectCarousel from "../components/ProjectCarousel";
import ReadyToTakeAction from "../components/ReadyToTakeAction";

import DynamicListSection from "../components/DynamicListSection";
import NewsPost from "../components/NewsPage/NewsPost";
import { GetThreeLatestNewsPosts } from "../components/NewsPage/utils/GetThreeLatestNewsPosts";
import InformationSection from "../components/InformationSection";

const HomePage = () => {
  const threeLatestNewsPosts = GetThreeLatestNewsPosts();

  return (
    <>
      <Hero />
      <InformationSection
        title="What we do What we do What we do"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos quam
            inventore dicta quisquam? Omnis mollitia.Lorem ipsum dolor sit amet
            consectetur, adipisicing elit."
        image1="/images/WWD_mother-carrying-child.jfif"
        image2="/images/WWD_mother-and-child.jfif"
        linkPath="/not-found"
        linkText="What We Do"
        textFirst={true}
      />
      <InformationSection
        title="How it works How it works How it works"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
              quam inventore dicta quisquam? Omnis mollitia.Lorem ipsum dolor
              sit amet consectetur, adipisicing elit."
        image1="/images/WWD_children-playing.jfif"
        image2="/images/WWD_children-in-window.jfif"
        linkPath="/not-found"
        linkText="How it works"
        textFirst={false}
      />

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
