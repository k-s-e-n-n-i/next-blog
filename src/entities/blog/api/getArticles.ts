import { drizzle } from "drizzle-orm/libsql";
import { articlesTable } from "../../../../db/schema";

const db = drizzle(process.env.DB_FILE_NAME!);

export const getArticlesDB = async () => {
  const data = await db.select().from(articlesTable);

  return data.map(({ id, title, description, image }) => ({
    id,
    title,
    description: description || undefined,
    image,
  }));
};
