import React from "react";
import { IMenuLayout } from "./interface";

const MenuLayout = ({ title, children }: IMenuLayout) => {
  return (
    <div className=" py-[50px] flex flex-col w-[100%] flex-1">
      <h2 className="py-[25px] px-[20px] text-xl font-bold">{title}</h2>
      {children}
    </div>
  );
};

export default MenuLayout;
