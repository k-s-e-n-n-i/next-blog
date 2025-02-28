"use server";

import { drizzle } from "drizzle-orm/libsql";
import { articlesTable } from "../../../../db/schema";
import { eq } from "drizzle-orm";

const db = drizzle(process.env.DB_FILE_NAME!);

export const deleteArticleDB = async (id: number) => {
  await db.delete(articlesTable).where(eq(articlesTable.id, id));
};
