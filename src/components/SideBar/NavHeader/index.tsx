import Separator from "../../Separator";
import NavButtonClose from "../NavButtonClose";
import NavButtonOpen from "../NavButtonOpen";

interface INavHeaderProps {
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void;
}
const NavHeader: React.FC<INavHeaderProps> = ({
    isOpen,
    setIsOpen
}) => {

    return (
        <>
            {isOpen ?
                <NavButtonClose
                    setIsOpen={() => setIsOpen(false)}
                />
                : <NavButtonOpen
                    setIsOpen={() => setIsOpen(true)} />}
            <Separator width='100%' />
        </>
    );
};

export default NavHeader;