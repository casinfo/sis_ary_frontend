import React from "react";
import { SLayout, SMain } from "./styles";
import { Sidebar } from "../Sidebar";

type LayoutProps = {
  children: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <SLayout>
      <Sidebar />
      <SMain>{children}</SMain>
    </SLayout>
  );
}
