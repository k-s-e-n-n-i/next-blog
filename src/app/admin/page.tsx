import { AdminContent } from "@/_pages/Admin";
import { getArticlesDB } from "@/entities/blog/api/getArticles";
import { getServerSession } from "next-auth";
import { authOptions, CustomSession } from "../api/auth/[...nextauth]/route";

const AdminPage = async () => {
  const session: CustomSession | null = await getServerSession(authOptions);

  const articles = await getArticlesDB(session?.user.id);

  return <AdminContent articles={articles} userId={session?.user.id} />;
};

export default AdminPage;
