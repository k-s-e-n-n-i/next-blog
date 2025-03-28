import { drizzle } from "drizzle-orm/libsql";
import { articlesTable } from "../../../../db/schema";

const db = drizzle(process.env.DB_FILE_NAME!);

export const getArticlesDB = async (userId?: string) => {
  const data = (await db.select().from(articlesTable)).filter((article) =>
    userId ? article.authorId === userId : article
  );

  return data?.map(({ id, title, description, image }) => ({
    id,
    title,
    description: description || undefined,
    image,
  }));
};
