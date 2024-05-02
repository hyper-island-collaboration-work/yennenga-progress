import { Link } from "react-router-dom";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import ButtonLink from "../ButtonLink";
import SomeIcons from "../SoMeIcons";

export default function NewsPost({ post, showFullPost, onClick }) {
  //format the URL
  const formattedTitle = encodeURIComponent(
    post.NewsTitle.toLowerCase().replace(/\s+/g, "-"),
  );
  const path = `/newspage/${formattedTitle}/${post.id}`;

  //styling rich text from contentful
  const richTextStyling = {
    renderNode: {
      paragraph: (node, children) => (
        <p className="mb-4 pb-2">{children}</p> // Add a bottom padding of 0.5rem (adjust as needed)
      ),
      "unordered-list": (node, children) => (
        <ul className="list-disc pl-5">{children}</ul> // Adds a disc before each list item
      ),
      "ordered-list": (node, children) => (
        <ol className="list-decimal pl-5">{children}</ol> // Adds numbers before each list item
      ),
      "list-item": (node, children) => (
        <li className="mb-2">{children}</li> // Adds margin bottom to each list item
      ),
      blockquote: (node, children) => (
        <blockquote className="border-l-4 pl-4 italic">{children}</blockquote> // Adds a border left and italic styling for quotations
      ),
    },
  };

  return (
    <Link to={path} onClick={(evt) => onClick(evt)}>
      <div className="news-post-container h-full" id={post.id}>
        {showFullPost ? (
          <article className="m-auto bg-darkBlue pb-20 font-plexSerif text-white">
            <div className="py-16 sm:py-20">
              <h3 className="m-auto px-4 pb-5 text-center font-montserrat text-4xl sm:w-3/5 lg:w-3/5">
                {post.NewsTitle}
              </h3>

              <h4 className="m-auto px-4 pb-5 text-center text-lg leading-tight sm:w-3/5 lg:w-3/5">
                {post.NewsSubtitle}
              </h4>

              <div className="m-auto flex max-w-3xl justify-end gap-2 px-4 ">
                <SomeIcons />
              </div>
            </div>

            <img
              src={"https:" + post.NewsImage}
              className="h-96 w-full object-cover italic sm:h-[760px]"
              alt={post.NewsImageTitle}
              data-testid="news-post-image"
            ></img>

            <div className="max-w-1xl m-auto mb-20 px-4 pt-16 text-lg  sm:w-3/5 lg:w-3/5">
              <p className="leading-tight">
                {documentToReactComponents(post.NewsContent, richTextStyling)}
              </p>

              <ButtonLink
                path="/"
                buttonName="Back to homepage"
                textColor="text-white"
              />
            </div>
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
