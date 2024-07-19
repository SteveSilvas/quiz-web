import { FaHome } from "react-icons/fa";
import styled from "styled-components";

export const SidebarStyled = styled.section<{ $width: string }>`
    width: ${props => props.$width};
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: center;
    transition: width 0.3s ease;
    background-color: ${({ theme }) => theme.background};
`;

export const IconFaHomeStyled = styled(FaHome)`
    font-size: 1.3rem;  
    color: wheat;
`;