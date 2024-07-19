import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavRowStyled = styled(Link)`
    width: 100%;
    padding: 0px 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    font-size: 1.3rem; 
    transition: 0.3s;
    text-decoration: none;
    color: ${({ theme }) => theme.borderColor};

    &:hover {
        width: 100%;
        padding: 0px 4px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        transition: 0.3s;
        text-decoration: none;
        color: ${({ theme }) => theme.borderFocusColor};  
    }
`;

export const NavRowText = styled.p`
    font-family: var(--font-text);
    font-size: 1rem;
    color: ${({ theme }) => theme.borderColor};
    text-align: center;
    text-decoration: none;
    transition: 0.3s;

    &:hover {
        color: ${({ theme }) => theme.borderFocusColor};
        transition: 0.3s;
    }
`;