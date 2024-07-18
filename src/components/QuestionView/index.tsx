import { IAnswers } from '../../interfaces/IAnswers';
import { IQuestion } from '../../interfaces/IQuestion';
import AnswersView from '../AnswerView';
import './styles.css';

interface QuestionViewProps {
    question: IQuestion;
}

const QuestionView: React.FC<QuestionViewProps> = ({ question }) => {
    const positionsArray = [
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
    ]
    const getPosition = (id: number) => {
        return positionsArray[id];
    }
    return (
        <div className="question-view-container">
            {question.id} - <span>{question.question}</span>
            <div>
                {question.answers.map((answers: IAnswers, i: number) => (
                    <AnswersView
                        position={getPosition(i)}
                        key={answers.id}
                        answers={answers} />
                ))}
            </div>
        </div>
    );
}

export default QuestionView;