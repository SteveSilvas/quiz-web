import styled from 'styled-components';

export const Page = styled.main`
    background-color: var(--color-w);
    min-height: 100vh;
    width: 100vw;
    border: 0px;
`;

export const Header = styled.header`
    padding: 4px 0px;
    background-color: var(--color-02);
    margin-bottom: 4px;
`;

export const Title = styled.h1`
    font-family: var(--font-title);
    color: white;
    font-size: 1.5rem;
    text-align: center;
`;

export const Main = styled.main`
    display: flex;
    width: 100vw;
    gap: 4px;
`;

export const SideBox = styled.nav<{ $isOpen?: boolean }>`
    display: flex;
    flex-direction: column;
    width: ${props => (props.$isOpen ? '10rem' : '50px')};
    transition: width 0.3s ease;
    padding: 4px;
`;

export const Content = styled.section`
    display: flex;
    flex-grow: 1;
    padding: 4px;
`;