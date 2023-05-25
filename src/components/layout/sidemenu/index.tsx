import { useState } from "react";
import SideHeader from "./components/SideHeader";
import SideLoginSection from "./components/SideLoginSection";
import SideMenuSection from "./components/SideMenuSection";
import { ReactComponent as Logo } from "../../../assets/Logo.svg";
import { Link } from "react-router-dom";

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <>
      <div
        className={`${
          isOpen ? "w-[300px]" : "w-[70px]"
        }   hidden md:block h-[100%] bg-primary flex-col transition-[width] duration-300 ease-in-out`}
      >
        <SideHeader isOpen={isOpen} setIsOpen={setIsOpen} />
        <SideLoginSection isOpen={isOpen} />
        <SideMenuSection isOpen={isOpen} />
      </div>
      <div
        className={`w-[70px] md:hidden h-[100%] bg-primary flex-col transition-[width] duration-300 ease-in-out`}
      >
        <Link to="/" className="flex justify-center">
          <div className="py-[10px] text-white text-md font-bold">SWING</div>
        </Link>
        <SideLoginSection isOpen={false} />
        <SideMenuSection isOpen={false} />
      </div>
    </>
  );
};

export default SideMenu;
