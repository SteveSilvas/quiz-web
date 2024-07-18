import { Link } from "react-router-dom";
import './styles.css';

interface MenuRowProps {
    text?: string;
    onClick?: () => void;
    href: string;
    leftIcon?: JSX.Element;
    open: boolean;
}

const MenuRow: React.FC<MenuRowProps> = ({
    text,
    onClick,
    href,
    leftIcon,
    open
}) => {
    return (
        <Link
            className="menu-row"
            to={href}
            onClick={onClick}
        >
            {leftIcon}
            {open && <span >{text}</span>}
        </Link>
    );
};
export default MenuRow;