import { ArticleView } from "@/_pages/ArticleView";
import { getArticleDB } from "@/entities/blog";

const ArticlePage = async ({ params }: { params: { id: number } }) => {
  const { id } = params;

  if (!id) return <p>Данные не найдены</p>;

  const article = await getArticleDB(id);

  return <ArticleView {...article} />;
};

export default ArticlePage;
