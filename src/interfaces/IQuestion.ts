import { IAnswers } from "./IAnswers";

export interface IQuestion {
    id: number;
    question: string;
    answers: IAnswers[];
}