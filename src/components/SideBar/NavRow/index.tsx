import { NavRowStyled, NavRowText } from "./styles";

interface MenuRowProps {
    text?: string;
    onClick?: () => void;
    href: string;
    leftIcon?: JSX.Element;
    open: boolean;
}

const NavRow: React.FC<MenuRowProps> = ({
    text,
    onClick,
    href,
    leftIcon,
    open
}) => {
    return (
        <NavRowStyled
            className="menu-row"
            to={href}
            onClick={onClick}
        >
            {leftIcon}
            {open && <NavRowText >{text}</NavRowText>}
        </NavRowStyled>
    );
};
export default NavRow;