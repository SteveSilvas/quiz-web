import styled from "styled-components";

export const AnswerViewStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const AnswerViewPosition = styled.div`
    font-size: 1.2rem;
    font-weight: bold;
    margin-right: 4px;
    color: ${({ theme }) => theme.color};
`;  

export const AnswerViewValue = styled.div`
    font-size: 1.2rem;
    color: ${({ theme }) => theme.color};
`;  
