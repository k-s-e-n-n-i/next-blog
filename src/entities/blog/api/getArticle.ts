import { drizzle } from "drizzle-orm/libsql";
import { articlesTable } from "../../../../db/schema";
import { eq } from "drizzle-orm";

const db = drizzle(process.env.DB_FILE_NAME!);

export const getArticleDB = async (id: number) => {
  return (
    (await db
      .select()
      .from(articlesTable)
      .where(eq(articlesTable.id, id))
      .limit(1)
      .then((records) => records[0])) || null
  );
};
