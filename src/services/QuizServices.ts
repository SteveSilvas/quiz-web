
import { buildQuizzes } from '../data/quizzes';


const getQuizzes = async () => {
    return buildQuizzes;
}

const getQuizById = async (id: number) => {
    return buildQuizzes.find(quiz => quiz.id === id);
}

const removeQuestion = async (quizId: number, questionId: number) => {
    if (!quizId || !questionId) return;
    
    const quiz = buildQuizzes.find(quiz => quiz.id === quizId);
    if (!quiz) return;

    quiz.questions = quiz.questions.filter(question => question.id !== questionId);
    return quiz.questions;
};


export default{
    getQuizzes,
    getQuizById,
    removeQuestion
}