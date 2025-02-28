"use client";

import { Header } from "@/shared/ui/Header";
import { ReactNode } from "react";

import s from "./Layout.module.scss";
import { SessionProvider } from "next-auth/react";

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <SessionProvider>
      <div className={s.wrapper}>
        <Header />
        {children}
      </div>
    </SessionProvider>
  );
};
