import { NavButtonOpenStyledstyled } from "./styles";

interface INavButtonOpenProps {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const NavButtonOpen: React.FC<INavButtonOpenProps> = ({
    setIsOpen
}) => {
    return (
        <NavButtonOpenStyledstyled
            onClick={() => {
                setIsOpen(false);
            }}>
        </NavButtonOpenStyledstyled>
    );
}

export default NavButtonOpen;