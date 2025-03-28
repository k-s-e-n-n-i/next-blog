import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const articlesTable = sqliteTable("articles_table", {
  id: int().primaryKey({ autoIncrement: true }),
  title: text().notNull(),
  description: text(),
  image: text(),
  authorId: text(),
});

export const usersTable = sqliteTable("users_table", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text(),
  email: text(),
  password: text(),
});
