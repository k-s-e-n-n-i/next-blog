import { drizzle } from "drizzle-orm/libsql";
import { usersTable } from "../../../../db/schema";
import { User } from "@/entities/user";

const db = drizzle(process.env.DB_FILE_NAME!);

export const getUsersDB = async () => {
  const data_DTO = await db.select().from(usersTable);

  const data: User[] = data_DTO.map((user) => ({
    ...user,
    name: user.name || "",
    email: user.email || "",
    password: user.password || "",
    role: user.role || "moderator",
  }));

  return data;
};
