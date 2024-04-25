import NewsPost from "../components/NewsPost";
import useContentful from "../providers/ContentfulProvider/ContentfulProvider.hook";
import { useParams } from "react-router-dom";

export default function NewsPage() {
  const { id } = useParams();
  const { newsPosts } = useContentful();

  const selectedPost =
    newsPosts && newsPosts.length > 0
      ? newsPosts.filter((item) => item.id === id)[0]
      : null;

  return (
    <div>
      {selectedPost ? (
        <NewsPost post={selectedPost} showFullPost={true} />
      ) : (
        <p>Post not found</p>
      )}
    </div>
  );
}
