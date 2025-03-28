"use client";

import { Button, Flex, SegmentedControl, Text } from "@radix-ui/themes";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
  const path = usePathname();
  const { data: session } = useSession();

  const logout = () => {
    signOut();
  };

  return (
    <Flex gap="3" align="center" justify="between" p="16px 0">
      <SegmentedControl.Root value={path}>
        <SegmentedControl.Item value="/">
          <Link href="/">Главная</Link>
        </SegmentedControl.Item>
        <SegmentedControl.Item value="/blog">
          <Link href="/blog">Блог</Link>
        </SegmentedControl.Item>
      </SegmentedControl.Root>

      <Flex gap="16px" align="center">
        {session?.user && (
          <>
            <Text>{`${session.user.name} (${session.user.email})`}</Text>
            <SegmentedControl.Root value={path}>
              <SegmentedControl.Item value="/admin">
                <Link href="/admin">Админка</Link>
              </SegmentedControl.Item>
            </SegmentedControl.Root>
          </>
        )}

        {session?.user ? (
          <Button onClick={logout}>Выйти</Button>
        ) : (
          <Link href="/sign-in">
            <Button>Войти</Button>
          </Link>
        )}
      </Flex>
    </Flex>
  );
};
