import NewsPost from "../components/NewsPost";
import { newsPosts } from "../../mocknews";

export default function NewsPage() {
  return (
    <>
      {newsPosts.map((post) => (
        <NewsPost post={post} showFullPost={true} />
      ))}
    </>
  );
}
