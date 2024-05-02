import React from "react";
import useContentful from "../providers/ContentfulProvider/ContentfulProvider.hook";
import NewsPost from "../components/NewsPage/NewsPost";

const AllNewsPage = () => {
  const { newsPosts } = useContentful();

  return (
    <>
      {/* TODO: Implement pagination & scroll to top link*/}
      <ul className="bg-darkBlue">
        {newsPosts.map((post) => (
          <li className="">
            <NewsPost key={post.id} post={post} showFullPost={true} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default AllNewsPage;
