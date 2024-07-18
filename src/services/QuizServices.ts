
import { buildQuizzes } from '../data/quizzes';


const getQuizzes = async () => {
    return buildQuizzes;
}

const getQuizById = async (id: number) => {
    return buildQuizzes.find(quiz => quiz.id === id);
}


export default{
    getQuizzes,
    getQuizById
}