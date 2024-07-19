import { FaEdit, FaTrash } from "react-icons/fa";
import styled from "styled-components";

export const QuestionViewStyled = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    padding: 1rem;
    background-color: ${({ theme }) => theme.background};
    border: 1px solid ${({ theme }) => theme.borderColor};
    border-radius: 4px;
    position: relative;
`;


export const QuestionIDStyled = styled.label`
    border: 1px solid ${({ theme }) => theme.borderColor};
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.color};
    position: absolute;
    left: -0.8rem;
    top: -0.1rem;
`;

export const QuestionTextStyled = styled.p`
    font-size: 1.2rem;
    color: ${({ theme }) => theme.color};
`;

export const QuestionEditStyled = styled(FaEdit)`
    font-size: 1.2rem;
    color: ${({ theme }) => theme.color};
    position: absolute;
    right: 0.5rem;
    top: 1rem;
    cursor: pointer;
    
    &:hover {
        color: ${({ theme }) => theme.borderFocusColor};
    }
`;

export const QuestionDropStyled = styled(FaTrash)`
    font-size: 1.2rem;
    color: ${({ theme }) => theme.color};
    position: absolute;
    right: 2.5rem;
    top: 1rem;
    cursor: pointer;

    &:hover {
        color: ${({ theme }) => theme.borderFocusColor};
    }
`;