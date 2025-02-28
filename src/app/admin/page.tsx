import { AdminContent } from "@/_pages/Admin";
import { getArticlesDB } from "@/entities/blog/api/getArticles";

const AdminPage = async () => {
  const articles = await getArticlesDB();

  return <AdminContent articles={articles} />;
};

export default AdminPage;
