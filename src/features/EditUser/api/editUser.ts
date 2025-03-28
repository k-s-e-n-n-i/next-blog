"use server";

import { drizzle } from "drizzle-orm/libsql";
import { usersTable } from "../../../../db/schema";
import { eq } from "drizzle-orm";
import { UserValues } from "@/entities/user";

const db = drizzle(process.env.DB_FILE_NAME!);

export const editUserDB = async (data: UserValues) => {
  await db.update(usersTable).set(data).where(eq(usersTable.id, data.id));
};
