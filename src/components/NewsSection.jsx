import { Link } from "react-router-dom";
import useContentful from "../providers/ContentfulProvider/ContentfulProvider.hook";
import NewsPost from "./NewsPost";
import ButtonLink from "./ButtonLink";

export default function NewsSection() {
  const { newsPosts } = useContentful();

  // const fiveLatestPosts = newsPosts.slice(-5);

  return (
    <>
      <section className="news-section flex flex-col justify-between bg-zinc-100 p-12 md:flex-row">
        <div className="flex-item-1 flex flex-row items-center justify-between md:items-start">
          <h3 className="mb-10 font-plexSerif text-2xl font-bold">News</h3>
          <div className="all-news-link-top pb-7 md:hidden">
            <Link to="/newspage">
              <ButtonLink buttonName="All News" />
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

          <div className="all-news-link-bottom hidden pt-7 md:block">
            <Link to="/newspage">
              <ButtonLink buttonName="All News" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
