import styled from 'styled-components';

export const Page = styled.main`
    background-color: ${({theme}) => theme.background};
    min-height: 100vh;
    width: 100vw;
    border: 0px;
`;

export const Header = styled.header`
    padding: 4px 0px;
    margin-bottom: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;

export const Title = styled.h1`
    font-family: var(--font-title);
    color: ${({theme}) => theme.titleColor};
    font-size: 1.5rem;
    text-align: center;
`;

export const Main = styled.div`
    display: flex;
    width: 100vw;
    gap: 4px;
`;

export const Content = styled.section`
    display: flex;
    flex-grow: 1;
    padding: 4px;
    width: 90%;
`;