"use server";

import { drizzle } from "drizzle-orm/libsql";
import { usersTable } from "../../../../db/schema";

const db = drizzle(process.env.DB_FILE_NAME!);

export const createUserDB = async (data: { name?: string; email: string; password: string }) => {
  await db.insert(usersTable).values(data);
};
