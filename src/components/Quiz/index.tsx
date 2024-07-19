import { IQuiz } from "../../interfaces/IQuiz";
import RowContainer from "../RowContainer";
import Separator from "../Separator";
import { QuizDescription, QuizLable, QuizStyled, QuizTitleStyled } from "./styles";

interface QuizProps {
    quiz: IQuiz;
    onClick?: () => void;
}

const Quiz: React.FC<QuizProps> = ({ quiz, onClick }) => {

    return (
        <QuizStyled>
            <RowContainer
                justifyContent="space-between"
                width="100%"
                onClick={onClick}
            >
                <QuizLable>Título:</QuizLable>
                <QuizTitleStyled
                    title="Ver Detalhes">
                    {quiz.title}
                </QuizTitleStyled>
            </RowContainer>

            <Separator width="100%" />
            <RowContainer justifyContent="space-between" width="100%">
                <QuizLable>Descrição:</QuizLable>
                <QuizDescription>
                    {quiz.description}
                </QuizDescription>
            </RowContainer>
            <RowContainer justifyContent="space-between" width="100%">
                <QuizLable>Questões:</QuizLable>
                <QuizDescription>
                    {quiz.questions.length}
                </QuizDescription>
            </RowContainer>
        </QuizStyled>
    );
}

export default Quiz;