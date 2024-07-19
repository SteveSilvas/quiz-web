import styled from "styled-components";

export const FavoriteStyled= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 8px;
    background-color: ${({ theme }) => theme.background};
`;