import { ReactComponent as Logo } from "../../../../assets/Logo.svg";
import { ReactComponent as MenuBar } from "../../../../assets/Menu.svg";
import { SideMenuProps2 as SideMenuProps } from "../interfaces";

const SideHeader = ({ isOpen, setIsOpen }: SideMenuProps) => {
  return (
    <div className="flex width-[100%] px-[16px] py-[12px] justify-between border-b-[1px] border-b-secondary">
      <Logo fill="white" className={`${!isOpen ? "hidden" : ""}`} />
      <MenuBar
        fill="white"
        onClick={() => setIsOpen((prev) => !prev)}
        className="cursor-pointer"
      />
    </div>
  );
};

export default SideHeader;
