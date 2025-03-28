"use server";

import { drizzle } from "drizzle-orm/libsql";
import { usersTable } from "../../../../db/schema";
import { eq } from "drizzle-orm";

const db = drizzle(process.env.DB_FILE_NAME!);

export const deleteUserDB = async (id: number) => {
  await db.delete(usersTable).where(eq(usersTable.id, id));
};
