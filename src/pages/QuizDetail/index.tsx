import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IQuiz } from "../../interfaces/IQuiz";
import QuizServices from "../../services/QuizServices";
import QuestionView from "../../components/QuestionView";
import {
  QuestionsContainer,
  QuizDetailDescriptionStyled,
  QuizDetailHeaderSyled,
  QuizDetailStyled,
  QuizDetailTitleStyled,
} from "./styles";
import { IQuestion } from "../../interfaces/IQuestion";
import ConfirmMessage from "../../components/ConfirMessage";

const QuizDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [quiz, setQuiz] = useState<IQuiz | null>(null);
  const [showRemoveConfirm, setShowRemoveConfirm] = useState<boolean>(false);
  const [questionToRemove, setQuestionToRemove] = useState<IQuestion | null>();
  useEffect(() => {
    if (id) {
      requestQuiz();
    }
  }, [id]);

  const requestQuiz = async () => {
    const fetchedQuiz = await QuizServices.getQuizById(Number(id));
    if (fetchedQuiz) {
      setQuiz(fetchedQuiz);
    }
  };

  const requestRemoveQuestion = async () => {
    if (questionToRemove) {
      await QuizServices.removeQuestion(quiz?.id!, questionToRemove.id);
      requestQuiz();
      setQuestionToRemove(null);
      setShowRemoveConfirm(false);
      setQuiz((prev) => {
        if (prev) {
          return {
            ...prev,
            questions: prev.questions.filter(
              (q) => q.id !== questionToRemove.id
            ),
          };
        }
        return prev;
      });
    }
  };
  const handleRemoveQuestion = (question: IQuestion) => {
    setShowRemoveConfirm(true);
    setQuestionToRemove(question);
  };

  if (!quiz) {
    return <div>Loading...</div>;
  }

  return (
    <QuizDetailStyled>
      <QuizDetailHeaderSyled>
        <QuizDetailTitleStyled>{quiz.title}</QuizDetailTitleStyled>
        <QuizDetailDescriptionStyled>
          {quiz.description}
        </QuizDetailDescriptionStyled>
      </QuizDetailHeaderSyled>
      <ConfirmMessage
        message="Tem Certeza que deseja excluir esta questão?"
        visible={showRemoveConfirm}
        confirm={requestRemoveQuestion}
        cancel={() => {
          setQuestionToRemove(null);
          setShowRemoveConfirm(false);
        }}
      />
      <QuestionsContainer>
        {quiz.questions.map((question) => (
          <QuestionView
            key={question.id}
            question={question}
            removeQuestion={handleRemoveQuestion}
          />
        ))}
      </QuestionsContainer>
    </QuizDetailStyled>
  );
};

export default QuizDetail;
