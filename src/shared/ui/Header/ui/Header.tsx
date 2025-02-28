"use client";

import { Flex, SegmentedControl } from "@radix-ui/themes";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
  const path = usePathname();

  return (
    <Flex gap="3" align="center" justify="between" p="16px 0">
      <SegmentedControl.Root value={path}>
        <SegmentedControl.Item value="/">
          <Link href="/">Главная</Link>
        </SegmentedControl.Item>
        <SegmentedControl.Item value="/blog">
          <Link href="/blog">Блог</Link>
        </SegmentedControl.Item>
        <SegmentedControl.Item value="/admin">
          <Link href="/admin">Админка</Link>
        </SegmentedControl.Item>
      </SegmentedControl.Root>
    </Flex>
  );
};
