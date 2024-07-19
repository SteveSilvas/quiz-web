import { useEffect, useState } from 'react';
import { IQuiz } from '../../interfaces/IQuiz';
import Quiz from '../../components/Quiz';
import { useNavigate } from 'react-router-dom';
import QuizServices from '../../services/QuizServices';
import { MyQuizzesStyled } from './styles';
const MeusQuiz = () => {
    const [quizzes, setQuizzes] = useState<IQuiz[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        requestQuizzes();
    }, [0]);

    const requestQuizzes = async () => {
        const fetchedQuizzes = await QuizServices.getQuizzes();
        setQuizzes(fetchedQuizzes);
    };

    const handleQuizClick = (id: number) => {
        navigate(`/quiz-detail/${id}`);
    };

    return (
        <MyQuizzesStyled>
            {quizzes.map((quiz) => (
                <Quiz
                    onClick={() => handleQuizClick(quiz.id)}
                    key={quiz.id}
                    quiz={quiz} />
            ))}
        </MyQuizzesStyled>
    );
};

export default MeusQuiz;