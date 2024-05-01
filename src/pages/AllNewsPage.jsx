import React from "react";
import useContentful from "../providers/ContentfulProvider/ContentfulProvider.hook";
import NewsPost from "../components/NewsPage/NewsPost";
import { useLayoutEffect } from "react";

const AllNewsPage = () => {
  const { newsPosts } = useContentful();

  return (
    <>
      {/* TODO: Implement pagination & scroll to top link*/}
      <ul className="">
        <li className="">
          {newsPosts.map((post) => (
            <NewsPost key={post.id} post={post} showFullPost={true} />
          ))}
        </li>
      </ul>
    </>
  );
};

export default AllNewsPage;
