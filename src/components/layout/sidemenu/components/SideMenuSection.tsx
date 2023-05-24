import React from "react";
import { navMenu } from "../../../../constants/nav";
import { SideMenuProps } from "../interfaces";
import { changeComponent } from "../../../../util/cssUtil";

const SideMenuSection = ({ isOpen }: SideMenuProps) => {
  return (
    <div className=" flex-col">
      <div
        className={`${changeComponent(
          !isOpen,
          "hidden"
        )} text-secondary text-lg py-[10px] px-[20px]`}
      >
        메뉴
      </div>
      {navMenu.map((menu) => (
        <div
          key={menu.id}
          className={`flex items-center text-white text-md py-[10px] ${changeComponent(
            isOpen,
            "px-[20px]",
            "justify-center"
          )}`}
        >
          <menu.svg className={`${changeComponent(isOpen, "mr-[20px]")}`} />
          <span className={`${!isOpen && "hidden"}`}>{menu.title}</span>
        </div>
      ))}
    </div>
  );
};

export default SideMenuSection;
