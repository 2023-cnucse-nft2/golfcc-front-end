import React from "react";
import { navMenu } from "../../../constants/nav";
import { SideMenuProps } from "../interfaces";
import { changeComponent } from "../../../util/cssUtil";
import { Link } from "react-router-dom";

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
        <Link key={menu.id} to={menu.link}>
          <div
            className={`hover:bg-secondary flex items-center text-white text-md py-[10px] ${changeComponent(
              isOpen,
              "px-[20px]",
              "justify-center py-[24px]"
            )}`}
          >
            <menu.svg className={`${changeComponent(isOpen, "mr-[20px]")}`} />
            <span className={`${!isOpen && "hidden"}`}>{menu.title}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SideMenuSection;
