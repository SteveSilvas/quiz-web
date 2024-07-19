import { useAtom } from 'jotai';
import { themeAtom } from '../../Context/ThemeAtom';
import { ButtonContainer, StyledFaMoon, StyledFaSun } from './styles';

const ThemeButton = () => {
    const [theme, setTheme] = useAtom(themeAtom);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <ButtonContainer onClick={toggleTheme}>
            {theme === 'light' ? <StyledFaMoon /> : <StyledFaSun />}
        </ButtonContainer>
    )
};

export default ThemeButton;