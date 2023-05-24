export interface SideMenuProps {
  isOpen: boolean;
}
export interface SideMenuProps2 extends SideMenuProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
