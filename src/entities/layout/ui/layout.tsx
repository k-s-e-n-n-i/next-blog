import { Header } from "@/shared/ui/Header";
import { ReactNode } from "react";

import s from "./layout.module.scss";

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <div className={s.wrapper}>
      <Header />
      {children}
    </div>
  );
};
