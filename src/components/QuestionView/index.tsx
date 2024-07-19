import { useState } from "react";
import { IAnswers } from "../../interfaces/IAnswers";
import { IQuestion } from "../../interfaces/IQuestion";
import AnswersView from "../AnswerView";
import RowContainer from "../RowContainer";
import {
  QuestionDropStyled,
  QuestionEditStyled,
  QuestionIDStyled,
  QuestionTextStyled,
  QuestionViewStyled,
} from "./styles";
import "./styles.css";

interface QuestionViewProps {
  question: IQuestion;
  removeQuestion: (question: IQuestion) => void;
}

const QuestionView: React.FC<QuestionViewProps> = ({ question, removeQuestion }) => {
  const positionsArray = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
  ];
  const getPosition = (id: number) => {
    return positionsArray[id];
  };

  const handleDropQuestion = () => {
    removeQuestion(question);
  };

  const handleEditQuestion = () => {
    console.log("edit");
  };

  return (
    <QuestionViewStyled>
      <RowContainer>
        <QuestionIDStyled>{question.id}</QuestionIDStyled>
        <QuestionTextStyled>{question.question}</QuestionTextStyled>
        <QuestionEditStyled onClick={handleEditQuestion} />
        <QuestionDropStyled onClick={handleDropQuestion} />
      </RowContainer>
    
      {question.answers.map((answers: IAnswers, i: number) => (
        <AnswersView
          position={getPosition(i)}
          key={answers.id}
          answers={answers}
        />
      ))}
    </QuestionViewStyled>
  );
};

export default QuestionView;
