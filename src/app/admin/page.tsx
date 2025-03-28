import { AdminContent } from "@/_pages/Admin";
import { getArticlesDB } from "@/entities/blog";
import { getServerSession } from "next-auth";
import { authOptions, CustomSession } from "../api/auth/[...nextauth]/route";
import { UserList } from "@/entities/user/ui/UserList";
import { getUsersDB } from "@/entities/user/api/getUsers";
import { getUserDB } from "@/entities/user/api/getUser";
import { Box, Heading } from "@radix-ui/themes";
import { ReactNode } from "react";
import { Article } from "@/shared/types/Article";

const AdminPage = async () => {
  const session: CustomSession | null = await getServerSession(authOptions);

  let articles: Article[] = await getArticlesDB(session?.user.id);
  let content: ReactNode = <AdminContent articles={articles} userId={session?.user.id} />;

  if (session?.user.id) {
    const currentUser = await getUserDB(Number(session?.user.id));
    if (currentUser.role === "admin") {
      const users = await getUsersDB();

      articles = await getArticlesDB();
      content = (
        <>
          <Heading as="h2" mt="3" mb="3" size="4">
            Пользователи
          </Heading>
          <UserList list={users} />

          <Box mt="20px">
            <Heading as="h2" mt="3" mb="3" size="4">
              Статьи
            </Heading>
            <AdminContent articles={articles} />
          </Box>
        </>
      );
    }
  }

  return (
    <Box>
      <Heading as="h1" mt="3" mb="3" size="8">
        Admin
      </Heading>

      {content}
    </Box>
  );
};

export default AdminPage;
