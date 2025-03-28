import { drizzle } from "drizzle-orm/libsql";
import { usersTable } from "../../../../db/schema";
import { eq } from "drizzle-orm";

const db = drizzle(process.env.DB_FILE_NAME!);

export const getUserDB = async (id: number) => {
  return db
    .select()
    .from(usersTable)
    .where(eq(usersTable.id, id))
    .limit(1)
    .then((records) => records[0]);
};
