import { useState } from "react";
import SideHeader from "./components/SideHeader";
import SideLoginSection from "./components/SideLoginSection";
import SideMenuSection from "./components/SideMenuSection";

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <div
      className={`${
        isOpen ? "w-[300px]" : "w-[70px]"
      } h-[100%] bg-primary flex-col transition-[width] duration-300 ease-in-out`}
    >
      <SideHeader isOpen={isOpen} setIsOpen={setIsOpen} />
      <SideLoginSection isOpen={isOpen} />
      <SideMenuSection isOpen={isOpen} />
    </div>
  );
};

export default SideMenu;
