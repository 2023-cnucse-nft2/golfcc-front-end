import React from "react";
import { ReactComponent as LoginIcon } from "../../../../assets/Login.svg";
import { SideMenuProps } from "../interfaces";
import { Link } from "react-router-dom";
const SideLoginSection = ({ isOpen }: SideMenuProps) => {
  return (
    <Link to="/">
      <div
        className={`${
          isOpen ? "px-[20px]" : "px-[10px] justify-center"
        } py-[25px] flex items-center text-[24px] text-white font-bold hover:bg-secondary`}
      >
        <LoginIcon stroke="white" width={45} height={45} />
        <span className={`${isOpen ? "ml-[10px]" : "hidden"}`}>로그인</span>
      </div>
    </Link>
  );
};

export default SideLoginSection;
