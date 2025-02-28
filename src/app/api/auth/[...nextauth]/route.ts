import NextAuth, { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { drizzle } from "drizzle-orm/libsql";

import { usersTable } from "../../../../../db/schema";

const db = drizzle(process.env.DB_FILE_NAME!);

export const authOptions: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    Credentials({
      id: "login",
      name: "credentials",
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "password", type: "password" },
      },
      authorize: async (creds): any => {
        const isUserExist = (await db.select().from(usersTable)).find((user) => user.email === creds?.email);

        if (!isUserExist) {
          return null;
        }

        const { password: existPassword, ...rest } = isUserExist;
        const isPasswordMatch = existPassword === creds?.password;

        if (!isPasswordMatch) {
          return null;
        }

        return rest;
      },
    }),
  ],
  pages: {
    signIn: "/sign-in",
  },
};
export const GET = NextAuth(authOptions);
export const POST = NextAuth(authOptions);
