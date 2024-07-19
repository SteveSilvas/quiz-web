import styled from "styled-components";

export const QuizStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 48%;
    gap: 8px;
    border: 1px solid ${({ theme }) => theme.titleColor};
    border-radius: 4px;
    padding: 1rem;
`;

export const QuizLable = styled.label`
    text-align: start;
    margin-right: 1rem;
    color: ${({ theme }) => theme.color};
`;	    

export const QuizTitleStyled = styled.strong`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 8px;
    color: ${({ theme }) => theme.color};
`;

export const QuizDescription = styled.p`
    text-align: start;
    width: 100%;
    gap: 8px;
    color: ${({ theme }) => theme.color};
`;
