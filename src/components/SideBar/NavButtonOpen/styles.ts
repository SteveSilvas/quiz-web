import { TiChevronRightOutline } from "react-icons/ti";
import styled from "styled-components";

export const NavButtonOpenStyledstyled = styled(TiChevronRightOutline)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.borderColor};

    &:hover {   
        color: ${({ theme }) => theme.borderFocusColor};
    }
`;
