import styled from "styled-components";

export const MessageBoxStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: 1;

`;

export const MessageBoxContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 40vw;
    height: 30vh;
    background-color: ${({ theme }) => theme.background};
    border: 1px solid ${({ theme }) => theme.borderColor};
`;


export const MessageBoxText = styled.p`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 8px;
    color: ${({ theme }) => theme.color};
`;


export const MessageBoxConfirmButton = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 10rem;
    gap: 8px;
    background-color: ${({ theme }) => theme.borderFocusColor};
    border: 1px solid ${({ theme }) => theme.borderColor};
    border-radius: 4px;
    padding: 4px;
    cursor: pointer;
    color: ${({ theme }) => theme.color};
    &:hover {
        background-color: ${({ theme }) => theme.borderColor};
        border: 1px solid ${({ theme }) => theme.borderFocusColor};
        color: ${({ theme }) => theme.background};
    }
`;

export const MessageBoxCancelButton = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 10rem;
    gap: 8px;
    background-color: ${({ theme }) => theme.borderFocusColor};
    border: 1px solid ${({ theme }) => theme.borderColor};
    border-radius: 4px;
    padding: 4px;
    cursor: pointer;
    color: ${({ theme }) => theme.color};
    &:hover {
        background-color: ${({ theme }) => theme.borderColor};
        border: 1px solid ${({ theme }) => theme.borderFocusColor};
        color: ${({ theme }) => theme.background};
    }
`;