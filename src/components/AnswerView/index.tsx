import { IAnswers } from '../../interfaces/IAnswers';
import './styles.css';

interface AnswersViewProps {
    answers: IAnswers;
    position: string;
}

const AnswersView: React.FC<AnswersViewProps> = ({ answers, position }) => {

    return (
        <div className="answer-view-container">
            <span className="answer-view-position">{position}.</span>
            <span className="answer-view-value">{answers.answer}.</span>
        </div>
    );
}

export default AnswersView;