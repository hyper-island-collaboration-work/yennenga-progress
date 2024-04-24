import InstagramIcon from "./Icons/InstagramIcon";
import FacebookIcon from "./Icons/FacebookIcon";
import LinkedInIcon from "./Icons/LinkedinIcon";
import { Link } from "react-router-dom";

export default function NewsPost({ post, showFullPost }) {
  //format the URL
  const formattedTitle = post.NewsTitle.toLowerCase().replace(/\s+/g, "-");
  const path = `/newspage/${formattedTitle}/${post.id}`;

  return (
    <Link to={path} onClick={(evt) => onClick(evt)}>
      <div className="news-post-container" id={post.id}>
        {showFullPost ? (
          <article className="m-auto bg-burkinaBlue p-3 font-plexSerif text-white">
            <div className="py-16 sm:py-20">
              <h3 className="m-auto pb-5 text-center font-montserrat text-4xl sm:w-3/5 lg:w-3/5">
                {post.NewsTitle}
              </h3>

              <h4 className="m-auto w-4/5 pb-5 text-center text-lg leading-tight sm:w-3/5 lg:w-3/5">
                {post.NewsSubtitle}
              </h4>

              <div className="m-auto flex max-w-3xl justify-end gap-2 sm:w-3/4 md:w-3/4 lg:w-3/4">
                <InstagramIcon />
                <FacebookIcon />
                <LinkedInIcon />
              </div>
            </div>
            <div className="m-auto h-96 w-full max-w-3xl bg-gray-300 italic sm:w-3/4 md:w-3/4 lg:w-3/4">
              {post.NewsImage}
            </div>

            <div className="m-auto max-w-2xl pt-16 text-lg sm:w-3/5 lg:w-3/5">
              <p className="mb-3 leading-tight">{post.NewsParagraph}</p>
            </div>
            <div className="bg-black"></div>
            {/* <div className="flex justify-center gap-2 pb-2 text-base">
            <p>{post.author}</p>
            <p>{post.date}</p>
          </div> */}
          </article>
        ) : (
          <article>
            <h3 className="mt-5 pb-3 font-bold text-umber">{post.NewsTitle}</h3>
            <h4 className="pb-5 ">{post.NewsSubtitle}</h4>
          </article>
        )}
      </div>
    </Link>
  );
}
