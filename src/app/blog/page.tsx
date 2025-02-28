import { Blog } from "@/_pages/Blog";
import { getArticlesDB } from "@/entities/blog/api/getArticles";

const BlogPage = async () => {
  const articles = await getArticlesDB();

  return <Blog articles={articles} />;
};

export default BlogPage;
