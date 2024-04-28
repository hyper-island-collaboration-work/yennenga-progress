import useContentful from "../../../providers/ContentfulProvider/ContentfulProvider.hook";

export const GetThreeLatestNewsPosts = () => {
  const { newsPosts } = useContentful();
  return newsPosts.slice(0, 3);
};
