import { IQuiz } from "../../interfaces/IQuiz";
import './styles.css';

interface QuizProps {
    quiz: IQuiz;
    onClick?: () => void;
}

const Quiz: React.FC<QuizProps> = ({ quiz, onClick }) => {

    return (
        <div
            className="quiz-container"
            onClick={onClick}>
            {quiz.title}
            <span>{quiz.description}</span>
            <span>Questões:</span>
            <span>{quiz.questions.length}</span>
        </div>
    );
}

export default Quiz;