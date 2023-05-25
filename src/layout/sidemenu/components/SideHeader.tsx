import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../../assets/Logo.svg";
import { ReactComponent as MenuBar } from "../../../assets/Menu.svg";
import { SideMenuProps2 as SideMenuProps } from "../interfaces";

const SideHeader = ({ isOpen, setIsOpen }: SideMenuProps) => {
  return (
    <div className="flex width-[100%] px-[16px] py-[12px] justify-between">
      <Link to="/">
        <Logo fill="white" className={`${!isOpen ? "hidden" : ""}`} />
      </Link>
      <MenuBar
        fill="white"
        onClick={() => setIsOpen((prev) => !prev)}
        className="cursor-pointer"
      />
    </div>
  );
};

export default SideHeader;
