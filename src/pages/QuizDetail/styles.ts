import styled from "styled-components";

export const QuizDetailStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 8px;
  background-color: ${({ theme }) => theme.background};
`;

export const QuizDetailHeaderSyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 8px;
  background-color: white;
  background-color: ${({ theme }) => theme.background};
`;

export const QuizDetailTitleStyled = styled.strong`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 8px;
  color: ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.background};
`;

export const QuizDetailDescriptionStyled = styled.strong`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 8px;
  color: ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.background};
`;


export const QuestionsContainer = styled.div`
   display: flex;
    justify-content: center;
    align-items: start;
    flex-wrap: wrap;
    gap: 0.5rem;
    width: 90%;
    background-color: ${({ theme }) => theme.background};
`;