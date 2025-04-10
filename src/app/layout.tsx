import type { Metadata } from "next";
import "./globals.css";
import { Layout } from "@/entities/layout/ui";

import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Theme accentColor="orange" radius="small" appearance="dark">
          <Layout>{children}</Layout>
        </Theme>
      </body>
    </html>
  );
}
