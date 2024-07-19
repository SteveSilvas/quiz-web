import { Outlet } from 'react-router-dom';
import SideBar from '../SideBar/Sidebar';
import { Page, Title, Header, Main, Content } from './styles';
import { useState } from 'react';
import { GlobalStyle } from '../../globals/globalstyle';
import ThemeButton from '../ThemeButton';
import { ThemeProvider } from 'styled-components';
import { useAtom } from 'jotai';
import { themeAtom } from '../../Context/ThemeAtom';
import { darkTheme, lightTheme } from '../../globals/theme';
const Layout = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [theme] = useAtom(themeAtom);
    const selectedTheme = theme === 'light' ? lightTheme : darkTheme;
    return (
        <>
            <ThemeProvider theme={selectedTheme}>
                <GlobalStyle />
                <Page>
                    <Header>
                        <Title>Quiz - Web</Title>
                        <ThemeButton />
                    </Header>

                    <Main>
                        <SideBar
                            isOpen={isOpen}
                            setIsOpen={setIsOpen} />

                        <Content>
                            <Outlet />
                        </Content>
                    </Main>
                </Page >
            </ThemeProvider>
        </>
    );
};

export default Layout;
