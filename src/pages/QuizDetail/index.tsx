import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IQuiz } from '../../interfaces/IQuiz';
import './styles.css';
import QuizServices from '../../services/QuizServices';
import QuestionView from '../../components/QuestionView';

const QuizDetail = () => {
    const { id } = useParams<{ id: string }>();
    const [quiz, setQuiz] = useState<IQuiz | null>(null);

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

    if (!quiz) {
        return <div>Loading...</div>;
    }

    return (
        <div className="quiz-detail-page">
            <h1>{quiz.title}</h1>
            <p>{quiz.description}</p>
            <section className="questions-container">
                {
                    quiz.questions.map((question) => (
                        <QuestionView
                            key={question.id}

                            question={question} />
                    ))
                }
            </section>

        </div>
    );
};

export default QuizDetail;
