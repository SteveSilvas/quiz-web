import { useEffect, useState } from 'react';
import './styles.css';
import { IQuiz } from '../../interfaces/IQuiz';
import Quiz from '../../components/Quiz';
import { useNavigate } from 'react-router-dom';
import QuizServices from '../../services/QuizServices';
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
        <div className="my-quizzes-page">
            {/* <h1 className="my-quizzes-title">Meus Quizzes</h1> */}
            <section className="quizzes-container">
                {quizzes.map((quiz) => (
                    <Quiz
                        onClick={() => handleQuizClick(quiz.id)}
                        key={quiz.id}
                        quiz={quiz} />
                ))}
            </section>
        </div>
    );
};

export default MeusQuiz;