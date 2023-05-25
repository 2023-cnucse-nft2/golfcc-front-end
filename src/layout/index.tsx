import React from "react";
import { Outlet } from "react-router-dom";
import SideMenu from "./sidemenu";
const Layout = () => {
  return (
    <div className="w-[100%] h-[100vh] flex">
      <SideMenu />
      <Outlet />
    </div>
  );
};

export default Layout;
