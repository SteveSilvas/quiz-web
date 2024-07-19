import { FaAngleLeft } from "react-icons/fa";
import { NavButtonCloseStyledstyled } from "./styles";

interface INavButtonCloseProps {
  setIsOpen: (isOpen: boolean) => void;
}


const NavButtonClose: React.FC<INavButtonCloseProps> = ({
  setIsOpen,
}) => {

  return (
    <NavButtonCloseStyledstyled
        onClick={() => {
        setIsOpen(false);
      }}>
    </NavButtonCloseStyledstyled>
  );
}

export default NavButtonClose;