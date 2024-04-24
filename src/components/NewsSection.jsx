import NewsPost from "./NewsPost";
import { Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { client } from "../client";

export default function NewsSection() {
  //Fetch from contentful
  const [postsLoading, setPostsLoading] = useState(false);
  const [newsPosts, setNewsPosts] = useState([]);

  const cleanUpNewsPostData = useCallback((rawData) => {
    const cleanNewsPosts = rawData.map((NewsPost) => {
      const { sys, fields } = NewsPost;
      const { id } = sys;
      const NewsTitle = fields.title;
      const NewsSubtitle = fields.subtitle;
      const NewsParagraph = fields.paragraph;
      const NewsDate = fields.date;
      const NewsImage = fields.image.fields.file.url;
      const filteredNewsPostData = {
        id,
        NewsTitle,
        NewsSubtitle,
        NewsParagraph,
        NewsDate,
        NewsImage,
      };
      return filteredNewsPostData;
    });
    setNewsPosts(cleanNewsPosts);
  }, []);

  const getNewsPosts = useCallback(async () => {
    setPostsLoading(true);
    try {
      const response = await client.getEntries({ content_type: "NewsPost" });
      const responseData = response.items;
      if (responseData) {
        cleanUpNewsPostData(responseData);
      } else {
        setNewsPosts([]);
      }
      setPostsLoading(false);
    } catch (error) {
      setPostsLoading(false);
    }
  }, [cleanUpNewsPostData]);

  useEffect(() => {
    getNewsPosts();
  }, [getNewsPosts]);

  // const fiveLatestPosts = newsPosts.slice(-5);

  return (
    <>
      <section className="news-section flex flex-col justify-between bg-zinc-100 p-12 md:flex-row">
        <div className="flex-item-1 flex flex-row items-center justify-between md:items-start">
          <h3 className="mb-10 font-plexSerif text-2xl font-bold">News</h3>
          <div className="all-news-link-top pb-7 md:hidden">
            <Link to="/newspage">
              <a className="text-1xl font-plexSerif font-bold">All news</a>
            </Link>
          </div>
        </div>
        <div className="flex-item-2 text-base md:w-2/4">
          <ul className="divide-y-[2px] divide-gray-400 border-t-[2px] border-gray-400">
            {newsPosts.map((post) => (
              <li key={post.id}>
                <NewsPost post={post} showFullPost={false} />
              </li>
            ))}
          </ul>

          <div className="all-news-link-bottom pt-7">
            <Link to="/newspage">
              <a className="text-1xl hidden font-plexSerif font-bold md:block">
                All news
              </a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
