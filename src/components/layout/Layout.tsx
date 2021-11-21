import React from "react";
import Navbar from "./navbar/navbar";
import { ReactNode } from "react";

interface ILayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <>
      <Navbar />
      {children}
      {/* <Footer/> */}
    </>
  );
};

export default Layout;
