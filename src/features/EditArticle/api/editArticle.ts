"use server";

import { drizzle } from "drizzle-orm/libsql";
import { articlesTable } from "../../../../db/schema";
import { eq } from "drizzle-orm";
import { ArticleValues } from "@/shared/types/Article";

const db = drizzle(process.env.DB_FILE_NAME!);

export const editArticleDB = async (data: ArticleValues) => {
  await db.update(articlesTable).set(data).where(eq(articlesTable.id, data.id));
};
