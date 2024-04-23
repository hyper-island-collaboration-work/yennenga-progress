export default function NewsPost({ post, showFullPost }) {
  if (!post) {
    return <p>nothing here</p>;
  }
  return (
    <div className="news-post-container" id={post.id}>
      {showFullPost ? (
        <article className="m-auto bg-burkinaBlue p-3 font-plexSerif text-white">
          <div className="py-16 sm:py-20">
            <h3 className="m-auto pb-5 text-center font-montserrat text-4xl sm:w-3/5 lg:w-3/5">
              {post.title}
            </h3>

            <h4 className="m-auto w-4/5 pb-5 text-center text-lg leading-tight sm:w-3/5 lg:w-3/5">
              {post.subtitle}
            </h4>
          </div>

          <div className="m-auto h-96 w-full bg-gray-300 italic sm:w-3/4 md:w-3/4 lg:w-3/4">
            Image mockup
          </div>

          <div className="m-auto pt-16 text-lg sm:w-3/5 lg:w-3/5">
            <p className="mb-3 leading-tight">{post.content}</p>
            <p className="mb-3 leading-tight">{post.content2}</p>
          </div>
          <div className="bg-black"></div>
          {/* <div className="flex justify-center gap-2 pb-2 text-base">
            <p>{post.author}</p>
            <p>{post.date}</p>
          </div> */}
        </article>
      ) : (
        <article>
          <h3 className="mt-5 pb-3 font-bold text-umber">{post.title}</h3>
          <h4 className="pb-5 ">{post.subtitle}</h4>
        </article>
      )}
    </div>
  );
}
