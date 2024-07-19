import { NavTextStyled } from "./styles";

interface INavTextProps {
    text: string;
}

const NavText: React.FC<INavTextProps> = ({ text }) => {
    return <NavTextStyled>{text}</NavTextStyled>;
};

export default NavText;