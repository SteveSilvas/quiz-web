import { Outlet } from 'react-router-dom';
import SideBar from '../SideBar';
import { Page, Title, Header, Main, SideBox, Content } from './styles';
import { useState } from 'react';
import { GlobalStyle } from '../../globals/globalstyle';
const Layout = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <GlobalStyle />
            <Page>
                <Header>
                    <Title>Quiz - Web</Title>
                </Header>

                <Main>
                    <SideBox $isOpen={isOpen}>
                        <SideBar
                            isOpen={isOpen}
                            setIsOpen={setIsOpen} />

                    </SideBox>
                    <Content>
                        <Outlet />
                    </Content>
                </Main>
            </Page >
        </>
    );
};

export default Layout;
