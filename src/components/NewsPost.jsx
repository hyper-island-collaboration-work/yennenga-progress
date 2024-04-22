import { newsPosts } from "../../mocknews";

export default function NewsPost({ post, showFullPost }) {
  if (!post) {
    return <p>nothing here</p>;
  }
  return (
    <div className="news-post-container" id={post.id}>
      {showFullPost ? (
        <article className="mt-10 bg-zinc-100 p-10 ">
          <div className="m-auto mt-0 md:w-10/12 lg:w-6/12">
            <h3 className="mb-3 font-plexSerif text-xl font-bold text-umber">
              {post.title}
            </h3>
            <h4 className="pb-5 font-plexSerif text-lg">{post.subtitle}</h4>

            <div className="mb-5 h-80 w-full bg-gray-300 italic md:w-7/12">
              Image mockup
            </div>

            <p className="mb-3">{post.content}</p>
            <p className="mb-3">{post.content2}</p>
            <p className="mb-1 italic">{post.author}</p>
            <p className="mb-3 text-xs font-bold">{post.date}</p>

            <div className="bg-black"></div>
          </div>
        </article>
      ) : (
        <article>
          <h3 className="mt-5 pb-3 font-plexSerif font-bold text-umber">
            {post.title}
          </h3>
          <h4 className="pb-5 font-plexSerif">{post.subtitle}</h4>
        </article>
      )}
    </div>
  );
}
