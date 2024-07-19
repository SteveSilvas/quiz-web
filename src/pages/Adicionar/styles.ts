import styled from "styled-components";

export const AddQuizStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    min-height: 80vh;
    gap: 8px;
    border: 1px solid ${({ theme }) => theme.borderColor};
    border-radius: 4px;
    padding: 1rem;
`;

export const AddQuizTitleStyled = styled.strong`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 8px;
    color: ${({ theme }) => theme.color};
`;
