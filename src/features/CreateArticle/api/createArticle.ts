"use server";

import { drizzle } from "drizzle-orm/libsql";
import { articlesTable } from "../../../../db/schema";
import { Article } from "@/shared/types/Article";

const db = drizzle(process.env.DB_FILE_NAME!);

export const createArticleDB = async (data: Article) => {
  await db.insert(articlesTable).values(data);
};
