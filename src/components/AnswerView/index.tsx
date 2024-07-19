import { IAnswers } from "../../interfaces/IAnswers";
import {
  AnswerViewPosition,
  AnswerViewStyled,
  AnswerViewValue,
} from "./styles";

interface AnswersViewProps {
  answers: IAnswers;
  position: string;
}

const AnswersView: React.FC<AnswersViewProps> = ({ answers, position }) => {
  return (
    <AnswerViewStyled>
      <AnswerViewPosition>{position}</AnswerViewPosition>
      <AnswerViewValue>{answers.answer}</AnswerViewValue>
    </AnswerViewStyled>
  );
};

export default AnswersView;
