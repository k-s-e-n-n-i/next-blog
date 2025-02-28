import { Main } from "@/_pages/Main";

import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import { usersTable } from "../../db/schema";

const client = createClient({ url: process.env.DB_FILE_NAME! });
const db = drizzle({ client });

// const db = drizzle(process.env.DB_FILE_NAME!);

const usersCount = await db.$count(usersTable);
// await db.insert(usersTable).values({ name: "name 1", age: 29, email: "ssss@dd.dd" });
// await db.insert(articlesTable).values({ title: "testt" });

export default function Home() {
  console.log(usersCount);

  return <Main />;
}
