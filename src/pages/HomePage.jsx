import Hero from "../components/Hero";
import Partners from "../components/Partners";
import ProjectCarousel from "../components/ProjectCarousel";
import ReadyToTakeAction from "../components/ReadyToTakeAction";
import DynamicListSection from "../components/DynamicListSection";
import NewsPost from "../components/NewsPage/NewsPost";
import { GetThreeLatestNewsPosts } from "../components/NewsPage/utils/GetThreeLatestNewsPosts";
import InformationSection from "../components/InformationSection";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  // for fetching only last three newsPosts
  const threeLatestNewsPosts = GetThreeLatestNewsPosts();

  // for translations
  const { t } = useTranslation();

  return (
    <>
      <Hero />
      <InformationSection
        title={t("informationSection1Title")}
        description={t("informationSection1Description")}
        image1="/images/WWD_mother-carrying-child.jfif"
        image2="/images/WWD_mother-and-child.jfif"
        linkPath="/not-found"
        linkText={t("informationSection1Button")}
        textFirst={true}
      />
      <InformationSection
        title="
Empowering Communities: The Yennenga Progress Approach"
        description="Yennenga Progress takes a holistic approach to address all UN Global Goals, combining entrepreneurial thinking with local empowerment in Nakamtenga, Burkina Faso. Our global network provides ongoing training to local Change Makers, fostering collaboration to develop effective solutions. We're pioneering a social franchising model to create jobs and empower villages for lasting progress. Learn more about how it works."
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
        path="/newspage/all"
        renderItem={(post) => (
          <NewsPost key={post.id} post={post} showFullPost={false} />
        )}
      />
      <ReadyToTakeAction />
    </>
  );
};

export default HomePage;
